import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/ui/Button';
import { ArrowLeftIcon, WhatsAppIcon, CalendarIcon } from '../components/icons';

const SIGNALS = [
  { label: 'Purchase intent', value: 92, color: 'linear-gradient(90deg,#16c47f,#0b7a4b)', valueColor: '#0b7a4b' },
  { label: 'Budget alignment', value: 78, color: 'linear-gradient(90deg,#5b90f5,#2f6bec)', valueColor: '#2f6bec' },
  { label: 'Decision urgency', value: 85, color: 'linear-gradient(90deg,#f5a24b,#e07b2e)', valueColor: '#e07b2e' },
];

const MOVES = [
  { n: 1, bg: '#e7f3ec', color: '#0b7a4b', text: 'Confirm terrace furniture is included, then reconfirm Saturday 10 AM.' },
  { n: 2, bg: '#e9effc', color: '#2f6bec', text: "Bring the printed price sheet — she's already reviewing the 12-month plan." },
  { n: 3, bg: '#fbead8', color: '#c9631c', text: "Have the deposit link ready — urgency is high, don't let it cool." },
];

export function BriefingPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { flash } = useToast();

  return (
    <div className="scr" style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 8 }}>
        <button onClick={() => navigate('/app/dashboard')} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'none', border: 'none', color: 'var(--color-steel)', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer' }}>
          <ArrowLeftIcon size={16} color="var(--color-steel)" /> All briefings
        </button>
        <div style={{ fontSize: 12, color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>Generated in 6.2s · from success event</div>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ background: 'var(--color-night)', padding: isMobile ? '20px' : '24px 28px', color: '#e7ede9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--color-brand-deep)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 22, fontFamily: 'var(--font-display)' }}>
              CO
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: 24, color: 'var(--color-on-dark)' }}>Chioma Okafor</h1>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#07130d', background: '#f5a24b', padding: '3px 10px', borderRadius: 20 }}>🔥 HOT LEAD</span>
              </div>
              <div style={{ marginTop: 5, fontSize: '13.5px', color: 'var(--color-on-dark-muted)' }}>
                Qualified lead · Ready for you · <span style={{ color: 'var(--color-brand)', fontWeight: 600 }}>2 minutes ago</span>
              </div>
            </div>
            {!isMobile && (
              <div style={{ textAlign: 'right', fontSize: '12.5px', color: 'var(--color-on-dark-muted)', lineHeight: 1.7 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, justifyContent: 'flex-end' }}>
                  <span style={{ fontFamily: 'var(--font-mono)' }}>+234 803 555 0142</span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--color-brand-deep)', background: '#dcf3e4', padding: '1px 7px', borderRadius: 20 }}>WhatsApp</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)' }}>chioma.o@gmail.com</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end', marginTop: 3, color: '#7c8b83' }}>↳ via YouTube · Lekki Penthouse Tour</div>
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.15fr 1fr' }}>
          <div style={{ padding: isMobile ? 20 : '26px 28px', borderRight: isMobile ? 'none' : '1px solid var(--color-hairline-soft)', borderBottom: isMobile ? '1px solid var(--color-hairline-soft)' : 'none' }}>
            <h2 style={{ fontSize: 15, marginBottom: 10 }}>What you need to know</h2>
            <p style={{ margin: '0 0 22px', fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-slate)' }}>
              Chioma came in from the Lekki penthouse tour and asked about the 3-bedroom north-facing unit. She's
              confirmed budget fit at ₦185M, accepted the 12-month payment plan, and{' '}
              <b style={{ color: 'var(--color-ink)' }}>booked a Saturday 10 AM viewing</b>. She gave her email for the
              calendar invite — a strong signal she's ready to move.
            </p>

            <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)', marginBottom: 9 }}>Key interests</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
              {['3-bed penthouse', 'Wraparound terrace', '12-month payment plan', 'Weekend viewing'].map((tag) => (
                <span key={tag} style={{ fontSize: '12.5px', fontWeight: 500, color: 'var(--color-brand-deep)', background: 'var(--color-brand-soft)', padding: '5px 11px', borderRadius: 8 }}>{tag}</span>
              ))}
            </div>

            <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)', marginBottom: 9 }}>Objections raised</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9, padding: '11px 13px', background: '#fbf6ee', border: '1px solid #f0e6d5', borderRadius: 11 }}>
              <span style={{ fontSize: '13.5px', color: '#6b5a42', lineHeight: 1.5 }}>
                Asked whether the terrace furniture is included — <b style={{ color: '#4a3d2a' }}>not yet answered.</b> Confirm before the viewing.
              </span>
            </div>
          </div>

          <div style={{ padding: isMobile ? 20 : '26px 28px', background: 'var(--color-surface-soft)' }}>
            <h2 style={{ fontSize: 15, marginBottom: 18 }}>Intent signals</h2>
            {SIGNALS.map((s) => (
              <div key={s.label} style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 7 }}>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-slate)' }}>{s.label}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: s.valueColor }}>{s.value}%</span>
                </div>
                <div style={{ height: 9, borderRadius: 6, background: '#eee9dd', overflow: 'hidden' }}>
                  <div style={{ width: `${s.value}%`, height: '100%', background: s.color, borderRadius: 6 }} />
                </div>
              </div>
            ))}
            <div style={{ padding: '14px 16px', background: 'var(--color-night)', borderRadius: 13, color: '#c9d2cc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--color-brand)', marginBottom: 6 }}>Alimi read</div>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: '#b7c0b9' }}>
                Fastest-moving lead this week. Terrace furniture is the only open question — resolve it and she'll likely close on the spot.
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: isMobile ? 20 : '24px 28px', borderTop: '1px solid var(--color-hairline-soft)' }}>
          <h2 style={{ fontSize: 15, marginBottom: 14 }}>Your next three moves</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 14 }}>
            {MOVES.map((m) => (
              <div key={m.n} style={{ border: '1px solid var(--color-hairline)', borderRadius: 13, padding: 15 }}>
                <div style={{ width: 26, height: 26, borderRadius: 8, background: m.bg, color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 10 }}>
                  {m.n}
                </div>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.5, color: 'var(--color-slate)' }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: isMobile ? 20 : '20px 28px', background: 'var(--color-surface-soft)', borderTop: '1px solid var(--color-hairline-soft)', flexWrap: 'wrap' }}>
          <Button variant="primary" icon={<WhatsAppIcon size={18} color="#fff" />} onClick={() => navigate('/app/monitor')}>Message Chioma now</Button>
          <Button variant="secondary" icon={<CalendarIcon size={17} />} onClick={() => flash('Calendar event created.')}>Add to calendar</Button>
          <button
            style={{ marginLeft: isMobile ? 0 : 'auto', background: 'none', border: 'none', color: 'var(--color-steel)', fontSize: 14, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            onClick={() => navigate('/app/monitor')}
          >
            View full conversation
          </button>
        </div>
      </div>
    </div>
  );
}
