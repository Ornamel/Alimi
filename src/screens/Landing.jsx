import React, { Fragment } from 'react';
import { sx } from '../lib/sx.js';

export default function Landing({ ctx }) {
  return (
    <div className="scr" style={sx('background: #0C1712; min-height: 100vh;')}>
      {/* nav */}
      <div style={sx('max-width: 1160px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 22px 32px;')}>
        <div style={sx('display: flex; align-items: center; gap: 10px;')}>
          <div style={sx('width: 30px; height: 30px; border-radius: 9px; background: #16C47F; display: flex; align-items: center; justify-content: center;')}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" fill="#07130D"></path><path d="M9 9.2l2.2 2.4L15.4 7" stroke="#16C47F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
          <span style={sx("font-family: 'Space Grotesk'; font-weight: 600; color: #F5F2EB; font-size: 20px;")}>Alimi</span>
        </div>
        <div style={sx('display: flex; align-items: center; gap: 28px;')}>
          <a href="#features" style={sx('color: #9FB0A6; font-size: 14px; text-decoration: none;')}>Product</a>
          <a href="#pricing" style={sx('color: #9FB0A6; font-size: 14px; text-decoration: none;')}>Pricing</a>
          <a href="#customers" style={sx('color: #9FB0A6; font-size: 14px; text-decoration: none;')}>Customers</a>
          <button onClick={ctx.goSignin} style={sx('background: none; border: none; color: #F5F2EB; font-size: 14px; font-weight: 600; cursor: pointer;')}>Sign in</button>
          <button onClick={ctx.goSignup} style={sx('background: #16C47F; color: #07130D; border: none; height: 40px; padding: 0 20px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Get started free</button>
        </div>
      </div>

      {/* hero */}
      <div style={sx(ctx.gridHero)}>
        <div>
          <div style={sx('display: inline-flex; align-items: center; gap: 8px; background: rgba(22,196,127,0.12); border: 1px solid rgba(22,196,127,0.25); padding: 6px 13px; border-radius: 20px; margin-bottom: 24px;')}>
            <span style={sx('width: 7px; height: 7px; border-radius: 50%; background: #16C47F;')}></span>
            <span style={sx('color: #7CE0AC; font-size: 13px; font-weight: 600;')}>The 90/10 model — AI does 90%, you close the 10%</span>
          </div>
          <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 56px; line-height: 1.04; margin: 0; color: #F5F2EB; letter-spacing: -0.02em;")}>Your AI closer<br />starts here.</h1>
          <p style={sx('margin: 22px 0 0; color: #A9B4AC; font-size: 18px; line-height: 1.55; max-width: 440px;')}>Set up your Alimi agent in under 30 minutes — no code, no tech team. Autonomous agents that hold real sales conversations on WhatsApp &amp; Email, 24/7.</p>
          <div style={sx('display: flex; align-items: center; gap: 14px; margin-top: 30px;')}>
            <button onClick={ctx.goSignup} style={sx('background: #16C47F; color: #07130D; border: none; padding: 15px 26px; font-size: 16px; font-weight: 600; border-radius: 999px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;')}>
              Get started free <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#07130D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
            <button onClick={ctx.goDemo} style={sx('background: rgba(255,255,255,0.06); color: #F5F2EB; border: 1px solid rgba(255,255,255,0.14); padding: 15px 24px; border-radius: 999px; font-size: 16px; font-weight: 600; cursor: pointer;')}>Watch demo</button>
          </div>
          <p style={sx('margin: 24px 0 0; color: #6E7C74; font-size: 14px;')}>Trusted by 200+ businesses across Lagos, Accra, and Nairobi.</p>
        </div>

        {/* product visual */}
        <div style={sx('position: relative;')}>
          <div style={sx('background: linear-gradient(160deg,#123322,#0A1A12); border: 1px solid rgba(255,255,255,0.08); border-radius: 22px; padding: 22px; box-shadow: 0 30px 80px rgba(0,0,0,0.4);')}>
            <div style={sx('display: flex; align-items: center; gap: 9px; margin-bottom: 16px;')}>
              <span style={sx('width: 8px; height: 8px; border-radius: 50%; background: #16C47F; animation: livePulse 2.4s infinite;')}></span>
              <span style={sx('color: #9FB0A6; font-size: 13px; font-weight: 600;')}>Live conversation · YouTube lead</span>
            </div>
            <div style={sx('background: #ECE5DD; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 9px;')}>
              <div style={sx('align-self: flex-start; max-width: 82%; background: #fff; padding: 9px 12px; border-radius: 4px 12px 12px 12px; font-size: 13px; color: #12211B;')}>Hi 👋 I saw your Lekki penthouse tour. Is the 3-bed still available?</div>
              <div style={sx('align-self: flex-end; max-width: 82%; background: #DCF3E4; padding: 9px 12px; border-radius: 12px 4px 12px 12px; font-size: 13px; color: #12211B;')}>Yes! It's the north-facing unit with the wraparound terrace. Want to see it this weekend?</div>
              <div style={sx('align-self: flex-start; max-width: 82%; background: #fff; padding: 9px 12px; border-radius: 4px 12px 12px 12px; font-size: 13px; color: #12211B;')}>Saturday 10am works 🙌</div>
            </div>
            <div style={sx('margin-top: 14px; background: #0C1712; border: 1px solid rgba(22,196,127,0.3); border-radius: 12px; padding: 13px 15px;')}>
              <div style={sx('display: flex; align-items: center; gap: 8px; margin-bottom: 8px;')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M13 3l-1.5 8H17l-6 10 1.5-8H6l7-10Z" fill="#16C47F"></path></svg>
                <span style={sx('color: #16C47F; font-size: 12px; font-weight: 700; letter-spacing: .04em;')}>INTELLIGENCE BRIEFING · JUST NOW</span>
              </div>
              <div style={sx('color: #F5F2EB; font-size: 14px; font-weight: 600; margin-bottom: 10px;')}>Chioma is ready to close — viewing booked.</div>
              <div style={sx('display: flex; gap: 16px;')}>
                <div style={sx('flex:1;')}><div style={sx('font-size:10px; color:#7C8B83; margin-bottom:3px;')}>Purchase</div><div style={sx("font-family:'Space Grotesk'; font-weight:600; color:#16C47F; font-size:16px;")}>92%</div></div>
                <div style={sx('flex:1;')}><div style={sx('font-size:10px; color:#7C8B83; margin-bottom:3px;')}>Budget</div><div style={sx("font-family:'Space Grotesk'; font-weight:600; color:#5B90F5; font-size:16px;")}>78%</div></div>
                <div style={sx('flex:1;')}><div style={sx('font-size:10px; color:#7C8B83; margin-bottom:3px;')}>Urgency</div><div style={sx("font-family:'Space Grotesk'; font-weight:600; color:#F5A24B; font-size:16px;")}>85%</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stat band */}
      <div style={sx('border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08);')}>
        <div style={sx(ctx.gridStatBand)}>
          <div><div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 34px; color: #F5F2EB;")}>&lt; 60s</div><div style={sx('color: #7C8B83; font-size: 14px; margin-top: 4px;')}>Lead response time</div></div>
          <div><div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 34px; color: #F5F2EB;")}>24/7</div><div style={sx('color: #7C8B83; font-size: 14px; margin-top: 4px;')}>Always-on conversations</div></div>
          <div><div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 34px; color: #F5F2EB;")}>90%</div><div style={sx('color: #7C8B83; font-size: 14px; margin-top: 4px;')}>Of the journey, automated</div></div>
          <div><div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 34px; color: #F5F2EB;")}>30 min</div><div style={sx('color: #7C8B83; font-size: 14px; margin-top: 4px;')}>To first live agent</div></div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="how-it-works" style={sx('max-width: 1160px; margin: 0 auto; padding: 72px 32px;')}>
        <div style={sx('max-width: 560px; margin: 0 auto 44px; text-align: center;')}>
          <div style={sx('color: #16C47F; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px;')}>How it works</div>
          <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 32px; line-height: 1.2; margin: 0; color: #F5F2EB; letter-spacing: -0.01em;")}>From first message to closed deal — three steps.</h2>
        </div>
        <div style={sx(ctx.gridHowItWorks)}>
          <div style={sx('background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 26px;')}>
            <div style={sx("width: 38px; height: 38px; border-radius: 11px; background: rgba(22,196,127,0.14); color: #16C47F; display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk'; font-weight: 700; font-size: 16px; margin-bottom: 18px;")}>1</div>
            <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 8px; color: #F5F2EB;")}>Build your agent</h3>
            <p style={sx('margin: 0; font-size: 14.5px; line-height: 1.6; color: #9FB0A6;')}>Describe your business, connect WhatsApp &amp; Email, and upload the pricing sheets or FAQs it should know. Takes under 30 minutes — no code.</p>
          </div>
          <div style={sx('background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 26px;')}>
            <div style={sx("width: 38px; height: 38px; border-radius: 11px; background: rgba(22,196,127,0.14); color: #16C47F; display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk'; font-weight: 700; font-size: 16px; margin-bottom: 18px;")}>2</div>
            <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 8px; color: #F5F2EB;")}>It works while you don't</h3>
            <p style={sx('margin: 0; font-size: 14.5px; line-height: 1.6; color: #9FB0A6;')}>Your agent answers instantly, qualifies interest, and books meetings — 24/7, on the channels your customers already use.</p>
          </div>
          <div style={sx('background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 26px;')}>
            <div style={sx("width: 38px; height: 38px; border-radius: 11px; background: rgba(22,196,127,0.14); color: #16C47F; display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk'; font-weight: 700; font-size: 16px; margin-bottom: 18px;")}>3</div>
            <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 8px; color: #F5F2EB;")}>You step in to close</h3>
            <p style={sx('margin: 0; font-size: 14.5px; line-height: 1.6; color: #9FB0A6;')}>The moment a lead is ready, you get a full intelligence briefing — no transcripts to read. Take over, or let the handoff speak for itself.</p>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div id="features" style={sx('border-top: 1px solid rgba(255,255,255,0.08);')}>
        <div style={sx('max-width: 1160px; margin: 0 auto; padding: 72px 32px;')}>
          <div style={sx('max-width: 560px; margin: 0 auto 44px; text-align: center;')}>
            <div style={sx('color: #16C47F; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px;')}>Everything you need to close</div>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 32px; line-height: 1.2; margin: 0; color: #F5F2EB; letter-spacing: -0.01em;")}>Built for real sales conversations, not chatbot scripts.</h2>
          </div>
          <div style={sx(ctx.gridFeatures)}>
            <div style={sx('padding: 24px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: #E7F3EC1A; background: rgba(22,196,127,0.14); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1L7 22l4.2-2.2c.3 0 .5.1.8.1 5 0 9-3.8 9-8.5S17 2 12 2Z" stroke="#16C47F" strokeWidth="1.8"></path></svg>
              </div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0 0 6px; color: #F5F2EB;")}>Native WhatsApp &amp; Email</h3>
              <p style={sx('margin: 0; font-size: 14px; line-height: 1.55; color: #9FB0A6;')}>No app to download. Your agent meets customers where they already are.</p>
            </div>
            <div style={sx('padding: 24px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: rgba(47,107,236,0.14); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 15l6-6M11 6l1-1a4 4 0 0 1 6 6l-1 1M13 18l-1 1a4 4 0 0 1-6-6l1-1" stroke="#5B90F5" strokeWidth="1.8" strokeLinecap="round"></path></svg>
              </div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0 0 6px; color: #F5F2EB;")}>Entry point tracking</h3>
              <p style={sx('margin: 0; font-size: 14px; line-height: 1.55; color: #9FB0A6;')}>QR codes, links, and embeds each carry a source label — you always know where a lead came from.</p>
            </div>
            <div style={sx('padding: 24px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: rgba(245,162,75,0.16); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 3l-1.5 8H17l-6 10 1.5-8H6l7-10Z" stroke="#F5A24B" strokeWidth="1.7" strokeLinejoin="round"></path></svg>
              </div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0 0 6px; color: #F5F2EB;")}>Intelligence briefings</h3>
              <p style={sx('margin: 0; font-size: 14px; line-height: 1.55; color: #9FB0A6;')}>Every qualified lead arrives with intent signals, objections, and your next three moves — ready to act on.</p>
            </div>
            <div style={sx('padding: 24px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: rgba(22,196,127,0.14); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3v9m0 0l-3.5-3.5M12 12l3.5-3.5M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" stroke="#16C47F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0 0 6px; color: #F5F2EB;")}>Live takeover</h3>
              <p style={sx('margin: 0; font-size: 14px; line-height: 1.55; color: #9FB0A6;')}>Step into any conversation at any moment. The agent hands back cleanly when you're done.</p>
            </div>
            <div style={sx('padding: 24px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: rgba(245,162,75,0.16); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="#F5A24B" strokeWidth="1.7" strokeLinejoin="round"></path><path d="M9 12h6M9 16h6" stroke="#F5A24B" strokeWidth="1.6" strokeLinecap="round"></path></svg>
              </div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0 0 6px; color: #F5F2EB;")}>Trained knowledge base</h3>
              <p style={sx('margin: 0; font-size: 14px; line-height: 1.55; color: #9FB0A6;')}>Upload catalogues, pricing, or FAQs — your agent answers accurately from day one.</p>
            </div>
            <div style={sx('padding: 24px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: rgba(47,107,236,0.14); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20V4M4 20h16M8 16l3.5-4 3 2.5L20 8" stroke="#5B90F5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0 0 6px; color: #F5F2EB;")}>Real-time analytics</h3>
              <p style={sx('margin: 0; font-size: 14px; line-height: 1.55; color: #9FB0A6;')}>Track the full funnel — from first click to closed deal — and see which sources actually convert.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" style={sx('border-top: 1px solid rgba(255,255,255,0.08);')}>
        <div style={sx('max-width: 1160px; margin: 0 auto; padding: 72px 32px;')}>
          <div style={sx('max-width: 560px; margin: 0 auto 32px; text-align: center;')}>
            <div style={sx('color: #16C47F; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px;')}>Pricing</div>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 32px; line-height: 1.2; margin: 0; color: #F5F2EB; letter-spacing: -0.01em;")}>Simple pricing that scales with you.</h2>
          </div>

          <div style={sx('display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 40px;')}>
            <div style={sx('display:flex;align-items:center;gap:4px;background:rgba(255,255,255,0.06);padding:4px;border-radius:999px;')}>
              <button onClick={ctx.setMonthly} style={sx(ctx.monthlyBtnStyle)}>Monthly</button>
              <button onClick={ctx.setAnnual} style={sx(ctx.annualBtnStyle)}>Annual</button>
            </div>
            <span style={sx(ctx.annualBadgeStyle)}>Save 20%</span>
          </div>

          <div style={sx(ctx.gridPricingCards)}>
            {/* FREE */}
            <div style={sx('background:#fff;border-radius:20px;padding:28px;border:1px solid #EAE5D9;')}>
              <div style={sx('display: flex; flex-direction: column;')}>
                <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 19px; margin: 0; color: #12211B;")}>Free</h3>
                <p style={sx('margin: 8px 0 0; font-size: 13.5px; color: #6E7A73; line-height: 1.5;')}>Try Alimi with your first agent.</p>
                <div style={sx('margin: 22px 0 20px;')}><span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 38px; color: #12211B;")}>₦0</span><span style={sx('color: #6E7A73; font-size: 14px;')}>/mo</span></div>
                <button onClick={ctx.goSignup} style={sx('width:100%;background:#fff;color:#12211B;border:1px solid #E4DFD3;padding:12px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer;')}>Get started free</button>
                <div style={sx('margin-top: 24px; display: flex; flex-direction: column; gap: 12px; border-top: 1px solid #EAE5D9; padding-top: 22px;')}>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #4B5750;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>1 AI agent</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #4B5750;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>1 channel — WhatsApp or Email</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #4B5750;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Up to 50 conversations/mo</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #4B5750;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Community support</div>
                </div>
              </div>
            </div>

            {/* PRO */}
            <div style={sx('background:#fff;border-radius:20px;padding:28px;border:2px solid #0B7A4B;position:relative;box-shadow:0 8px 30px rgba(11,122,75,0.12);')}>
              <div style={sx('position: relative; display: flex; flex-direction: column;')}>
                <span style={sx('font-size:11px;font-weight:700;padding:1px 8px;border-radius:20px;background:rgba(22,196,127,0.16);color:#16C47F;position:absolute;top:-42px;left:50%;transform:translateX(-50%);white-space:nowrap;')}>MOST POPULAR</span>
                <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 19px; margin: 0; color: #12211B;")}>Pro</h3>
                <p style={sx('margin: 8px 0 0; font-size: 13.5px; color: #6E7A73; line-height: 1.5;')}>For teams closing deals every day.</p>
                <div style={sx('margin: 22px 0 4px;')}><span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 38px; color: #12211B;")}>{ctx.proPrice}</span><span style={sx('color: #6E7A73; font-size: 14px;')}>/mo</span></div>
                <div style={sx('font-size: 12.5px; color: #0B7A4B; margin-bottom: 20px;')}>{ctx.proSub}</div>
                <button onClick={ctx.goSignup} style={sx('width:100%;background:#0B7A4B;color:#fff;border:none;padding:12px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer;')}>Get started free</button>
                <div style={sx('margin-top: 24px; display: flex; flex-direction: column; gap: 12px; border-top: 1px solid #EAE5D9; padding-top: 22px;')}>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #12211B;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>3 AI agents</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #12211B;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>WhatsApp + Email, unlimited conversations</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #12211B;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Intelligence briefings &amp; live takeover</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #12211B;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Full analytics &amp; entry-point tracking</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #12211B;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Priority support</div>
                </div>
              </div>
            </div>

            {/* AGENCY */}
            <div style={sx('background:#fff;border-radius:20px;padding:28px;border:1px solid #EAE5D9;')}>
              <div style={sx('display: flex; flex-direction: column;')}>
                <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 19px; margin: 0; color: #12211B;")}>Agency</h3>
                <p style={sx('margin: 8px 0 0; font-size: 13.5px; color: #6E7A73; line-height: 1.5;')}>For agencies managing multiple clients.</p>
                <div style={sx('margin: 22px 0 20px;')}><span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 30px; color: #12211B;")}>Custom</span></div>
                <button onClick={ctx.contactSales} style={sx('width:100%;background:#fff;color:#12211B;border:1px solid #E4DFD3;padding:12px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer;')}>Contact sales</button>
                <div style={sx('margin-top: 24px; display: flex; flex-direction: column; gap: 12px; border-top: 1px solid #EAE5D9; padding-top: 22px;')}>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #4B5750;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Unlimited agents</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #4B5750;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Multi-client workspaces</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #4B5750;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>Dedicated onboarding</div>
                  <div style={sx('display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: #4B5750;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20 7L9.5 17.5 4 12" stroke="#0B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>SLA &amp; priority support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BUILT FOR YOUR BUSINESS */}
      <div style={sx('border-top: 1px solid rgba(255,255,255,0.08);')}>
        <div style={sx('max-width: 1160px; margin: 0 auto; padding: 72px 32px;')}>
          <div style={sx('max-width: 560px; margin: 0 auto 44px; text-align: center;')}>
            <div style={sx('color: #16C47F; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px;')}>Built for your business</div>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 32px; line-height: 1.2; margin: 0; color: #F5F2EB; letter-spacing: -0.01em;")}>Wherever you sell, Alimi closes.</h2>
          </div>
          <div style={sx(ctx.gridBuiltFor)}>
            <div style={sx('background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:22px;border-radius:16px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: rgba(22,196,127,0.14); display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 14px;')}>🏠</div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 5px; color: #F5F2EB;")}>Real estate &amp; property</h3>
              <p style={sx('margin: 0; font-size: 13px; color: #9FB0A6;')}>Book viewings, qualify buyers</p>
            </div>
            <div style={sx('background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:22px;border-radius:16px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: rgba(245,162,75,0.16); display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 14px;')}>🎥</div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 5px; color: #F5F2EB;")}>Creator economy &amp; courses</h3>
              <p style={sx('margin: 0; font-size: 13px; color: #9FB0A6;')}>Convert followers to enrollments</p>
            </div>
            <div style={sx('background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:22px;border-radius:16px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: rgba(47,107,236,0.14); display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 14px;')}>🛍️</div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 5px; color: #F5F2EB;")}>Small business &amp; services</h3>
              <p style={sx('margin: 0; font-size: 13px; color: #9FB0A6;')}>Answer, quote, and book jobs</p>
            </div>
            <div style={sx('background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:22px;border-radius:16px;')}>
              <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 14px;')}>🏢</div>
              <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0 0 5px; color: #F5F2EB;")}>Agency &amp; multi-client</h3>
              <p style={sx('margin: 0; font-size: 13px; color: #9FB0A6;')}>Deploy agents for every client</p>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div id="customers" style={sx('border-top: 1px solid rgba(255,255,255,0.08);')}>
        <div style={sx('max-width: 1160px; margin: 0 auto; padding: 72px 32px;')}>
          <div style={sx('max-width: 560px; margin: 0 auto 44px; text-align: center;')}>
            <div style={sx('color: #16C47F; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px;')}>Customers</div>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 32px; line-height: 1.2; margin: 0; color: #F5F2EB; letter-spacing: -0.01em;")}>Businesses closing faster with Alimi.</h2>
          </div>
          <div style={sx(ctx.gridTestimonials)}>
            <div style={sx('background:linear-gradient(135deg,#0B7A4B,#0C1712);border-radius:18px;padding:28px;')}>
              <p style={sx('margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #fff;')}>"We used to lose leads overnight. Now Chioma's questions get answered in seconds, and I only step in once she's ready to book. It's changed how fast we close."</p>
              <div style={sx('display: flex; align-items: center; gap: 11px;')}>
                <div style={sx('width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.22); display: flex; align-items: center; justify-content: center; font-weight: 600; color: #fff; font-size: 14px;')}>T</div>
                <div>
                  <div style={sx('font-size: 14px; font-weight: 600; color: #fff;')}>Tunde Bakare</div>
                  <div style={sx('font-size: 12.5px; color: rgba(255,255,255,0.75);')}>Admin, Lekki Homes</div>
                </div>
              </div>
            </div>
            <div style={sx('background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:28px;')}>
              <p style={sx('margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #E7EDE9;')}>"Every enrollment question used to sit in my DMs for days. Now the agent handles pricing and payment plans instantly, and I get a briefing the moment someone's ready to enroll."</p>
              <div style={sx('display: flex; align-items: center; gap: 11px;')}>
                <div style={sx('width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg,#2F6BEC,#1F4FB0); display: flex; align-items: center; justify-content: center; font-weight: 600; color: #fff; font-size: 14px;')}>A</div>
                <div>
                  <div style={sx('font-size: 14px; font-weight: 600; color: #F5F2EB;')}>Amara Chukwu</div>
                  <div style={sx('font-size: 12.5px; color: #7C8B83;')}>Founder, Amara Teaches Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={sx('border-top: 1px solid rgba(255,255,255,0.08);')}>
        <div style={sx('max-width: 780px; margin: 0 auto; padding: 80px 32px; text-align: center;')}>
          <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 38px; line-height: 1.15; margin: 0; color: #F5F2EB; letter-spacing: -0.01em;")}>Your AI closer starts here.</h2>
          <p style={sx('margin: 16px 0 0; color: #9FB0A6; font-size: 17px; line-height: 1.55;')}>Set up your first agent in under 30 minutes. No code, no tech team, no credit card.</p>
          <div style={sx('display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 30px;')}>
            <button onClick={ctx.goSignup} style={sx('background: #16C47F; color: #07130D; border: none; padding: 15px 26px; font-size: 16px; font-weight: 600; border-radius: 999px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;')}>
              Get started free <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#07130D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={sx('border-top: 1px solid rgba(255,255,255,0.08);')}>
        <div style={sx('max-width: 1160px; margin: 0 auto; padding: 44px 32px 36px; display: flex; align-items: flex-start; justify-content: space-between; gap: 32px; flex-wrap: wrap;')}>
          <div style={sx('max-width: 280px;')}>
            <div style={sx('display: flex; align-items: center; gap: 10px; margin-bottom: 12px;')}>
              <div style={sx('width: 26px; height: 26px; border-radius: 8px; background: #16C47F; display: flex; align-items: center; justify-content: center;')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" fill="#07130D"></path><path d="M9 9.2l2.2 2.4L15.4 7" stroke="#16C47F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <span style={sx("font-family: 'Space Grotesk'; font-weight: 600; color: #F5F2EB; font-size: 17px;")}>Alimi</span>
            </div>
            <p style={sx('margin: 0; font-size: 13.5px; color: #7C8B83; line-height: 1.6;')}>Autonomous AI agents that hold real sales conversations on WhatsApp &amp; Email, 24/7.</p>
          </div>
          <div style={sx('display: flex; gap: 56px; flex-wrap: wrap;')}>
            <div>
              <div style={sx('font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #7C8B83; margin-bottom: 14px;')}>Product</div>
              <div style={sx('display: flex; flex-direction: column; gap: 10px;')}>
                <a href="#features" style={sx('color: #9FB0A6; font-size: 13.5px; text-decoration: none;')}>Features</a>
                <a href="#how-it-works" style={sx('color: #9FB0A6; font-size: 13.5px; text-decoration: none;')}>How it works</a>
                <button onClick={ctx.goDemo} style={sx('background: none; border: none; padding: 0; text-align: left; color: #9FB0A6; font-size: 13.5px; cursor: pointer;')}>Watch demo</button>
              </div>
            </div>
            <div>
              <div style={sx('font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #7C8B83; margin-bottom: 14px;')}>Company</div>
              <div style={sx('display: flex; flex-direction: column; gap: 10px;')}>
                <a href="#customers" style={sx('color: #9FB0A6; font-size: 13.5px; text-decoration: none;')}>Customers</a>
                <button onClick={ctx.goSignup} style={sx('background: none; border: none; padding: 0; text-align: left; color: #9FB0A6; font-size: 13.5px; cursor: pointer;')}>Get started</button>
              </div>
            </div>
          </div>
        </div>
        <div style={sx('border-top: 1px solid rgba(255,255,255,0.06);')}>
          <div style={sx('max-width: 1160px; margin: 0 auto; padding: 18px 32px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;')}>
            <span style={sx('font-size: 12.5px; color: #6E7C74;')}>© 2026 Alimi. All rights reserved.</span>
            <span style={sx('font-size: 12.5px; color: #6E7C74;')}>Trusted by 200+ businesses across Lagos, Accra, and Nairobi.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
