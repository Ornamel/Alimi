import React from 'react';
import { sx } from '../lib/sx.js';

export default function Signup({ ctx }) {
  return (
    <div className="scr" style={sx(ctx.gridAuth)}>
      {/* brand panel */}
      {ctx.notIsMobile && (
        <div style={sx('background: #0C1712; padding: 56px 60px; display: flex; flex-direction: column; justify-content: space-between; color: #C9D2CC;')}>
          <div style={sx('display: flex; align-items: center; gap: 10px;')}>
            <div style={sx('width: 30px; height: 30px; border-radius: 9px; background: #16C47F; display: flex; align-items: center; justify-content: center;')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" fill="#07130D"></path><path d="M9 9.2l2.2 2.4L15.4 7" stroke="#16C47F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <span style={sx("font-family: 'Space Grotesk'; font-weight: 600; color: #F5F2EB; font-size: 20px;")}>Alimi</span>
          </div>
          <div>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 34px; line-height: 1.15; color: #F5F2EB; margin: 0 0 18px; letter-spacing: -0.01em;")}>The AI closer your business needs.</h2>
            <p style={sx('font-size: 16px; line-height: 1.6; color: #9FB0A6; max-width: 400px;')}>Deploy autonomous agents that qualify leads, book meetings, and hand you warm prospects with a full briefing — while you sleep.</p>
            <div style={sx('display: flex; gap: 10px; margin-top: 28px;')}>
              <div style={sx('display:flex; align-items:center; gap:8px; background: rgba(255,255,255,0.05); padding: 8px 13px; border-radius: 20px; font-size: 13px; color: #C9D2CC;')}><span style={sx('width:7px;height:7px;border-radius:50%;background:#16C47F;')}></span>WhatsApp</div>
              <div style={sx('display:flex; align-items:center; gap:8px; background: rgba(255,255,255,0.05); padding: 8px 13px; border-radius: 20px; font-size: 13px; color: #C9D2CC;')}><span style={sx('width:7px;height:7px;border-radius:50%;background:#5B90F5;')}></span>Email</div>
            </div>
          </div>
          <p style={sx('font-size: 13px; color: #6E7C74;')}>Trusted by 200+ businesses across Lagos, Accra, and Nairobi.</p>
        </div>
      )}

      {/* form */}
      <div style={sx('background: #F5F2EB; display: flex; align-items: center; justify-content: center; padding: 40px;')}>
        <div style={sx('width: 100%; max-width: 380px;')}>
          <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 30px; margin: 0; letter-spacing: -0.01em;")}>Your AI closer starts here.</h1>
          <p style={sx('margin: 10px 0 28px; color: #6E7A73; font-size: 15px;')}>Set up your Alimi agent in under 30 minutes — no code, no tech team.</p>
          <div style={sx('display: flex; flex-direction: column; gap: 14px;')}>
            <div>
              <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Your full name</label>
              <input placeholder="Tunde Bakare" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 15px; outline: none;')} />
            </div>
            <div>
              <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Your business email</label>
              <input placeholder="tunde@lekkihomes.com" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 15px; outline: none;')} />
            </div>
            <div>
              <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Business name</label>
              <input placeholder="Lekki Homes" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 15px; outline: none;')} />
            </div>
            <button onClick={ctx.goAgentsEmpty} style={sx('margin-top: 6px; width: 100%; background: #0B7A4B; color: #fff; border: none; padding: 14px; border-radius: 999px; font-size: 15px; font-weight: 600; cursor: pointer; box-shadow: 0 3px 10px rgba(11,122,75,0.25);')}>Create my account →</button>
          </div>
          <p style={sx('margin: 18px 0 0; font-size: 12.5px; color: #9AA39C; line-height: 1.5;')}>By continuing you agree to our Terms and Privacy Policy. No credit card required.</p>
          <p style={sx('margin: 16px 0 0; font-size: 14px; color: #6E7A73; text-align: center;')}>Already have an account? <button onClick={ctx.goSignin} style={sx('background: none; border: none; color: #0B7A4B; font-size: 14px; font-weight: 600; cursor: pointer; padding: 0;')}>Sign in</button></p>
        </div>
      </div>
    </div>
  );
}
