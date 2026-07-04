import React from 'react';
import { sx } from '../lib/sx.js';

export default function States({ ctx }) {
  return (
    <div className="scr" style={sx('background: #F5F2EB; min-height: 100vh; padding: 36px 40px 60px;')}>
      <div style={sx('max-width: 1160px; margin: 0 auto;')}>
        <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px; margin: 0; letter-spacing: -0.01em;")}>Empty &amp; error states</h1>
        <p style={sx('margin: 8px 0 0; color: #6E7A73; font-size: 15px;')}>Every dead-end tells the owner exactly what to do next — direct, warm, outcome-focused.</p>

        <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 34px 0 14px; color: #12211B;")}>Empty states</div>
        <div style={sx(ctx.gridStatesEmpty)}>
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 34px 28px; text-align: center;')}>
            <div style={sx('width: 52px; height: 52px; border-radius: 15px; background: #E7F3EC; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;')}><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" stroke="#0B7A4B" strokeWidth="1.7"></path><path d="M12 8v4M10 10h4" stroke="#0B7A4B" strokeWidth="1.7" strokeLinecap="round"></path></svg></div>
            <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin-bottom: 6px;")}>No agents yet</div>
            <p style={sx('margin: 0 0 16px; font-size: 14px; color: #6E7A73; line-height: 1.5; max-width: 320px; margin-left: auto; margin-right: auto;')}>You have not built an agent yet. Your first one takes under 30 minutes.</p>
            <button onClick={ctx.resetBuilder} style={sx('background: #0B7A4B; color: #fff; border: none; padding: 10px 20px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Build your first agent</button>
          </div>
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 34px 28px; text-align: center;')}>
            <div style={sx('width: 52px; height: 52px; border-radius: 15px; background: #E9EFFC; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;')}><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M21 11.5c0 4.1-4 7.5-9 7.5-1 0-2-.1-2.9-.4L4 20l1.2-3.5C4.1 15.2 3 13.5 3 11.5 3 7.4 7 4 12 4s9 3.4 9 7.5Z" stroke="#2F6BEC" strokeWidth="1.7" strokeLinejoin="round"></path></svg></div>
            <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin-bottom: 6px;")}>No conversations yet</div>
            <p style={sx('margin: 0 0 16px; font-size: 14px; color: #6E7A73; line-height: 1.5; max-width: 320px; margin-left: auto; margin-right: auto;')}>Your agent is live and listening. Share your link to get the first conversation started.</p>
            <button onClick={ctx.goEntry} style={sx('background: #F5F2EB; color: #12211B; border: 1px solid #E4DFD3; padding: 10px 20px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Share your link</button>
          </div>
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 34px 28px; text-align: center;')}>
            <div style={sx('width: 52px; height: 52px; border-radius: 15px; background: #FBEAD8; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;')}><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M13 3l-1.5 8H17l-6 10 1.5-8H6l7-10Z" stroke="#C9631C" strokeWidth="1.7" strokeLinejoin="round"></path></svg></div>
            <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin-bottom: 6px;")}>No briefings yet</div>
            <p style={sx('margin: 0; font-size: 14px; color: #6E7A73; line-height: 1.5; max-width: 340px; margin-left: auto; margin-right: auto;')}>Once your agent qualifies a lead, its Intelligence Briefing appears here instantly.</p>
          </div>
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 34px 28px; text-align: center;')}>
            <div style={sx('width: 52px; height: 52px; border-radius: 15px; background: #F0ECE1; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;')}><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 20V4M4 20h16M8 16l3.5-4 3 2.5L20 8" stroke="#6E7A73" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
            <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin-bottom: 6px;")}>No analytics yet</div>
            <p style={sx('margin: 0; font-size: 14px; color: #6E7A73; line-height: 1.5; max-width: 340px; margin-left: auto; margin-right: auto;')}>Your analytics will populate once conversations start flowing.</p>
          </div>
        </div>

        <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 34px 0 14px; color: #12211B;")}>Errors &amp; system states</div>
        <div style={sx(ctx.gridStatesErrors)}>
          <div style={sx('background: #fff; border: 1px solid #F0DADA; border-radius: 14px; padding: 20px; display: flex; gap: 13px;')}>
            <div style={sx('width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px; background: #FAE7E7; display: flex; align-items: center; justify-content: center;')}><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 8v5M12 16.5v.01M10.3 3.9L2.7 17.2A2 2 0 0 0 4.4 20h15.2a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="#D64545" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
            <div><div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 4px;')}>Couldn't read that file</div><p style={sx('margin: 0; font-size: 13px; color: #6E7A73; line-height: 1.45;')}>Try a PDF or paste the content directly as text.</p></div>
          </div>
          <div style={sx('background: #fff; border: 1px solid #F0DADA; border-radius: 14px; padding: 20px; display: flex; gap: 13px;')}>
            <div style={sx('width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px; background: #FAE7E7; display: flex; align-items: center; justify-content: center;')}><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1L7 22l4.2-2.2c.3 0 .5.1.8.1 5 0 9-3.8 9-8.5S17 2 12 2Z" stroke="#D64545" strokeWidth="1.6"></path><path d="M9 9l6 6M15 9l-6 6" stroke="#D64545" strokeWidth="1.6" strokeLinecap="round"></path></svg></div>
            <div><div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 4px;')}>WhatsApp didn't connect</div><p style={sx('margin: 0; font-size: 13px; color: #6E7A73; line-height: 1.45;')}>Check your number and try again.</p></div>
          </div>
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 14px; padding: 20px; display: flex; gap: 13px;')}>
            <div style={sx('width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px; background: #F0ECE1; display: flex; align-items: center; justify-content: center;')}><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="#6E7A73" strokeWidth="1.7"></circle><path d="M12 8v4l2.5 2" stroke="#6E7A73" strokeWidth="1.7" strokeLinecap="round"></path></svg></div>
            <div><div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 4px;')}>That took longer than expected</div><p style={sx('margin: 0; font-size: 13px; color: #6E7A73; line-height: 1.45;')}>Refresh — your data will be here.</p></div>
          </div>
          <div style={sx('background: #fff; border: 1px solid #F0E6D5; border-radius: 14px; padding: 20px; display: flex; gap: 13px;')}>
            <div style={sx('width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px; background: #FBEAD8; display: flex; align-items: center; justify-content: center;')}><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><rect x="6" y="4" width="4" height="16" rx="1.5" fill="#C9631C"></rect><rect x="14" y="4" width="4" height="16" rx="1.5" fill="#C9631C"></rect></svg></div>
            <div style={sx('flex:1;')}><div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 4px;')}>Your agent is paused</div><p style={sx('margin: 0 0 10px; font-size: 13px; color: #6E7A73; line-height: 1.45;')}>Tap Resume — conversations restart automatically.</p><button onClick={ctx.resumeAgent} style={sx('background: #0B7A4B; color: #fff; border: none; padding: 7px 14px; border-radius: 999px; font-size: 12.5px; font-weight: 600; cursor: pointer;')}>Resume agent</button></div>
          </div>
          <div style={sx('background: #fff; border: 1px solid #F0E6D5; border-radius: 14px; padding: 20px; display: flex; gap: 13px;')}>
            <div style={sx('width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px; background: #FBEAD8; display: flex; align-items: center; justify-content: center;')}><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" stroke="#C9631C" strokeWidth="1.6" strokeLinejoin="round"></path></svg></div>
            <div style={sx('flex:1;')}><div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 4px;')}>Conversation limit reached</div><p style={sx('margin: 0 0 10px; font-size: 13px; color: #6E7A73; line-height: 1.45;')}>You've used this month's allowance. Upgrade or add credits.</p><button onClick={ctx.upgradePlan} style={sx('background: #12211B; color: #fff; border: none; padding: 7px 14px; border-radius: 999px; font-size: 12.5px; font-weight: 600; cursor: pointer;')}>Upgrade plan</button></div>
          </div>
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 14px; padding: 20px; display: flex; gap: 13px;')}>
            <div style={sx('width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px; background: #E7F3EC; display: flex; align-items: center; justify-content: center;')}><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 3C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1" stroke="#0B7A4B" strokeWidth="1.7" strokeLinecap="round"></path><path d="M17 14l2.5 2.5L24 12" stroke="#0B7A4B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" transform="translate(-4 0)"></path></svg></div>
            <div><div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 4px;')}>Knowledge base indexing</div><p style={sx('margin: 0; font-size: 13px; color: #6E7A73; line-height: 1.45;')}>We'll notify you the moment your agent is expert-ready.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
