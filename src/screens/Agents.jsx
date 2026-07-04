import React, { Fragment } from 'react';
import { sx } from '../lib/sx.js';

export default function Agents({ ctx }) {
  return (
    <div className="scr" style={sx('background: #F5F2EB; min-height: 100vh; padding: 36px 40px 60px;')}>
      <div style={sx('max-width: 1080px; margin: 0 auto;')}>

        <div style={sx('display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; margin-bottom: 22px;')}>
          <div>
            <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px; margin: 0; letter-spacing: -0.01em;")}>Your Agents</h1>
            <p style={sx('margin: 8px 0 0; color: #6E7A73; font-size: 15px;')}>Choose an agent to manage, or create a new one.</p>
          </div>
          <div style={sx('display: flex; align-items: center; gap: 10px; flex-shrink: 0;')}>

            {ctx.limitReached && (
              <button onClick={ctx.upgradeFromAgents} style={sx('background: #12211B; color: #fff; border: none; padding: 12px 18px; border-radius: 999px; font-size: 14.5px; font-weight: 600; cursor: pointer;')}>Upgrade plan</button>
            )}
            <button onClick={ctx.createNewAgent} disabled={ctx.limitReached} title={ctx.createBtnTitle} style={sx(ctx.createBtnStyle)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"></path></svg>
              Create new agent
            </button>
            <div style={sx('position: relative;')}>
              <button onClick={ctx.toggleProfileMenu} style={sx('display: flex; align-items: center; gap: 6px; background: none; border: none; cursor: pointer; padding: 2px;')}>
                <span style={sx('width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg,#E07B2E,#C9631C); color: #fff; font-weight: 600; font-size: 14.5px; display: flex; align-items: center; justify-content: center;')}>T</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5" stroke="#6E7A73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {ctx.profileMenuOpen && (
                <div style={sx('position: absolute; top: 48px; right: 0; z-index: 50; background: #fff; border: 1px solid #EAE5D9; border-radius: 14px; box-shadow: 0 12px 32px rgba(0,0,0,0.12); min-width: 190px; padding: 6px; display: flex; flex-direction: column;')}>
                  <div style={sx('padding: 10px 12px 8px; border-bottom: 1px solid #F0ECE1; margin-bottom: 4px;')}>
                    <div style={sx('font-size: 13.5px; font-weight: 600; color: #12211B;')}>Tunde Bakare</div>
                    <div style={sx('font-size: 12px; color: #9AA39C;')}>tunde@lekkihomes.com</div>
                  </div>
                  <button onClick={ctx.goProfileFromMenu} style={sx('display: flex; align-items: center; gap: 9px; width: 100%; text-align: left; background: none; border: none; padding: 9px 10px; border-radius: 8px; font-size: 13.5px; font-weight: 500; color: #12211B; cursor: pointer;')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="#6E7A73" strokeWidth="1.7"/><path d="M4.5 20c1.5-4 5-6 7.5-6s6 2 7.5 6" stroke="#6E7A73" strokeWidth="1.7" strokeLinecap="round"/></svg>
                    Profile
                  </button>
                  <button onClick={ctx.goSettingsFromMenu} style={sx('display: flex; align-items: center; gap: 9px; width: 100%; text-align: left; background: none; border: none; padding: 9px 10px; border-radius: 8px; font-size: 13.5px; font-weight: 500; color: #12211B; cursor: pointer;')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#6E7A73" strokeWidth="1.7"/><path d="M19.4 13.5c.04-.5.04-1 0-1.5l1.5-1.2-1.5-2.6-1.8.5c-.4-.3-.8-.6-1.3-.8L16 5.5h-3l-.3 1.9c-.5.2-.9.5-1.3.8l-1.8-.5-1.5 2.6L9.6 12c-.04.5-.04 1 0 1.5L8.1 14.7l1.5 2.6 1.8-.5c.4.3.8.6 1.3.8l.3 1.9h3l.3-1.9c.5-.2.9-.5 1.3-.8l1.8.5 1.5-2.6-1.5-1.2Z" stroke="#6E7A73" strokeWidth="1.4" strokeLinejoin="round"/></svg>
                    Settings
                  </button>
                  <div style={sx('border-top: 1px solid #F0ECE1; margin: 4px 0;')}></div>
                  <button onClick={ctx.signOutFromMenu} style={sx('display: flex; align-items: center; gap: 9px; width: 100%; text-align: left; background: none; border: none; padding: 9px 10px; border-radius: 8px; font-size: 13.5px; font-weight: 500; color: #C9631C; cursor: pointer;')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 12H4M8 8l-4 4 4 4M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" stroke="#C9631C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PLAN LIMIT CARD */}
        <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 18px 22px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;')}>
          <div>
            <div style={sx('display: flex; align-items: center; gap: 8px; margin-bottom: 4px;')}>
              <span style={sx('font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; background: #E7F3EC; color: #0B7A4B; padding: 3px 10px; border-radius: 20px;')}>{ctx.yourAgentsPlanBadge}</span>
            </div>
            <p style={sx('margin: 0; font-size: 13.5px; color: #6E7A73;')}>You can create {ctx.agentLimit} AI agent{ctx.agentLimitPlural}on this plan. <span style={sx('font-weight: 600; color: #12211B;')}>{ctx.planUsageText}</span></p>
          </div>
          {ctx.limitReached && (
            <div style={sx('display: flex; align-items: center; gap: 12px;')}>
              <span style={sx('font-size: 12.5px; color: #C9631C; max-width: 320px; text-align: right;')}>You have reached your Free plan agent limit. Upgrade to create more agents.</span>
              <button onClick={ctx.upgradeFromAgents} style={sx('background: #0B7A4B; color: #fff; border: none; padding: 10px 18px; border-radius: 999px; font-size: 13.5px; font-weight: 600; cursor: pointer; white-space: nowrap;')}>Upgrade plan</button>
            </div>
          )}
        </div>

        {/* BRAND NEW ACCOUNT — EMPTY STATE (same screen, same header) */}
        {ctx.justSignedUp && (
          <div style={sx('max-width: 460px; margin: 60px auto 0; text-align: center;')}>
            <div style={sx('width: 64px; height: 64px; border-radius: 18px; background: #E7F3EC; display: flex; align-items: center; justify-content: center; margin: 0 auto 22px;')}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1L7 22l4.2-2.2c.3 0 .5.1.8.1 5 0 9-3.8 9-8.5S17 2 12 2Z" stroke="#0B7A4B" strokeWidth="1.8"></path></svg>
            </div>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 24px; margin: 0 0 10px; letter-spacing: -0.01em;")}>No agents yet</h2>
            <p style={sx('margin: 0 0 26px; color: #6E7A73; font-size: 15.5px; line-height: 1.55;')}>Create your first AI closer to start handling WhatsApp and Email conversations automatically.</p>
            <button onClick={ctx.createNewAgent} style={sx('display: inline-flex; align-items: center; gap: 8px; background: #0B7A4B; color: #fff; border: none; padding: 13px 26px; border-radius: 999px; font-size: 15px; font-weight: 600; cursor: pointer; box-shadow: 0 3px 10px rgba(11,122,75,0.25);')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"></path></svg>
              Create new agent
            </button>
            <p style={sx('margin: 16px 0 0; color: #9AA39C; font-size: 13px;')}>Free plan includes 1 agent. You can save your setup as a draft and continue later.</p>
          </div>
        )}

        {/* NORMAL AGENTS VIEW */}
        {ctx.notJustSignedUp && (
          <>
            <div style={sx('display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap;')}>
              {ctx.agentTabs.map((t, i) => (
                <Fragment key={t.label || i}>
                  <button onClick={t.go} style={sx(t.style)}>{t.label}</button>
                </Fragment>
              ))}
            </div>

            {ctx.hasNoAgentsInFilter && (
              <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 50px 28px; text-align: center; color: #9AA39C; font-size: 14px;')}>No agents in this view.</div>
            )}

            <div style={sx('display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px;')}>
              {ctx.agentCards.map((a, i) => (
                <Fragment key={a.id || i}>
                  <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 22px; display: flex; flex-direction: column; gap: 14px;')}>
                    <div style={sx('display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;')}>
                      <div>
                        <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 17px; margin: 0 0 6px;")}>{a.name}</h2>
                        <div style={sx('font-size: 12.5px; color: #9AA39C;')}>{a.channels}</div>
                      </div>
                      <span style={sx(a.statusStyle)}>{a.statusLabel}</span>
                    </div>
                    <div style={sx('font-size: 13px; color: #6E7A73; line-height: 1.5;')}>{a.statLine}</div>
                    <div style={sx('font-size: 12px; color: #9AA39C;')}>{a.lastActive}</div>
                    <div style={sx('display: flex; gap: 8px; margin-top: 4px; flex-wrap: wrap;')}>
                      <button onClick={a.openDash} style={sx('flex: 1; min-width: 130px; background: #0B7A4B; color: #fff; border: none; padding: 9px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>{a.openDashLabel}</button>
                      <button onClick={a.editAgent} style={sx('background: #F5F2EB; color: #12211B; border: 1px solid #E4DFD3; padding: 9px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>Edit</button>
                    </div>
                    <div style={sx('display: flex; gap: 8px; flex-wrap: wrap; border-top: 1px solid #F0ECE1; padding-top: 12px;')}>
                      {a.isLive && <button onClick={a.pause} style={sx('background: none; border: none; color: #C9631C; font-size: 12.5px; font-weight: 600; cursor: pointer; padding: 0;')}>Pause agent</button>}
                      {a.isPaused && <button onClick={a.resume} style={sx('background: none; border: none; color: #0B7A4B; font-size: 12.5px; font-weight: 600; cursor: pointer; padding: 0;')}>Resume agent</button>}
                      {a.notArchived && <button onClick={a.archive} style={sx('background: none; border: none; color: #9AA39C; font-size: 12.5px; font-weight: 600; cursor: pointer; padding: 0;')}>Archive</button>}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
