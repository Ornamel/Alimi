import React from 'react';
import { sx } from '../lib/sx.js';

export default function Toast({ ctx }) {
  if (!ctx.flashMsg) return null;
  return (
    <div style={sx('position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%); z-index: 400; display: flex; align-items: center; gap: 11px; background: #0C1712; color: #F5F2EB; padding: 13px 20px; border-radius: 13px; box-shadow: 0 12px 40px rgba(0,0,0,0.3); animation: scrIn .24s ease both;')}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#16C47F"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#07130D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      <span style={sx('font-size: 14px; font-weight: 500;')}>{ctx.flashMsg}</span>
    </div>
  );
}
