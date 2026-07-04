# Alimi

Production implementation of the Alimi Claude Design prototype: an AI-native SaaS platform
that deploys autonomous sales agents on WhatsApp & Email. React + TypeScript + Vite, backed
by Supabase (Postgres + Auth).

## Stack

- **React 19 + TypeScript + Vite** — SPA, client-side routed with `react-router-dom`.
- **Supabase** — Postgres, Auth, and Row Level Security. See `supabase/migrations/0001_init.sql`
  for the schema (`profiles`, `workspaces`, `agents`, `invoices`).
- **No CSS framework** — hand-rolled design tokens (`src/index.css`) ported from the
  prototype's retheme of the Mintlify design system, plus small reusable primitives in
  `src/components/ui/` (Button, Card, Badge, form fields, Modal, Toast, ProgressBar, Tabs).

## Running locally

```bash
npm install
npm run dev
```

### Backend modes

The app works in two modes, chosen automatically based on environment variables:

1. **Supabase-backed (production)** — copy `.env.example` to `.env.local` and fill in
   `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` from a Supabase project. Run the SQL in
   `supabase/migrations/0001_init.sql` against that project (SQL editor or `supabase db push`).
   Auth, workspaces, agents, and invoices all persist to Postgres with RLS scoping every row
   to its owner.

2. **Local demo mode (no setup)** — with no env vars set, the app falls back to
   `src/lib/backend/localBackend.ts`, a browser-only mock backed by `localStorage`. A seeded
   demo account is available: **tunde@lekkihomes.com / demo1234** (1 live agent + 2 archived,
   Free plan, 1-of-1 slots used — mirrors the prototype's returning-user demo state). New
   sign-ups start from a genuine empty state. This mode exists purely so the full product can
   be exercised end-to-end without provisioning infrastructure first.

Both modes implement the same `Backend` interface (`src/lib/backend/types.ts`), so swapping
between them requires no code changes elsewhere in the app.

### Billing

Plan & Billing is real on the backend side (plan tier / agent limit persist to the
`workspaces` table) but the payment form itself is UI-only — no real payment processor is
wired up, matching the product decision to keep upgrades mocked for now.

## Structure

```
src/
  components/
    ui/          Button, Card, Badge, Field (Input/Textarea/Select), Modal, Toast, Tabs, ProgressBar
    layout/       AppShell (sidebar/bottom-tabs), AuthSplitLayout, ProfileMenu, PhoneFrame, RequireAuth
    icons.tsx      Inline SVG icon set
  context/         AuthContext, WorkspaceContext, ToastContext
  lib/
    backend/       Backend interface + Supabase/local implementations
    mockData.ts    Seeded conversation/analytics data used by Dashboard/Monitor/Briefing/Analytics
    supabaseClient.ts
  pages/           One file per screen (Landing, auth, Onboarding, Your Agents, Agent Builder,
                    Dashboard, Monitor, Briefing, Entry Points, Analytics, Billing, Settings,
                    States, Watch Demo, Mobile Briefing Demo)
supabase/
  migrations/0001_init.sql
```

## Responsive behaviour

`useIsMobile` (`src/hooks/useIsMobile.ts`) drives a single breakpoint (760px) that swaps the
app shell's sidebar for a bottom tab bar and collapses layout grids across every screen,
matching the prototype's mobile pass.
