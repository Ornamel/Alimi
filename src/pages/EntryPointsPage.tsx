import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Field';
import { WhatsAppIcon, EntryIcon } from '../components/icons';

export function EntryPointsPage() {
  const isMobile = useIsMobile();
  const { flash } = useToast();
  const [label, setLabel] = useState('YouTube — Lekki Penthouse Tour');

  return (
    <div className="scr" style={{ maxWidth: 1080, margin: '0 auto' }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 28 }}>Share your agent</h1>
        <p style={{ margin: '8px 0 0', color: 'var(--color-steel)', fontSize: 15 }}>
          Every entry point carries a source label — your agent knows exactly where each lead came from.
        </p>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '18px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label className="field">Label this entry point</label>
          <Input value={label} onChange={(e) => setLabel(e.target.value)} className="input--mono" />
        </div>
        <Button variant="primary" onClick={() => flash('Label saved.')}>Save label</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.35fr 1fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 6 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--color-brand-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <WhatsAppIcon size={19} />
              </div>
              <h2 style={{ fontSize: 16 }}>WhatsApp deep-link</h2>
            </div>
            <p style={{ margin: '0 0 14px', fontSize: '13.5px', color: 'var(--color-steel)' }}>Anyone who taps this goes straight into a conversation with your agent.</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 200, background: '#fff', border: '1px solid #ece7db', borderRadius: 10, padding: '11px 14px', fontFamily: 'var(--font-mono)', fontSize: '12.5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                wa.me/2348035550100?src=yt_lekki_tour
              </div>
              <Button variant="dark" size="sm" onClick={() => flash('Link copied to clipboard.')}>Copy link</Button>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 6 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--color-blue-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <EntryIcon size={18} color="var(--color-blue)" />
              </div>
              <h2 style={{ fontSize: 16 }}>Website embed widget</h2>
            </div>
            <p style={{ margin: '0 0 14px', fontSize: '13.5px', color: 'var(--color-steel)' }}>Paste one line of code. Your agent appears as a chat bubble on your site.</p>
            <div style={{ background: 'var(--color-night)', borderRadius: 10, padding: '14px 16px', fontFamily: 'var(--font-mono)', fontSize: '12.5px', color: '#9fe3be', lineHeight: 1.6, overflowX: 'auto' }}>
              &lt;script src="https://cdn.alimi.ai/w.js"
              <br />
              &nbsp;&nbsp;data-agent="lekki-homes"
              <br />
              &nbsp;&nbsp;data-src="yt_lekki_tour"&gt;&lt;/script&gt;
            </div>
            <Button variant="secondary" style={{ marginTop: 12 }} onClick={() => flash('Snippet copied to clipboard.')}>Copy snippet</Button>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 6 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--color-amber-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <EntryIcon size={18} color="#c9631c" />
              </div>
              <h2 style={{ fontSize: 16 }}>Custom tracked URL</h2>
            </div>
            <p style={{ margin: '0 0 14px', fontSize: '13.5px', color: 'var(--color-steel)' }}>Source IDs survive link shorteners and redirects — attribution is never lost.</p>
            <div style={{ background: '#fff', border: '1px solid #ece7db', borderRadius: 10, padding: '11px 14px', fontFamily: 'var(--font-mono)', fontSize: '12.5px' }}>
              alimi.ai/c/lekki-homes?src=yt_lekki_tour
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--color-night)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#c9d2cc' }}>
          <h2 style={{ fontSize: 16, marginBottom: 6, color: 'var(--color-on-dark)' }}>QR code</h2>
          <p style={{ margin: '0 0 20px', fontSize: 13, color: 'var(--color-on-dark-muted)' }}>Print it, post it, project it — works anywhere.</p>
          <div style={{ background: '#fff', borderRadius: 16, padding: 18 }}>
            <svg width="176" height="176" viewBox="0 0 210 210" shapeRendering="crispEdges">
              <rect width="210" height="210" fill="#fff" />
              <g fill="#0c1712">
                <rect x="10" y="10" width="50" height="50" />
                <rect x="150" y="10" width="50" height="50" />
                <rect x="10" y="150" width="50" height="50" />
                <rect x="25" y="25" width="20" height="20" fill="#fff" />
                <rect x="165" y="25" width="20" height="20" fill="#fff" />
                <rect x="25" y="165" width="20" height="20" fill="#fff" />
                <rect x="70" y="70" width="70" height="70" />
              </g>
            </svg>
          </div>
          <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-on-dark-faint)' }}>src=yt_lekki_tour</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 18, width: '100%' }}>
            <Button variant="accent" style={{ flex: 1 }} onClick={() => flash('Downloading PNG…')}>PNG</Button>
            <Button
              variant="ghost"
              style={{ flex: 1, background: 'rgba(255,255,255,0.08)', color: 'var(--color-on-dark)', border: '1px solid rgba(255,255,255,0.15)' }}
              onClick={() => flash('Downloading SVG…')}
            >
              SVG
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
