export type PlanTier = 'free' | 'pro' | 'agency';

export type AgentStatus = 'live' | 'paused' | 'draft' | 'archived';

export interface Profile {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  timezone: string;
}

export interface Workspace {
  id: string;
  ownerId: string;
  businessName: string;
  vertical: string;
  primaryLanguage: string;
  defaultChannel: string;
  planTier: PlanTier;
  agentLimit: number;
}

export interface Agent {
  id: string;
  workspaceId: string;
  name: string;
  status: AgentStatus;
  channels: string;
  persona: string;
  useCase: string;
  successEvent: string;
  convosToday: number;
  qualifiedLeads: number;
  goalRate: number;
  lastActive: string;
  draftStep: number;
}

export interface Invoice {
  id: string;
  workspaceId: string;
  invoiceNumber: string;
  date: string;
  plan: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Failed' | 'Refunded';
}

export interface AuthUser {
  id: string;
  email: string;
}

export interface SignUpInput {
  fullName: string;
  email: string;
  businessName: string;
  password: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface Backend {
  auth: {
    signUp(input: SignUpInput): Promise<AuthUser>;
    signIn(input: SignInInput): Promise<AuthUser>;
    signOut(): Promise<void>;
    resetPassword(email: string): Promise<void>;
    getCurrentUser(): Promise<AuthUser | null>;
    onAuthStateChange(cb: (user: AuthUser | null) => void): () => void;
  };
  workspace: {
    get(ownerId: string): Promise<Workspace | null>;
    update(id: string, patch: Partial<Workspace>): Promise<Workspace>;
  };
  profile: {
    get(id: string): Promise<Profile | null>;
    update(id: string, patch: Partial<Profile>): Promise<Profile>;
  };
  agents: {
    list(workspaceId: string): Promise<Agent[]>;
    create(workspaceId: string, data: Partial<Agent>): Promise<Agent>;
    update(id: string, patch: Partial<Agent>): Promise<Agent>;
  };
  invoices: {
    list(workspaceId: string): Promise<Invoice[]>;
    create(workspaceId: string, data: Partial<Invoice>): Promise<Invoice>;
  };
}
