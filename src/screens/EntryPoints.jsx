import React from 'react';
import { sx } from '../lib/sx.js';

export default function EntryPoints({ ctx }) {
  return (
    <div className="scr" style={sx('max-width: 1080px; margin: 0 auto;')}>
      <div style={sx('margin-bottom: 24px;')}>
        <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px; margin: 0; letter-spacing: -0.01em;")}>Share your agent</h1>
        <p style={sx('margin: 8px 0 0; color: #6E7A73; font-size: 15px;')}>Every entry point carries a source label — your agent knows exactly where each lead came from.</p>
      </div>

      {/* source label */}
      <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 18px 20px; margin-bottom: 20px; display: flex; align-items: center; gap: 16px;')}>
        <div style={sx('flex: 1;')}>
          <label style={sx('display: block; font-size: 13px; font-weight: 600; color: #12211B; margin-bottom: 7px;')}>Label this entry point</label>
          <input
            defaultValue="YouTube — Lekki Penthouse Tour"
            style={sx("width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 11px; padding: 11px 14px; font-size: 14px; font-family: 'Space Mono'; color: #12211B; outline: none;")}
          />
        </div>
        <div style={sx('align-self: flex-end;')}>
          <button onClick={ctx.saveLabel} style={sx('background: #0B7A4B; color: #fff; border: none; padding: 11px 18px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Save label</button>
        </div>
      </div>

      <div style={sx(ctx.gridMonitorMain)}>
        {/* left cards */}
        <div style={sx('display: flex; flex-direction: column; gap: 20px;')}>
          {/* WA deep link */}
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 20px;')}>
            <div style={sx('display: flex; align-items: center; gap: 11px; margin-bottom: 6px;')}>
              <div style={sx('width: 34px; height: 34px; border-radius: 10px; background: #E7F3EC; display: flex; align-items: center; justify-content: center;')}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 5.8 3 10.5c0 3 1.8 5.6 4.5 7.1L7 22l4.2-2.2c.3 0 .5.1.8.1 5 0 9-3.8 9-8.5S17 2 12 2Z" fill="#0B7A4B"></path></svg>
              </div>
              <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0;")}>WhatsApp deep-link</h2>
            </div>
            <p style={sx('margin: 0 0 14px; font-size: 13.5px; color: #6E7A73;')}>Anyone who taps this goes straight into a conversation with your agent.</p>
            <div style={sx('display: flex; gap: 10px;')}>
              <div style={sx("flex: 1; background: #fff; border: 1px solid #ECE7DB; border-radius: 10px; padding: 11px 14px; font-family: 'Space Mono'; font-size: 12.5px; color: #3D4B44; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;")}>wa.me/2348035550100?src=yt_lekki_tour</div>
              <button onClick={ctx.copyLink} style={sx('display:inline-flex; align-items:center; gap:7px; background: #12211B; color: #fff; border: none; padding: 0 16px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="11" height="11" rx="2.5" stroke="#fff" strokeWidth="1.7"></rect><path d="M15 9V6.5A2.5 2.5 0 0 0 12.5 4H6.5A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15H9" stroke="#fff" strokeWidth="1.7"></path></svg>
                Copy link
              </button>
            </div>
          </div>

          {/* Website widget */}
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 20px;')}>
            <div style={sx('display: flex; align-items: center; gap: 11px; margin-bottom: 6px;')}>
              <div style={sx('width: 34px; height: 34px; border-radius: 10px; background: #E9EFFC; display: flex; align-items: center; justify-content: center;')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" stroke="#2F6BEC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0;")}>Website embed widget</h2>
            </div>
            <p style={sx('margin: 0 0 14px; font-size: 13.5px; color: #6E7A73;')}>Paste one line of code. Your agent appears as a chat bubble on your site.</p>
            <div style={sx("background: #0C1712; border-radius: 10px; padding: 14px 16px; font-family: 'Space Mono'; font-size: 12.5px; color: #9FE3BE; line-height: 1.6; overflow-x: auto;")}>
              &lt;script src="https://cdn.alimi.ai/w.js"<br />&nbsp;&nbsp;data-agent="lekki-homes"<br />&nbsp;&nbsp;data-src="yt_lekki_tour"&gt;&lt;/script&gt;
            </div>
            <button onClick={ctx.copySnippet} style={sx('margin-top: 12px; display:inline-flex; align-items:center; gap:7px; background: #F5F2EB; color: #12211B; border: 1px solid #E4DFD3; padding: 9px 15px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>Copy snippet</button>
          </div>

          {/* custom URL */}
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 16px; padding: 20px;')}>
            <div style={sx('display: flex; align-items: center; gap: 11px; margin-bottom: 6px;')}>
              <div style={sx('width: 34px; height: 34px; border-radius: 10px; background: #FBEAD8; display: flex; align-items: center; justify-content: center;')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 15l6-6M11 6l1-1a4 4 0 0 1 6 6l-1 1M13 18l-1 1a4 4 0 0 1-6-6l1-1" stroke="#C9631C" strokeWidth="1.8" strokeLinecap="round"></path></svg>
              </div>
              <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0;")}>Custom tracked URL</h2>
            </div>
            <p style={sx('margin: 0 0 14px; font-size: 13.5px; color: #6E7A73;')}>Source IDs survive link shorteners and redirects — attribution is never lost.</p>
            <div style={sx("background: #fff; border: 1px solid #ECE7DB; border-radius: 10px; padding: 11px 14px; font-family: 'Space Mono'; font-size: 12.5px; color: #3D4B44;")}>alimi.ai/c/lekki-homes?src=yt_lekki_tour</div>
          </div>
        </div>

        {/* QR panel */}
        <div style={sx('background: #0C1712; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; align-items: center; text-align: center; color: #C9D2CC;')}>
          <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0 0 6px; color: #F5F2EB;")}>QR code</h2>
          <p style={sx('margin: 0 0 20px; font-size: 13px; color: #9FB0A6;')}>Print it, post it, project it — works anywhere.</p>
          <div style={sx('background: #fff; border-radius: 16px; padding: 18px;')}>
            <svg width="176" height="176" viewBox="0 0 210 210" shapeRendering="crispEdges">
              <rect width="210" height="210" fill="#fff"></rect>
              <g fill="#0C1712">
                <path d="M10 10h50v50h-50z M20 20v30h30v-30z" fillRule="evenodd"></path>
                <rect x="25" y="25" width="20" height="20"></rect>
                <path d="M150 10h50v50h-50z M160 20v30h30v-30z" fillRule="evenodd"></path>
                <rect x="165" y="25" width="20" height="20"></rect>
                <path d="M10 150h50v50h-50z M20 160v30h30v-30z" fillRule="evenodd"></path>
                <rect x="25" y="165" width="20" height="20"></rect>
                <rect x="70" y="10" width="10" height="10"></rect><rect x="90" y="10" width="10" height="10"></rect><rect x="120" y="10" width="10" height="10"></rect>
                <rect x="70" y="30" width="10" height="10"></rect><rect x="100" y="30" width="20" height="10"></rect><rect x="130" y="30" width="10" height="10"></rect>
                <rect x="80" y="50" width="10" height="10"></rect><rect x="110" y="50" width="10" height="10"></rect><rect x="130" y="50" width="10" height="10"></rect>
                <rect x="10" y="70" width="10" height="10"></rect><rect x="30" y="70" width="20" height="10"></rect><rect x="70" y="70" width="10" height="10"></rect><rect x="90" y="70" width="10" height="10"></rect><rect x="120" y="70" width="10" height="10"></rect><rect x="150" y="70" width="10" height="10"></rect><rect x="180" y="70" width="20" height="10"></rect>
                <rect x="20" y="90" width="10" height="10"></rect><rect x="50" y="90" width="10" height="10"></rect><rect x="80" y="90" width="20" height="10"></rect><rect x="110" y="90" width="10" height="10"></rect><rect x="140" y="90" width="10" height="10"></rect><rect x="170" y="90" width="10" height="10"></rect>
                <rect x="10" y="110" width="10" height="10"></rect><rect x="40" y="110" width="10" height="10"></rect><rect x="70" y="110" width="10" height="10"></rect><rect x="100" y="110" width="20" height="10"></rect><rect x="150" y="110" width="10" height="10"></rect><rect x="180" y="110" width="10" height="10"></rect>
                <rect x="30" y="130" width="10" height="10"></rect><rect x="60" y="130" width="10" height="10"></rect><rect x="90" y="130" width="10" height="10"></rect><rect x="120" y="130" width="20" height="10"></rect><rect x="160" y="130" width="10" height="10"></rect><rect x="190" y="130" width="10" height="10"></rect>
                <rect x="80" y="150" width="10" height="10"></rect><rect x="110" y="150" width="10" height="10"></rect><rect x="140" y="150" width="20" height="10"></rect><rect x="180" y="150" width="10" height="10"></rect>
                <rect x="70" y="170" width="10" height="10"></rect><rect x="100" y="170" width="10" height="10"></rect><rect x="130" y="170" width="10" height="10"></rect><rect x="160" y="170" width="10" height="10"></rect><rect x="190" y="170" width="10" height="10"></rect>
                <rect x="90" y="190" width="20" height="10"></rect><rect x="130" y="190" width="10" height="10"></rect><rect x="170" y="190" width="10" height="10"></rect>
              </g>
            </svg>
          </div>
          <div style={sx("margin-top: 14px; font-family: 'Space Mono'; font-size: 11px; color: #7C8B83;")}>src=yt_lekki_tour</div>
          <div style={sx('display: flex; gap: 8px; margin-top: 18px; width: 100%;')}>
            <button onClick={ctx.dlPng} style={sx('flex: 1; background: #16C47F; color: #07130D; border: none; padding: 10px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>PNG</button>
            <button onClick={ctx.dlSvg} style={sx('flex: 1; background: rgba(255,255,255,0.08); color: #F5F2EB; border: 1px solid rgba(255,255,255,0.15); padding: 10px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer;')}>SVG</button>
          </div>
        </div>
      </div>
    </div>
  );
}
