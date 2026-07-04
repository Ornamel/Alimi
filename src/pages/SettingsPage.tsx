import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { useAuth } from '../context/AuthContext';
import { useWorkspace } from '../context/WorkspaceContext';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/ui/Button';
import { Input, FormField } from '../components/ui/Field';
import { Modal } from '../components/ui/Modal';
import { ArrowLeftIcon } from '../components/icons';

const TABS = [
  { id: 'profile', label: 'Profile' },
  { id: 'workspace', label: 'Workspace' },
  { id: 'billing', label: 'Plan & Billing' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'team', label: 'Team & Access' },
  { id: 'security', label: 'Security' },
  { id: 'privacy', label: 'Data & Privacy' },
];

const NOTIFICATIONS = [
  { label: 'Intelligence briefings', channel: 'Email + Push' },
  { label: 'Lead ready to close', channel: 'Email + Push' },
  { label: 'Agent needs attention', channel: 'Email + Push' },
  { label: 'Knowledge base indexing complete', channel: 'Email' },
  { label: 'Billing alerts', channel: 'Email only' },
];

export function SettingsPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { flash } = useToast();
  const { profile, workspace, updateProfile, updateWorkspace } = useWorkspace();
  const [tab, setTab] = useState('profile');
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [vertical, setVertical] = useState('');
  const [language, setLanguage] = useState('');
  const [defaultChannel, setDefaultChannel] = useState('');

  useEffect(() => {
    if (profile) {
      setFullName(profile.fullName);
      setPhone(profile.phone ?? '');
    }
    if (workspace) {
      setBusinessName(workspace.businessName);
      setVertical(workspace.vertical);
      setLanguage(workspace.primaryLanguage);
      setDefaultChannel(workspace.defaultChannel);
    }
  }, [profile, workspace]);

  const planLabel = workspace?.planTier === 'pro' ? 'Pro Plan' : workspace?.planTier === 'agency' ? 'Agency Plan' : 'Free Plan';

  async function saveProfile() {
    await updateProfile({ fullName, phone: phone || null });
    flash('Changes saved successfully.');
  }

  async function saveWorkspace() {
    await updateWorkspace({ businessName, vertical, primaryLanguage: language, defaultChannel });
    flash('Changes saved successfully.');
  }

  async function confirmDelete() {
    setDeleteOpen(false);
    flash('Your Alimi workspace has been deleted.');
    await signOut();
    navigate('/');
  }

  return (
    <div style={{ background: 'var(--color-surface)', minHeight: '100vh', padding: isMobile ? '28px 16px 60px' : '36px 40px 80px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <div style={{ marginBottom: 26 }}>
          <button onClick={() => navigate('/agents')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer', marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeftIcon size={15} color="var(--color-steel)" /> Back to Your Agents
          </button>
          <h1 style={{ fontSize: 28 }}>Settings</h1>
          <p style={{ margin: '8px 0 0', color: 'var(--color-steel)', fontSize: 15 }}>Manage your account, workspace, billing, and security preferences.</p>
        </div>

        <div style={{ display: isMobile ? 'flex' : 'grid', flexDirection: isMobile ? 'column' : undefined, gridTemplateColumns: isMobile ? undefined : '200px 1fr', gap: isMobile ? 20 : 28, alignItems: 'start' }}>
          <div>
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 14px',
                  borderRadius: 10,
                  border: 'none',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginBottom: 2,
                  background: tab === t.id ? 'var(--color-ink)' : 'none',
                  color: tab === t.id ? '#fff' : 'var(--color-steel)',
                }}
              >
                {t.label}
              </button>
            ))}
            <div style={{ borderTop: '1px solid #e4dfd3', marginTop: 12, paddingTop: 12 }}>
              <button
                style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', color: 'var(--color-muted)', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer', padding: '8px 14px' }}
                onClick={async () => {
                  await signOut();
                  navigate('/');
                }}
              >
                Sign out
              </button>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--color-hairline)', borderRadius: 18, padding: 28 }}>
            {tab === 'profile' && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 18 }}>Profile</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
                  <FormField label="Full name">
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
                  </FormField>
                  <FormField label="Email address">
                    <Input value={profile?.email ?? ''} disabled />
                    <p style={{ margin: '6px 0 0', fontSize: 12, color: 'var(--color-muted)' }}>Your email is used for login, billing, and important account notifications.</p>
                  </FormField>
                  <FormField label="Phone number (optional)">
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234" />
                  </FormField>
                  <FormField label="Time zone">
                    <Input value={profile?.timezone ?? 'Africa/Lagos'} disabled />
                  </FormField>
                  <Button variant="primary" style={{ alignSelf: 'flex-start' }} onClick={saveProfile}>Save changes</Button>
                </div>
              </>
            )}

            {tab === 'workspace' && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>Workspace</h2>
                <p style={{ margin: '0 0 18px', fontSize: 13, color: 'var(--color-muted)' }}>These details help Alimi personalize your agent setup and recommendations.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
                  <FormField label="Business name">
                    <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                  </FormField>
                  <FormField label="Business vertical">
                    <Input value={vertical} onChange={(e) => setVertical(e.target.value)} />
                  </FormField>
                  <FormField label="Primary language">
                    <Input value={language} onChange={(e) => setLanguage(e.target.value)} />
                  </FormField>
                  <FormField label="Default channel preference">
                    <Input value={defaultChannel} onChange={(e) => setDefaultChannel(e.target.value)} />
                  </FormField>
                  <Button variant="primary" style={{ alignSelf: 'flex-start' }} onClick={saveWorkspace}>Save changes</Button>
                </div>
              </>
            )}

            {tab === 'billing' && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>Plan &amp; Billing</h2>
                <p style={{ margin: '0 0 18px', fontSize: 13, color: 'var(--color-muted)' }}>Invoices will appear after your first paid billing cycle.</p>
                <div style={{ background: 'var(--color-input-bg)', borderRadius: 14, padding: 20, maxWidth: 420 }}>
                  <div style={{ fontSize: 13, color: 'var(--color-steel)', marginBottom: 4 }}>Current plan</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, marginBottom: 10 }}>{planLabel}</div>
                  <div style={{ fontSize: 13, color: 'var(--color-steel)', marginBottom: 4 }}>Usage</div>
                  <div style={{ fontWeight: 600, marginBottom: 16 }}>
                    {agentsUsageText(workspace?.agentLimit ?? 1)}
                  </div>
                  <Button variant="primary" onClick={() => navigate('/billing')}>Manage plan</Button>
                </div>
              </>
            )}

            {tab === 'notifications' && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 6 }}>Notifications</h2>
                <p style={{ margin: '0 0 18px', fontSize: 13, color: 'var(--color-muted)' }}>Choose how you want to be notified when your agents need your attention.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 460 }}>
                  {NOTIFICATIONS.map((n, i) => (
                    <div key={n.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < NOTIFICATIONS.length - 1 ? '1px solid #f4f0e6' : 'none' }}>
                      <span style={{ fontSize: 14 }}>{n.label}</span>
                      <span style={{ fontSize: '12.5px', color: 'var(--color-steel)' }}>{n.channel}</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" style={{ marginTop: 18 }} onClick={() => flash('Notification preferences saved.')}>Save preferences</Button>
              </>
            )}

            {tab === 'team' && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 18 }}>Team &amp; Access</h2>
                <div style={{ textAlign: 'center', padding: '30px 10px', background: 'var(--color-input-bg)', borderRadius: 14 }}>
                  <div style={{ fontWeight: 600, fontSize: '15.5px', marginBottom: 6 }}>Team access is available on paid plans</div>
                  <p style={{ margin: '0 0 18px', fontSize: '13.5px', color: 'var(--color-steel)' }}>Upgrade to invite team members and assign roles.</p>
                  <Button variant="primary" onClick={() => navigate('/billing')}>Upgrade plan</Button>
                </div>
              </>
            )}

            {tab === 'security' && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 18 }}>Security</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 460 }}>
                  <SecurityRow title="Password" body="Keep your account secure by using a strong password." cta="Change" onClick={() => flash('Password updated successfully.')} />
                  <SecurityRow title="Two-factor authentication" body="Add an extra layer of protection to your account." cta="Enable" onClick={() => flash('Changes saved successfully.')} />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>Active sessions</div>
                      <div style={{ fontSize: '12.5px', color: 'var(--color-steel)' }}>1 device currently signed in.</div>
                    </div>
                    <button style={{ background: 'none', border: 'none', color: '#c9631c', fontSize: 13, fontWeight: 600, cursor: 'pointer' }} onClick={() => flash('Changes saved successfully.')}>
                      Sign out all devices
                    </button>
                  </div>
                </div>
              </>
            )}

            {tab === 'privacy' && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 18 }}>Data &amp; Privacy</h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 18, borderBottom: '1px solid #f4f0e6', maxWidth: 460 }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>Export account data</div>
                    <div style={{ fontSize: '12.5px', color: 'var(--color-steel)' }}>Request a full export of your account data.</div>
                  </div>
                  <Button variant="secondary" size="sm" onClick={() => flash("Exporting your data — we'll email a link shortly.")}>Export</Button>
                </div>
                <div style={{ marginTop: 22, border: '1px solid #f0dada', borderRadius: 14, padding: 18, maxWidth: 460 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-red)', marginBottom: 8 }}>Danger zone</div>
                  <div style={{ fontWeight: 600, fontSize: '14.5px', marginBottom: 4 }}>Delete account</div>
                  <p style={{ margin: '0 0 14px', fontSize: '12.5px', color: 'var(--color-steel)', lineHeight: 1.5 }}>
                    This will permanently close your Alimi workspace and stop all active agents.
                  </p>
                  <Button variant="danger" size="sm" onClick={() => setDeleteOpen(true)}>Delete account</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {deleteOpen && (
        <Modal onClose={() => setDeleteOpen(false)}>
          <h2 style={{ fontSize: 19, marginBottom: 10 }}>Are you sure?</h2>
          <p style={{ margin: '0 0 22px', fontSize: 14, color: 'var(--color-steel)', lineHeight: 1.5 }}>
            This will permanently delete your Alimi workspace. This action cannot be undone.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="ghost" style={{ flex: 1 }} onClick={() => setDeleteOpen(false)}>Cancel</Button>
            <Button variant="danger" style={{ flex: 1 }} onClick={confirmDelete}>Delete account</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function agentsUsageText(limit: number) {
  return `1 of ${limit} agent${limit !== 1 ? 's' : ''} used`;
}

function SecurityRow({ title, body, cta, onClick }: { title: string; body: string; cta: string; onClick: () => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 14, borderBottom: '1px solid #f4f0e6' }}>
      <div>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: '12.5px', color: 'var(--color-steel)' }}>{body}</div>
      </div>
      <Button variant="secondary" size="sm" onClick={onClick}>{cta}</Button>
    </div>
  );
}
