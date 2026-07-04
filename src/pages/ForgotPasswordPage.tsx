import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Input, FormField } from '../components/ui/Field';
import { Button } from '../components/ui/Button';
import { LogoMark, CheckCircleIcon } from '../components/icons';
import { useAuth } from '../context/AuthContext';

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(email);
    } finally {
      setLoading(false);
      setSent(true);
    }
  }

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}
    >
      <Card padding="lg" style={{ width: '100%', maxWidth: 400, borderRadius: 'var(--radius-xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <LogoMark size={28} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17 }}>Alimi</span>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit}>
            <h1 style={{ fontSize: 24, margin: '0 0 8px' }}>Reset your password</h1>
            <p style={{ margin: '0 0 20px', fontSize: 14, color: 'var(--color-steel)', lineHeight: 1.5 }}>
              Enter the email on your account and we'll send you a link to reset your password.
            </p>
            <FormField label="Business email">
              <Input
                required
                type="email"
                placeholder="tunde@lekkihomes.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: 18 }}
              />
            </FormField>
            <Button type="submit" variant="primary" fullWidth disabled={loading}>
              {loading ? 'Sending…' : 'Send reset link'}
            </Button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: 'var(--color-brand-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <CheckCircleIcon size={26} />
            </div>
            <h1 style={{ fontSize: 22, margin: '0 0 8px' }}>Check your email</h1>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--color-steel)', lineHeight: 1.5 }}>
              We've sent a password reset link to your email. It expires in 30 minutes.
            </p>
          </div>
        )}

        <Button variant="link" fullWidth style={{ marginTop: 22, justifyContent: 'center', color: 'var(--color-steel)' }} onClick={() => navigate('/signin')}>
          ← Back to sign in
        </Button>
      </Card>
    </div>
  );
}
