import React from 'react';
import { sx } from '../lib/sx.js';

export default function Briefing({ ctx }) {
  return (
    <div className="scr" style={sx('max-width: 1000px; margin: 0 auto;')}>
      <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;')}>
        <button onClick={ctx.goDashboard} style={sx('display: inline-flex; align-items: center; gap: 7px; background: none; border: none; color: #6E7A73; font-size: 13.5px; font-weight: 600; cursor: pointer;')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 6l-6 6 6 6" stroke="#6E7A73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          All briefings
        </button>
        <div style={sx("display: flex; align-items: center; gap: 7px; font-size: 12px; color: #9AA39C; font-family: 'Space Mono';")}>Generated in 6.2s · from success event</div>
      </div>

      <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 20px; overflow: hidden; box-shadow: 0 12px 40px rgba(18,33,27,0.06);')}>
        {/* header band */}
        <div style={sx('background: #0C1712; padding: 24px 28px; color: #E7EDE9;')}>
          <div style={sx('display: flex; align-items: center; gap: 16px;')}>
            <div style={sx("width: 56px; height: 56px; border-radius: 16px; background: #0B7A4B; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 22px; font-family: 'Space Grotesk';")}>CO</div>
            <div style={sx('flex: 1;')}>
              <div style={sx('display: flex; align-items: center; gap: 10px;')}>
                <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 24px; margin: 0; color: #F5F2EB;")}>Chioma Okafor</h1>
                <span style={sx('font-size: 11px; font-weight: 700; color: #07130D; background: #F5A24B; padding: 3px 10px; border-radius: 20px; letter-spacing: .03em;')}>🔥 HOT LEAD</span>
              </div>
              <div style={sx('margin-top: 5px; font-size: 13.5px; color: #9FB0A6;')}>Qualified lead · Ready for you · <span style={sx('color:#16C47F; font-weight:600;')}>2 minutes ago</span></div>
            </div>
            <div style={sx('text-align: right; font-size: 12.5px; color: #9FB0A6; line-height: 1.7;')}>
              <div style={sx('display:flex; align-items:center; gap:7px; justify-content:flex-end;')}><span style={sx("font-family:'Space Mono';")}>+234 803 555 0142</span><span style={sx('font-size:10px; font-weight:600; color:#0B7A4B; background:#DCF3E4; padding:1px 7px; border-radius:20px;')}>WhatsApp</span></div>
              <div style={sx("font-family:'Space Mono';")}>chioma.o@gmail.com</div>
              <div style={sx('display:flex; align-items:center; gap:5px; justify-content:flex-end; margin-top:3px; color:#7C8B83;')}>↳ via YouTube · Lekki Penthouse Tour</div>
            </div>
          </div>
        </div>

        {/* body */}
        <div style={sx(ctx.gridBriefBody)}>
          {/* left */}
          <div style={sx('padding: 26px 28px; border-right: 1px solid #F0ECE1;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 10px; color: #12211B;")}>What you need to know</h2>
            <p style={sx('margin: 0 0 22px; font-size: 14.5px; line-height: 1.6; color: #3D4B44;')}>Chioma came in from the Lekki penthouse tour and asked about the 3-bedroom north-facing unit. She's confirmed budget fit at ₦185M, accepted the 12-month payment plan, and <b style={sx('color:#12211B;')}>booked a Saturday 10 AM viewing</b>. She gave her email for the calendar invite — a strong signal she's ready to move.</p>

            <div style={sx('font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .1em; color: #9AA39C; margin-bottom: 9px;')}>Key interests</div>
            <div style={sx('display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 20px;')}>
              <span style={sx('font-size: 12.5px; font-weight: 500; color: #0B7A4B; background: #E7F3EC; padding: 5px 11px; border-radius: 8px;')}>3-bed penthouse</span>
              <span style={sx('font-size: 12.5px; font-weight: 500; color: #0B7A4B; background: #E7F3EC; padding: 5px 11px; border-radius: 8px;')}>Wraparound terrace</span>
              <span style={sx('font-size: 12.5px; font-weight: 500; color: #0B7A4B; background: #E7F3EC; padding: 5px 11px; border-radius: 8px;')}>12-month payment plan</span>
              <span style={sx('font-size: 12.5px; font-weight: 500; color: #0B7A4B; background: #E7F3EC; padding: 5px 11px; border-radius: 8px;')}>Weekend viewing</span>
            </div>

            <div style={sx('font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .1em; color: #9AA39C; margin-bottom: 9px;')}>Objections raised</div>
            <div style={sx('display: flex; align-items: flex-start; gap: 9px; padding: 11px 13px; background: #FBF6EE; border: 1px solid #F0E6D5; border-radius: 11px;')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={sx('flex-shrink:0; margin-top:1px;')}><path d="M12 8v5M12 16.5v.01M10.3 3.9L2.7 17.2A2 2 0 0 0 4.4 20h15.2a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="#C9631C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <span style={sx('font-size: 13.5px; color: #6B5A42; line-height: 1.5;')}>Asked whether the terrace furniture is included — <b style={sx('color: #4A3D2A;')}>not yet answered.</b> Confirm before the viewing.</span>
            </div>
          </div>

          {/* right: intent signals */}
          <div style={sx('padding: 26px 28px; background: #FBFAF6;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 18px; color: #12211B;")}>Intent signals</h2>

            <div style={sx('margin-bottom: 20px;')}>
              <div style={sx('display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 7px;')}><span style={sx('font-size: 13.5px; font-weight: 500; color: #3D4B44;')}>Purchase intent</span><span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 17px; color: #0B7A4B;")}>92%</span></div>
              <div style={sx('height: 9px; border-radius: 6px; background: #EEE9DD; overflow: hidden;')}><div style={sx('width: 92%; height: 100%; background: linear-gradient(90deg,#16C47F,#0B7A4B); border-radius: 6px;')}></div></div>
            </div>
            <div style={sx('margin-bottom: 20px;')}>
              <div style={sx('display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 7px;')}><span style={sx('font-size: 13.5px; font-weight: 500; color: #3D4B44;')}>Budget alignment</span><span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 17px; color: #2F6BEC;")}>78%</span></div>
              <div style={sx('height: 9px; border-radius: 6px; background: #EEE9DD; overflow: hidden;')}><div style={sx('width: 78%; height: 100%; background: linear-gradient(90deg,#5B90F5,#2F6BEC); border-radius: 6px;')}></div></div>
            </div>
            <div style={sx('margin-bottom: 24px;')}>
              <div style={sx('display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 7px;')}><span style={sx('font-size: 13.5px; font-weight: 500; color: #3D4B44;')}>Decision urgency</span><span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 17px; color: #E07B2E;")}>85%</span></div>
              <div style={sx('height: 9px; border-radius: 6px; background: #EEE9DD; overflow: hidden;')}><div style={sx('width: 85%; height: 100%; background: linear-gradient(90deg,#F5A24B,#E07B2E); border-radius: 6px;')}></div></div>
            </div>

            <div style={sx('padding: 14px 16px; background: #0C1712; border-radius: 13px; color: #C9D2CC;')}>
              <div style={sx('display:flex; align-items:center; gap:8px; font-size: 12px; font-weight: 600; color: #16C47F; margin-bottom: 6px;')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M13 3l-1.5 8H17l-6 10 1.5-8H6l7-10Z" fill="#16C47F"></path></svg>
                Alimi read
              </div>
              <p style={sx('margin: 0; font-size: 13px; line-height: 1.55; color: #B7C0B9;')}>Fastest-moving lead this week. Terrace furniture is the only open question — resolve it and she'll likely close on the spot.</p>
            </div>
          </div>
        </div>

        {/* next moves */}
        <div style={sx('padding: 24px 28px; border-top: 1px solid #F0ECE1;')}>
          <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 14px; color: #12211B;")}>Your next three moves</h2>
          <div style={sx(ctx.gridBriefMoves)}>
            <div style={sx('border: 1px solid #EAE5D9; border-radius: 13px; padding: 15px;')}>
              <div style={sx("width: 26px; height: 26px; border-radius: 8px; background: #E7F3EC; color: #0B7A4B; display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk'; font-weight: 700; font-size: 14px; margin-bottom: 10px;")}>1</div>
              <p style={sx('margin: 0; font-size: 13.5px; line-height: 1.5; color: #3D4B44;')}>Confirm terrace furniture is included, then reconfirm Saturday 10 AM.</p>
            </div>
            <div style={sx('border: 1px solid #EAE5D9; border-radius: 13px; padding: 15px;')}>
              <div style={sx("width: 26px; height: 26px; border-radius: 8px; background: #E9EFFC; color: #2F6BEC; display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk'; font-weight: 700; font-size: 14px; margin-bottom: 10px;")}>2</div>
              <p style={sx('margin: 0; font-size: 13.5px; line-height: 1.5; color: #3D4B44;')}>Bring the printed price sheet — she's already reviewing the 12-month plan.</p>
            </div>
            <div style={sx('border: 1px solid #EAE5D9; border-radius: 13px; padding: 15px;')}>
              <div style={sx("width: 26px; height: 26px; border-radius: 8px; background: #FBEAD8; color: #C9631C; display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk'; font-weight: 700; font-size: 14px; margin-bottom: 10px;")}>3</div>
              <p style={sx('margin: 0; font-size: 13.5px; line-height: 1.5; color: #3D4B44;')}>Have the deposit link ready — urgency is high, don't let it cool.</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div style={sx('display: flex; align-items: center; gap: 12px; padding: 20px 28px; background: #FBFAF6; border-top: 1px solid #F0ECE1;')}>
          <button onClick={ctx.goMonitor} style={sx('display: inline-flex; align-items: center; gap: 9px; background: #0B7A4B; color: #fff; border: none; padding: 13px 22px; border-radius: 999px; font-size: 15px; font-weight: 600; cursor: pointer; box-shadow: 0 3px 10px rgba(11,122,75,0.28);')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1L7 22l4.2-2.2c.3 0 .5.1.8.1 5 0 9-3.8 9-8.5S17 2 12 2Z" fill="#fff"></path></svg>
            Message Chioma now
          </button>
          <button onClick={ctx.addCal} style={sx('display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #12211B; border: 1px solid #E4DFD3; padding: 13px 20px; border-radius: 999px; font-size: 14.5px; font-weight: 600; cursor: pointer;')}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="16" rx="3" stroke="#12211B" strokeWidth="1.7"></rect><path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="#12211B" strokeWidth="1.7" strokeLinecap="round"></path></svg>
            Add to calendar
          </button>
          <button onClick={ctx.goMonitor} style={sx('margin-left: auto; background: none; border: none; color: #6E7A73; font-size: 14px; font-weight: 600; cursor: pointer; text-decoration: underline; text-underline-offset: 3px;')}>View full conversation</button>
        </div>
      </div>
    </div>
  );
}
