import React, { Fragment } from 'react';
import { sx } from '../lib/sx.js';

export default function Settings({ ctx }) {
  return (
    <div className="scr" style={sx('background: #F5F2EB; min-height: 100vh; padding: 36px 40px 80px;')}>
      <div style={sx('max-width: 980px; margin: 0 auto;')}>
        <div style={sx('margin-bottom: 26px;')}>
          <button onClick={ctx.goAgents} style={sx('background: none; border: none; color: #6E7A73; font-size: 13.5px; font-weight: 600; cursor: pointer; margin-bottom: 14px; display: inline-flex; align-items: center; gap: 6px;')}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M14 6l-6 6 6 6" stroke="#6E7A73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Back to Your Agents
          </button>
          <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px; margin: 0; letter-spacing: -0.01em;")}>Settings</h1>
          <p style={sx('margin: 8px 0 0; color: #6E7A73; font-size: 15px;')}>Manage your account, workspace, billing, and security preferences.</p>
        </div>

        <div style={sx(ctx.gridSettings)}>
          {/* TAB NAV */}
          <div>
            {ctx.settingsTabs.map((t, i) => (
              <Fragment key={t.id || i}>
                <button onClick={t.go} style={sx(t.style)}>{t.label}</button>
              </Fragment>
            ))}
            <div style={sx('border-top: 1px solid #E4DFD3; margin-top: 12px; padding-top: 12px;')}>
              <button onClick={ctx.goLanding} style={sx('display:block; width: 100%; text-align: left; background: none; border: none; color: #9AA39C; font-size: 13.5px; font-weight: 600; cursor: pointer; padding: 8px 14px;')}>Sign out</button>
            </div>
          </div>

          {/* TAB CONTENT */}
          <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 28px;')}>

            {ctx.isTabProfile && (
              <>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 18px;")}>Profile</h2>
                <div style={sx('display: flex; flex-direction: column; gap: 16px; max-width: 420px;')}>
                  <div>
                    <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Full name</label>
                    <input defaultValue="Tunde Bakare" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                  </div>
                  <div>
                    <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Email address</label>
                    <input defaultValue="tunde@lekkihomes.com" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #F7F4EE; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none; color: #9AA39C;')} disabled />
                    <p style={sx('margin:6px 0 0; font-size:12px; color:#9AA39C;')}>Your email is used for login, billing, and important account notifications.</p>
                  </div>
                  <div>
                    <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Phone number (optional)</label>
                    <input placeholder="+234" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                  </div>
                  <div>
                    <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Time zone</label>
                    <input defaultValue="Africa/Lagos" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                  </div>
                  <button onClick={ctx.saveSettingsToast} style={sx('align-self: flex-start; background: #0B7A4B; color: #fff; border: none; padding: 11px 20px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Save changes</button>
                </div>
              </>
            )}

            {ctx.isTabWorkspace && (
              <>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 18px;")}>Workspace</h2>
                <p style={sx('margin: -8px 0 18px; font-size: 13px; color: #9AA39C;')}>These details help Alimi personalize your agent setup and recommendations.</p>
                <div style={sx('display: flex; flex-direction: column; gap: 16px; max-width: 420px;')}>
                  <div>
                    <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Business name</label>
                    <input defaultValue="Lekki Homes Ltd" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                  </div>
                  <div>
                    <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Business vertical</label>
                    <input defaultValue="Real estate & property" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                  </div>
                  <div>
                    <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Primary language</label>
                    <input defaultValue="English" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                  </div>
                  <div>
                    <label style={sx('display:block; font-size:13px; font-weight:600; margin-bottom:6px;')}>Default channel preference</label>
                    <input defaultValue="WhatsApp" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                  </div>
                  <button onClick={ctx.saveSettingsToast} style={sx('align-self: flex-start; background: #0B7A4B; color: #fff; border: none; padding: 11px 20px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Save changes</button>
                </div>
              </>
            )}

            {ctx.isTabBilling && (
              <>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 4px;")}>Plan &amp; Billing</h2>
                <p style={sx('margin: 0 0 18px; font-size: 13px; color: #9AA39C;')}>Invoices will appear after your first paid billing cycle.</p>
                <div style={sx('background: #F7F4EE; border-radius: 14px; padding: 20px; max-width: 420px;')}>
                  <div style={sx('font-size: 13px; color: #6E7A73; margin-bottom: 4px;')}>Current plan</div>
                  <div style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin-bottom: 10px;")}>{ctx.currentPlanLabel}</div>
                  <div style={sx('font-size: 13px; color: #6E7A73; margin-bottom: 4px;')}>Usage</div>
                  <div style={sx('font-weight: 600; margin-bottom: 16px;')}>{ctx.currentPlanUsageText}</div>
                  <button onClick={ctx.goBilling} style={sx('background: #0B7A4B; color: #fff; border: none; padding: 11px 20px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Manage plan</button>
                </div>
              </>
            )}

            {ctx.isTabNotifications && (
              <>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 6px;")}>Notifications</h2>
                <p style={sx('margin: 0 0 18px; font-size: 13px; color: #9AA39C;')}>Choose how you want to be notified when your agents need your attention.</p>
                <div style={sx('display: flex; flex-direction: column; gap: 14px; max-width: 460px;')}>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #F4F0E6;')}><span style={sx('font-size: 14px;')}>Intelligence briefings</span><span style={sx('font-size: 12.5px; color: #6E7A73;')}>Email + Push</span></div>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #F4F0E6;')}><span style={sx('font-size: 14px;')}>Lead ready to close</span><span style={sx('font-size: 12.5px; color: #6E7A73;')}>Email + Push</span></div>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #F4F0E6;')}><span style={sx('font-size: 14px;')}>Agent needs attention</span><span style={sx('font-size: 12.5px; color: #6E7A73;')}>Email + Push</span></div>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #F4F0E6;')}><span style={sx('font-size: 14px;')}>Knowledge base indexing complete</span><span style={sx('font-size: 12.5px; color: #6E7A73;')}>Email</span></div>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between; padding: 12px 0;')}><span style={sx('font-size: 14px;')}>Billing alerts</span><span style={sx('font-size: 12.5px; color: #6E7A73;')}>Email only</span></div>
                </div>
                <button onClick={ctx.savePrefsToast} style={sx('margin-top: 18px; background: #0B7A4B; color: #fff; border: none; padding: 11px 20px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Save preferences</button>
              </>
            )}

            {ctx.isTabTeam && (
              <>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 18px;")}>Team &amp; Access</h2>
                <div style={sx('text-align: center; padding: 30px 10px; background: #F7F4EE; border-radius: 14px;')}>
                  <div style={sx('font-weight: 600; font-size: 15.5px; margin-bottom: 6px;')}>Team access is available on paid plans</div>
                  <p style={sx('margin: 0 0 18px; font-size: 13.5px; color: #6E7A73;')}>Upgrade to invite team members and assign roles.</p>
                  <button onClick={ctx.goBilling} style={sx('background: #0B7A4B; color: #fff; border: none; padding: 11px 20px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Upgrade plan</button>
                </div>
              </>
            )}

            {ctx.isTabSecurity && (
              <>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 18px;")}>Security</h2>
                <div style={sx('display: flex; flex-direction: column; gap: 16px; max-width: 460px;')}>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between; padding-bottom: 14px; border-bottom: 1px solid #F4F0E6;')}>
                    <div>
                      <div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 3px;')}>Password</div>
                      <div style={sx('font-size: 12.5px; color: #6E7A73;')}>Keep your account secure by using a strong password.</div>
                    </div>
                    <button onClick={ctx.passwordToast} style={sx('background: #F5F2EB; color: #12211B; border: 1px solid #E4DFD3; padding: 9px 16px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap;')}>Change</button>
                  </div>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between; padding-bottom: 14px; border-bottom: 1px solid #F4F0E6;')}>
                    <div>
                      <div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 3px;')}>Two-factor authentication</div>
                      <div style={sx('font-size: 12.5px; color: #6E7A73;')}>Add an extra layer of protection to your account.</div>
                    </div>
                    <button onClick={ctx.saveSettingsToast} style={sx('background: #F5F2EB; color: #12211B; border: 1px solid #E4DFD3; padding: 9px 16px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap;')}>Enable</button>
                  </div>
                  <div style={sx('display: flex; align-items: center; justify-content: space-between;')}>
                    <div>
                      <div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 3px;')}>Active sessions</div>
                      <div style={sx('font-size: 12.5px; color: #6E7A73;')}>1 device currently signed in.</div>
                    </div>
                    <button onClick={ctx.saveSettingsToast} style={sx('background: none; border: none; color: #C9631C; font-size: 13px; font-weight: 600; cursor: pointer;')}>Sign out all devices</button>
                  </div>
                </div>
              </>
            )}

            {ctx.isTabPrivacy && (
              <>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 18px;")}>Data &amp; Privacy</h2>
                <div style={sx('display: flex; align-items: center; justify-content: space-between; padding-bottom: 18px; border-bottom: 1px solid #F4F0E6; max-width: 460px;')}>
                  <div>
                    <div style={sx('font-weight: 600; font-size: 14px; margin-bottom: 3px;')}>Export account data</div>
                    <div style={sx('font-size: 12.5px; color: #6E7A73;')}>Request a full export of your account data.</div>
                  </div>
                  <button onClick={ctx.exportDataToast} style={sx('background: #F5F2EB; color: #12211B; border: 1px solid #E4DFD3; padding: 9px 16px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap;')}>Export</button>
                </div>
                <div style={sx('margin-top: 22px; border: 1px solid #F0DADA; border-radius: 14px; padding: 18px; max-width: 460px;')}>
                  <div style={sx('font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #D64545; margin-bottom: 8px;')}>Danger zone</div>
                  <div style={sx('font-weight: 600; font-size: 14.5px; margin-bottom: 4px;')}>Delete account</div>
                  <p style={sx('margin: 0 0 14px; font-size: 12.5px; color: #6E7A73; line-height: 1.5;')}>This will permanently close your Alimi workspace and stop all active agents.</p>
                  <button onClick={ctx.openDeleteConfirm} style={sx('background: #D64545; color: #fff; border: none; padding: 10px 18px; border-radius: 999px; font-size: 13.5px; font-weight: 600; cursor: pointer;')}>Delete account</button>
                </div>
              </>
            )}

          </div>
        </div>
      </div>

      {/* DELETE CONFIRM MODAL */}
      {ctx.deleteConfirmOpen && (
        <div style={sx('position: fixed; inset: 0; background: rgba(12,23,18,0.55); display: flex; align-items: center; justify-content: center; z-index: 400;')}>
          <div style={sx('background: #fff; border-radius: 20px; padding: 30px; max-width: 380px; text-align: center;')}>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 19px; margin: 0 0 10px;")}>Are you sure?</h2>
            <p style={sx('margin: 0 0 22px; font-size: 14px; color: #6E7A73; line-height: 1.5;')}>This will permanently delete your Alimi workspace. This action cannot be undone.</p>
            <div style={sx('display: flex; gap: 10px;')}>
              <button onClick={ctx.closeDeleteConfirm} style={sx('flex: 1; background: none; border: 1px solid #E4DFD3; color: #12211B; padding: 11px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Cancel</button>
              <button onClick={ctx.confirmDeleteAccount} style={sx('flex: 1; background: #D64545; color: #fff; border: none; padding: 11px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Delete account</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
