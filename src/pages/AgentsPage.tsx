import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { useWorkspace } from '../context/WorkspaceContext';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PillTabs } from '../components/ui/Tabs';
import { ProfileMenu } from '../components/layout/ProfileMenu';
import { PlusIcon, WhatsAppIcon } from '../components/icons';
import type { Agent, AgentStatus } from '../lib/backend';
import './AgentsPage.css';

const STATUS_META: Record<AgentStatus, { label: string; tone: 'brand' | 'amber' | 'neutral' }> = {
  live: { label: 'Live', tone: 'brand' },
  paused: { label: 'Paused', tone: 'amber' },
  draft: { label: 'Draft', tone: 'neutral' },
  archived: { label: 'Archived', tone: 'neutral' },
};

const FILTERS = [
  { id: 'all', label: 'All agents' },
  { id: 'live', label: 'Live' },
  { id: 'draft', label: 'Drafts' },
  { id: 'paused', label: 'Paused' },
  { id: 'archived', label: 'Archived' },
];

function statLine(a: Agent) {
  if (a.status === 'live') return `${a.convosToday} conversations today · ${a.qualifiedLeads} qualified leads`;
  if (a.status === 'draft') return `Draft · ${a.draftStep} of 5 steps complete`;
  if (a.status === 'paused') return `${a.goalRate}% goal completion rate (paused)`;
  return 'Hidden from your active list';
}

export function AgentsPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { flash } = useToast();
  const { workspace, agents, usedSlots, limitReached, updateAgent } = useWorkspace();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? agents : agents.filter((a) => a.status === filter);
  const isBrandNew = agents.length === 0;
  const planLabel = workspace?.planTier === 'pro' ? 'Pro plan' : workspace?.planTier === 'agency' ? 'Agency plan' : 'Free plan';
  const limit = workspace?.agentLimit ?? 1;

  function createNewAgent() {
    if (limitReached) {
      flash('You have reached the Free plan limit. Upgrade to create more agents.');
      return;
    }
    navigate(isBrandNew ? '/onboarding' : '/agents/new');
  }

  async function pause(a: Agent) {
    await updateAgent(a.id, { status: 'paused', lastActive: 'Paused just now' });
    flash(`${a.name} paused — it will stop responding to new messages.`);
  }
  async function resume(a: Agent) {
    await updateAgent(a.id, { status: 'live', lastActive: 'Active just now' });
    flash(`${a.name} resumed — conversations restarting.`);
  }
  async function archive(a: Agent) {
    await updateAgent(a.id, { status: 'archived', lastActive: 'Archived just now' });
    flash(`${a.name} archived — hidden from your active list.`);
  }
  async function restore(a: Agent) {
    if (limitReached) {
      flash('You have reached the Free plan limit. Upgrade to restore this agent.');
      return;
    }
    await updateAgent(a.id, { status: 'draft', lastActive: 'Restored just now' });
    flash('Agent restored — resume setup anytime.');
  }

  return (
    <div className={`agents-page ${isMobile ? 'agents-page--mobile' : ''}`}>
      <div className="agents-page__inner">
        <div className="agents-page__header">
          <div>
            <h1 style={{ fontSize: 28 }}>Your Agents</h1>
            <p style={{ margin: '8px 0 0', color: 'var(--color-steel)', fontSize: 15 }}>Choose an agent to manage, or create a new one.</p>
          </div>
          <div className="agents-page__header-actions">
            {limitReached && (
              <Button variant="dark" onClick={() => navigate('/billing')}>Upgrade plan</Button>
            )}
            <Button
              variant="primary"
              icon={<PlusIcon size={16} color="#fff" />}
              disabled={limitReached}
              title={limitReached ? 'You have reached the Free plan limit. Upgrade to create more agents.' : ''}
              onClick={createNewAgent}
            >
              Create new agent
            </Button>
            <ProfileMenu />
          </div>
        </div>

        <div className="agents-page__plan-card">
          <div>
            <div style={{ marginBottom: 4 }}>
              <Badge tone="brand" style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>{planLabel}</Badge>
            </div>
            <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-steel)' }}>
              You can create {limit} AI agent{limit !== 1 ? 's' : ''} on this plan.{' '}
              <span style={{ fontWeight: 600, color: 'var(--color-ink)' }}>
                {usedSlots} of {limit} agent{limit !== 1 ? 's' : ''} used
              </span>
            </p>
          </div>
          {limitReached && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '12.5px', color: '#c9631c', maxWidth: 320, textAlign: 'right' }}>
                You have reached your Free plan agent limit. Upgrade to create more agents.
              </span>
              <Button variant="primary" onClick={() => navigate('/billing')}>Upgrade plan</Button>
            </div>
          )}
        </div>

        {isBrandNew ? (
          <div style={{ maxWidth: 460, margin: '60px auto 0', textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: 18, background: 'var(--color-brand-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
              <WhatsAppIcon size={30} />
            </div>
            <h2 style={{ fontSize: 24, marginBottom: 10 }}>No agents yet</h2>
            <p style={{ margin: '0 0 26px', color: 'var(--color-steel)', fontSize: '15.5px', lineHeight: 1.55 }}>
              Create your first AI closer to start handling WhatsApp and Email conversations automatically.
            </p>
            <Button variant="primary" size="lg" icon={<PlusIcon size={16} color="#fff" />} onClick={createNewAgent}>
              Create new agent
            </Button>
            <p style={{ margin: '16px 0 0', color: 'var(--color-muted)', fontSize: 13 }}>
              Free plan includes 1 agent. You can save your setup as a draft and continue later.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 24 }}>
              <PillTabs items={FILTERS} active={filter} onChange={setFilter} />
            </div>

            {filtered.length === 0 && (
              <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '50px 28px', textAlign: 'center', color: 'var(--color-muted)', fontSize: 14 }}>
                No agents in this view.
              </div>
            )}

            <div className="agents-page__grid">
              {filtered.map((a) => {
                const meta = STATUS_META[a.status];
                return (
                  <div className="agent-card" key={a.id}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                      <div>
                        <h2 style={{ fontSize: 17, marginBottom: 6 }}>{a.name}</h2>
                        <div style={{ fontSize: '12.5px', color: 'var(--color-muted)' }}>{a.channels}</div>
                      </div>
                      <Badge tone={meta.tone}>{meta.label}</Badge>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--color-steel)', lineHeight: 1.5 }}>{statLine(a)}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-muted)' }}>{a.lastActive}</div>
                    <div className="agent-card__actions-row">
                      <Button
                        variant="primary"
                        size="sm"
                        style={{ flex: 1, minWidth: 130 }}
                        onClick={() => {
                          if (a.status === 'draft') navigate(`/agents/${a.id}/edit`);
                          else if (a.status === 'archived') restore(a);
                          else navigate('/app/dashboard');
                        }}
                      >
                        {a.status === 'draft' ? 'Continue setup' : a.status === 'archived' ? 'Restore' : 'Open dashboard'}
                      </Button>
                      <Button variant="secondary" size="sm" onClick={() => navigate(`/agents/${a.id}/edit`)}>Edit</Button>
                    </div>
                    <div className="agent-card__meta-row">
                      {a.status === 'live' && (
                        <button className="agent-card__meta-action" style={{ color: '#c9631c' }} onClick={() => pause(a)}>Pause agent</button>
                      )}
                      {a.status === 'paused' && (
                        <button className="agent-card__meta-action" style={{ color: 'var(--color-brand-deep)' }} onClick={() => resume(a)}>Resume agent</button>
                      )}
                      {a.status !== 'archived' && (
                        <button className="agent-card__meta-action" style={{ color: 'var(--color-muted)' }} onClick={() => archive(a)}>Archive</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
