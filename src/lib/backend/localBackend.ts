import type {
  Agent,
  AgentStatus,
  AuthUser,
  Backend,
  Invoice,
  PlanTier,
  Profile,
  SignInInput,
  SignUpInput,
  Workspace,
} from './types';

// Local, browser-only stand-in for the Supabase backend so the product can be
// exercised end-to-end without live project credentials. Swapped out
// automatically once VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are set.

const STORAGE_KEY = 'alimi_local_backend_v1';
const SESSION_KEY = 'alimi_local_session_v1';

interface LocalUser {
  id: string;
  email: string;
  password: string;
}

interface LocalDB {
  users: LocalUser[];
  profiles: Profile[];
  workspaces: Workspace[];
  agents: Agent[];
  invoices: Invoice[];
}

function uid(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}

function seed(): LocalDB {
  const demoUserId = 'demo-user-1';
  const demoWorkspaceId = 'demo-workspace-1';
  return {
    users: [{ id: demoUserId, email: 'tunde@lekkihomes.com', password: 'demo1234' }],
    profiles: [
      {
        id: demoUserId,
        fullName: 'Tunde Bakare',
        email: 'tunde@lekkihomes.com',
        phone: null,
        timezone: 'Africa/Lagos',
      },
    ],
    workspaces: [
      {
        id: demoWorkspaceId,
        ownerId: demoUserId,
        businessName: 'Lekki Homes',
        vertical: 'realestate',
        primaryLanguage: 'English',
        defaultChannel: 'WhatsApp',
        planTier: 'free',
        agentLimit: 1,
      },
    ],
    agents: [
      {
        id: 'a1',
        workspaceId: demoWorkspaceId,
        name: 'Lekki Homes Closer',
        status: 'live',
        channels: 'WhatsApp + Email',
        persona: '',
        useCase: '',
        successEvent: '',
        convosToday: 24,
        qualifiedLeads: 6,
        goalRate: 32,
        lastActive: 'Active 3 mins ago',
        draftStep: 5,
      },
      {
        id: 'a2',
        workspaceId: demoWorkspaceId,
        name: 'Ikoyi Rentals Bot',
        status: 'archived',
        channels: 'WhatsApp',
        persona: '',
        useCase: '',
        successEvent: '',
        convosToday: 0,
        qualifiedLeads: 0,
        goalRate: 18,
        lastActive: 'Archived 2 days ago',
        draftStep: 5,
      },
      {
        id: 'a3',
        workspaceId: demoWorkspaceId,
        name: 'Abuja Launch Agent',
        status: 'archived',
        channels: 'Not connected',
        persona: '',
        useCase: '',
        successEvent: '',
        convosToday: 0,
        qualifiedLeads: 0,
        goalRate: 0,
        lastActive: 'Archived — never launched',
        draftStep: 1,
      },
    ],
    invoices: [],
  };
}

function load(): LocalDB {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const db = seed();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    return db;
  }
  try {
    return JSON.parse(raw) as LocalDB;
  } catch {
    const db = seed();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    return db;
  }
}

function save(db: LocalDB) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function getSession(): AuthUser | null {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? (JSON.parse(raw) as AuthUser) : null;
}

function setSession(user: AuthUser | null) {
  if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  else localStorage.removeItem(SESSION_KEY);
  authListeners.forEach((cb) => cb(user));
}

const authListeners = new Set<(user: AuthUser | null) => void>();

export const localBackend: Backend = {
  auth: {
    async signUp({ fullName, email, businessName, password }: SignUpInput) {
      const db = load();
      if (db.users.some((u) => u.email === email)) {
        throw new Error('An account with that email already exists.');
      }
      const id = uid('user');
      const workspaceId = uid('workspace');
      db.users.push({ id, email, password });
      db.profiles.push({ id, fullName, email, phone: null, timezone: 'Africa/Lagos' });
      db.workspaces.push({
        id: workspaceId,
        ownerId: id,
        businessName,
        vertical: 'realestate',
        primaryLanguage: 'English',
        defaultChannel: 'WhatsApp',
        planTier: 'free',
        agentLimit: 1,
      });
      save(db);
      const user: AuthUser = { id, email };
      setSession(user);
      return user;
    },
    async signIn({ email, password }: SignInInput) {
      const db = load();
      const found = db.users.find((u) => u.email === email && u.password === password);
      if (!found) throw new Error('Incorrect email or password.');
      const user: AuthUser = { id: found.id, email: found.email };
      setSession(user);
      return user;
    },
    async signOut() {
      setSession(null);
    },
    async resetPassword() {
      // No email delivery in local mode; treated as a no-op success.
      return;
    },
    async getCurrentUser() {
      return getSession();
    },
    onAuthStateChange(cb) {
      authListeners.add(cb);
      return () => authListeners.delete(cb);
    },
  },

  workspace: {
    async get(ownerId: string) {
      const db = load();
      return db.workspaces.find((w) => w.ownerId === ownerId) ?? null;
    },
    async update(id: string, patch: Partial<Workspace>) {
      const db = load();
      const idx = db.workspaces.findIndex((w) => w.id === id);
      if (idx === -1) throw new Error('Workspace not found.');
      db.workspaces[idx] = { ...db.workspaces[idx], ...patch };
      save(db);
      return db.workspaces[idx];
    },
  },

  profile: {
    async get(id: string) {
      const db = load();
      return db.profiles.find((p) => p.id === id) ?? null;
    },
    async update(id: string, patch: Partial<Profile>) {
      const db = load();
      const idx = db.profiles.findIndex((p) => p.id === id);
      if (idx === -1) throw new Error('Profile not found.');
      db.profiles[idx] = { ...db.profiles[idx], ...patch };
      save(db);
      return db.profiles[idx];
    },
  },

  agents: {
    async list(workspaceId: string) {
      const db = load();
      return db.agents.filter((a) => a.workspaceId === workspaceId);
    },
    async create(workspaceId: string, patch: Partial<Agent>) {
      const db = load();
      const agent: Agent = {
        id: uid('agent'),
        workspaceId,
        name: patch.name ?? 'Untitled agent',
        status: (patch.status as AgentStatus) ?? 'draft',
        channels: patch.channels ?? 'Not connected',
        persona: patch.persona ?? '',
        useCase: patch.useCase ?? '',
        successEvent: patch.successEvent ?? '',
        convosToday: patch.convosToday ?? 0,
        qualifiedLeads: patch.qualifiedLeads ?? 0,
        goalRate: patch.goalRate ?? 0,
        lastActive: patch.lastActive ?? 'Saved just now',
        draftStep: patch.draftStep ?? 1,
      };
      db.agents.push(agent);
      save(db);
      return agent;
    },
    async update(id: string, patch: Partial<Agent>) {
      const db = load();
      const idx = db.agents.findIndex((a) => a.id === id);
      if (idx === -1) throw new Error('Agent not found.');
      db.agents[idx] = { ...db.agents[idx], ...patch };
      save(db);
      return db.agents[idx];
    },
  },

  invoices: {
    async list(workspaceId: string) {
      const db = load();
      return db.invoices.filter((i) => i.workspaceId === workspaceId);
    },
    async create(workspaceId: string, patch: Partial<Invoice>) {
      const db = load();
      const invoice: Invoice = {
        id: uid('invoice'),
        workspaceId,
        invoiceNumber: patch.invoiceNumber ?? uid('INV').toUpperCase(),
        date: patch.date ?? new Date().toDateString(),
        plan: patch.plan ?? 'Pro',
        amount: patch.amount ?? '₦0',
        status: patch.status ?? 'Paid',
      };
      db.invoices.unshift(invoice);
      save(db);
      return invoice;
    },
  },
};

export type { PlanTier };
