import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthSplitLayout } from '../components/layout/AuthSplitLayout';
import { Input, FormField } from '../components/ui/Field';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

export function SignUpPage() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signUp({ fullName, email, businessName, password });
      navigate('/agents');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthSplitLayout
      heading="The AI closer your business needs."
      body="Deploy autonomous agents that qualify leads, book meetings, and hand you warm prospects with a full briefing — while you sleep."
    >
      <h1 style={{ fontSize: 30 }}>Your AI closer starts here.</h1>
      <p style={{ margin: '10px 0 28px', color: 'var(--color-steel)', fontSize: 15 }}>
        Set up your Alimi agent in under 30 minutes — no code, no tech team.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <FormField label="Your full name">
          <Input
            required
            placeholder="Tunde Bakare"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormField>
        <FormField label="Your business email">
          <Input
            required
            type="email"
            placeholder="tunde@lekkihomes.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <FormField label="Business name">
          <Input
            required
            placeholder="Lekki Homes"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </FormField>
        <FormField label="Password">
          <Input
            required
            type="password"
            minLength={6}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormField>
        {error && <p style={{ color: 'var(--color-red)', fontSize: 13, margin: 0 }}>{error}</p>}
        <Button type="submit" variant="primary" fullWidth disabled={loading} style={{ marginTop: 6 }}>
          {loading ? 'Creating account…' : 'Create my account →'}
        </Button>
      </form>
      <p style={{ margin: '18px 0 0', fontSize: '12.5px', color: 'var(--color-muted)', lineHeight: 1.5 }}>
        By continuing you agree to our Terms and Privacy Policy. No credit card required.
      </p>
      <p style={{ margin: '16px 0 0', fontSize: 14, color: 'var(--color-steel)', textAlign: 'center' }}>
        Already have an account?{' '}
        <Link to="/signin" style={{ color: 'var(--color-brand-deep)', fontWeight: 600, textDecoration: 'none' }}>
          Sign in
        </Link>
      </p>
    </AuthSplitLayout>
  );
}
