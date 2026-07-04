import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { backend, type Agent, type Invoice, type Profile, type Workspace } from '../lib/backend';

interface WorkspaceContextValue {
  loading: boolean;
  profile: Profile | null;
  workspace: Workspace | null;
  agents: Agent[];
  invoices: Invoice[];
  usedSlots: number;
  limitReached: boolean;
  refresh: () => Promise<void>;
  updateProfile: (patch: Partial<Profile>) => Promise<void>;
  updateWorkspace: (patch: Partial<Workspace>) => Promise<void>;
  createAgent: (data: Partial<Agent>) => Promise<Agent>;
  updateAgent: (id: string, patch: Partial<Agent>) => Promise<void>;
  createInvoice: (data: Partial<Invoice>) => Promise<void>;
}

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

const NON_ARCHIVED: Agent['status'][] = ['live', 'paused', 'draft'];

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const refresh = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setWorkspace(null);
      setAgents([]);
      setInvoices([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const [p, w] = await Promise.all([backend.profile.get(user.id), backend.workspace.get(user.id)]);
    setProfile(p);
    setWorkspace(w);
    if (w) {
      const [a, i] = await Promise.all([backend.agents.list(w.id), backend.invoices.list(w.id)]);
      setAgents(a);
      setInvoices(i);
    } else {
      setAgents([]);
      setInvoices([]);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const usedSlots = agents.filter((a) => NON_ARCHIVED.includes(a.status)).length;
  const limitReached = workspace ? usedSlots >= workspace.agentLimit : false;

  const value: WorkspaceContextValue = {
    loading,
    profile,
    workspace,
    agents,
    invoices,
    usedSlots,
    limitReached,
    refresh,
    updateProfile: async (patch) => {
      if (!profile) return;
      const updated = await backend.profile.update(profile.id, patch);
      setProfile(updated);
    },
    updateWorkspace: async (patch) => {
      if (!workspace) return;
      const updated = await backend.workspace.update(workspace.id, patch);
      setWorkspace(updated);
    },
    createAgent: async (data) => {
      if (!workspace) throw new Error('No workspace loaded.');
      const agent = await backend.agents.create(workspace.id, data);
      setAgents((prev) => [...prev, agent]);
      return agent;
    },
    updateAgent: async (id, patch) => {
      const updated = await backend.agents.update(id, patch);
      setAgents((prev) => prev.map((a) => (a.id === id ? updated : a)));
    },
    createInvoice: async (data) => {
      if (!workspace) return;
      const invoice = await backend.invoices.create(workspace.id, data);
      setInvoices((prev) => [invoice, ...prev]);
    },
  };

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace() {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) throw new Error('useWorkspace must be used within WorkspaceProvider');
  return ctx;
}
