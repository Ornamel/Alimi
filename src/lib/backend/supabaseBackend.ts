import { supabase } from '../supabaseClient';
import type {
  Agent,
  AuthUser,
  Backend,
  Invoice,
  Profile,
  SignInInput,
  SignUpInput,
  Workspace,
} from './types';

function requireClient() {
  if (!supabase) throw new Error('Supabase is not configured.');
  return supabase;
}

function agentFromRow(row: any): Agent {
  return {
    id: row.id,
    workspaceId: row.workspace_id,
    name: row.name,
    status: row.status,
    channels: row.channels,
    persona: row.persona,
    useCase: row.use_case,
    successEvent: row.success_event,
    convosToday: row.convos_today,
    qualifiedLeads: row.qualified_leads,
    goalRate: row.goal_rate,
    lastActive: row.last_active,
    draftStep: row.draft_step,
  };
}

function agentToRow(patch: Partial<Agent>) {
  const row: Record<string, unknown> = {};
  if (patch.name !== undefined) row.name = patch.name;
  if (patch.status !== undefined) row.status = patch.status;
  if (patch.channels !== undefined) row.channels = patch.channels;
  if (patch.persona !== undefined) row.persona = patch.persona;
  if (patch.useCase !== undefined) row.use_case = patch.useCase;
  if (patch.successEvent !== undefined) row.success_event = patch.successEvent;
  if (patch.convosToday !== undefined) row.convos_today = patch.convosToday;
  if (patch.qualifiedLeads !== undefined) row.qualified_leads = patch.qualifiedLeads;
  if (patch.goalRate !== undefined) row.goal_rate = patch.goalRate;
  if (patch.lastActive !== undefined) row.last_active = patch.lastActive;
  if (patch.draftStep !== undefined) row.draft_step = patch.draftStep;
  return row;
}

function workspaceFromRow(row: any): Workspace {
  return {
    id: row.id,
    ownerId: row.owner_id,
    businessName: row.business_name,
    vertical: row.vertical,
    primaryLanguage: row.primary_language,
    defaultChannel: row.default_channel,
    planTier: row.plan_tier,
    agentLimit: row.agent_limit,
  };
}

function profileFromRow(row: any): Profile {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    phone: row.phone,
    timezone: row.timezone,
  };
}

export const supabaseBackend: Backend = {
  auth: {
    async signUp({ fullName, email, businessName, password }: SignUpInput) {
      const client = requireClient();
      const { data, error } = await client.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName, business_name: businessName } },
      });
      if (error) throw error;
      if (!data.user) throw new Error('Sign up did not return a user.');
      return { id: data.user.id, email: data.user.email ?? email };
    },
    async signIn({ email, password }: SignInInput) {
      const client = requireClient();
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return { id: data.user.id, email: data.user.email ?? email };
    },
    async signOut() {
      const client = requireClient();
      await client.auth.signOut();
    },
    async resetPassword(email: string) {
      const client = requireClient();
      const { error } = await client.auth.resetPasswordForEmail(email);
      if (error) throw error;
    },
    async getCurrentUser(): Promise<AuthUser | null> {
      const client = requireClient();
      const { data } = await client.auth.getSession();
      const user = data.session?.user;
      return user ? { id: user.id, email: user.email ?? '' } : null;
    },
    onAuthStateChange(cb) {
      const client = requireClient();
      const { data } = client.auth.onAuthStateChange((_event, session) => {
        cb(session?.user ? { id: session.user.id, email: session.user.email ?? '' } : null);
      });
      return () => data.subscription.unsubscribe();
    },
  },

  workspace: {
    async get(ownerId: string) {
      const client = requireClient();
      const { data, error } = await client
        .from('workspaces')
        .select('*')
        .eq('owner_id', ownerId)
        .maybeSingle();
      if (error) throw error;
      return data ? workspaceFromRow(data) : null;
    },
    async update(id: string, patch: Partial<Workspace>) {
      const client = requireClient();
      const row: Record<string, unknown> = {};
      if (patch.businessName !== undefined) row.business_name = patch.businessName;
      if (patch.vertical !== undefined) row.vertical = patch.vertical;
      if (patch.primaryLanguage !== undefined) row.primary_language = patch.primaryLanguage;
      if (patch.defaultChannel !== undefined) row.default_channel = patch.defaultChannel;
      if (patch.planTier !== undefined) row.plan_tier = patch.planTier;
      if (patch.agentLimit !== undefined) row.agent_limit = patch.agentLimit;
      const { data, error } = await client.from('workspaces').update(row).eq('id', id).select().single();
      if (error) throw error;
      return workspaceFromRow(data);
    },
  },

  profile: {
    async get(id: string) {
      const client = requireClient();
      const { data, error } = await client.from('profiles').select('*').eq('id', id).maybeSingle();
      if (error) throw error;
      return data ? profileFromRow(data) : null;
    },
    async update(id: string, patch: Partial<Profile>) {
      const client = requireClient();
      const row: Record<string, unknown> = {};
      if (patch.fullName !== undefined) row.full_name = patch.fullName;
      if (patch.phone !== undefined) row.phone = patch.phone;
      if (patch.timezone !== undefined) row.timezone = patch.timezone;
      const { data, error } = await client.from('profiles').update(row).eq('id', id).select().single();
      if (error) throw error;
      return profileFromRow(data);
    },
  },

  agents: {
    async list(workspaceId: string) {
      const client = requireClient();
      const { data, error } = await client
        .from('agents')
        .select('*')
        .eq('workspace_id', workspaceId)
        .order('created_at', { ascending: true });
      if (error) throw error;
      return (data ?? []).map(agentFromRow);
    },
    async create(workspaceId: string, patch: Partial<Agent>) {
      const client = requireClient();
      const row = { workspace_id: workspaceId, ...agentToRow(patch) };
      const { data, error } = await client.from('agents').insert(row).select().single();
      if (error) throw error;
      return agentFromRow(data);
    },
    async update(id: string, patch: Partial<Agent>) {
      const client = requireClient();
      const { data, error } = await client.from('agents').update(agentToRow(patch)).eq('id', id).select().single();
      if (error) throw error;
      return agentFromRow(data);
    },
  },

  invoices: {
    async list(workspaceId: string) {
      const client = requireClient();
      const { data, error } = await client
        .from('invoices')
        .select('*')
        .eq('workspace_id', workspaceId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return (data ?? []).map(
        (row: any): Invoice => ({
          id: row.id,
          workspaceId: row.workspace_id,
          invoiceNumber: row.invoice_number,
          date: row.date,
          plan: row.plan,
          amount: row.amount,
          status: row.status,
        }),
      );
    },
    async create(workspaceId: string, patch: Partial<Invoice>) {
      const client = requireClient();
      const row = {
        workspace_id: workspaceId,
        invoice_number: patch.invoiceNumber,
        date: patch.date,
        plan: patch.plan,
        amount: patch.amount,
        status: patch.status ?? 'Paid',
      };
      const { data, error } = await client.from('invoices').insert(row).select().single();
      if (error) throw error;
      return {
        id: data.id,
        workspaceId: data.workspace_id,
        invoiceNumber: data.invoice_number,
        date: data.date,
        plan: data.plan,
        amount: data.amount,
        status: data.status,
      };
    },
  },
};
