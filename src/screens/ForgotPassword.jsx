import React from 'react';
import { sx } from '../lib/sx.js';

export default function ForgotPassword({ ctx }) {
  return (
    <div className="scr" style={sx('background: #F5F2EB; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px;')}>
      <div style={sx('width: 100%; max-width: 400px; background: #fff; border: 1px solid #EAE5D9; border-radius: 20px; padding: 36px;')}>
        <div style={sx('display: flex; align-items: center; gap: 10px; margin-bottom: 24px;')}>
          <div style={sx('width: 28px; height: 28px; border-radius: 8px; background: #0B7A4B; display: flex; align-items: center; justify-content: center;')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" fill="#fff"></path></svg>
          </div>
          <span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 17px; color: #12211B;")}>Alimi</span>
        </div>

        {ctx.notPwSent && (
          <>
            <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 24px; margin: 0 0 8px; color: #12211B; letter-spacing: -0.01em;")}>Reset your password</h1>
            <p style={sx('margin: 0 0 20px; font-size: 14px; color: #6E7A73; line-height: 1.5;')}>Enter the email on your account and we'll send you a link to reset your password.</p>
            <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Business email</label>
            <input placeholder="tunde@lekkihomes.com" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 15px; outline: none; margin-bottom: 18px;')} />
            <button onClick={ctx.requestReset} style={sx('width: 100%; background: #0B7A4B; color: #fff; border: none; padding: 14px; border-radius: 999px; font-size: 15px; font-weight: 600; cursor: pointer; box-shadow: 0 3px 10px rgba(11,122,75,0.25);')}>Send reset link</button>
          </>
        )}

        {ctx.pwSent && (
          <div style={sx('text-align: center; padding: 8px 0;')}>
            <div style={sx('width: 52px; height: 52px; border-radius: 50%; background: #E7F3EC; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;')}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#0B7A4B"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 22px; margin: 0 0 8px; color: #12211B;")}>Check your email</h1>
            <p style={sx('margin: 0; font-size: 14px; color: #6E7A73; line-height: 1.5;')}>We've sent a password reset link to your email. It expires in 30 minutes.</p>
          </div>
        )}

        <button onClick={ctx.backToSignin} style={sx('margin-top: 22px; width: 100%; background: none; border: none; color: #6E7A73; font-size: 14px; font-weight: 600; cursor: pointer; text-align: center;')}>← Back to sign in</button>
      </div>
    </div>
  );
}
