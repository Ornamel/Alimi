import React from 'react';
import { sx } from '../lib/sx.js';
import { IOSDevice } from '../components/IOSDevice.jsx';

export default function MobileBriefing({ ctx }) {
  return (
    <div className="scr" style={sx('min-height: 100vh; background: radial-gradient(circle at 50% 0%, #1a3527, #0C1712); display: flex; flex-direction: column; align-items: center; padding: 40px 20px;')}>
      <div style={sx('text-align: center; color: #9FB0A6; max-width: 520px; margin-bottom: 24px;')}>
        <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 20px; color: #F5F2EB; margin: 0 0 6px;")}>The closer's handoff</h2>
        <p style={sx('margin: 0; font-size: 14px;')}>A push arrives within 10 seconds of qualification. Tap it, and the full briefing is ready — no transcript reading.</p>
      </div>
      <div style={sx('display: flex; gap: 40px; flex-wrap: wrap; justify-content: center;')}>
        <div style={sx('display: flex; flex-direction: column; align-items: center; gap: 12px;')}>
          <IOSDevice width={402} height={874} dark>
            <div style={sx("height: 100%; background: linear-gradient(180deg,#0f2a1c,#07130d); display: flex; flex-direction: column; align-items: center; padding-top: 92px; color: #fff;")}>
              <div style={sx("font-size: 68px; font-weight: 300; font-family: 'Space Grotesk';")}>9:16</div>
              <div style={sx('font-size: 15px; opacity: .8; margin-bottom: 40px;')}>Saturday, 3 July</div>
              <div style={sx('width: 88%; background: rgba(255,255,255,0.14); backdrop-filter: blur(20px); border-radius: 20px; padding: 14px 16px;')}>
                <div style={sx('display: flex; align-items: center; gap: 9px; margin-bottom: 8px;')}>
                  <div style={sx('width: 22px; height: 22px; border-radius: 6px; background: #16C47F; display: flex; align-items: center; justify-content: center;')}><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M13 3l-1.5 8H17l-6 10 1.5-8H6l7-10Z" fill="#07130D"></path></svg></div>
                  <span style={sx('font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; opacity: .9;')}>Alimi</span>
                  <span style={sx('margin-left: auto; font-size: 12px; opacity: .6;')}>now</span>
                </div>
                <div style={sx('font-size: 14px; font-weight: 600; margin-bottom: 3px;')}>Chioma is ready to close 🔥</div>
                <div style={sx('font-size: 13.5px; line-height: 1.4; opacity: .92;')}>Viewing booked — Saturday 10 AM. Tap to view her Intelligence Briefing.</div>
              </div>
            </div>
          </IOSDevice>
          <span style={sx("font-size: 12px; color: #7C8B83; font-family: 'Space Mono';")}>1 · Push notification</span>
        </div>

        <div style={sx('display: flex; flex-direction: column; align-items: center; gap: 12px;')}>
          <IOSDevice width={402} height={874}>
            <div style={sx("min-height: 100%; background: #F5F2EB; font-family: 'Instrument Sans', system-ui;")}>
              <div style={sx('background: #0C1712; padding: 56px 18px 20px; color: #E7EDE9;')}>
                <div style={sx('display: flex; align-items: center; gap: 8px; font-size: 13px; color: #9FB0A6; margin-bottom: 14px;')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 6l-6 6 6 6" stroke="#9FB0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  Intelligence Briefing
                </div>
                <div style={sx('display: flex; align-items: center; gap: 12px;')}>
                  <div style={sx("width: 48px; height: 48px; border-radius: 14px; background: #0B7A4B; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 19px; font-family: 'Space Grotesk';")}>CO</div>
                  <div style={sx('flex: 1;')}>
                    <div style={sx('display: flex; align-items: center; gap: 8px;')}><span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 20px; color: #F5F2EB;")}>Chioma Okafor</span><span style={sx('font-size: 10px; font-weight: 700; color: #07130D; background: #F5A24B; padding: 2px 8px; border-radius: 20px;')}>🔥 HOT</span></div>
                    <div style={sx('font-size: 12.5px; color: #9FB0A6; margin-top: 3px;')}>Ready for you · 2 min ago</div>
                  </div>
                </div>
              </div>
              <div style={sx('padding: 18px;')}>
                <div style={sx('font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .1em; color: #9AA39C; margin-bottom: 8px;')}>What you need to know</div>
                <p style={sx('margin: 0 0 18px; font-size: 14px; line-height: 1.55; color: #3D4B44;')}>From the Lekki tour. Budget fit at ₦185M, accepted the 12-month plan, and <b style={sx('color:#12211B;')}>booked Saturday 10 AM</b>. Gave her email for the invite.</p>

                <div style={sx('font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .1em; color: #9AA39C; margin-bottom: 12px;')}>Intent signals</div>
                <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 14px; padding: 15px; margin-bottom: 18px;')}>
                  <div style={sx('margin-bottom: 13px;')}><div style={sx('display:flex; justify-content:space-between; margin-bottom:5px;')}><span style={sx('font-size:13px; color:#3D4B44;')}>Purchase intent</span><span style={sx("font-family:'Space Grotesk'; font-weight:600; color:#0B7A4B;")}>92%</span></div><div style={sx('height:8px; border-radius:5px; background:#EEE9DD; overflow:hidden;')}><div style={sx('width:92%; height:100%; background:linear-gradient(90deg,#16C47F,#0B7A4B); border-radius:5px;')}></div></div></div>
                  <div style={sx('margin-bottom: 13px;')}><div style={sx('display:flex; justify-content:space-between; margin-bottom:5px;')}><span style={sx('font-size:13px; color:#3D4B44;')}>Budget alignment</span><span style={sx("font-family:'Space Grotesk'; font-weight:600; color:#2F6BEC;")}>78%</span></div><div style={sx('height:8px; border-radius:5px; background:#EEE9DD; overflow:hidden;')}><div style={sx('width:78%; height:100%; background:linear-gradient(90deg,#5B90F5,#2F6BEC); border-radius:5px;')}></div></div></div>
                  <div><div style={sx('display:flex; justify-content:space-between; margin-bottom:5px;')}><span style={sx('font-size:13px; color:#3D4B44;')}>Decision urgency</span><span style={sx("font-family:'Space Grotesk'; font-weight:600; color:#E07B2E;")}>85%</span></div><div style={sx('height:8px; border-radius:5px; background:#EEE9DD; overflow:hidden;')}><div style={sx('width:85%; height:100%; background:linear-gradient(90deg,#F5A24B,#E07B2E); border-radius:5px;')}></div></div></div>
                </div>

                <div style={sx('font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .1em; color: #9AA39C; margin-bottom: 10px;')}>Your next three moves</div>
                <div style={sx('display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;')}>
                  <div style={sx('display: flex; gap: 10px; background: #fff; border: 1px solid #EAE5D9; border-radius: 11px; padding: 11px 13px;')}><span style={sx("width: 22px; height: 22px; flex-shrink:0; border-radius: 7px; background: #E7F3EC; color: #0B7A4B; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12px; font-family:'Space Grotesk';")}>1</span><span style={sx('font-size: 13.5px; color: #3D4B44; line-height: 1.4;')}>Confirm terrace furniture, reconfirm Saturday 10 AM.</span></div>
                  <div style={sx('display: flex; gap: 10px; background: #fff; border: 1px solid #EAE5D9; border-radius: 11px; padding: 11px 13px;')}><span style={sx("width: 22px; height: 22px; flex-shrink:0; border-radius: 7px; background: #E9EFFC; color: #2F6BEC; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12px; font-family:'Space Grotesk';")}>2</span><span style={sx('font-size: 13.5px; color: #3D4B44; line-height: 1.4;')}>Bring the printed price sheet.</span></div>
                  <div style={sx('display: flex; gap: 10px; background: #fff; border: 1px solid #EAE5D9; border-radius: 11px; padding: 11px 13px;')}><span style={sx("width: 22px; height: 22px; flex-shrink:0; border-radius: 7px; background: #FBEAD8; color: #C9631C; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12px; font-family:'Space Grotesk';")}>3</span><span style={sx('font-size: 13.5px; color: #3D4B44; line-height: 1.4;')}>Have the deposit link ready.</span></div>
                </div>

                <button onClick={ctx.sendMsg} style={sx('width: 100%; display: flex; align-items: center; justify-content: center; gap: 9px; background: #0B7A4B; color: #fff; border: none; padding: 14px; border-radius: 999px; font-size: 15px; font-weight: 600; margin-bottom: 10px; cursor: pointer;')}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1L7 22l4.2-2.2c.3 0 .5.1.8.1 5 0 9-3.8 9-8.5S17 2 12 2Z" fill="#fff"></path></svg>Message Chioma now</button>
                <button onClick={ctx.addCal} style={sx('width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; background: #fff; color: #12211B; border: 1px solid #E4DFD3; padding: 13px; border-radius: 999px; font-size: 14.5px; font-weight: 600; margin-bottom: 34px; cursor: pointer;')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="16" rx="3" stroke="#12211B" strokeWidth="1.7"></rect><path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="#12211B" strokeWidth="1.7" strokeLinecap="round"></path></svg>Add to calendar</button>
              </div>
            </div>
          </IOSDevice>
          <span style={sx("font-size: 12px; color: #7C8B83; font-family: 'Space Mono';")}>2 · Mobile briefing</span>
        </div>
      </div>
    </div>
  );
}
