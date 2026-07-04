import React, { Fragment } from 'react';
import { sx } from '../lib/sx.js';

export default function Analytics({ ctx }) {
  return (
    <div className="scr" style={sx('max-width: 1180px; margin: 0 auto;')}>
      <div style={sx('display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; margin-bottom: 24px;')}>
        <div>
          <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px; margin: 0; letter-spacing: -0.01em;")}>Analytics</h1>
          <p style={sx('margin: 8px 0 0; color: #6E7A73; font-size: 15px;')}>Lekki Homes Closer · last 14 days</p>
        </div>
        <div style={sx('display: flex; gap: 10px;')}>
          <div style={sx('display: flex; background: #fff; border: 1px solid #E4DFD3; border-radius: 10px; overflow: hidden;')}>
            <span style={sx('padding: 9px 14px; font-size: 13px; color: #6E7A73; font-weight: 600;')}>7d</span>
            <span style={sx('padding: 9px 14px; font-size: 13px; color: #07130D; background: #16C47F; font-weight: 600;')}>14d</span>
            <span style={sx('padding: 9px 14px; font-size: 13px; color: #6E7A73; font-weight: 600;')}>30d</span>
          </div>
          <button onClick={ctx.exportCsv} style={sx('display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #12211B; border: 1px solid #E4DFD3; padding: 9px 16px; border-radius: 999px; font-size: 13.5px; font-weight: 600; cursor: pointer;')}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" stroke="#12211B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Export CSV
          </button>
        </div>
      </div>

      {/* stat strip */}
      <div style={sx(ctx.gridAnalyticsStat)}>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 17px 18px;')}>
          <div style={sx('font-size: 13px; color: #6E7A73; font-weight: 500; margin-bottom: 9px;')}>Total conversations</div>
          <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px;")}>486</div>
          <div style={sx('margin-top:6px; font-size:12px; color:#0B7A4B; font-weight:600;')}>↑ 22% vs. prev</div>
        </div>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 17px 18px;')}>
          <div style={sx('font-size: 13px; color: #6E7A73; font-weight: 500; margin-bottom: 9px;')}>Qualification rate</div>
          <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px;")}>24%</div>
          <div style={sx('margin-top:6px; font-size:12px; color:#0B7A4B; font-weight:600;')}>above 20% target</div>
        </div>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 17px 18px;')}>
          <div style={sx('font-size: 13px; color: #6E7A73; font-weight: 500; margin-bottom: 9px;')}>Avg. conversation</div>
          <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px;")}>8<span style={sx('font-size:16px; color:#6E7A73; font-weight:500;')}> msgs</span></div>
          <div style={sx('margin-top:6px; font-size:12px; color:#9AA39C;')}>to qualification</div>
        </div>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 17px 18px;')}>
          <div style={sx('font-size: 13px; color: #6E7A73; font-weight: 500; margin-bottom: 9px;')}>Avg. response time</div>
          <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px;")}>51<span style={sx('font-size:16px; color:#6E7A73; font-weight:500;')}>s</span></div>
          <div style={sx('margin-top:6px; font-size:12px; color:#9AA39C;')}>P95 · 2.4s median</div>
        </div>
      </div>

      {/* volume + funnel */}
      <div style={sx(ctx.gridAnalyticsVolFunnel)}>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 20px;')}>
          <div style={sx('display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0;")}>Conversation volume</h2>
            <div style={sx('display:flex; gap:14px; font-size:12px; color:#6E7A73;')}>
              <span style={sx('display:flex; align-items:center; gap:5px;')}><span style={sx('width:9px; height:9px; border-radius:2px; background:#0B7A4B;')}></span>WhatsApp</span>
              <span style={sx('display:flex; align-items:center; gap:5px;')}><span style={sx('width:9px; height:9px; border-radius:2px; background:#9DC9B4;')}></span>Email</span>
            </div>
          </div>
          <div style={sx('display: flex; align-items: flex-end; gap: 8px; height: 180px;')}>
            {ctx.volume.map((v, i) => (
              <Fragment key={i}>
                <div style={sx('flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; height: 100%; justify-content: flex-end;')}>
                  <div style={sx(v.outer)}>
                    <div style={sx(v.emailBar)}></div>
                    <div style={sx(v.waBar)}></div>
                  </div>
                  <span style={sx('font-size: 10px; color: #9AA39C;')}>{v.day}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 20px;')}>
          <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 18px;")}>Full funnel</h2>
          {ctx.bigFunnel.map((f, i) => (
            <Fragment key={i}>
              <div style={sx('margin-bottom: 15px;')}>
                <div style={sx('display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;')}>
                  <span style={sx('font-size: 13px; color: #3D4B44; font-weight: 500;')}>{f.label}</span>
                  <span style={sx('font-size: 12px; color: #9AA39C;')}>{f.pct}</span>
                </div>
                <div style={sx('height: 22px; border-radius: 6px; background: #F0ECE1; overflow: hidden;')}><div style={sx(f.barStyle)}></div></div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* agent perf + source */}
      <div style={sx(ctx.gridAnalyticsPerfSource)}>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 20px;')}>
          <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 16px;")}>Agent performance</h2>
          {ctx.agents.map((a, i) => (
            <Fragment key={i}>
              <div style={sx('display: flex; align-items: center; gap: 12px; margin-bottom: 14px;')}>
                <div style={sx(`width: 30px; height: 30px; border-radius: 8px; background: ${a.bg}; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 12px;`)}>{a.ini}</div>
                <div style={sx('flex: 1;')}>
                  <div style={sx('display: flex; justify-content: space-between; margin-bottom: 5px;')}>
                    <span style={sx('font-size: 13.5px; font-weight: 500;')}>{a.name}</span>
                    <span style={sx('font-size: 13px; color: #0B7A4B; font-weight: 600;')}>{a.rate}</span>
                  </div>
                  <div style={sx('height: 6px; border-radius: 4px; background: #F0ECE1; overflow: hidden;')}><div style={sx(a.barStyle)}></div></div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>

        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 20px;')}>
          <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 4px;")}>Best-converting sources</h2>
          <p style={sx('margin: 0 0 16px; font-size: 12px; color: #9AA39C;')}>Conversation → goal hit</p>
          {ctx.convSources.map((s, i) => (
            <Fragment key={i}>
              <div style={sx('display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #F4F0E6;')}>
                <div style={sx('display: flex; align-items: center; gap: 10px;')}>
                  <span style={sx(`width: 9px; height: 9px; border-radius: 3px; background: ${s.col};`)}></span>
                  <span style={sx('font-size: 13.5px; color: #3D4B44;')}>{s.label}</span>
                </div>
                <div style={sx('display: flex; align-items: center; gap: 14px;')}>
                  <span style={sx('font-size: 12.5px; color: #9AA39C;')}>{s.vol} convos</span>
                  <span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; color: #12211B;")}>{s.conv}</span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
