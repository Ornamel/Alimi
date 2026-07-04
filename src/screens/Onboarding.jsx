import React, { Fragment } from 'react';
import { sx } from '../lib/sx.js';

export default function Onboarding({ ctx }) {
  return (
    <div className="scr" style={sx('background: #F5F2EB; min-height: 100vh; display: flex; flex-direction: column;')}>
      {/* progress */}
      <div style={sx('padding: 22px 32px; display: flex; align-items: center; gap: 16px; max-width: 760px; margin: 0 auto; width: 100%;')}>
        <div style={sx('display: flex; align-items: center; gap: 10px;')}>
          <div style={sx('width: 26px; height: 26px; border-radius: 8px; background: #16C47F; display: flex; align-items: center; justify-content: center;')}><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" fill="#07130D"></path><path d="M9 9.2l2.2 2.4L15.4 7" stroke="#16C47F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          <span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px;")}>Alimi</span>
        </div>
        <div style={sx('flex: 1; height: 6px; background: #E4DFD3; border-radius: 4px; overflow: hidden;')}><div style={sx(ctx.obProgressStyle)}></div></div>
        <span style={sx('font-size: 13px; color: #6E7A73; font-weight: 600; white-space: nowrap;')}>{ctx.obStepLabel}</span>
      </div>

      <div style={sx('flex: 1; display: flex; justify-content: center; padding: 20px 32px 60px;')}>
        <div style={sx('width: 100%; max-width: 760px;')}>

          {/* STEP 1: BUSINESS PROFILE */}
          {ctx.obStep1 && (
            <>
              <div style={sx('text-align: center; margin-bottom: 32px;')}>
                <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 34px; margin: 0; letter-spacing: -0.01em;")}>Let's build your first AI agent.</h1>
                <p style={sx('margin: 10px 0 0; color: #6E7A73; font-size: 16px;')}>You are 5 steps away from your first autonomous conversation. What's your business?</p>
              </div>

              <div style={sx(ctx.gridObStep1a)}>
                <div>
                  <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 7px;')}>Full name</label>
                  <input value={ctx.obName} onChange={ctx.setObName} style={sx(ctx.selInputStyle + ' background: #fff;')} />
                </div>
                <div>
                  <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 7px;')}>Business email</label>
                  <input value={ctx.obEmail} onChange={ctx.setObEmail} style={sx(ctx.selInputStyle + ' background: #fff;')} />
                </div>
              </div>
              <div style={sx('margin-bottom: 20px;')}>
                <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 7px;')}>Business name</label>
                <input value={ctx.obBusiness} onChange={ctx.setObBusiness} style={sx(ctx.selInputStyle + ' background: #fff;')} />
              </div>

              <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 8px;')}>Business vertical</label>
              <div style={sx(ctx.gridObVerticals)}>
                {ctx.verticals.map((v, i) => (
                  <Fragment key={v.title || i}>
                    <div onClick={v.select} style={sx(v.cardStyle)}>
                      <div style={sx(`width: 42px; height: 42px; border-radius: 12px; background: ${v.iconBg}; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 12px;`)}>{v.emoji}</div>
                      <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; color: #12211B;")}>{v.title}</div>
                      <div style={sx('font-size: 13px; color: #6E7A73; margin-top: 3px;')}>{v.sub}</div>
                    </div>
                  </Fragment>
                ))}
              </div>

              <div style={sx(ctx.gridObStep1c)}>
                <div>
                  <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 7px;')}>Primary language</label>
                  <select value={ctx.obLanguage} onChange={ctx.setObLanguage} style={sx(ctx.selInputStyle + ' background: #fff;')}>
                    <option>English</option>
                    <option>Pidgin English</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 7px;')}>Expected conversation volume</label>
                  <select value={ctx.obVolume} onChange={ctx.setObVolume} style={sx(ctx.selInputStyle + ' background: #fff;')}>
                    <option>Under 100 conversations/mo</option>
                    <option>100–500 conversations/mo</option>
                    <option>500–2,000 conversations/mo</option>
                    <option>2,000+ conversations/mo</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* STEP 2: AGENT SETUP */}
          {ctx.obStep2 && (
            <>
              <div style={sx('text-align: center; margin-bottom: 28px;')}>
                <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 30px; margin: 0; letter-spacing: -0.01em;")}>Set up your first agent.</h1>
                <p style={sx('margin: 10px 0 0; color: #6E7A73; font-size: 16px;')}>Give it a name and a personality — you'll see it come alive on the right.</p>
              </div>
              <div style={sx(ctx.gridObStep2)}>
                <div style={sx('display: flex; flex-direction: column; gap: 18px;')}>
                  <div>
                    <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 7px;')}>Give your agent a name</label>
                    <p style={sx('margin: 0 0 8px; font-size: 12.5px; color: #9AA39C;')}>This is internal — your customers will not see it.</p>
                    <input value={ctx.builderName} onChange={ctx.setName} placeholder="e.g. Lekki Homes Closer" style={sx(ctx.selInputStyle + ' background: #fff;')} />
                  </div>
                  <div>
                    <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 7px;')}>Set your agent's personality <span style={sx('color:#9AA39C; font-weight:500;')}>(optional)</span></label>
                    <p style={sx('margin: 0 0 8px; font-size: 12.5px; color: #9AA39C;')}>Try it — the live preview updates as you type.</p>
                    <textarea value={ctx.builderPersona} onChange={ctx.setPersona} placeholder="e.g. Warm and professional. Always accurate on pricing. Never pushy." style={sx("width: 100%; min-height: 90px; resize: vertical; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 14px; line-height: 1.5; outline: none; color: #12211B;")}></textarea>
                  </div>
                </div>

                <div>
                  <div style={sx('display: flex; align-items: center; gap: 8px; margin-bottom: 12px;')}>
                    <span style={sx('width: 8px; height: 8px; border-radius: 50%; background: #16C47F; animation: livePulse 2.4s infinite;')}></span>
                    <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0;")}>Live preview</h2>
                  </div>
                  <div style={sx('background: #0C1712; border-radius: 22px; padding: 14px;')}>
                    <div style={sx('background: #ECE5DD; border-radius: 14px; overflow: hidden;')}>
                      <div style={sx('background: #0B7A4B; padding: 12px 14px; display: flex; align-items: center; gap: 10px;')}>
                        <div style={sx('width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;')}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.4A.6.6 0 0 1 4.8 19V5.5Z" fill="#fff"></path></svg></div>
                        <div style={sx('flex: 1; color: #fff;')}>
                          <div style={sx('font-weight: 600; font-size: 14px;')}>{ctx.pvName}</div>
                          <div style={sx('font-size: 11px; opacity: .85; display: flex; align-items: center; gap: 5px;')}><span style={sx('width:6px; height:6px; border-radius:50%; background:#7CFFB2;')}></span>{ctx.pvChannel} · online</div>
                        </div>
                      </div>
                      <div style={sx('padding: 16px 14px; min-height: 200px; background-image: radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 16px 16px;')}>
                        <div style={sx('align-self: center; text-align: center; margin-bottom: 14px;')}><span style={sx('font-size: 10.5px; color: #6E7A73; background: #FCF6DE; padding: 4px 10px; border-radius: 8px;')}>🔒 Messages are end-to-end encrypted</span></div>
                        <div style={sx('max-width: 85%; background: #fff; padding: 9px 12px; border-radius: 4px 12px 12px 12px; font-size: 13.5px; line-height: 1.5; color: #12211B; box-shadow: 0 1px 1px rgba(0,0,0,0.05);')}>
                          Hi 👋 Welcome to {ctx.obBusiness}! I'm here to help you find the right fit — what are you looking for?
                          <div style={sx('text-align: right; font-size: 10px; color: #9AA39C; margin-top: 3px;')}>9:41 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p style={sx('margin: 12px 4px 0; font-size: 12.5px; color: #9AA39C; text-align: center;')}>This is how your agent will open every conversation.</p>
                </div>
              </div>
            </>
          )}

          {/* STEP 3: CHANNEL CONNECTION */}
          {ctx.obStep3 && (
            <>
              <div style={sx('text-align: center; margin-bottom: 28px;')}>
                <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 30px; margin: 0; letter-spacing: -0.01em;")}>Where should your agent talk to leads?</h1>
                <p style={sx('margin: 10px 0 0; color: #6E7A73; font-size: 16px;')}>Choose one or both — you can add the other later.</p>
              </div>
              <div style={sx('display: flex; gap: 16px; max-width: 560px; margin: 0 auto;')}>
                <button onClick={ctx.toggleWa} style={sx(ctx.waCardStyle)}>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;')}>
                    <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: #E7F3EC; display: flex; align-items: center; justify-content: center;')}><svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1L7 22l4.2-2.2c.3 0 .5.1.8.1 5 0 9-3.8 9-8.5S17 2 12 2Z" fill="#0B7A4B"></path></svg></div>
                    {ctx.waCheck && <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#0B7A4B"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
                  </div>
                  <div style={sx('font-weight: 600; font-size: 16px; color: #12211B; margin-bottom: 4px;')}>WhatsApp</div>
                  <div style={sx('font-size: 13px; color: #6E7A73; line-height: 1.45;')}>2.7B+ users. Your customers are already here.</div>
                </button>
                <button onClick={ctx.toggleEmail} style={sx(ctx.emCardStyle)}>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;')}>
                    <div style={sx('width: 40px; height: 40px; border-radius: 11px; background: #E9EFFC; display: flex; align-items: center; justify-content: center;')}><svg width="21" height="21" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke="#2F6BEC" strokeWidth="1.8"></rect><path d="M4 7l8 6 8-6" stroke="#2F6BEC" strokeWidth="1.8" strokeLinecap="round"></path></svg></div>
                    {ctx.emCheck && <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#0B7A4B"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
                  </div>
                  <div style={sx('font-weight: 600; font-size: 16px; color: #12211B; margin-bottom: 4px;')}>Email</div>
                  <div style={sx('font-size: 13px; color: #6E7A73; line-height: 1.45;')}>Professional reach for B2B and follow-up sequences.</div>
                </button>
              </div>
            </>
          )}

          {/* STEP 4: KNOWLEDGE & GOAL */}
          {ctx.obStep4 && (
            <>
              <div style={sx('text-align: center; margin-bottom: 28px;')}>
                <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 30px; margin: 0; letter-spacing: -0.01em;")}>What should your agent know?</h1>
                <p style={sx('margin: 10px 0 0; color: #6E7A73; font-size: 16px;')}>Teach it your business, then tell it what a win looks like.</p>
              </div>
              <div style={sx('max-width: 620px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;')}>
                <div>
                  <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 6px;')}>What does your agent need to know?</label>
                  <p style={sx('margin: 0 0 12px; font-size: 12.5px; color: #9AA39C;')}>Upload catalogues, pricing docs, or FAQs. Your agent learns from them instantly.</p>
                  <div style={sx('border: 1.5px dashed #D8D2C4; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 12px; background: #FBFAF6;')}>
                    <div style={sx('font-size: 14px; color: #6E7A73; font-weight: 600;')}>Add files or paste a URL</div>
                    <div style={sx('font-size: 12px; color: #9AA39C; margin-top: 3px;')}>PDF, DOCX, CSV up to 50MB each</div>
                  </div>
                  <div style={sx('display: flex; flex-direction: column; gap: 8px;')}>
                    <div style={sx('display: flex; align-items: center; gap: 10px; padding: 9px 12px; background: #E7F3EC; border-radius: 10px;')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#0B7A4B"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg><span style={sx('flex: 1; font-size: 13px; color: #12211B; font-weight: 500;')}>Lekki_Penthouse_PriceSheet.pdf</span><span style={sx('font-size: 12px; color: #0B7A4B; font-weight: 600;')}>Expert ready</span></div>
                    <div style={sx('display: flex; align-items: center; gap: 10px; padding: 9px 12px; background: #fff; border-radius: 10px;')}><div style={sx('width:16px; height:16px; border:2px solid #D8D2C4; border-top-color:#0B7A4B; border-radius:50%; animation: livePulse 1s linear infinite;')}></div><span style={sx('flex: 1; font-size: 13px; color: #12211B; font-weight: 500;')}>FAQ_2026.docx</span><span style={sx('font-size: 12px; color: #9AA39C;')}>Reading — about 2 min</span></div>
                  </div>
                </div>
                <div>
                  <label style={sx('display:block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 6px;')}>What counts as a win?</label>
                  <p style={sx('margin: 0 0 12px; font-size: 12.5px; color: #9AA39C;')}>Define the outcome your agent works toward. The more specific, the better.</p>
                  <textarea placeholder="e.g. Prospect books a property viewing with deposit intent confirmed." style={sx("width: 100%; min-height: 64px; resize: vertical; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 12px 15px; font-size: 14px; line-height: 1.5; outline: none; color: #12211B;")} defaultValue="Prospect books a property viewing with deposit intent confirmed."></textarea>
                </div>
              </div>
            </>
          )}

          {/* STEP 5: SHARE & LAUNCH */}
          {ctx.obStep5 && (
            <>
              <div style={sx('text-align: center; margin-bottom: 28px;')}>
                <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 30px; margin: 0; letter-spacing: -0.01em;")}>Share your agent</h1>
                <p style={sx('margin: 10px 0 0; color: #6E7A73; font-size: 16px;')}>Every entry point carries a source label — your agent knows exactly where each lead came from.</p>
              </div>
              <div style={sx('max-width: 620px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px;')}>
                <div style={sx('display: flex; gap: 10px; flex-wrap: wrap;')}>
                  <div style={sx("flex: 1; min-width: 220px; background: #fff; border: 1px solid #EAE5D9; border-radius: 10px; padding: 11px 14px; font-family: 'Space Mono'; font-size: 12px; color: #3D4B44; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;")}>wa.me/234...?text=lekki-homes-closer</div>
                  <button onClick={ctx.copyLink} style={sx('display:inline-flex; align-items:center; gap:7px; background: #12211B; color: #fff; border: none; padding: 0 16px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>Copy link</button>
                  <button onClick={ctx.dlPng} style={sx('display:inline-flex; align-items:center; gap:7px; background: #16C47F; color: #12211B; border: none; padding: 0 16px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>Download QR code</button>
                </div>
                <button onClick={ctx.goEntry} style={sx('align-self:center; display:inline-flex; align-items:center; gap:7px; background: none; color: #0B7A4B; border: 1px solid #E4DFD3; padding: 9px 16px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>More entry points →</button>
              </div>
            </>
          )}

          <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-top: 32px; max-width: 620px; margin-left: auto; margin-right: auto;')}>
            <button onClick={ctx.obBack} style={sx('background: none; border: none; color: #6E7A73; font-size: 14px; font-weight: 600; cursor: pointer;')}>← Back</button>
            <div style={sx('display: flex; align-items: center; gap: 12px;')}>
              <button onClick={ctx.saveOnboardDraft} style={sx('background: none; border: 1px solid #E4DFD3; color: #6E7A73; font-size: 13.5px; font-weight: 600; cursor: pointer; padding: 11px 18px; border-radius: 999px;')}>Save as draft</button>
              {ctx.obStep5 && (
                <button onClick={ctx.launch} style={sx('display: inline-flex; align-items: center; gap: 8px; background: #0B7A4B; color: #fff; border: none; padding: 13px 26px; border-radius: 999px; font-size: 15px; font-weight: 600; cursor: pointer; box-shadow: 0 3px 10px rgba(11,122,75,0.25);')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  Launch agent
                </button>
              )}
              {ctx.notObStep5 && (
                <button onClick={ctx.obNext} style={sx('display: inline-flex; align-items: center; gap: 8px; background: #0B7A4B; color: #fff; border: none; padding: 13px 26px; border-radius: 999px; font-size: 15px; font-weight: 600; cursor: pointer; box-shadow: 0 3px 10px rgba(11,122,75,0.25);')}>Continue →</button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* launch toast */}
      {ctx.showToast && (
        <div style={sx('position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%); z-index: 300; display: flex; align-items: center; gap: 12px; background: #0C1712; color: #F5F2EB; padding: 14px 22px; border-radius: 14px; box-shadow: 0 12px 40px rgba(0,0,0,0.3);')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#16C47F"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#07130D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <span style={sx('font-size: 14.5px; font-weight: 500;')}>Your agent is live. Conversations start the moment someone taps your link.</span>
        </div>
      )}
    </div>
  );
}
