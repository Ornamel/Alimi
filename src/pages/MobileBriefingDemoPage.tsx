import { PhoneFrame } from '../components/layout/PhoneFrame';
import { Button } from '../components/ui/Button';
import { BriefingIcon, ArrowLeftIcon, WhatsAppIcon, CalendarIcon } from '../components/icons';
import { useToast } from '../context/ToastContext';

const SIGNALS = [
  { label: 'Purchase intent', value: 92, color: 'linear-gradient(90deg,#16c47f,#0b7a4b)', valueColor: '#0b7a4b' },
  { label: 'Budget alignment', value: 78, color: 'linear-gradient(90deg,#5b90f5,#2f6bec)', valueColor: '#2f6bec' },
  { label: 'Decision urgency', value: 85, color: 'linear-gradient(90deg,#f5a24b,#e07b2e)', valueColor: '#e07b2e' },
];

const MOVES = [
  { n: 1, bg: '#e7f3ec', color: '#0b7a4b', text: 'Confirm terrace furniture, reconfirm Saturday 10 AM.' },
  { n: 2, bg: '#e9effc', color: '#2f6bec', text: 'Bring the printed price sheet.' },
  { n: 3, bg: '#fbead8', color: '#c9631c', text: 'Have the deposit link ready.' },
];

export function MobileBriefingDemoPage() {
  const { flash } = useToast();
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 50% 0%, #1a3527, #0c1712)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px',
      }}
    >
      <div style={{ textAlign: 'center', color: '#9fb0a6', maxWidth: 520, marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, color: '#f5f2eb', marginBottom: 6 }}>The closer's handoff</h2>
        <p style={{ margin: 0, fontSize: 14 }}>
          A push arrives within 10 seconds of qualification. Tap it, and the full briefing is ready — no transcript
          reading.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <PhoneFrame dark>
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(180deg,#0f2a1c,#07130d)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 92,
                color: '#fff',
              }}
            >
              <div style={{ fontSize: 68, fontWeight: 300, fontFamily: 'var(--font-display)' }}>9:16</div>
              <div style={{ fontSize: 15, opacity: 0.8, marginBottom: 40 }}>Saturday, 3 July</div>
              <div style={{ width: '88%', background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: '14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: '#16c47f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BriefingIcon size={13} color="#07130d" />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.9 }}>Alimi</span>
                  <span style={{ marginLeft: 'auto', fontSize: 12, opacity: 0.6 }}>now</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>Chioma is ready to close 🔥</div>
                <div style={{ fontSize: '13.5px', lineHeight: 1.4, opacity: 0.92 }}>
                  Viewing booked — Saturday 10 AM. Tap to view her Intelligence Briefing.
                </div>
              </div>
            </div>
          </PhoneFrame>
          <span style={{ fontSize: 12, color: '#7c8b83', fontFamily: 'var(--font-mono)' }}>1 · Push notification</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <PhoneFrame>
            <div style={{ minHeight: '100%', background: '#f5f2eb', overflowY: 'auto' }}>
              <div style={{ background: '#0c1712', padding: '56px 18px 20px', color: '#e7ede9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9fb0a6', marginBottom: 14 }}>
                  <ArrowLeftIcon size={16} color="#9fb0a6" />
                  Intelligence Briefing
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: '#0b7a4b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 19, fontFamily: 'var(--font-display)' }}>
                    CO
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: '#f5f2eb' }}>Chioma Okafor</span>
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#07130d', background: '#f5a24b', padding: '2px 8px', borderRadius: 20 }}>🔥 HOT</span>
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#9fb0a6', marginTop: 3 }}>Ready for you · 2 min ago</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9aa39c', marginBottom: 8 }}>
                  What you need to know
                </div>
                <p style={{ margin: '0 0 18px', fontSize: 14, lineHeight: 1.55, color: '#3d4b44' }}>
                  From the Lekki tour. Budget fit at ₦185M, accepted the 12-month plan, and{' '}
                  <b style={{ color: '#12211b' }}>booked Saturday 10 AM</b>. Gave her email for the invite.
                </p>

                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9aa39c', marginBottom: 12 }}>
                  Intent signals
                </div>
                <div style={{ background: '#fff', border: '1px solid #eae5d9', borderRadius: 14, padding: 15, marginBottom: 18 }}>
                  {SIGNALS.map((s) => (
                    <div key={s.label} style={{ marginBottom: 13 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span style={{ fontSize: 13, color: '#3d4b44' }}>{s.label}</span>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: s.valueColor }}>{s.value}%</span>
                      </div>
                      <div style={{ height: 8, borderRadius: 5, background: '#eee9dd', overflow: 'hidden' }}>
                        <div style={{ width: `${s.value}%`, height: '100%', background: s.color, borderRadius: 5 }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9aa39c', marginBottom: 10 }}>
                  Your next three moves
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                  {MOVES.map((m) => (
                    <div key={m.n} style={{ display: 'flex', gap: 10, background: '#fff', border: '1px solid #eae5d9', borderRadius: 11, padding: '11px 13px' }}>
                      <span style={{ width: 22, height: 22, flexShrink: 0, borderRadius: 7, background: m.bg, color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, fontFamily: 'var(--font-display)' }}>
                        {m.n}
                      </span>
                      <span style={{ fontSize: '13.5px', color: '#3d4b44', lineHeight: 1.4 }}>{m.text}</span>
                    </div>
                  ))}
                </div>

                <Button variant="primary" fullWidth icon={<WhatsAppIcon size={18} color="#fff" />} style={{ marginBottom: 10 }} onClick={() => flash('Opening WhatsApp with a personalized intro…')}>
                  Message Chioma now
                </Button>
                <Button variant="secondary" fullWidth icon={<CalendarIcon size={16} />} style={{ marginBottom: 34 }} onClick={() => flash('Calendar event created.')}>
                  Add to calendar
                </Button>
              </div>
            </div>
          </PhoneFrame>
          <span style={{ fontSize: 12, color: '#7c8b83', fontFamily: 'var(--font-mono)' }}>2 · Mobile briefing</span>
        </div>
      </div>
    </div>
  );
}
