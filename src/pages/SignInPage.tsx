import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthSplitLayout } from '../components/layout/AuthSplitLayout';
import { Input, FormField } from '../components/ui/Field';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { usingLocalBackend } from '../lib/backend';

export function SignInPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signIn({ email, password });
      navigate('/agents');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthSplitLayout
      heading="Good to see you again."
      body="Your agents kept working while you were away. Sign in to see what came in."
    >
      <h1 style={{ fontSize: 30 }}>Welcome back.</h1>
      <p style={{ margin: '10px 0 28px', color: 'var(--color-steel)', fontSize: 15 }}>Sign in to your Alimi dashboard.</p>
      {usingLocalBackend && (
        <p style={{ margin: '0 0 18px', fontSize: 12.5, color: 'var(--color-muted)', lineHeight: 1.5 }}>
          Demo mode (no Supabase configured) — try <code>tunde@lekkihomes.com</code> / <code>demo1234</code>.
        </p>
      )}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <FormField label="Business email">
          <Input
            required
            type="email"
            placeholder="tunde@lekkihomes.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <label style={{ fontSize: 13, fontWeight: 600 }}>Password</label>
            <Link
              to="/forgot-password"
              style={{ background: 'none', border: 'none', color: 'var(--color-brand-deep)', fontSize: '12.5px', fontWeight: 600, textDecoration: 'none' }}
            >
              Forgot password?
            </Link>
          </div>
          <Input
            required
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'var(--color-red)', fontSize: 13, margin: 0 }}>{error}</p>}
        <Button type="submit" variant="primary" fullWidth disabled={loading} style={{ marginTop: 6 }}>
          {loading ? 'Signing in…' : 'Sign in →'}
        </Button>
      </form>
      <p style={{ margin: '18px 0 0', fontSize: 14, color: 'var(--color-steel)', textAlign: 'center' }}>
        Don't have an account?{' '}
        <Link to="/signup" style={{ color: 'var(--color-brand-deep)', fontWeight: 600, textDecoration: 'none' }}>
          Sign up
        </Link>
      </p>
    </AuthSplitLayout>
  );
}
