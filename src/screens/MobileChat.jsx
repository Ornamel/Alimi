import React from 'react';
import { sx } from '../lib/sx.js';
import { IOSDevice } from '../components/IOSDevice.jsx';

export default function MobileChat({ ctx }) {
  return (
    <div className="scr" style={sx('min-height: 100vh; background: radial-gradient(circle at 50% 0%, #1a3527, #0C1712); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; padding: 40px 20px; position: relative;')}>
      <button onClick={ctx.goLanding} style={sx('position: absolute; top: 24px; left: 24px; display: inline-flex; align-items: center; gap: 7px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); color: #F5F2EB; font-size: 13.5px; font-weight: 600; padding: 9px 16px; border-radius: 999px; cursor: pointer;')}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M14 6l-6 6 6 6" stroke="#F5F2EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        Back to Alimi
      </button>
      <div style={sx('text-align: center; color: #9FB0A6; max-width: 460px;')}>
        <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 20px; color: #F5F2EB; margin: 0 0 6px;")}>The prospect's view</h2>
        <p style={sx('margin: 0; font-size: 14px;')}>Chioma taps a WhatsApp link from a YouTube description. Source captured: <span style={sx("font-family: 'Space Mono'; color: #7CE0AC;")}>YouTube · Lekki Tour</span></p>
      </div>
      <IOSDevice width={402} height={874}>
        <div style={sx("height: 100%; display: flex; flex-direction: column; background: #ECE5DD; font-family: 'Instrument Sans', system-ui;")}>
          <div style={sx('background: #0B7A4B; padding: 56px 14px 12px; display: flex; align-items: center; gap: 12px;')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <div style={sx('width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.22); display: flex; align-items: center; justify-content: center;')}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" fill="#fff"></path></svg></div>
            <div style={sx('flex: 1; color: #fff;')}>
              <div style={sx('font-weight: 600; font-size: 16px;')}>Lekki Homes</div>
              <div style={sx('font-size: 12px; opacity: .85;')}>online · typically replies instantly</div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 10.5V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-3.5l6 4v-11l-6 4Z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"></path></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10 22 2 14 2 6a2 2 0 0 1 2-2Z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"></path></svg>
          </div>
          <div style={sx('flex: 1; overflow-y: auto; padding: 14px 12px 8px; display: flex; flex-direction: column; gap: 8px; background-image: radial-gradient(rgba(11,60,40,0.05) 1.2px, transparent 1.2px); background-size: 18px 18px;')}>
            <div style={sx('align-self: center; margin: 4px 0;')}><span style={sx('font-size: 11px; color: #5C6B62; background: #FCF6DE; padding: 4px 12px; border-radius: 8px;')}>🔒 End-to-end encrypted</span></div>
            <div style={sx('align-self: center; margin-bottom: 4px;')}><span style={sx('font-size: 11px; color: #6E7A73; background: rgba(255,255,255,0.7); padding: 3px 10px; border-radius: 8px;')}>via YouTube · Lekki Penthouse Tour</span></div>

            <div style={sx('align-self: flex-end; max-width: 80%; background: #DCF3E4; padding: 8px 11px; border-radius: 12px 3px 12px 12px; font-size: 14px; line-height: 1.45; color: #12211B;')}>Hi 👋 I just watched your Lekki penthouse tour on YouTube. Is the 3-bedroom still available?<div style={sx('text-align:right; font-size:10px; color:#7EA890; margin-top:2px;')}>9:12 AM ✓✓</div></div>

            <div style={sx('align-self: flex-start; max-width: 82%; background: #fff; padding: 8px 11px; border-radius: 3px 12px 12px 12px; font-size: 14px; line-height: 1.45; color: #12211B; box-shadow: 0 1px 1px rgba(0,0,0,0.05);')}>Welcome, and thanks for watching! Yes — the 3-bed penthouse is still available. North-facing with the wraparound terrace. Want me to walk you through pricing?<div style={sx('text-align:right; font-size:10px; color:#9AA39C; margin-top:2px;')}>9:12 AM</div></div>

            <div style={sx('align-self: flex-end; max-width: 80%; background: #DCF3E4; padding: 8px 11px; border-radius: 12px 3px 12px 12px; font-size: 14px; line-height: 1.45; color: #12211B;')}>Yes please. Do you have a payment plan?<div style={sx('text-align:right; font-size:10px; color:#7EA890; margin-top:2px;')}>9:13 AM ✓✓</div></div>

            <div style={sx('align-self: flex-start; max-width: 82%; background: #fff; padding: 8px 11px; border-radius: 3px 12px 12px 12px; font-size: 14px; line-height: 1.45; color: #12211B; box-shadow: 0 1px 1px rgba(0,0,0,0.05);')}>It's ₦185M. We offer a 12-month plan — 40% down, balance spread monthly at 0% interest. Here's the full price sheet:<div style={sx('margin-top:7px; display:flex; align-items:center; gap:8px; background:#F0ECE1; padding:8px 10px; border-radius:8px;')}><span style={sx('font-size:18px;')}>📄</span><div><div style={sx('font-size:12.5px; font-weight:600;')}>Price_Sheet.pdf</div><div style={sx('font-size:10px; color:#9AA39C;')}>2 pages · 340 KB</div></div></div><div style={sx('text-align:right; font-size:10px; color:#9AA39C; margin-top:2px;')}>9:14 AM</div></div>

            <div style={sx('align-self: flex-end; max-width: 80%; background: #DCF3E4; padding: 8px 11px; border-radius: 12px 3px 12px 12px; font-size: 14px; line-height: 1.45; color: #12211B;')}>Perfect. Can I come see it this weekend?<div style={sx('text-align:right; font-size:10px; color:#7EA890; margin-top:2px;')}>9:15 AM ✓✓</div></div>

            <div style={sx('align-self: flex-start; max-width: 82%; background: #fff; padding: 8px 11px; border-radius: 3px 12px 12px 12px; font-size: 14px; line-height: 1.45; color: #12211B; box-shadow: 0 1px 1px rgba(0,0,0,0.05);')}>Absolutely! I have <b>Saturday 10 AM</b> or <b>Sunday 2 PM</b>. Which works?<div style={sx('text-align:right; font-size:10px; color:#9AA39C; margin-top:2px;')}>9:15 AM</div></div>

            <div style={sx('align-self: flex-end; max-width: 80%; background: #DCF3E4; padding: 8px 11px; border-radius: 12px 3px 12px 12px; font-size: 14px; line-height: 1.45; color: #12211B;')}>Saturday 10am 🙌 chioma.o@gmail.com<div style={sx('text-align:right; font-size:10px; color:#7EA890; margin-top:2px;')}>9:16 AM ✓✓</div></div>

            <div style={sx('align-self: flex-start; max-width: 82%; background: #fff; padding: 8px 11px; border-radius: 3px 12px 12px 12px; font-size: 14px; line-height: 1.45; color: #12211B; box-shadow: 0 1px 1px rgba(0,0,0,0.05);')}>Booked ✅ Saturday 10 AM, 14 Admiralty Way, Lekki Phase 1. Calendar invite sent — see you then!<div style={sx('text-align:right; font-size:10px; color:#9AA39C; margin-top:2px;')}>9:16 AM</div></div>
          </div>
          <div style={sx('padding: 8px 12px 30px; display: flex; align-items: center; gap: 8px; background: #ECE5DD;')}>
            <div style={sx('flex: 1; background: #fff; border-radius: 22px; padding: 10px 16px; font-size: 14px; color: #9AA39C;')}>Message</div>
            <div style={sx('width: 42px; height: 42px; border-radius: 50%; background: #0B7A4B; display: flex; align-items: center; justify-content: center;')}><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 12l16-8-6 8 6 8-16-8Z" fill="#fff"></path></svg></div>
          </div>
        </div>
      </IOSDevice>
    </div>
  );
}
