import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { useToast } from '../context/ToastContext';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MONITOR_LIST } from '../lib/mockData';
import { SendIcon, TakeoverIcon } from '../components/icons';

const TRANSCRIPT = [
  { from: 'them', text: 'Hi 👋 I just watched your Lekki penthouse tour on YouTube. Is the 3-bedroom still available?' },
  { from: 'us', text: "Welcome, and thanks for watching the Lekki tour! Yes — the 3-bedroom penthouse from that video is still available. It's the north-facing unit with the wraparound terrace. Want me to walk you through pricing?" },
  { from: 'them', text: 'Yes please. And do you have a payment plan?' },
  { from: 'us', text: 'The 3-bed penthouse is ₦185M. We offer a 12-month plan: 40% down (₦74M) and the balance spread monthly — 0% interest. I can also share the full price sheet as a PDF.' },
  { from: 'them', text: 'Perfect. Can I come see it this weekend?' },
  { from: 'us', text: 'Absolutely. I have two viewing slots this weekend — Saturday 10:00 AM or Sunday 2:00 PM. Which suits you better?' },
  { from: 'them', text: 'Saturday 10am works perfectly. My email is chioma.o@gmail.com' },
  { from: 'milestone', text: 'Success event hit · Viewing booked · Intelligence Briefing generated' },
  { from: 'us', text: "Booked! ✅ Saturday 10:00 AM at 14 Admiralty Way, Lekki Phase 1. I've sent a calendar invite to your email. Tunde from our team will meet you there. See you Saturday!" },
];

export function MonitorPage() {
  const isMobile = useIsMobile();
  const { flash } = useToast();
  const [selected, setSelected] = useState('chioma');
  const [takenOver, setTakenOver] = useState(false);
  const [message, setMessage] = useState('');
  const convo = MONITOR_LIST.find((c) => c.id === selected) ?? MONITOR_LIST[0];

  function sendMsg() {
    if (!message.trim()) return;
    flash('Message sent.');
    setMessage('');
  }

  return (
    <div
      className="scr"
      style={{
        height: isMobile ? undefined : 'calc(100vh - 122px)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        background: '#fff',
        border: '1px solid var(--color-hairline)',
        borderRadius: 18,
        overflow: 'hidden',
      }}
    >
      <div style={{ width: isMobile ? '100%' : 306, flexShrink: 0, borderRight: isMobile ? 'none' : '1px solid var(--color-hairline-soft)', borderBottom: isMobile ? '1px solid var(--color-hairline-soft)' : 'none', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '18px 18px 12px' }}>
          <h1 style={{ fontSize: 20, marginBottom: 12 }}>Conversations</h1>
          <div style={{ display: 'flex', gap: 6 }}>
            <Badge tone="brand" style={{ background: 'var(--color-brand)', color: 'var(--color-night-ink)' }}>All · 12</Badge>
            <Badge tone="neutral">Hot · 4</Badge>
            <Badge tone="red">Flagged · 3</Badge>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', maxHeight: isMobile ? 260 : undefined }}>
          {MONITOR_LIST.map((c) => (
            <div
              key={c.id}
              onClick={() => {
                setSelected(c.id);
                setTakenOver(false);
              }}
              style={{
                display: 'flex',
                gap: 11,
                alignItems: 'center',
                padding: '13px 15px',
                cursor: 'pointer',
                borderLeft: `3px solid ${selected === c.id ? 'var(--color-brand-deep)' : 'transparent'}`,
                background: selected === c.id ? '#f0f5f1' : 'transparent',
              }}
            >
              <div style={{ width: 38, height: 38, flexShrink: 0, borderRadius: '50%', background: c.bg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 14 }}>
                {c.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.channel === 'wa' ? 'var(--color-brand-deep)' : 'var(--color-blue)' }} />
                  <span style={{ fontWeight: 600, fontSize: '13.5px', flex: 1 }}>{c.name}</span>
                  <span style={{ fontSize: 11, color: 'var(--color-muted)' }}>{c.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                  <span style={{ fontSize: '12.5px', color: 'var(--color-steel)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}>{c.last}</span>
                  <Badge tone={c.tone === 'hot' ? 'amber' : c.tone === 'flag' ? 'red' : 'neutral'}>{c.badge}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderBottom: '1px solid var(--color-hairline-soft)' }}>
          <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--color-brand-deep)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
            {convo.initials}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 600, fontSize: 15 }}>{convo.name}</span>
              <Badge tone={convo.channel === 'wa' ? 'brand' : 'blue'}>{convo.channel === 'wa' ? 'WhatsApp' : 'Email'}</Badge>
              <Badge tone="amber">Hot — ready to close</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4, fontSize: 12, color: 'var(--color-steel)', fontFamily: 'var(--font-mono)' }}>
              Arrived via: YouTube · Lekki Penthouse Tour
            </div>
          </div>
          {takenOver && <Badge tone="amber">You're handling this now</Badge>}
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ alignSelf: 'center', fontSize: 11, color: 'var(--color-muted)', background: '#ede8dd', padding: '4px 12px', borderRadius: 20 }}>Today · 9:12 AM</div>
          {TRANSCRIPT.map((m, i) =>
            m.from === 'milestone' ? (
              <div key={i} style={{ alignSelf: 'center', display: 'flex', alignItems: 'center', gap: 8, margin: '6px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-brand-deep)', background: 'var(--color-brand-soft)', border: '1px dashed #a9d6bc', padding: '7px 16px', borderRadius: 20 }}>
                {m.text}
              </div>
            ) : (
              <div
                key={i}
                style={{
                  alignSelf: m.from === 'us' ? 'flex-end' : 'flex-start',
                  maxWidth: '68%',
                  background: m.from === 'us' ? '#dcf3e4' : '#fff',
                  border: m.from === 'them' ? '1px solid #ece7db' : 'none',
                  padding: '10px 14px',
                  borderRadius: m.from === 'us' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                  fontSize: 14,
                  lineHeight: 1.45,
                }}
              >
                {m.from === 'us' && (
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--color-brand-deep)', letterSpacing: '0.06em', marginBottom: 4 }}>ALIMI AGENT</div>
                )}
                {m.text}
              </div>
            ),
          )}
        </div>

        <div style={{ background: '#fff', borderTop: '1px solid var(--color-hairline-soft)', padding: '14px 20px' }}>
          {takenOver ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
                placeholder="Type to intervene — your message goes directly to the prospect."
                className="input"
                style={{ flex: 1, borderRadius: 12 }}
              />
              <button onClick={sendMsg} style={{ background: 'var(--color-brand-deep)', color: '#fff', border: 'none', width: 44, height: 44, borderRadius: 999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SendIcon size={20} />
              </button>
              <Button variant="secondary" onClick={() => setTakenOver(false)}>Return to AI</Button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--color-brand-deep)', fontSize: '13.5px', fontWeight: 500 }}>
                <span className="live-dot" /> AI is handling this conversation
              </div>
              <Button variant="dark" icon={<TakeoverIcon size={15} />} onClick={() => setTakenOver(true)}>Take over</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
