import React, { Fragment } from 'react';
import { sx } from '../lib/sx.js';

export default function Monitor({ ctx }) {
  return (
    <div className="scr" style={sx('height: calc(100vh - 122px); display: flex; gap: 0; background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; overflow: hidden;')}>

      {/* convo list */}
      <div style={sx('width: 306px; flex-shrink: 0; border-right: 1px solid #F0ECE1; display: flex; flex-direction: column;')}>
        <div style={sx('padding: 18px 18px 12px;')}>
          <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 20px; margin: 0 0 12px;")}>Conversations</h1>
          <div style={sx('display: flex; gap: 6px;')}>
            <span style={sx('font-size: 12px; font-weight: 600; color: #07130D; background: #16C47F; padding: 4px 11px; border-radius: 20px;')}>All · 12</span>
            <span style={sx('font-size: 12px; font-weight: 600; color: #6E7A73; background: #F5F2EB; padding: 4px 11px; border-radius: 20px;')}>Hot · 4</span>
            <span style={sx('font-size: 12px; font-weight: 600; color: #C9631C; background: #FBEAD8; padding: 4px 11px; border-radius: 20px;')}>Flagged · 3</span>
          </div>
        </div>
        <div style={sx('flex: 1; overflow-y: auto;')}>
          {ctx.monitorList.map((c, i) => (
            <Fragment key={c.id || i}>
              <div onClick={c.select} style={sx(c.rowStyle)}>
                <div style={sx(c.avatarStyle)}>{c.initials}</div>
                <div style={sx('flex: 1; min-width: 0;')}>
                  <div style={sx('display: flex; align-items: center; gap: 6px;')}>
                    <span style={sx(`width: 6px; height: 6px; border-radius: 50%; background: ${c.chanDot};`)}></span>
                    <span style={sx('font-weight: 600; font-size: 13.5px; flex: 1;')}>{c.name}</span>
                    <span style={sx('font-size: 11px; color: #9AA39C;')}>{c.time}</span>
                  </div>
                  <div style={sx('display: flex; align-items: center; gap: 6px; margin-top: 3px;')}>
                    <span style={sx('font-size: 12.5px; color: #6E7A73; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;')}>{c.last}</span>
                    <span style={sx(c.badgeStyle)}>{c.badge}</span>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* transcript */}
      <div style={sx('flex: 1; min-width: 0; display: flex; flex-direction: column; background: #fff;')}>
        {/* header */}
        <div style={sx('display: flex; align-items: center; gap: 12px; padding: 14px 20px; background: #fff; border-bottom: 1px solid #F0ECE1;')}>
          <div style={sx('width: 42px; height: 42px; border-radius: 50%; background: #0B7A4B; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600;')}>CO</div>
          <div style={sx('flex: 1;')}>
            <div style={sx('display: flex; align-items: center; gap: 9px;')}>
              <span style={sx('font-weight: 600; font-size: 15px;')}>Chioma Okafor</span>
              <span style={sx('font-size: 11px; font-weight: 600; color: #0B7A4B; background: #E7F3EC; padding: 2px 8px; border-radius: 20px;')}>WhatsApp</span>
              <span style={sx('font-size: 11px; font-weight: 600; color: #C9631C; background: #FBEAD8; padding: 2px 8px; border-radius: 20px;')}>Hot — ready to close</span>
            </div>
            <div style={sx("display: flex; align-items: center; gap: 5px; margin-top: 4px; font-size: 12px; color: #6E7A73; font-family: 'Space Mono';")}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 15l6-6M11 6l1-1a4 4 0 0 1 6 6l-1 1M13 18l-1 1a4 4 0 0 1-6-6l1-1" stroke="#9AA39C" strokeWidth="1.8" strokeLinecap="round"></path></svg>
              Arrived via: YouTube · Lekki Penthouse Tour
            </div>
          </div>
          {ctx.takenOverActive && (
            <span style={sx('display: inline-flex; align-items: center; gap: 7px; font-size: 12.5px; font-weight: 600; color: #C9631C; background: #FBEAD8; padding: 8px 14px; border-radius: 10px;')}>You're handling this now</span>
          )}
        </div>

        {/* messages */}
        <div style={sx('flex: 1; overflow-y: auto; padding: 22px 26px; display: flex; flex-direction: column; gap: 12px;')}>
          <div style={sx('align-self: center; font-size: 11px; color: #9AA39C; background: #EDE8DD; padding: 4px 12px; border-radius: 20px;')}>Today · 9:12 AM</div>

          <div style={sx('align-self: flex-start; max-width: 66%; background: #fff; border: 1px solid #ECE7DB; padding: 10px 14px; border-radius: 4px 16px 16px 16px; font-size: 14px; line-height: 1.45;')}>Hi 👋 I just watched your Lekki penthouse tour on YouTube. Is the 3-bedroom still available?</div>

          <div style={sx('align-self: flex-end; max-width: 68%; background: #DCF3E4; padding: 10px 14px; border-radius: 16px 4px 16px 16px; font-size: 14px; line-height: 1.45;')}>
            <div style={sx('font-size: 10px; font-weight: 700; color: #0B7A4B; letter-spacing: .06em; margin-bottom: 4px;')}>ALIMI AGENT</div>
            Welcome, and thanks for watching the Lekki tour! Yes — the 3-bedroom penthouse from that video is still available. It's the north-facing unit with the wraparound terrace. Want me to walk you through pricing?
          </div>

          <div style={sx('align-self: flex-start; max-width: 66%; background: #fff; border: 1px solid #ECE7DB; padding: 10px 14px; border-radius: 4px 16px 16px 16px; font-size: 14px; line-height: 1.45;')}>Yes please. And do you have a payment plan?</div>

          <div style={sx('align-self: flex-end; max-width: 68%; background: #DCF3E4; padding: 10px 14px; border-radius: 16px 4px 16px 16px; font-size: 14px; line-height: 1.45;')}>
            <div style={sx('font-size: 10px; font-weight: 700; color: #0B7A4B; letter-spacing: .06em; margin-bottom: 4px;')}>ALIMI AGENT</div>
            The 3-bed penthouse is ₦185M. We offer a 12-month plan: 40% down (₦74M) and the balance spread monthly — 0% interest. I can also share the full price sheet as a PDF.
            <div style={sx('margin-top: 8px; display: inline-flex; align-items: center; gap: 7px; background: rgba(11,122,75,0.1); padding: 5px 10px; border-radius: 8px; font-size: 12px; color: #0B7A4B; font-weight: 600;')}>📄 Lekki_Penthouse_PriceSheet.pdf</div>
          </div>

          <div style={sx('align-self: flex-start; max-width: 66%; background: #fff; border: 1px solid #ECE7DB; padding: 10px 14px; border-radius: 4px 16px 16px 16px; font-size: 14px; line-height: 1.45;')}>Perfect. Can I come see it this weekend?</div>

          <div style={sx('align-self: flex-end; max-width: 68%; background: #DCF3E4; padding: 10px 14px; border-radius: 16px 4px 16px 16px; font-size: 14px; line-height: 1.45;')}>
            <div style={sx('font-size: 10px; font-weight: 700; color: #0B7A4B; letter-spacing: .06em; margin-bottom: 4px;')}>ALIMI AGENT</div>
            Absolutely. I have two viewing slots this weekend — <b>Saturday 10:00 AM</b> or <b>Sunday 2:00 PM</b>. Which suits you better?
          </div>

          <div style={sx('align-self: flex-start; max-width: 66%; background: #fff; border: 1px solid #ECE7DB; padding: 10px 14px; border-radius: 4px 16px 16px 16px; font-size: 14px; line-height: 1.45;')}>Saturday 10am works perfectly. My email is chioma.o@gmail.com</div>

          {/* milestone */}
          <div style={sx('align-self: center; display: flex; align-items: center; gap: 8px; margin: 6px 0; font-size: 12px; font-weight: 600; color: #0B7A4B; background: #E7F3EC; border: 1px dashed #A9D6BC; padding: 7px 16px; border-radius: 20px;')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Success event hit · Viewing booked · Intelligence Briefing generated
          </div>

          <div style={sx('align-self: flex-end; max-width: 68%; background: #DCF3E4; padding: 10px 14px; border-radius: 16px 4px 16px 16px; font-size: 14px; line-height: 1.45;')}>
            <div style={sx('font-size: 10px; font-weight: 700; color: #0B7A4B; letter-spacing: .06em; margin-bottom: 4px;')}>ALIMI AGENT</div>
            Booked! ✅ Saturday 10:00 AM at 14 Admiralty Way, Lekki Phase 1. I've sent a calendar invite to your email. Tunde from our team will meet you there. See you Saturday!
          </div>
        </div>

        {/* intervention bar */}
        <div style={sx('background: #fff; border-top: 1px solid #F0ECE1; padding: 14px 20px;')}>
          {ctx.takenOverActive && (
            <div style={sx('display: flex; align-items: center; gap: 10px;')}>
              <input placeholder="Type to intervene — your message goes directly to the prospect." style={sx('flex: 1; border: 1px solid #E4DFD3; background: #fff; border-radius: 12px; padding: 12px 15px; font-size: 14px; outline: none;')} />
              <button onClick={ctx.sendMsg} style={sx('background: #0B7A4B; color: #fff; border: none; width: 44px; height: 44px; border-radius: 999px; cursor: pointer; display: flex; align-items: center; justify-content: center;')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 12l16-8-6 8 6 8-16-8Z" fill="#fff"></path></svg>
              </button>
              <button onClick={ctx.toggleTakeover} style={sx('background: #F5F2EB; color: #12211B; border: 1px solid #E4DFD3; padding: 0 16px; height: 44px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>Return to AI</button>
            </div>
          )}
          {ctx.notTakenOver && (
            <div style={sx('display: flex; align-items: center; justify-content: space-between; gap: 14px;')}>
              <div style={sx('display: flex; align-items: center; gap: 9px; color: #0B7A4B; font-size: 13.5px; font-weight: 500;')}>
                <span style={sx('width: 8px; height: 8px; border-radius: 50%; background: #16C47F; animation: livePulse 2.4s infinite;')}></span>
                AI is handling this conversation
              </div>
              <button onClick={ctx.toggleTakeover} style={sx('display: inline-flex; align-items: center; gap: 8px; background: #12211B; color: #fff; border: none; padding: 10px 18px; border-radius: 999px; font-size: 13.5px; font-weight: 600; cursor: pointer;')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3v9m0 0l-3.5-3.5M12 12l3.5-3.5M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                Take over
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
