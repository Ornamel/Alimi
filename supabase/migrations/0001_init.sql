-- Alimi schema: profiles, workspaces, agents, invoices
-- Run against a Supabase project (SQL editor or `supabase db push`).

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null default '',
  email text not null default '',
  phone text,
  timezone text not null default 'Africa/Lagos',
  created_at timestamptz not null default now()
);

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users (id) on delete cascade,
  business_name text not null default 'My Business',
  vertical text not null default 'realestate',
  primary_language text not null default 'English',
  default_channel text not null default 'WhatsApp',
  plan_tier text not null default 'free' check (plan_tier in ('free', 'pro', 'agency')),
  agent_limit int not null default 1,
  created_at timestamptz not null default now()
);
create unique index if not exists workspaces_owner_id_idx on public.workspaces (owner_id);

create table if not exists public.agents (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces (id) on delete cascade,
  name text not null default 'Untitled agent',
  status text not null default 'draft' check (status in ('live', 'paused', 'draft', 'archived')),
  channels text not null default 'Not connected',
  persona text not null default '',
  use_case text not null default '',
  success_event text not null default '',
  convos_today int not null default 0,
  qualified_leads int not null default 0,
  goal_rate int not null default 0,
  last_active text not null default 'Saved just now',
  draft_step int not null default 1,
  created_at timestamptz not null default now()
);

create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces (id) on delete cascade,
  invoice_number text not null,
  date text not null,
  plan text not null,
  amount text not null,
  status text not null default 'Paid' check (status in ('Paid', 'Pending', 'Failed', 'Refunded')),
  created_at timestamptz not null default now()
);

-- Auto-provision a profile + workspace whenever a new auth user is created.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''), new.email);

  insert into public.workspaces (owner_id, business_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'business_name', 'My Business'));

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Row Level Security: every table is scoped to the owning user.
alter table public.profiles enable row level security;
alter table public.workspaces enable row level security;
alter table public.agents enable row level security;
alter table public.invoices enable row level security;

create policy "profiles: read own" on public.profiles for select using (auth.uid() = id);
create policy "profiles: update own" on public.profiles for update using (auth.uid() = id);

create policy "workspaces: read own" on public.workspaces for select using (auth.uid() = owner_id);
create policy "workspaces: update own" on public.workspaces for update using (auth.uid() = owner_id);

create policy "agents: read own" on public.agents for select using (
  exists (select 1 from public.workspaces w where w.id = workspace_id and w.owner_id = auth.uid())
);
create policy "agents: insert own" on public.agents for insert with check (
  exists (select 1 from public.workspaces w where w.id = workspace_id and w.owner_id = auth.uid())
);
create policy "agents: update own" on public.agents for update using (
  exists (select 1 from public.workspaces w where w.id = workspace_id and w.owner_id = auth.uid())
);

create policy "invoices: read own" on public.invoices for select using (
  exists (select 1 from public.workspaces w where w.id = workspace_id and w.owner_id = auth.uid())
);
create policy "invoices: insert own" on public.invoices for insert with check (
  exists (select 1 from public.workspaces w where w.id = workspace_id and w.owner_id = auth.uid())
);
