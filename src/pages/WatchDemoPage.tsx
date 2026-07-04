import { useNavigate } from 'react-router-dom';
import { PhoneFrame } from '../components/layout/PhoneFrame';
import { ArrowLeftIcon, SendIcon, LogoMark } from '../components/icons';

const MESSAGES: { from: 'them' | 'us'; text: string; time: string }[] = [
  { from: 'them', text: 'Hi 👋 I just watched your Lekki penthouse tour on YouTube. Is the 3-bedroom still available?', time: '9:12 AM' },
  { from: 'us', text: 'Welcome, and thanks for watching! Yes — the 3-bed penthouse is still available. North-facing with the wraparound terrace. Want me to walk you through pricing?', time: '9:12 AM' },
  { from: 'them', text: 'Yes please. Do you have a payment plan?', time: '9:13 AM' },
  { from: 'us', text: "It's ₦185M. We offer a 12-month plan — 40% down, balance spread monthly at 0% interest.", time: '9:14 AM' },
  { from: 'them', text: 'Perfect. Can I come see it this weekend?', time: '9:15 AM' },
  { from: 'us', text: 'Absolutely! I have Saturday 10 AM or Sunday 2 PM. Which works?', time: '9:15 AM' },
  { from: 'them', text: 'Saturday 10am 🙌 chioma.o@gmail.com', time: '9:16 AM' },
  { from: 'us', text: 'Booked ✅ Saturday 10 AM, 14 Admiralty Way, Lekki Phase 1. Calendar invite sent — see you then!', time: '9:16 AM' },
];

export function WatchDemoPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 50% 0%, #1a3527, #0c1712)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: '40px 20px',
        position: 'relative',
      }}
    >
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: 24,
          left: 24,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.14)',
          color: '#f5f2eb',
          fontSize: '13.5px',
          fontWeight: 600,
          padding: '9px 16px',
          borderRadius: 999,
          cursor: 'pointer',
        }}
      >
        <ArrowLeftIcon size={15} color="#f5f2eb" />
        Back to Alimi
      </button>

      <div style={{ textAlign: 'center', color: '#9fb0a6', maxWidth: 460 }}>
        <h2 style={{ fontSize: 20, color: '#f5f2eb', marginBottom: 6 }}>The prospect's view</h2>
        <p style={{ margin: 0, fontSize: 14 }}>
          Chioma taps a WhatsApp link from a YouTube description. Source captured:{' '}
          <span style={{ fontFamily: 'var(--font-mono)', color: '#7ce0ac' }}>YouTube · Lekki Tour</span>
        </p>
      </div>

      <PhoneFrame>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#ece5dd' }}>
          <div style={{ background: '#0b7a4b', padding: '56px 14px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <ArrowLeftIcon size={22} color="#fff" />
            <LogoMark size={40} />
            <div style={{ flex: 1, color: '#fff' }}>
              <div style={{ fontWeight: 600, fontSize: 16 }}>Lekki Homes</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>online · typically replies instantly</div>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px 12px 8px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ alignSelf: 'center' }}>
              <span style={{ fontSize: 11, color: '#6e7a73', background: 'rgba(255,255,255,0.7)', padding: '3px 10px', borderRadius: 8 }}>
                via YouTube · Lekki Penthouse Tour
              </span>
            </div>
            {MESSAGES.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === 'us' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  background: m.from === 'us' ? '#dcf3e4' : '#fff',
                  padding: '8px 11px',
                  borderRadius: m.from === 'us' ? '12px 3px 12px 12px' : '3px 12px 12px 12px',
                  fontSize: 14,
                  lineHeight: 1.45,
                  color: '#12211b',
                  boxShadow: m.from === 'them' ? '0 1px 1px rgba(0,0,0,0.05)' : undefined,
                }}
              >
                {m.text}
                <div style={{ textAlign: 'right', fontSize: 10, color: '#9aa39c', marginTop: 2 }}>{m.time}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '8px 12px 30px', display: 'flex', alignItems: 'center', gap: 8, background: '#ece5dd' }}>
            <div style={{ flex: 1, background: '#fff', borderRadius: 22, padding: '10px 16px', fontSize: 14, color: '#9aa39c' }}>Message</div>
            <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#0b7a4b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SendIcon size={20} />
            </div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
