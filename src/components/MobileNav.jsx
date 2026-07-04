import React from 'react';
import { sx } from '../lib/sx.js';

export default function MobileNav({ ctx }) {
  return (
    <nav style={sx('position: fixed; bottom: 0; left: 0; right: 0; z-index: 100; background: #0C1712; display: flex; align-items: stretch; padding: 6px 4px calc(6px + env(safe-area-inset-bottom, 0px)); border-top: 1px solid rgba(255,255,255,0.08);')}>
      {ctx.sideNav.map((n) => (
        <button key={n.label} onClick={n.go} style={sx(n.mobileStyle)}>
          <span style={sx('width: 20px; height: 20px; display: inline-flex; position: relative;')} dangerouslySetInnerHTML={{ __html: n.icon }}></span>
          <span style={sx('font-size: 10px; font-weight: 600;')}>{n.label}</span>
          {n.badge ? (
            <span style={sx('position: absolute; top: 2px; right: 18%; background: #16C47F; color: #07130D; font-size: 9px; font-weight: 700; padding: 1px 4px; border-radius: 20px;')}>{n.badge}</span>
          ) : null}
        </button>
      ))}
    </nav>
  );
}
