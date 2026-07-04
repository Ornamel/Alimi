import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { useWorkspace } from '../context/WorkspaceContext';
import { Badge } from '../components/ui/Badge';
import { ClockIcon, CheckIcon } from '../components/icons';
import { CONVERSATIONS, SOURCES, TODAY_FUNNEL } from '../lib/mockData';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

export function DashboardPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { profile, agents } = useWorkspace();
  const liveCount = agents.filter((a) => a.status === 'live').length;
  const firstName = (profile?.fullName || 'there').split(' ')[0];

  return (
    <div className="scr" style={{ maxWidth: 1180, margin: '0 auto' }}>
      <div style={{ marginBottom: 26 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-deep)', marginBottom: 8 }}>
          {new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}
        </div>
        <h1 style={{ fontSize: isMobile ? 22 : 30, lineHeight: 1.1 }}>
          {greeting()}, {firstName} — <span style={{ color: 'var(--color-brand-deep)' }}>7 new leads</span> overnight.
        </h1>
        <p style={{ margin: '8px 0 0', color: 'var(--color-steel)', fontSize: 15 }}>
          Your agents held 41 conversations while you slept. 3 are ready for you now.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, 1fr)`, gap: 16, marginBottom: 26 }}>
        <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '18px 18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--color-steel)', fontSize: 13, fontWeight: 500, marginBottom: 12 }}>
            <ClockIcon size={15} /> Avg. response time
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, lineHeight: 1 }}>
            48<span style={{ fontSize: 18, color: 'var(--color-steel)', fontWeight: 500 }}>s</span>
          </div>
          <div style={{ marginTop: 10, fontSize: 12, color: 'var(--color-muted)' }}>
            Industry average: <span style={{ textDecoration: 'line-through' }}>14 minutes</span>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '18px 18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--color-steel)', fontSize: 13, fontWeight: 500, marginBottom: 12 }}>
            <CheckIcon size={15} /> Qualified leads
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, lineHeight: 1 }}>23</div>
          <div style={{ marginTop: 10, fontSize: 12, color: 'var(--color-brand-deep)', fontWeight: 600 }}>↑ 8 vs. yesterday</div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '18px 18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--color-steel)', fontSize: 13, fontWeight: 500, marginBottom: 12 }}>
            Goal completion rate
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, lineHeight: 1 }}>
            31<span style={{ fontSize: 18, color: 'var(--color-steel)', fontWeight: 500 }}>%</span>
          </div>
          <div style={{ marginTop: 8, height: 5, borderRadius: 4, background: '#eee9dd', overflow: 'hidden' }}>
            <div style={{ width: '31%', height: '100%', background: 'var(--color-brand-deep)', borderRadius: 4 }} />
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '18px 18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--color-steel)', fontSize: 13, fontWeight: 500, marginBottom: 12 }}>
            <span className="live-dot" /> Active right now
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, lineHeight: 1 }}>{liveCount * 6 || 12}</div>
          <div style={{ marginTop: 10, fontSize: 12, color: 'var(--color-muted)' }}>across 2 channels</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.55fr 1fr', gap: 20 }}>
        <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--color-hairline-soft)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <h2 style={{ fontSize: 16 }}>Live conversations</h2>
              <Badge tone="amber">3 need your attention</Badge>
            </div>
            <button
              style={{ background: 'none', border: 'none', color: 'var(--color-brand-deep)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
              onClick={() => navigate('/app/monitor')}
            >
              View all →
            </button>
          </div>
          {CONVERSATIONS.map((c) => (
            <div key={c.id} style={{ display: 'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: 13, alignItems: isMobile ? 'flex-start' : 'center', padding: '15px 20px', borderBottom: '1px solid #f4f0e6' }}>
              <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: '50%', background: c.avatarBg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15 }}>
                {c.initials}
              </div>
              <div style={{ flex: 1, minWidth: isMobile ? '100%' : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3, flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</span>
                  <Badge tone={c.channel === 'WhatsApp' ? 'brand' : 'blue'}>{c.channel}</Badge>
                  <Badge tone={c.tone === 'hot' ? 'amber' : c.tone === 'flag' ? 'red' : 'neutral'}>{c.badge}</Badge>
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-steel)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: isMobile ? '100%' : 340 }}>{c.last}</div>
                <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 5 }}>Arrived via {c.source} · {c.time}</div>
              </div>
              <button
                onClick={() => navigate(c.action === 'briefing' ? '/app/briefing' : '/app/monitor')}
                style={{
                  marginLeft: isMobile ? 53 : 0,
                  background: c.tone === 'hot' ? 'var(--color-brand-deep)' : 'var(--color-surface)',
                  color: c.tone === 'hot' ? '#fff' : 'var(--color-ink)',
                  border: c.tone === 'hot' ? 'none' : '1px solid #e4dfd3',
                  padding: '7px 13px',
                  borderRadius: 9,
                  fontSize: '12.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {c.actionLabel}
              </button>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: '18px 20px' }}>
            <h2 style={{ fontSize: 15, marginBottom: 4 }}>Where your leads come from</h2>
            <p style={{ margin: '0 0 16px', fontSize: 12, color: 'var(--color-muted)' }}>Today · 41 conversations</p>
            {SOURCES.map((s) => (
              <div key={s.label} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5 }}>
                  <span style={{ fontWeight: 500 }}>{s.label}</span>
                  <span style={{ color: 'var(--color-steel)' }}>{s.count}</span>
                </div>
                <div style={{ height: 7, borderRadius: 5, background: 'var(--color-hairline-soft)', overflow: 'hidden' }}>
                  <div style={{ width: `${s.percent}%`, height: '100%', background: s.color, borderRadius: 5 }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--color-night)', borderRadius: 18, padding: 20, color: '#c9d2cc' }}>
            <h2 style={{ fontSize: 15, marginBottom: 16, color: 'var(--color-on-dark)' }}>Today's funnel</h2>
            {TODAY_FUNNEL.map((f) => (
              <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 13 }}>
                <div style={{ height: 26, width: `${f.percent}%`, minWidth: 26, background: 'linear-gradient(90deg,#16c47f,#0b7a4b)', borderRadius: 6 }} />
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: 13, color: '#a9b4ac' }}>{f.label}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, color: 'var(--color-on-dark)' }}>{f.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
