import React, { Fragment } from 'react';
import { sx } from '../lib/sx.js';

export default function Dashboard({ ctx }) {
  return (
    <div className="scr" style={sx('max-width: 1180px; margin: 0 auto;')}>
      <div style={sx('display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; margin-bottom: 26px;')}>
        <div>
          <div style={sx("font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: #0B7A4B; margin-bottom: 8px;")}>Friday · 3 July</div>
          <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 30px; line-height: 1.1; margin: 0; color: #12211B; letter-spacing: -0.01em;")}>Good morning, Tunde — <span style={sx('color: #0B7A4B;')}>7 new leads</span> overnight.</h1>
          <p style={sx('margin: 8px 0 0; color: #6E7A73; font-size: 15px;')}>Your agents held 41 conversations while you slept. 3 are ready for you now.</p>
        </div>
      </div>

      {/* STAT ROW */}
      <div style={sx(ctx.gridStatRow)}>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 18px 18px 16px;')}>
          <div style={sx('display:flex; align-items:center; gap:7px; color: #6E7A73; font-size: 13px; font-weight: 500; margin-bottom: 12px;')}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="#0B7A4B" strokeWidth="1.8"></circle><path d="M12 8v4l2.5 2" stroke="#0B7A4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Avg. response time
          </div>
          <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 32px; color: #12211B; line-height: 1;")}>48<span style={sx('font-size: 18px; color: #6E7A73; font-weight: 500;')}>s</span></div>
          <div style={sx('margin-top: 10px; font-size: 12px; color: #9AA39C;')}>Industry average: <span style={sx('text-decoration: line-through;')}>14 minutes</span></div>
        </div>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 18px 18px 16px;')}>
          <div style={sx('display:flex; align-items:center; gap:7px; color: #6E7A73; font-size: 13px; font-weight: 500; margin-bottom: 12px;')}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Qualified leads
          </div>
          <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 32px; color: #12211B; line-height: 1;")}>23</div>
          <div style={sx('margin-top: 10px; font-size: 12px; color: #0B7A4B; font-weight: 600;')}>↑ 8 vs. yesterday</div>
        </div>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 18px 18px 16px;')}>
          <div style={sx('display:flex; align-items:center; gap:7px; color: #6E7A73; font-size: 13px; font-weight: 500; margin-bottom: 12px;')}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" stroke="#0B7A4B" strokeWidth="1.8"></path><path d="M12 12l3-3" stroke="#0B7A4B" strokeWidth="1.8" strokeLinecap="round"></path></svg>
            Goal completion rate
          </div>
          <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 32px; color: #12211B; line-height: 1;")}>31<span style={sx('font-size: 18px; color: #6E7A73; font-weight: 500;')}>%</span></div>
          <div style={sx('margin-top: 8px; height: 5px; border-radius: 4px; background: #EEE9DD; overflow: hidden;')}><div style={sx('width: 31%; height: 100%; background: #0B7A4B; border-radius: 4px;')}></div></div>
        </div>
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 18px 18px 16px;')}>
          <div style={sx('display:flex; align-items:center; gap:7px; color: #6E7A73; font-size: 13px; font-weight: 500; margin-bottom: 12px;')}>
            <span style={sx('width: 8px; height: 8px; border-radius: 50%; background: #16C47F; animation: livePulse 2.4s infinite;')}></span>
            Active right now
          </div>
          <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 32px; color: #12211B; line-height: 1;")}>12</div>
          <div style={sx('margin-top: 10px; font-size: 12px; color: #9AA39C;')}>across 2 channels</div>
        </div>
      </div>

      {/* TWO COLUMN */}
      <div style={sx(ctx.gridDashTwoCol)}>

        {/* LIVE FEED */}
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; overflow: hidden;')}>
          <div style={sx('display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid #F0ECE1;')}>
            <div style={sx('display: flex; align-items: center; gap: 10px;')}>
              <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0;")}>Live conversations</h2>
              <span style={sx('font-size: 12px; color: #C9631C; background: #FBEAD8; padding: 3px 9px; border-radius: 20px; font-weight: 600;')}>3 need your attention</span>
            </div>
            <button onClick={ctx.goMonitor} style={sx('background: none; border: none; color: #0B7A4B; font-size: 13px; font-weight: 600; cursor: pointer;')}>View all →</button>
          </div>
          {ctx.convos.map((c, i) => (
            <Fragment key={c.id || i}>
              <div style={sx(c.rowStyle)}>
                <div style={sx(c.avatarStyle)}>{c.initials}</div>
                <div style={sx('flex: 1; min-width: 0;')}>
                  <div style={sx('display: flex; align-items: center; gap: 8px; margin-bottom: 3px;')}>
                    <span style={sx('font-weight: 600; font-size: 14px; color: #12211B;')}>{c.name}</span>
                    <span style={sx(c.chanStyle)}>{c.channel}</span>
                    <span style={sx(c.badgeStyle)}>{c.badge}</span>
                  </div>
                  <div style={sx('font-size: 13px; color: #6E7A73; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 340px;')}>{c.last}</div>
                  <div style={sx('display: flex; align-items: center; gap: 5px; margin-top: 5px; font-size: 11px; color: #9AA39C;')}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1L7 22l4.2-2.2c.3 0 .5.1.8.1 5 0 9-3.8 9-8.5S17 2 12 2Z" stroke="#B7C0B9" strokeWidth="1.6"></path></svg>
                    Arrived via {c.source} · {c.time}
                  </div>
                </div>
                <div style={sx('display: flex; flex-direction: column; gap: 6px; align-items: flex-end;')}>
                  <button onClick={c.action} style={sx(c.actionStyle)}>{c.actionLabel}</button>
                </div>
              </div>
            </Fragment>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div style={sx('display: flex; flex-direction: column; gap: 20px;')}>
          {/* SOURCES */}
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 18px 20px;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 4px;")}>Where your leads come from</h2>
            <p style={sx('margin: 0 0 16px; font-size: 12px; color: #9AA39C;')}>Today · 41 conversations</p>
            {ctx.sources.map((s, i) => (
              <Fragment key={s.id || i}>
                <div style={sx('margin-bottom: 14px;')}>
                  <div style={sx('display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 5px;')}>
                    <span style={sx('color: #12211B; font-weight: 500;')}>{s.label}</span>
                    <span style={sx('color: #6E7A73;')}>{s.count}</span>
                  </div>
                  <div style={sx('height: 7px; border-radius: 5px; background: #F0ECE1; overflow: hidden;')}><div style={sx(s.barStyle)}></div></div>
                </div>
              </Fragment>
            ))}
          </div>
          {/* FUNNEL */}
          <div style={sx('background: #0C1712; border-radius: 18px; padding: 20px; color: #C9D2CC;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 16px; color: #F5F2EB;")}>Today's funnel</h2>
            {ctx.funnel.map((f, i) => (
              <Fragment key={f.id || i}>
                <div style={sx('display: flex; align-items: center; gap: 12px; margin-bottom: 13px;')}>
                  <div style={sx(f.barStyle)}></div>
                  <div style={sx('flex: 1; display: flex; justify-content: space-between; align-items: baseline;')}>
                    <span style={sx('font-size: 13px; color: #A9B4AC;')}>{f.label}</span>
                    <span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; color: #F5F2EB;")}>{f.value}</span>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
