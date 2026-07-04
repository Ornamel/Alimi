import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { useWorkspace } from '../context/WorkspaceContext';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Field';
import { Modal } from '../components/ui/Modal';
import { ArrowLeftIcon, CheckCircleIcon } from '../components/icons';

export function BillingPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { flash } = useToast();
  const { workspace, agents, invoices, updateWorkspace, createInvoice } = useWorkspace();
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!workspace) return null;

  const tier = workspace.planTier;
  const usedSlots = agents.filter((a) => a.status !== 'archived').length;
  const limit = workspace.agentLimit;
  const limitReached = usedSlots >= limit;

  const currentPlanLabel = tier === 'pro' ? 'Pro Plan' : tier === 'agency' ? 'Agency Plan' : 'Free Plan';
  const currentPlanPrice = tier === 'pro' ? '₦45,000/mo' : tier === 'agency' ? 'Custom' : '₦0/month';
  const currentPlanChannels = tier === 'free' ? '1 channel — WhatsApp or Email' : 'WhatsApp + Email, unlimited conversations';
  const currentPlanConvLimit = tier === 'free' ? 'Up to 50 conversations/month' : 'Unlimited conversations';
  const currentPlanSupport = tier === 'free' ? 'Community support' : 'Priority support';

  async function selectPro() {
    if (tier === 'pro') return;
    setShowPayment(true);
  }

  async function confirmUpgrade() {
    await updateWorkspace({ planTier: 'pro', agentLimit: 3 });
    await createInvoice({
      invoiceNumber: `INV-${Math.floor(Math.random() * 90000 + 10000)}`,
      date: new Date().toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' }),
      plan: 'Pro',
      amount: '₦45,000',
      status: 'Paid',
    });
    setShowPayment(false);
    setShowSuccess(true);
    flash('Your plan has been upgraded to Pro.');
  }

  return (
    <div style={{ background: 'var(--color-surface)', minHeight: '100vh', padding: isMobile ? '28px 16px 60px' : '36px 40px 80px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ marginBottom: 26 }}>
          <button onClick={() => navigate('/agents')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer', marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeftIcon size={15} color="var(--color-steel)" /> Back to Your Agents
          </button>
          <h1 style={{ fontSize: 28 }}>Plan &amp; Billing</h1>
          <p style={{ margin: '8px 0 0', color: 'var(--color-steel)', fontSize: 15 }}>Manage your plan, billing details, payment method, and invoices.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr', gap: 22, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <h2 style={{ fontSize: 18 }}>{currentPlanLabel}</h2>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--color-brand-deep)' }}>{currentPlanPrice}</span>
              </div>
              <p style={{ margin: '0 0 16px', fontSize: '13.5px', color: 'var(--color-steel)' }}>You are currently on the {currentPlanLabel}.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, borderTop: '1px solid var(--color-hairline-soft)', paddingTop: 14 }}>
                <Row label="Agent usage" value={`${usedSlots} of ${limit} agent${limit !== 1 ? 's' : ''} used`} />
                <Row label="Channels" value={currentPlanChannels} />
                <Row label="Conversation limit" value={currentPlanConvLimit} />
                <Row label="Support" value={currentPlanSupport} />
              </div>
              {limitReached && (
                <div style={{ marginTop: 16, padding: '12px 14px', background: 'var(--color-amber-soft)', borderRadius: 10, fontSize: '12.5px', color: '#c9631c', lineHeight: 1.5 }}>
                  You have reached your Free plan limit. Upgrade to create more agents and unlock more conversations.
                </div>
              )}
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 24 }}>
              <h2 style={{ fontSize: 16, marginBottom: 14 }}>Plan usage</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Row label="AI agents" value={`${usedSlots} of ${limit}`} />
                <Row label="Conversations this month" value={tier === 'free' ? '32 / 50' : 'Unlimited'} />
                <Row label="Intelligence briefings" value="8" />
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 24 }}>
              <h2 style={{ fontSize: 16, marginBottom: 14 }}>Invoice history</h2>
              {invoices.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '26px 10px' }}>
                  <div style={{ fontWeight: 600, fontSize: '14.5px', marginBottom: 6 }}>No invoices yet</div>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--color-muted)' }}>Your invoices will appear here once you upgrade to a paid plan.</p>
                </div>
              ) : (
                invoices.map((inv) => (
                  <div key={inv.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f4f0e6', fontSize: 13, flexWrap: 'wrap', gap: 6 }}>
                    <span style={{ color: 'var(--color-steel)' }}>{inv.date}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-muted)' }}>{inv.invoiceNumber}</span>
                    <span>{inv.plan}</span>
                    <span style={{ fontWeight: 600 }}>{inv.amount}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 9px', borderRadius: 20, background: 'var(--color-brand-soft)', color: 'var(--color-brand-deep)' }}>{inv.status}</span>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-brand-deep)', fontSize: '12.5px', fontWeight: 600, cursor: 'pointer' }} onClick={() => flash(`Downloading ${inv.invoiceNumber}…`)}>
                      Download
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 24 }}>
              <h2 style={{ fontSize: 18, marginBottom: 4 }}>Upgrade your plan</h2>
              <p style={{ margin: '0 0 18px', fontSize: '13.5px', color: 'var(--color-steel)' }}>Select a plan that fits your team's sales volume.</p>

              <PlanRow title="Free" price="₦0/month" body="For trying Alimi with your first agent." ctaLabel="Current plan" disabled={tier === 'free'} onClick={() => {}} />
              <PlanRow
                title="Pro"
                price="₦45,000/month"
                body="For teams closing deals every day."
                ctaLabel={tier === 'pro' ? 'Current plan' : 'Upgrade to Pro'}
                disabled={tier === 'pro'}
                featured
                onClick={selectPro}
              />
              <PlanRow title="Agency" price="Custom" body="For agencies managing multiple clients." ctaLabel="Contact sales" onClick={() => flash('Thanks — our team will reach out within one business day.')} />
            </div>

            {showPayment && (
              <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 24 }}>
                <h2 style={{ fontSize: 17, marginBottom: 4 }}>Add payment method</h2>
                <p style={{ margin: '0 0 16px', fontSize: 13, color: 'var(--color-steel)' }}>Your card will be saved securely for automatic monthly billing.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
                  <Input placeholder="Name on card" />
                  <Input placeholder="0000 0000 0000 0000" className="input--mono" />
                  <div style={{ display: 'flex', gap: 10 }}>
                    <Input placeholder="MM/YY" style={{ flex: 1 }} />
                    <Input placeholder="CVV" style={{ flex: 1 }} />
                  </div>
                  <Input placeholder="billing@company.com" />
                </div>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: '12.5px', color: 'var(--color-steel)', marginBottom: 14, cursor: 'pointer' }}>
                  <input type="checkbox" style={{ marginTop: 2 }} /> I authorize Alimi to charge this payment method automatically for my selected plan until I cancel.
                </label>
                <p style={{ margin: '0 0 18px', fontSize: '11.5px', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                  Your card details are securely processed by our payment provider. Alimi does not store your full card number.
                </p>
                <div style={{ borderTop: '1px solid var(--color-hairline-soft)', paddingTop: 16 }}>
                  <h3 style={{ fontSize: 14, marginBottom: 10 }}>Order summary</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 13, marginBottom: 16 }}>
                    <Row label="Selected plan" value="Pro" />
                    <Row label="Billing cycle" value="Monthly" />
                    <Row label="Amount due today" value="₦45,000" />
                    <Row label="Renewal" value="Renews monthly" />
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <Button variant="ghost" style={{ flex: 1 }} onClick={() => setShowPayment(false)}>Cancel</Button>
                    <Button variant="primary" style={{ flex: 1 }} onClick={confirmUpgrade}>Confirm upgrade</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSuccess && (
        <Modal>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-brand-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
            <CheckCircleIcon size={28} />
          </div>
          <h2 style={{ fontSize: 22, marginBottom: 8 }}>You're now on Pro</h2>
          <p style={{ margin: '0 0 22px', fontSize: '14.5px', color: 'var(--color-steel)', lineHeight: 1.5 }}>
            You can now create up to 3 agents and use WhatsApp + Email together.
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => {
              setShowSuccess(false);
              navigate('/agents');
            }}
          >
            Back to Your Agents
          </Button>
        </Modal>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
      <span style={{ color: 'var(--color-steel)' }}>{label}</span>
      <span style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{value}</span>
    </div>
  );
}

function PlanRow({
  title,
  price,
  body,
  ctaLabel,
  disabled,
  featured,
  onClick,
}: {
  title: string;
  price: string;
  body: string;
  ctaLabel: string;
  disabled?: boolean;
  featured?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      style={{
        border: featured ? '2px solid var(--color-brand)' : '1px solid var(--color-hairline)',
        background: featured ? '#f7fbf9' : 'transparent',
        borderRadius: 14,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <h3 style={{ fontSize: 15 }}>{title}</h3>
        <span style={{ fontWeight: 600 }}>{price}</span>
      </div>
      <p style={{ margin: '0 0 10px', fontSize: '12.5px', color: 'var(--color-steel)' }}>{body}</p>
      <Button variant={disabled ? 'ghost' : featured ? 'primary' : 'secondary'} size="sm" disabled={disabled} onClick={onClick}>
        {ctaLabel}
      </Button>
    </div>
  );
}
