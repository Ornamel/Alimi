import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { Button } from '../components/ui/Button';
import { useToast } from '../context/ToastContext';

const EMPTY_STATES = [
  { bg: '#e7f3ec', title: 'No agents yet', body: 'You have not built an agent yet. Your first one takes under 30 minutes.', cta: 'Build your first agent', action: 'agents' },
  { bg: '#e9effc', title: 'No conversations yet', body: 'Your agent is live and listening. Share your link to get the first conversation started.', cta: 'Share your link', action: 'entry' },
  { bg: '#fbead8', title: 'No briefings yet', body: 'Once your agent qualifies a lead, its Intelligence Briefing appears here instantly.' },
  { bg: '#f0ece1', title: 'No analytics yet', body: 'Your analytics will populate once conversations start flowing.' },
];

const ERROR_STATES = [
  { tone: '#fae7e7', title: "Couldn't read that file", body: 'Try a PDF or paste the content directly as text.' },
  { tone: '#fae7e7', title: "WhatsApp didn't connect", body: 'Check your number and try again.' },
  { tone: '#f0ece1', title: 'That took longer than expected', body: 'Refresh — your data will be here.' },
  { tone: '#fbead8', title: 'Your agent is paused', body: 'Tap Resume — conversations restart automatically.', cta: 'Resume agent' },
  { tone: '#fbead8', title: 'Conversation limit reached', body: "You've used this month's allowance. Upgrade or add credits.", cta: 'Upgrade plan' },
  { tone: '#e7f3ec', title: 'Knowledge base indexing', body: "We'll notify you the moment your agent is expert-ready." },
];

export function StatesPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { flash } = useToast();

  return (
    <div style={{ background: 'var(--color-surface)', minHeight: '100vh', padding: isMobile ? '28px 16px' : '36px 40px 60px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <h1 style={{ fontSize: 28 }}>Empty &amp; error states</h1>
        <p style={{ margin: '8px 0 0', color: 'var(--color-steel)', fontSize: 15 }}>
          Every dead-end tells the owner exactly what to do next — direct, warm, outcome-focused.
        </p>

        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, margin: '34px 0 14px' }}>Empty states</div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 16 }}>
          {EMPTY_STATES.map((s) => (
            <div key={s.title} style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '34px 28px', textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: 15, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 22 }}>●</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, marginBottom: 6 }}>{s.title}</div>
              <p style={{ margin: '0 0 16px', fontSize: 14, color: 'var(--color-steel)', lineHeight: 1.5, maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>{s.body}</p>
              {s.cta && (
                <Button variant={s.action === 'agents' ? 'primary' : 'secondary'} size="sm" onClick={() => navigate(s.action === 'agents' ? '/agents/new' : '/app/entry-points')}>
                  {s.cta}
                </Button>
              )}
            </div>
          ))}
        </div>

        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, margin: '34px 0 14px' }}>Errors &amp; system states</div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
          {ERROR_STATES.map((s) => (
            <div key={s.title} style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 14, padding: 20, display: 'flex', gap: 13 }}>
              <div style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: s.tone, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>!</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{s.title}</div>
                <p style={{ margin: '0 0 10px', fontSize: 13, color: 'var(--color-steel)', lineHeight: 1.45 }}>{s.body}</p>
                {s.cta && (
                  <Button variant={s.cta === 'Upgrade plan' ? 'dark' : 'primary'} size="sm" onClick={() => flash(`${s.cta} — noted.`)}>
                    {s.cta}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
