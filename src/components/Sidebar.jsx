import React from 'react';
import { sx } from '../lib/sx.js';

export default function Sidebar({ ctx }) {
  return (
    <aside style={sx('width: 248px; flex-shrink: 0; background: #0C1712; color: #C9D2CC; display: flex; flex-direction: column; padding: 20px 14px; position: sticky; top: 0; height: 100vh;')}>
      <div style={sx('display: flex; align-items: center; gap: 10px; padding: 4px 8px 20px;')}>
        <div style={sx('width: 30px; height: 30px; border-radius: 9px; background: #16C47F; display: flex; align-items: center; justify-content: center;')}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" fill="#07130D"></path><path d="M9 9.2l2.2 2.4L15.4 7" stroke="#16C47F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </div>
        <span style={sx("font-family: 'Space Grotesk'; font-weight: 600; color: #F5F2EB; font-size: 18px;")}>Alimi</span>
      </div>

      <button onClick={ctx.goAgents} style={sx('display: block; width: 100%; text-align: left; padding: 8px 10px; margin-bottom: 16px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.07); cursor: pointer;')}>
        <div style={sx("font-size: 10px; text-transform: uppercase; letter-spacing: .12em; color: #6E7C74; margin-bottom: 6px; font-weight: 600;")}>Active agent</div>
        <div style={sx('display: flex; align-items: center; gap: 9px;')}>
          <div style={sx('width: 8px; height: 8px; border-radius: 50%; background: #16C47F; animation: livePulse 2.4s infinite;')}></div>
          <span style={sx('font-size: 14px; color: #F5F2EB; font-weight: 500; flex: 1;')}>Lekki Homes Closer</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5" stroke="#6E7C74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </div>
      </button>

      <nav style={sx('display: flex; flex-direction: column; gap: 3px;')}>
        {ctx.sideNav.map((n) => (
          <button key={n.label} onClick={n.go} style={sx(n.style)}>
            <span style={sx('width: 20px; height: 20px; display: inline-flex;')} dangerouslySetInnerHTML={{ __html: n.icon }}></span>
            <span style={sx('flex: 1; text-align: left;')}>{n.label}</span>
            {n.badge ? <span style={sx(n.badgeStyle)}>{n.badge}</span> : null}
          </button>
        ))}
      </nav>

      <div style={sx('margin-top: auto; display: flex; align-items: center; gap: 10px; padding: 10px 8px; border-top: 1px solid rgba(255,255,255,0.08);')}>
        <div style={sx('width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg,#E07B2E,#C9631C); display: flex; align-items: center; justify-content: center; font-weight: 600; color: #fff; font-size: 14px;')}>T</div>
        <div style={sx('flex: 1; min-width: 0;')}>
          <div style={sx('font-size: 13px; color: #F5F2EB; font-weight: 500;')}>Tunde Bakare</div>
          <div style={sx('font-size: 11px; color: #6E7C74;')}>Lekki Homes · Admin</div>
        </div>
        <button onClick={ctx.goLanding} title="Sign out" style={sx('width: 30px; height: 30px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: transparent; border: none; border-radius: 999px; cursor: pointer;')}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M15 12H4M8 8l-4 4 4 4M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" stroke="#6E7C74" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </button>
      </div>
    </aside>
  );
}
