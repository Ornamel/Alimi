import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { useWorkspace } from '../context/WorkspaceContext';
import { useToast } from '../context/ToastContext';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { Input, Select, Textarea, FormField } from '../components/ui/Field';
import { LogoMark, CheckCircleIcon, WhatsAppIcon, EmailIcon } from '../components/icons';
import { VERTICALS } from '../lib/mockData';
import './OnboardingPage.css';

const STEP_LABELS = ['Business Profile', 'Agent Setup', 'Channels', 'Knowledge & Goal', 'Share & Launch'];

export function OnboardingPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { flash } = useToast();
  const { profile, workspace, updateProfile, updateWorkspace, agents, createAgent, updateAgent } = useWorkspace();

  const [step, setStep] = useState(1);
  const [draftAgentId, setDraftAgentId] = useState<string | null>(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [vertical, setVertical] = useState('realestate');
  const [language, setLanguage] = useState('English');
  const [volume, setVolume] = useState('100–500 conversations/mo');
  const [agentName, setAgentName] = useState('');
  const [persona, setPersona] = useState('');
  const [wa, setWa] = useState(true);
  const [email2, setEmail2] = useState(false);
  const [successEvent, setSuccessEvent] = useState('Prospect books a property viewing with deposit intent confirmed.');
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    if (synced && (profile || workspace)) return;
    if (profile) {
      setFullName(profile.fullName);
      setEmail(profile.email);
    }
    if (workspace) {
      setBusinessName(workspace.businessName);
      setVertical(workspace.vertical);
      setLanguage(workspace.primaryLanguage);
      setAgentName((n) => n || `${workspace.businessName} Closer`);
    }
    if (profile || workspace) setSynced(true);
  }, [profile, workspace, synced]);

  useEffect(() => {
    const existingDraft = agents.find((a) => a.id === draftAgentId);
    if (existingDraft?.draftStep) setStep(existingDraft.draftStep);
  }, [draftAgentId, agents]);

  const channelsLabel = wa && email2 ? 'WhatsApp + Email' : email2 ? 'Email' : 'WhatsApp';

  async function persistWorkspace() {
    await updateWorkspace({ businessName, vertical, primaryLanguage: language });
    if (profile && fullName !== profile.fullName) await updateProfile({ fullName });
  }

  async function saveDraft() {
    await persistWorkspace();
    const payload = {
      name: agentName || 'Untitled agent',
      status: 'draft' as const,
      channels: channelsLabel,
      persona,
      successEvent,
      draftStep: step,
      lastActive: 'Saved just now',
    };
    if (draftAgentId) await updateAgent(draftAgentId, payload);
    else {
      const created = await createAgent(payload);
      setDraftAgentId(created.id);
    }
    flash('Agent draft saved. You can continue setup anytime.');
    navigate('/agents');
  }

  async function launch() {
    await persistWorkspace();
    const payload = {
      name: agentName || 'Untitled agent',
      status: 'live' as const,
      channels: channelsLabel,
      persona,
      successEvent,
      draftStep: 5,
      lastActive: 'Active just now',
      convosToday: 0,
      qualifiedLeads: 0,
      goalRate: 0,
    };
    if (draftAgentId) await updateAgent(draftAgentId, payload);
    else await createAgent(payload);
    flash('Your agent is live. Conversations start the moment someone taps your link.');
    navigate('/app/dashboard');
  }

  function back() {
    if (step === 1) navigate('/agents');
    else setStep((s) => s - 1);
  }

  return (
    <div className={`onboarding ${isMobile ? 'onboarding--mobile' : ''}`}>
      <div className="onboarding__topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <LogoMark size={26} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16 }}>Alimi</span>
        </div>
        <ProgressBar percent={step * 20} />
        <span style={{ fontSize: 13, color: 'var(--color-steel)', fontWeight: 600, whiteSpace: 'nowrap' }}>
          Step {step} of 5: {STEP_LABELS[step - 1]}
        </span>
      </div>

      <div className="onboarding__body">
        <div className="onboarding__inner">
          {step === 1 && (
            <>
              <div className="onboarding__heading">
                <h1 style={{ fontSize: isMobile ? 26 : 34 }}>Let's build your first AI agent.</h1>
                <p style={{ margin: '10px 0 0', color: 'var(--color-steel)', fontSize: 16 }}>
                  You are 5 steps away from your first autonomous conversation. What's your business?
                </p>
              </div>

              <div className="onboarding__grid-2">
                <FormField label="Full name">
                  <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </FormField>
                <FormField label="Business email">
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                </FormField>
              </div>
              <div style={{ marginBottom: 20 }}>
                <FormField label="Business name">
                  <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                </FormField>
              </div>

              <label className="field">Business vertical</label>
              <div className="onboarding__grid-2" style={{ marginTop: 8 }}>
                {VERTICALS.map((v) => (
                  <div
                    key={v.id}
                    className={`onboarding__vertical-card ${vertical === v.id ? 'onboarding__vertical-card--active' : ''}`}
                    onClick={() => setVertical(v.id)}
                  >
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: v.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 12 }}>
                      {v.emoji}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16 }}>{v.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--color-steel)', marginTop: 3 }}>{v.sub}</div>
                  </div>
                ))}
              </div>

              <div className="onboarding__grid-2" style={{ marginBottom: 28 }}>
                <FormField label="Primary language">
                  <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option>English</option>
                    <option>Pidgin English</option>
                    <option>French</option>
                  </Select>
                </FormField>
                <FormField label="Expected conversation volume">
                  <Select value={volume} onChange={(e) => setVolume(e.target.value)}>
                    <option>Under 100 conversations/mo</option>
                    <option>100–500 conversations/mo</option>
                    <option>500–2,000 conversations/mo</option>
                    <option>2,000+ conversations/mo</option>
                  </Select>
                </FormField>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="onboarding__heading">
                <h1 style={{ fontSize: isMobile ? 24 : 30 }}>Set up your first agent.</h1>
                <p style={{ margin: '10px 0 0', color: 'var(--color-steel)', fontSize: 16 }}>
                  Give it a name and a personality — you'll see it come alive on the right.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr', gap: 28, alignItems: 'start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <FormField label="Give your agent a name" help="This is internal — your customers will not see it.">
                    <Input value={agentName} onChange={(e) => setAgentName(e.target.value)} placeholder="e.g. Lekki Homes Closer" />
                  </FormField>
                  <FormField label="Set your agent's personality (optional)" help="Try it — the live preview updates as you type.">
                    <Textarea value={persona} onChange={(e) => setPersona(e.target.value)} placeholder="e.g. Warm and professional. Always accurate on pricing. Never pushy." />
                  </FormField>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span className="live-dot" />
                    <h2 style={{ fontSize: 15 }}>Live preview</h2>
                  </div>
                  <div className="onboarding__preview-phone">
                    <div className="onboarding__preview-inner">
                      <div className="onboarding__preview-header">
                        <LogoMark size={34} />
                        <div style={{ flex: 1, color: '#fff' }}>
                          <div style={{ fontWeight: 600, fontSize: 14 }}>{agentName || 'Untitled agent'}</div>
                          <div style={{ fontSize: 11, opacity: 0.85, display: 'flex', alignItems: 'center', gap: 5 }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7cffb2' }} />
                            {channelsLabel} · online
                          </div>
                        </div>
                      </div>
                      <div style={{ padding: '16px 14px', minHeight: 200 }}>
                        <div style={{ maxWidth: '85%', background: '#fff', padding: '9px 12px', borderRadius: '4px 12px 12px 12px', fontSize: '13.5px', lineHeight: 1.5 }}>
                          Hi 👋 Welcome to {businessName || 'your business'}! I'm here to help you find the right fit — what are you looking for?
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
            </>
          )}

          {step === 3 && (
            <>
              <div className="onboarding__heading">
                <h1 style={{ fontSize: isMobile ? 24 : 30 }}>Where should your agent talk to leads?</h1>
                <p style={{ margin: '10px 0 0', color: 'var(--color-steel)', fontSize: 16 }}>Choose one or both — you can add the other later.</p>
              </div>
              <div style={{ display: 'flex', gap: 16, maxWidth: 560, margin: '0 auto', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                <button className={`onboarding__channel-card ${wa ? 'onboarding__channel-card--active' : ''}`} onClick={() => setWa((v) => !v)}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: '#e7f3ec', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <WhatsAppIcon size={21} />
                    </div>
                    {wa && <CheckCircleIcon size={22} />}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>WhatsApp</div>
                  <div style={{ fontSize: 13, color: 'var(--color-steel)', lineHeight: 1.45 }}>2.7B+ users. Your customers are already here.</div>
                </button>
                <button className={`onboarding__channel-card ${email2 ? 'onboarding__channel-card--active' : ''}`} onClick={() => setEmail2((v) => !v)}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: '#e9effc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <EmailIcon size={21} />
                    </div>
                    {email2 && <CheckCircleIcon size={22} />}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>Email</div>
                  <div style={{ fontSize: 13, color: 'var(--color-steel)', lineHeight: 1.45 }}>Professional reach for B2B and follow-up sequences.</div>
                </button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="onboarding__heading">
                <h1 style={{ fontSize: isMobile ? 24 : 30 }}>What should your agent know?</h1>
                <p style={{ margin: '10px 0 0', color: 'var(--color-steel)', fontSize: 16 }}>Teach it your business, then tell it what a win looks like.</p>
              </div>
              <div style={{ maxWidth: 620, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <FormField label="What does your agent need to know?" help="Upload catalogues, pricing docs, or FAQs. Your agent learns from them instantly.">
                  <div style={{ border: '1.5px dashed #d8d2c4', borderRadius: 12, padding: 20, textAlign: 'center', marginBottom: 12, background: 'var(--color-surface-soft)' }}>
                    <div style={{ fontSize: 14, color: 'var(--color-steel)', fontWeight: 600 }}>Add files or paste a URL</div>
                    <div style={{ fontSize: 12, color: 'var(--color-muted)', marginTop: 3 }}>PDF, DOCX, CSV up to 50MB each</div>
                  </div>
                </FormField>
                <FormField label="What counts as a win?" help="Define the outcome your agent works toward. The more specific, the better.">
                  <Textarea value={successEvent} onChange={(e) => setSuccessEvent(e.target.value)} />
                </FormField>
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <div className="onboarding__heading">
                <h1 style={{ fontSize: isMobile ? 24 : 30 }}>Share your agent</h1>
                <p style={{ margin: '10px 0 0', color: 'var(--color-steel)', fontSize: 16 }}>
                  Every entry point carries a source label — your agent knows exactly where each lead came from.
                </p>
              </div>
              <div style={{ maxWidth: 620, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 220, background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 10, padding: '11px 14px', fontFamily: 'var(--font-mono)', fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    wa.me/234...?text={agentName.toLowerCase().replace(/\s+/g, '-') || 'your-agent'}
                  </div>
                  <Button variant="dark" size="sm" onClick={() => flash('Link copied to clipboard.')}>Copy link</Button>
                  <Button variant="accent" size="sm" onClick={() => flash('Downloading QR code…')}>Download QR code</Button>
                </div>
                <Button variant="ghost" style={{ alignSelf: 'center' }} onClick={() => navigate('/app/entry-points')}>
                  More entry points →
                </Button>
              </div>
            </>
          )}

          <div className="onboarding__footer">
            <Button variant="link" style={{ color: 'var(--color-steel)' }} onClick={back}>
              ← Back
            </Button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Button variant="ghost" onClick={saveDraft}>Save as draft</Button>
              {step < 5 ? (
                <Button variant="primary" onClick={() => setStep((s) => s + 1)}>Continue →</Button>
              ) : (
                <Button variant="primary" onClick={launch}>Launch agent</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
