import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { useWorkspace } from '../context/WorkspaceContext';
import { useToast } from '../context/ToastContext';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { Input, Textarea, FormField } from '../components/ui/Field';
import { LogoMark, CheckCircleIcon, WhatsAppIcon, EmailIcon, LaunchIcon } from '../components/icons';
import './AgentBuilderPage.css';

const STEP_LABELS = ['Agent Details', 'Channel Setup', 'Knowledge Base', 'Success Event & Preview', 'Share & Launch'];

export function AgentBuilderPage({ mode }: { mode: 'create' | 'edit' }) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { agentId } = useParams();
  const { flash } = useToast();
  const { agents, createAgent, updateAgent } = useWorkspace();

  const existing = mode === 'edit' ? agents.find((a) => a.id === agentId) : undefined;

  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [persona, setPersona] = useState('');
  const [useCase, setUseCase] = useState('');
  const [wa, setWa] = useState(true);
  const [email, setEmail] = useState(false);
  const [successEvent, setSuccessEvent] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    if (mode === 'create') {
      setLoaded(true);
      return;
    }
    if (existing) {
      setName(existing.name);
      setPersona(existing.persona);
      setUseCase(existing.useCase);
      setWa(existing.channels.includes('WhatsApp'));
      setEmail(existing.channels.includes('Email'));
      setSuccessEvent(existing.successEvent);
      setStep(Math.max(1, Math.min(5, existing.draftStep || 1)));
      setLoaded(true);
    }
  }, [existing, mode, loaded]);

  const channelsLabel = wa && email ? 'WhatsApp + Email' : email ? 'Email' : wa ? 'WhatsApp' : 'Not connected';

  function returnScreen() {
    navigate(mode === 'edit' ? '/agents' : '/agents');
  }

  async function saveDraft() {
    const payload = { name: name || 'Untitled agent', persona, useCase, channels: channelsLabel, successEvent, status: 'draft' as const, draftStep: step, lastActive: 'Saved just now' };
    if (existing) await updateAgent(existing.id, payload);
    else await createAgent(payload);
    flash('Draft saved — resume anytime from Your Agents');
    returnScreen();
  }

  function cancel() {
    returnScreen();
  }

  async function finish() {
    const payload = {
      name: name || 'Untitled agent',
      persona,
      useCase,
      channels: channelsLabel,
      successEvent,
      status: 'live' as const,
      draftStep: 5,
      lastActive: 'Active just now',
    };
    if (existing) {
      await updateAgent(existing.id, payload);
      flash('Changes saved.');
      navigate('/agents');
    } else {
      await createAgent(payload);
      flash('Your agent is live. Conversations start the moment someone taps your link.');
      navigate('/app/dashboard');
    }
  }

  const launchLabel = mode === 'edit' ? 'Save changes' : 'Launch agent';

  return (
    <div className={`builder ${isMobile ? 'builder--mobile' : ''}`}>
      <div className="builder__topbar">
        <div className="builder__topbar-inner">
          <h1 style={{ fontSize: 18, whiteSpace: 'nowrap' }}>{mode === 'edit' ? 'Edit your AI agent' : 'Build your AI agent'}</h1>
          <ProgressBar percent={step * 20} />
          <span style={{ fontSize: '12.5px', color: 'var(--color-steel)', fontWeight: 600, whiteSpace: 'nowrap' }}>
            Step {step} of 5 · {STEP_LABELS[step - 1]}
          </span>
        </div>
      </div>

      <div className="builder__body">
        {step === 1 && (
          <div className="builder__step">
            <h2 style={{ fontSize: 26, marginBottom: 6 }}>Agent details</h2>
            <p style={{ margin: '0 0 26px', color: 'var(--color-steel)', fontSize: 15 }}>Your agent handles conversations 24/7. You stay in control.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <FormField label="Give your agent a name" help="This is internal — your customers will not see it.">
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Lekki Homes Closer" />
              </FormField>
              <FormField label="Set your agent's personality (optional)" help="Try it — the live preview updates as you type.">
                <Textarea value={persona} onChange={(e) => setPersona(e.target.value)} placeholder="e.g. Warm and professional. Always accurate on pricing. Never pushy." />
              </FormField>
              <FormField label="What should this agent help you close?">
                <Input value={useCase} onChange={(e) => setUseCase(e.target.value)} placeholder="e.g. Book property viewings for the Lekki listings" />
              </FormField>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="builder__step">
            <h2 style={{ fontSize: 26, marginBottom: 6 }}>Choose where this agent should respond</h2>
            <p style={{ margin: '0 0 26px', color: 'var(--color-steel)', fontSize: 15 }}>Select one or both — you can connect the other later.</p>
            <div className="builder__channels">
              <button className={`builder__channel-card ${wa ? 'builder__channel-card--active' : ''}`} onClick={() => setWa((v) => !v)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: '#e7f3ec', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  {wa && <CheckCircleIcon size={21} />}
                </div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>WhatsApp</div>
                <div style={{ fontSize: '12.5px', color: 'var(--color-steel)', lineHeight: 1.45, marginBottom: 10 }}>2.7B+ users. Your customers are already here.</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: wa ? 'var(--color-brand-deep)' : 'var(--color-muted)' }}>
                  {wa ? '✓ Connected — +234 801 234 5678' : 'Not connected — will need verification'}
                </div>
              </button>
              <button className={`builder__channel-card ${email ? 'builder__channel-card--active' : ''}`} onClick={() => setEmail((v) => !v)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: '#e9effc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <EmailIcon size={20} />
                  </div>
                  {email && <CheckCircleIcon size={21} />}
                </div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Email</div>
                <div style={{ fontSize: '12.5px', color: 'var(--color-steel)', lineHeight: 1.45, marginBottom: 10 }}>Professional reach for B2B and follow-up sequences.</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: email ? 'var(--color-brand-deep)' : 'var(--color-muted)' }}>
                  {email ? '✓ Connected — hello@lekkihomes.com' : 'Not connected — inbox needed'}
                </div>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="builder__step">
            <h2 style={{ fontSize: 26, marginBottom: 6 }}>What does your agent need to know?</h2>
            <p style={{ margin: '0 0 26px', color: 'var(--color-steel)', fontSize: 15 }}>
              Upload your catalogues, pricing docs, or FAQs. Your agent learns from them instantly.
            </p>
            <div style={{ border: '1.5px dashed #d8d2c4', borderRadius: 12, padding: 22, textAlign: 'center', marginBottom: 14, background: 'var(--color-surface-soft)' }}>
              <div style={{ fontSize: 14, color: 'var(--color-steel)', fontWeight: 600 }}>Add files or paste a URL</div>
              <div style={{ fontSize: 12, color: 'var(--color-muted)', marginTop: 3 }}>PDF, DOCX, CSV up to 50MB each</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div className="builder__kb-row" style={{ background: 'var(--color-brand-soft)' }}>
                <CheckCircleIcon size={16} />
                <span style={{ flex: 1 }}>Lekki_Penthouse_PriceSheet.pdf</span>
                <span style={{ color: 'var(--color-brand-deep)', fontWeight: 600 }}>Expert ready</span>
              </div>
              <div className="builder__kb-row" style={{ background: '#fff', border: '1px solid var(--color-hairline)' }}>
                <div style={{ width: 16, height: 16, border: '2px solid #d8d2c4', borderTopColor: 'var(--color-brand-deep)', borderRadius: '50%' }} />
                <span style={{ flex: 1 }}>FAQ_2026.docx</span>
                <span style={{ color: 'var(--color-muted)' }}>Reading — about 2 min</span>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="builder__step4-grid">
            <div>
              <h2 style={{ fontSize: 26, marginBottom: 6 }}>What counts as a win?</h2>
              <p style={{ margin: '0 0 14px', color: 'var(--color-steel)', fontSize: 15 }}>Define the outcome your agent is working toward. The more specific, the better.</p>
              <Textarea
                value={successEvent}
                onChange={(e) => setSuccessEvent(e.target.value)}
                placeholder="e.g. Prospect books a property viewing with deposit intent confirmed."
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className="live-dot" />
                <h2 style={{ fontSize: 15 }}>Live preview</h2>
              </div>
              <div className="builder__preview-phone">
                <div className="builder__preview-inner">
                  <div className="builder__preview-header">
                    <LogoMark size={34} />
                    <div style={{ flex: 1, color: '#fff' }}>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{name || 'Untitled agent'}</div>
                      <div style={{ fontSize: 11, opacity: 0.85, display: 'flex', alignItems: 'center', gap: 5 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7cffb2' }} />
                        {channelsLabel} · online
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '16px 14px', minHeight: 200 }}>
                    <div style={{ maxWidth: '85%', background: '#fff', padding: '9px 12px', borderRadius: '4px 12px 12px 12px', fontSize: '13.5px', lineHeight: 1.5 }}>
                      Hi 👋 Welcome! I saw you came from our penthouse tour. I'm here to help you find the right property — what are you looking for?
                      <div style={{ textAlign: 'right', fontSize: 10, color: '#9aa39c', marginTop: 3 }}>9:41 AM</div>
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ margin: '12px 4px 0', fontSize: '12.5px', color: 'var(--color-muted)', textAlign: 'center' }}>
                This is how your agent will open every conversation.
              </p>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="builder__step">
            <h2 style={{ fontSize: 26, marginBottom: 6 }}>Share your agent</h2>
            <p style={{ margin: '0 0 26px', color: 'var(--color-steel)', fontSize: 15 }}>
              Every entry point carries a source label — your agent knows exactly where each lead came from.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 220, background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 10, padding: '11px 14px', fontFamily: 'var(--font-mono)', fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  wa.me/234...?text={(name || 'your-agent').toLowerCase().replace(/\s+/g, '-')}
                </div>
                <Button variant="dark" size="sm" onClick={() => flash('Link copied to clipboard.')}>Copy link</Button>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Button variant="accent" style={{ flex: 1, minWidth: 180 }} onClick={() => flash('Downloading QR code…')}>Download QR code</Button>
                <Button variant="secondary" style={{ flex: 1, minWidth: 180 }} onClick={() => flash('Widget snippet copied.')}>Copy widget code</Button>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: 'var(--color-muted)' }}>
                Print the QR, post it, project it — works anywhere. Paste the widget snippet to add a chat bubble to your site.
              </p>
              <Button variant="ghost" style={{ alignSelf: 'flex-start', marginTop: 6 }} onClick={() => navigate('/app/entry-points')}>More entry points →</Button>
            </div>
          </div>
        )}

        <div className="builder__footer">
          <Button variant="link" style={{ color: 'var(--color-steel)' }} onClick={step === 1 ? cancel : () => setStep((s) => s - 1)}>
            {step === 1 ? 'Cancel' : '← Back'}
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button variant="ghost" onClick={saveDraft}>Save as draft</Button>
            {step < 5 ? (
              <Button variant="primary" onClick={() => setStep((s) => s + 1)}>Continue →</Button>
            ) : (
              <Button variant="primary" icon={<LaunchIcon size={16} />} onClick={finish}>{launchLabel}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
