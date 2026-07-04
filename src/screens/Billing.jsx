import React, { Fragment } from 'react';
import { sx } from '../lib/sx.js';

export default function Billing({ ctx }) {
  return (
    <div className="scr" style={sx('background: #F5F2EB; min-height: 100vh; padding: 36px 40px 80px;')}>
      <div style={sx('max-width: 1080px; margin: 0 auto;')}>
        <div style={sx('margin-bottom: 26px;')}>
          <button onClick={ctx.goBillingBack} style={sx("background: none; border: none; color: #6E7A73; font-size: 13.5px; font-weight: 600; cursor: pointer; margin-bottom: 14px; display: inline-flex; align-items: center; gap: 6px;")}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M14 6l-6 6 6 6" stroke="#6E7A73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            Back to Your Agents
          </button>
          <h1 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 28px; margin: 0; letter-spacing: -0.01em;")}>Plan &amp; Billing</h1>
          <p style={sx('margin: 8px 0 0; color: #6E7A73; font-size: 15px;')}>Manage your plan, billing details, payment method, and invoices.</p>
        </div>

        <div style={sx(ctx.gridBilling)}>
          {/* LEFT COLUMN */}
          <div style={sx('display: flex; flex-direction: column; gap: 20px;')}>
            {/* CURRENT PLAN */}
            <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 24px;')}>
              <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;')}>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0;")}>{ctx.currentPlanLabel}</h2>
                <span style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; color: #0B7A4B;")}>{ctx.currentPlanPrice}</span>
              </div>
              <p style={sx('margin: 0 0 16px; font-size: 13.5px; color: #6E7A73;')}>You are currently on the {ctx.currentPlanLabel}.</p>
              <div style={sx('display: flex; flex-direction: column; gap: 9px; border-top: 1px solid #F0ECE1; padding-top: 14px;')}>
                <div style={sx('display: flex; justify-content: space-between; font-size: 13.5px;')}><span style={sx('color:#6E7A73;')}>Agent usage</span><span style={sx('font-weight:600; color:#12211B;')}>{ctx.currentPlanUsageText}</span></div>
                <div style={sx('display: flex; justify-content: space-between; font-size: 13.5px;')}><span style={sx('color:#6E7A73;')}>Channels</span><span style={sx('font-weight:600; color:#12211B;')}>{ctx.currentPlanChannels}</span></div>
                <div style={sx('display: flex; justify-content: space-between; font-size: 13.5px;')}><span style={sx('color:#6E7A73;')}>Conversation limit</span><span style={sx('font-weight:600; color:#12211B;')}>{ctx.currentPlanConvLimit}</span></div>
                <div style={sx('display: flex; justify-content: space-between; font-size: 13.5px;')}><span style={sx('color:#6E7A73;')}>Support</span><span style={sx('font-weight:600; color:#12211B;')}>{ctx.currentPlanSupport}</span></div>
              </div>
              {ctx.limitReachedBilling && (
                <div style={sx('margin-top: 16px; padding: 12px 14px; background: #FBEAD8; border-radius: 10px; font-size: 12.5px; color: #C9631C; line-height: 1.5;')}>You have reached your Free plan limit. Upgrade to create more agents and unlock more conversations.</div>
              )}
            </div>

            {/* USAGE LIMITS */}
            <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 24px;')}>
              <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0 0 14px;")}>Plan usage</h2>
              <div style={sx('display: flex; flex-direction: column; gap: 12px;')}>
                <div style={sx('display: flex; justify-content: space-between; font-size: 13.5px;')}><span style={sx('color:#6E7A73;')}>AI agents</span><span style={sx('font-weight:600;')}>{ctx.currentPlanUsageText}</span></div>
                <div style={sx('display: flex; justify-content: space-between; font-size: 13.5px;')}><span style={sx('color:#6E7A73;')}>Conversations this month</span><span style={sx('font-weight:600;')}>{ctx.usageConvos}</span></div>
                <div style={sx('display: flex; justify-content: space-between; font-size: 13.5px;')}><span style={sx('color:#6E7A73;')}>Intelligence briefings</span><span style={sx('font-weight:600;')}>{ctx.usageBriefings}</span></div>
              </div>
            </div>

            {/* INVOICE HISTORY */}
            <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 24px;')}>
              <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 16px; margin: 0 0 14px;")}>Invoice history</h2>
              {ctx.hasInvoices && (
                <>
                  {ctx.invoiceList.map((inv, i) => (
                    <Fragment key={inv.id || i}>
                      <div style={sx('display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #F4F0E6; font-size: 13px;')}>
                        <span style={sx('color: #6E7A73;')}>{inv.date}</span>
                        <span style={sx("font-family: 'Space Mono'; color: #9AA39C;")}>{inv.id}</span>
                        <span style={sx('color: #12211B;')}>{inv.plan}</span>
                        <span style={sx('font-weight: 600;')}>{inv.amount}</span>
                        <span style={sx('font-size: 11px; font-weight: 700; padding: 2px 9px; border-radius: 20px; background: #E7F3EC; color: #0B7A4B;')}>{inv.status}</span>
                        <button onClick={inv.dlToast} style={sx('background: none; border: none; color: #0B7A4B; font-size: 12.5px; font-weight: 600; cursor: pointer;')}>Download</button>
                      </div>
                    </Fragment>
                  ))}
                </>
              )}
              {ctx.notHasInvoices && (
                <div style={sx('text-align: center; padding: 26px 10px;')}>
                  <div style={sx('font-weight: 600; font-size: 14.5px; margin-bottom: 6px;')}>No invoices yet</div>
                  <p style={sx('margin: 0; font-size: 13px; color: #9AA39C;')}>Your invoices will appear here once you upgrade to a paid plan.</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={sx('display: flex; flex-direction: column; gap: 20px;')}>
            {/* UPGRADE PLAN CARDS */}
            <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 24px;')}>
              <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 18px; margin: 0 0 4px;")}>Upgrade your plan</h2>
              <p style={sx("margin: 0 0 18px; font-size: 13.5px; color: #6E7A73;")}>Select a plan that fits your team's sales volume.</p>

              <div style={sx('border: 1px solid #EAE5D9; border-radius: 14px; padding: 16px; margin-bottom: 12px;')}>
                <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;')}><h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0;")}>Free</h3><span style={sx('font-weight: 600;')}>₦0/month</span></div>
                <p style={sx('margin: 0 0 10px; font-size: 12.5px; color: #6E7A73;')}>For trying Alimi with your first agent.</p>
                <button onClick={ctx.selectFree} disabled={ctx.isFreeTier} style={sx(ctx.freeBtnStyle)}>Current plan</button>
              </div>

              <div style={sx('border: 2px solid #16C47F; border-radius: 14px; padding: 16px; margin-bottom: 12px; background: #F7FBF9;')}>
                <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;')}><h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0;")}>Pro</h3><span style={sx('font-weight: 600;')}>₦45,000/month</span></div>
                <p style={sx('margin: 0 0 10px; font-size: 12.5px; color: #6E7A73;')}>For teams closing deals every day.</p>
                <button onClick={ctx.selectPro} disabled={ctx.isProTier} style={sx(ctx.proBtnStyle)}>{ctx.proBtnLabel}</button>
              </div>

              <div style={sx('border: 1px solid #EAE5D9; border-radius: 14px; padding: 16px;')}>
                <div style={sx('display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;')}><h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 15px; margin: 0;")}>Agency</h3><span style={sx('font-weight: 600;')}>Custom</span></div>
                <p style={sx('margin: 0 0 10px; font-size: 12.5px; color: #6E7A73;')}>For agencies managing multiple clients.</p>
                <button onClick={ctx.selectAgency} style={sx('padding:11px 20px;border-radius:999px;font-size:14px;font-weight:600;border:1px solid #E4DFD3;background:none;color:#12211B;cursor:pointer;')}>Contact sales</button>
              </div>
            </div>

            {/* PAYMENT DETAILS + SUMMARY */}
            {ctx.billingShowPayment && (
              <div style={sx('background: #fff; border: 1px solid #EAE5D9; border-radius: 18px; padding: 24px;')}>
                <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 17px; margin: 0 0 4px;")}>Add payment method</h2>
                <p style={sx('margin: 0 0 16px; font-size: 13px; color: #6E7A73;')}>Your card will be saved securely for automatic monthly billing.</p>
                <div style={sx('display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;')}>
                  <input placeholder="Name on card" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                  <input placeholder="0000 0000 0000 0000" style={sx("width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none; font-family: 'Space Mono';")} />
                  <div style={sx('display: flex; gap: 10px;')}>
                    <input placeholder="MM/YY" style={sx('flex: 1; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                    <input placeholder="CVV" style={sx('flex: 1; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                  </div>
                  <input placeholder="billing@company.com" style={sx('width: 100%; border: 1px solid #E4DFD3; background: #fff; border-radius: 10px; padding: 11px 14px; font-size: 14px; outline: none;')} />
                </div>
                <label style={sx('display: flex; align-items: flex-start; gap: 9px; font-size: 12.5px; color: #6E7A73; margin-bottom: 14px; cursor: pointer;')}><input type="checkbox" style={sx('margin-top: 2px;')} /> I authorize Alimi to charge this payment method automatically for my selected plan until I cancel.</label>
                <p style={sx('margin: 0 0 18px; font-size: 11.5px; color: #9AA39C; line-height: 1.5;')}>Your card details are securely processed by our payment provider. Alimi does not store your full card number.</p>

                <div style={sx('border-top: 1px solid #F0ECE1; padding-top: 16px;')}>
                  <h3 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 14px; margin: 0 0 10px;")}>Order summary</h3>
                  <div style={sx('display: flex; flex-direction: column; gap: 7px; font-size: 13px; margin-bottom: 16px;')}>
                    <div style={sx('display: flex; justify-content: space-between;')}><span style={sx('color:#6E7A73;')}>Selected plan</span><span style={sx('font-weight:600;')}>Pro</span></div>
                    <div style={sx('display: flex; justify-content: space-between;')}><span style={sx('color:#6E7A73;')}>Billing cycle</span><span style={sx('font-weight:600;')}>Monthly</span></div>
                    <div style={sx('display: flex; justify-content: space-between;')}><span style={sx('color:#6E7A73;')}>Amount due today</span><span style={sx('font-weight:600;')}>₦45,000</span></div>
                    <div style={sx('display: flex; justify-content: space-between;')}><span style={sx('color:#6E7A73;')}>Renewal</span><span style={sx('font-weight:600;')}>Renews monthly</span></div>
                  </div>
                  <div style={sx('display: flex; gap: 10px;')}>
                    <button onClick={ctx.cancelUpgrade} style={sx('flex: 1; background: none; border: 1px solid #E4DFD3; color: #6E7A73; padding: 12px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Cancel</button>
                    <button onClick={ctx.confirmUpgrade} style={sx('flex: 1; background: #0B7A4B; color: #fff; border: none; padding: 12px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;')}>Confirm upgrade</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* UPGRADE SUCCESS MODAL */}
      {ctx.showUpgradeModal && (
        <div style={sx('position: fixed; inset: 0; background: rgba(12,23,18,0.55); display: flex; align-items: center; justify-content: center; z-index: 400;')}>
          <div style={sx('background: #fff; border-radius: 20px; padding: 34px; max-width: 380px; text-align: center;')}>
            <div style={sx('width: 56px; height: 56px; border-radius: 50%; background: #E7F3EC; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px;')}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#0B7A4B"></circle><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <h2 style={sx("font-family: 'Space Grotesk'; font-weight: 600; font-size: 22px; margin: 0 0 8px;")}>You're now on Pro</h2>
            <p style={sx('margin: 0 0 22px; font-size: 14.5px; color: #6E7A73; line-height: 1.5;')}>You can now create up to 3 agents and use WhatsApp + Email together.</p>
            <button onClick={ctx.closeUpgradeModal} style={sx('width: 100%; background: #0B7A4B; color: #fff; border: none; padding: 13px; border-radius: 999px; font-size: 15px; font-weight: 600; cursor: pointer;')}>Back to Your Agents</button>
          </div>
        </div>
      )}
    </div>
  );
}
