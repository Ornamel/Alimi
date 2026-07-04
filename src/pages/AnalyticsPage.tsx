import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/ui/Button';
import { ExportIcon } from '../components/icons';
import { ANALYTICS_VOLUME, BIG_FUNNEL, AGENT_PERFORMANCE, CONVERTING_SOURCES } from '../lib/mockData';

const STATS = [
  { label: 'Total conversations', value: '486', delta: '↑ 22% vs. prev', deltaColor: 'var(--color-brand-deep)' },
  { label: 'Qualification rate', value: '24%', delta: 'above 20% target', deltaColor: 'var(--color-brand-deep)' },
  { label: 'Avg. conversation', value: '8', suffix: ' msgs', delta: 'to qualification', deltaColor: 'var(--color-muted)' },
  { label: 'Avg. response time', value: '51', suffix: 's', delta: 'P95 · 2.4s median', deltaColor: 'var(--color-muted)' },
];

const RANGES = ['7d', '14d', '30d'];

export function AnalyticsPage() {
  const isMobile = useIsMobile();
  const { flash } = useToast();
  const [range, setRange] = useState('14d');

  return (
    <div className="scr" style={{ maxWidth: 1180, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20, marginBottom: 24, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: 28 }}>Analytics</h1>
          <p style={{ margin: '8px 0 0', color: 'var(--color-steel)', fontSize: 15 }}>Lekki Homes Closer · last {range}</p>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', background: '#fff', border: '1px solid #e4dfd3', borderRadius: 10, overflow: 'hidden' }}>
            {RANGES.map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                style={{ padding: '9px 14px', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: range === r ? '#07130d' : 'var(--color-steel)', background: range === r ? 'var(--color-brand)' : 'transparent' }}
              >
                {r}
              </button>
            ))}
          </div>
          <Button variant="secondary" icon={<ExportIcon size={15} />} onClick={() => flash('Exporting CSV…')}>Export CSV</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, 1fr)`, gap: 16, marginBottom: 20 }}>
        {STATS.map((s) => (
          <div key={s.label} style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '17px 18px' }}>
            <div style={{ fontSize: 13, color: 'var(--color-steel)', fontWeight: 500, marginBottom: 9 }}>{s.label}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28 }}>
              {s.value}
              {s.suffix && <span style={{ fontSize: 16, color: 'var(--color-steel)', fontWeight: 500 }}>{s.suffix}</span>}
            </div>
            <div style={{ marginTop: 6, fontSize: 12, color: s.deltaColor, fontWeight: 600 }}>{s.delta}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr', gap: 20, marginBottom: 20 }}>
        <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
            <h2 style={{ fontSize: 15 }}>Conversation volume</h2>
            <div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--color-steel)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 9, height: 9, borderRadius: 2, background: '#0b7a4b' }} /> WhatsApp
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 9, height: 9, borderRadius: 2, background: '#9dc9b4' }} /> Email
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 180 }}>
            {ANALYTICS_VOLUME.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: '5px 5px 0 0', overflow: 'hidden', height: `${v.heightPercent}%` }}>
                  <div style={{ background: '#9dc9b4', height: `${v.emailShare}%` }} />
                  <div style={{ background: '#0b7a4b', height: `${v.waShare}%` }} />
                </div>
                <span style={{ fontSize: 10, color: 'var(--color-muted)' }}>{v.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 20 }}>
          <h2 style={{ fontSize: 15, marginBottom: 18 }}>Full funnel</h2>
          {BIG_FUNNEL.map((f) => (
            <div key={f.label} style={{ marginBottom: 15 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: 'var(--color-slate)', fontWeight: 500 }}>{f.label}</span>
                <span style={{ fontSize: 12, color: 'var(--color-muted)' }}>{f.pct}</span>
              </div>
              <div style={{ height: 22, borderRadius: 6, background: 'var(--color-hairline-soft)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${f.percent}%`, background: f.color, borderRadius: 6 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>
        <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 20 }}>
          <h2 style={{ fontSize: 15, marginBottom: 16 }}>Agent performance</h2>
          {AGENT_PERFORMANCE.map((a) => (
            <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: a.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 12 }}>{a.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: '13.5px', fontWeight: 500 }}>{a.name}</span>
                  <span style={{ fontSize: 13, color: 'var(--color-brand-deep)', fontWeight: 600 }}>{a.rate}</span>
                </div>
                <div style={{ height: 6, borderRadius: 4, background: 'var(--color-hairline-soft)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${a.percent}%`, background: a.color, borderRadius: 4 }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 20 }}>
          <h2 style={{ fontSize: 15, marginBottom: 4 }}>Best-converting sources</h2>
          <p style={{ margin: '0 0 16px', fontSize: 12, color: 'var(--color-muted)' }}>Conversation → goal hit</p>
          {CONVERTING_SOURCES.map((s) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f4f0e6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 9, height: 9, borderRadius: 3, background: s.color }} />
                <span style={{ fontSize: '13.5px', color: 'var(--color-slate)' }}>{s.label}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: '12.5px', color: 'var(--color-muted)' }}>{s.vol} convos</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15 }}>{s.conv}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
