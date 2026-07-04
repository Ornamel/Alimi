import React from 'react';
import { sx } from '../lib/sx.js';

export default function AgentBuilder({ ctx }) {
  return (
    <div className="scr" style={sx('min-height: 100vh; background: #F5F2EB;')}>
      {/* top bar */}
      <div style={sx('padding: 16px 32px; background: #fff; border-bottom: 1px solid #EAE5D9; position: sticky; top: 0; z-index: 20;')}>
        <div style={sx('max-width: 720px; margin: 0 auto; display: flex; align-items: center; gap: 16px;')}>
          <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0; white-space: nowrap;")}>Build your AI agent</h1>
          <div style={sx('flex: 1; height: 6px; background: #E4DFD3; border-radius: 4px; overflow: hidden;')}><div style={sx(ctx.bProgressStyle)}></div></div>
          <span style={sx('font-size: 12.5px; color: #6E7A73; font-weight: 600; white-space: nowrap;')}>{ctx.bStepLabel}</span>
        </div>
      </div>

      <div style={sx('max-width: 1120px; margin: 0 auto; padding: 34px 32px 60px;')}>

        {/* STEP 1: AGENT DETAILS */}
        {ctx.bStep1 && (
          <div style={sx('max-width: 620px; margin: 0 auto;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 26px; margin: 0 0 6px; letter-spacing: -0.01em;")}>Agent details</h2>
            <p style={sx('margin: 0 0 26px; color: #6E7A73; font-size: 15px;')}>Your agent handles conversations 24/7. You stay in control.</p>
            <div style={sx('display: flex; flex-direction: column; gap: 20px;')}>
              <div>
                <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 6px;')}>Give your agent a name</label>
                <p style={sx('margin: 0 0 8px; font-size: 12.5px; color: #9AA39C;')}>This is internal — your customers will not see it.</p>
                <input
                  value={ctx.builderName}
                  onChange={ctx.setName}
                  placeholder="e.g. Lekki Homes Closer"
                  style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 15px; outline: none; color: #12211B;')}
                />
              </div>
              <div>
                <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 6px;')}>Set your agent's personality <span style={sx('color:#9AA39C; font-weight:500;')}>(optional)</span></label>
                <p style={sx('margin: 0 0 8px; font-size: 12.5px; color: #9AA39C;')}>Try it — the live preview updates as you type.</p>
                <textarea
                  value={ctx.builderPersona}
                  onChange={ctx.setPersona}
                  placeholder="e.g. Warm and professional. Always accurate on pricing. Never pushy."
                  style={sx('width: 100%; min-height: 80px; resize: vertical; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 14px; line-height: 1.5; outline: none; color: #12211B;')}
                />
              </div>
              <div>
                <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 6px;')}>What should this agent help you close?</label>
                <input
                  value={ctx.builderUseCase}
                  onChange={ctx.setUseCase}
                  placeholder="e.g. Book property viewings for the Lekki listings"
                  style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 14px; outline: none; color: #12211B;')}
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: CHANNEL SETUP */}
        {ctx.bStep2 && (
          <div style={sx('max-width: 620px; margin: 0 auto;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 26px; margin: 0 0 6px; letter-spacing: -0.01em;")}>Choose where this agent should respond</h2>
            <p style={sx('margin: 0 0 26px; color: #6E7A73; font-size: 15px;')}>Select one or both — you can connect the other later.</p>
            <div style={sx('display: flex; gap: 16px;')}>
              <button onClick={ctx.toggleWa} style={sx(ctx.waCardStyle)}>
                <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;')}>
                  <div style={sx('width: 38px; height: 38px; border-radius: 11px; background: #E7F3EC; display: flex; align-items: center; justify-content: center;')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1L7 22l4.2-2.2c.3 0 .5.1.8.1 5 0 9-3.8 9-8.5S17 2 12 2Z" fill="#0B7A4B"></path></svg>
                  </div>
                  {ctx.waCheck && (
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#0B7A4B"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  )}
                </div>
                <div style={sx('font-weight: 600; font-size: 15px; color: #12211B; margin-bottom: 4px;')}>WhatsApp</div>
                <div style={sx('font-size: 12.5px; color: #6E7A73; line-height: 1.45; margin-bottom: 10px;')}>2.7B+ users. Your customers are already here.</div>
                {ctx.waCheck && (
                  <div style={sx('font-size: 12px; font-weight: 600; color: #0B7A4B;')}>✓ Connected — +234 801 234 5678</div>
                )}
                {ctx.notWaCheck && (
                  <div style={sx('font-size: 12px; font-weight: 600; color: #9AA39C;')}>Not connected — will need verification</div>
                )}
              </button>
              <button onClick={ctx.toggleEmail} style={sx(ctx.emCardStyle)}>
                <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;')}>
                  <div style={sx('width: 38px; height: 38px; border-radius: 11px; background: #E9EFFC; display: flex; align-items: center; justify-content: center;')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke="#2F6BEC" strokeWidth="1.8"></rect><path d="M4 7l8 6 8-6" stroke="#2F6BEC" strokeWidth="1.8" strokeLinecap="round"></path></svg>
                  </div>
                  {ctx.emCheck && (
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#0B7A4B"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  )}
                </div>
                <div style={sx('font-weight: 600; font-size: 15px; color: #12211B; margin-bottom: 4px;')}>Email</div>
                <div style={sx('font-size: 12.5px; color: #6E7A73; line-height: 1.45; margin-bottom: 10px;')}>Professional reach for B2B and follow-up sequences.</div>
                {ctx.emCheck && (
                  <div style={sx('font-size: 12px; font-weight: 600; color: #0B7A4B;')}>✓ Connected — hello@lekkihomes.com</div>
                )}
                {ctx.notEmCheck && (
                  <div style={sx('font-size: 12px; font-weight: 600; color: #9AA39C;')}>Not connected — inbox needed</div>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: KNOWLEDGE BASE */}
        {ctx.bStep3 && (
          <div style={sx('max-width: 620px; margin: 0 auto;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 26px; margin: 0 0 6px; letter-spacing: -0.01em;")}>What does your agent need to know?</h2>
            <p style={sx('margin: 0 0 26px; color: #6E7A73; font-size: 15px;')}>Upload your catalogues, pricing docs, or FAQs. Your agent learns from them instantly.</p>
            <div style={sx('border: 1.5px dashed #D8D2C4; border-radius: 12px; padding: 22px; text-align: center; margin-bottom: 14px; background: #FBFAF6;')}>
              <div style={sx('font-size: 14px; color: #6E7A73; font-weight: 600;')}>Add files or paste a URL</div>
              <div style={sx('font-size: 12px; color: #9AA39C; margin-top: 3px;')}>PDF, DOCX, CSV up to 50MB each</div>
            </div>
            <div style={sx('display: flex; flex-direction: column; gap: 8px;')}>
              <div style={sx('display: flex; align-items: center; gap: 10px; padding: 9px 12px; background: #E7F3EC; border-radius: 10px;')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#0B7A4B"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span style={sx('flex: 1; font-size: 13px; color: #12211B; font-weight: 500;')}>Lekki_Penthouse_PriceSheet.pdf</span>
                <span style={sx('font-size: 12px; color: #0B7A4B; font-weight: 600;')}>Expert ready</span>
              </div>
              <div style={sx('display: flex; align-items: center; gap: 10px; padding: 9px 12px; background: #E7F3EC; border-radius: 10px;')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#0B7A4B"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span style={sx('flex: 1; font-size: 13px; color: #12211B; font-weight: 500;')}>lekkihomes.ai/listings</span>
                <span style={sx('font-size: 12px; color: #0B7A4B; font-weight: 600;')}>Indexed</span>
              </div>
              <div style={sx('display: flex; align-items: center; gap: 10px; padding: 9px 12px; background: #fff; border: 1px solid #EAE5D9; border-radius: 10px;')}>
                <div style={sx('width:16px; height:16px; border:2px solid #D8D2C4; border-top-color:#0B7A4B; border-radius:50%; animation: livePulse 1s linear infinite;')}></div>
                <span style={sx('flex: 1; font-size: 13px; color: #12211B; font-weight: 500;')}>FAQ_2026.docx</span>
                <span style={sx('font-size: 12px; color: #9AA39C;')}>Reading — about 2 min</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: SUCCESS EVENT & PREVIEW */}
        {ctx.bStep4 && (
          <div style={sx(ctx.gridBuilderStep4)}>
            <div>
              <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 26px; margin: 0 0 6px; letter-spacing: -0.01em;")}>What counts as a win?</h2>
              <p style={sx('margin: 0 0 14px; color: #6E7A73; font-size: 15px;')}>Define the outcome your agent is working toward. The more specific, the better.</p>
              <textarea
                placeholder="e.g. Prospect books a property viewing with deposit intent confirmed."
                style={sx('width: 100%; min-height: 100px; resize: vertical; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 14px; line-height: 1.5; outline: none; color: #12211B;')}
                defaultValue="Prospect books a property viewing with deposit intent confirmed."
              />
            </div>
            <div>
              <div style={sx('display: flex; align-items: center; gap: 8px; margin-bottom: 12px;')}>
                <span style={sx('width: 8px; height: 8px; border-radius: 50%; background: #16C47F; animation: livePulse 2.4s infinite;')}></span>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0;")}>Live preview</h2>
              </div>
              <div style={sx('background: #0C1712; border-radius: 22px; padding: 14px;')}>
                <div style={sx('background: #ECE5DD; border-radius: 14px; overflow: hidden;')}>
                  <div style={sx('background: #0B7A4B; padding: 12px 14px; display: flex; align-items: center; gap: 10px;')}>
                    <div style={sx('width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;')}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" fill="#fff"></path></svg>
                    </div>
                    <div style={sx('flex: 1; color: #fff;')}>
                      <div style={sx('font-weight: 600; font-size: 14px;')}>{ctx.pvName}</div>
                      <div style={sx('font-size: 11px; opacity: .85; display: flex; align-items: center; gap: 5px;')}><span style={sx('width:6px; height:6px; border-radius:50%; background:#7CFFB2;')}></span>{ctx.pvChannel} · online</div>
                    </div>
                  </div>
                  <div style={sx('padding: 16px 14px; min-height: 200px; background-image: radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 16px 16px;')}>
                    <div style={sx('align-self: center; text-align: center; margin-bottom: 14px;')}><span style={sx('font-size: 10.5px; color: #6E7A73; background: #FCF6DE; padding: 4px 10px; border-radius: 8px;')}>🔒 Messages are end-to-end encrypted</span></div>
                    <div style={sx('max-width: 85%; background: #fff; padding: 9px 12px; border-radius: 4px 12px 12px 12px; font-size: 13.5px; line-height: 1.5; color: #12211B; box-shadow: 0 1px 1px rgba(0,0,0,0.05);')}>
                      Hi 👋 Welcome to Lekki Homes! I saw you came from our penthouse tour. I'm here to help you find the right property — what are you looking for?
                      <div style={sx('text-align: right; font-size: 10px; color: #9AA39C; margin-top: 3px;')}>9:41 AM</div>
                    </div>
                  </div>
                </div>
              </div>
              <p style={sx('margin: 12px 4px 0; font-size: 12.5px; color: #9AA39C; text-align: center;')}>This is how your agent will open every conversation.</p>
            </div>
          </div>
        )}

        {/* STEP 5: SHARE & LAUNCH */}
        {ctx.bStep5 && (
          <div style={sx('max-width: 620px; margin: 0 auto;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 26px; margin: 0 0 6px; letter-spacing: -0.01em;")}>Share your agent</h2>
            <p style={sx('margin: 0 0 26px; color: #6E7A73; font-size: 15px;')}>Every entry point carries a source label — your agent knows exactly where each lead came from.</p>
            <div style={sx('display: flex; flex-direction: column; gap: 12px;')}>
              <div style={sx('display: flex; gap: 10px; flex-wrap: wrap;')}>
                <div style={sx("flex: 1; min-width: 220px; background: #fff; border: 1px solid #E4DFD3; border-radius: 10px; padding: 11px 14px; font-family: 'Space Mono'; font-size: 12px; color: #3D4B44; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;")}>wa.me/234...?text=lekki-homes-closer</div>
                <button onClick={ctx.copyLink} style={sx('display:inline-flex; align-items:center; gap:7px; background: #12211B; color: #fff; border: none; padding: 0 16px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>Copy link</button>
              </div>
              <div style={sx('display: flex; gap: 10px; flex-wrap: wrap;')}>
                <button onClick={ctx.dlPng} style={sx('flex: 1; min-width: 180px; display:inline-flex; align-items:center; justify-content:center; gap:7px; background: #16C47F; color: #12211B; border: none; padding: 11px 16px; border-radius: 999px; font-size: 13.5px; font-weight: 600; cursor: pointer;')}>Download QR code</button>
                <button onClick={ctx.copySnippet} style={sx('flex: 1; min-width: 180px; display:inline-flex; align-items:center; justify-content:center; gap:7px; background: #fff; color: #12211B; border: 1px solid #E4DFD3; padding: 11px 16px; border-radius: 999px; font-size: 13.5px; font-weight: 600; cursor: pointer;')}>Copy widget code</button>
              </div>
              <p style={sx('margin: 4px 0 0; font-size: 12.5px; color: #9AA39C;')}>Print the QR, post it, project it — works anywhere. Paste the widget snippet to add a chat bubble to your site.</p>
              <button onClick={ctx.goEntry} style={sx('align-self:flex-start; margin-top: 6px; display:inline-flex; align-items:center; gap:7px; background: none; color: #0B7A4B; border: 1px solid #E4DFD3; padding: 9px 16px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>More entry points →</button>
            </div>
          </div>
        )}

        {/* bottom nav */}
        <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-top: 40px; max-width: 620px; margin-left: auto; margin-right: auto;')}>
          <button onClick={ctx.bBack} style={sx('background: none; border: none; color: #6E7A73; font-size: 14px; font-weight: 600; cursor: pointer;')}>{ctx.bBackLabel}</button>
          <div style={sx('display: flex; align-items: center; gap: 12px;')}>
            <button onClick={ctx.saveDraft} style={sx('background: none; border: 1px solid #E4DFD3; color: #6E7A73; font-size: 13.5px; font-weight: 600; cursor: pointer; padding: 11px 18px; border-radius: 999px;')}>Save as draft</button>
            {ctx.bNotStep5 && (
              <button onClick={ctx.bNext} style={sx('display: inline-flex; align-items: center; gap: 8px; background: #0B7A4B; color: #fff; border: none; padding: 12px 24px; border-radius: 999px; font-size: 14.5px; font-weight: 600; cursor: pointer; box-shadow: 0 3px 10px rgba(11,122,75,0.25);')}>Continue →</button>
            )}
            {ctx.bStep5 && (
              <button onClick={ctx.launch} style={sx('display: inline-flex; align-items: center; gap: 8px; background: #0B7A4B; color: #fff; border: none; padding: 12px 24px; border-radius: 999px; font-size: 14.5px; font-weight: 600; cursor: pointer; box-shadow: 0 3px 10px rgba(11,122,75,0.28);')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                {ctx.launchBtnLabel}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* launch toast */}
      {ctx.showToast && (
        <div style={sx('position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%); z-index: 300; display: flex; align-items: center; gap: 12px; background: #0C1712; color: #F5F2EB; padding: 14px 22px; border-radius: 14px; box-shadow: 0 12px 40px rgba(0,0,0,0.3);')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#16C47F"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#07130D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <span style={sx('font-size: 14.5px; font-weight: 500;')}>{ctx.toastMsg}</span>
        </div>
      )}
    </div>
  );
}
