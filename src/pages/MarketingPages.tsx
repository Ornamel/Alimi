import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowRightIcon, LogoMark } from '../components/icons';
import { useIsMobile } from '../hooks/useIsMobile';
import './LandingPage.css';

function MarketingNav({ active }: { active: 'product' | 'pricing' | 'customers' }) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navClass = (key: typeof active) => (
    active === key ? 'landing__nav-link landing__nav-link--active' : 'landing__nav-link'
  );

  return (
    <>
      <div className="landing__nav">
        <button className="landing__brand-button" onClick={() => navigate('/')}>
          <LogoMark size={30} />
          <span>Alimi</span>
        </button>
        <div className="landing__nav-links">
          {!isMobile ? (
            <>
              <button className={navClass('product')} onClick={() => navigate('/product')}>Product</button>
              <button className={navClass('pricing')} onClick={() => navigate('/pricing')}>Pricing</button>
              <button className={navClass('customers')} onClick={() => navigate('/customers')}>Customers</button>
              <button className="landing__nav-link" onClick={() => navigate('/signin')} style={{ color: 'var(--color-on-dark)', fontWeight: 600 }}>Sign in</button>
              <Button variant="accent" size="sm" onClick={() => navigate('/signup')}>Get started free</Button>
            </>
          ) : (
            <button className="landing__menu-button" onClick={() => setMobileNavOpen((open) => !open)} aria-expanded={mobileNavOpen} aria-label="Toggle navigation">
              <span />
              <span />
              <span />
            </button>
          )}
        </div>
      </div>
      {isMobile && mobileNavOpen && (
        <div className="landing__mobile-drawer">
          <button onClick={() => navigate('/product')}>Product</button>
          <button onClick={() => navigate('/pricing')}>Pricing</button>
          <button onClick={() => navigate('/customers')}>Customers</button>
          <button onClick={() => navigate('/signin')}>Sign in</button>
          <Button variant="accent" fullWidth onClick={() => navigate('/signup')}>Get started free</Button>
        </div>
      )}
    </>
  );
}

function MarketingFooter() {
  const navigate = useNavigate();

  return (
    <div className="landing__hairline">
      <div className="landing__final-cta">
        <h2 style={{ fontSize: 38, lineHeight: 1.15, color: 'var(--color-on-dark)' }}>Your AI closer starts here.</h2>
        <p style={{ margin: '16px 0 0', color: 'var(--color-on-dark-muted)', fontSize: 17, lineHeight: 1.55 }}>
          Set up your first agent in under 30 minutes. No code, no tech team, no credit card.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 30 }}>
          <Button variant="accent" size="lg" icon={<ArrowRightIcon size={18} color="var(--color-night-ink)" />} onClick={() => navigate('/signup')}>
            Get started free
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ProductPage() {
  const isMobile = useIsMobile();

  return (
    <div className={`landing ${isMobile ? 'landing--mobile' : ''}`}>
      <MarketingNav active="product" />
      <section className="marketing-page__hero">
        <div className="landing__eyebrow">Product</div>
        <h1>One AI sales agent for every entry point.</h1>
        <p>
          Alimi connects WhatsApp, email, QR codes, links, embeds, lead briefings, and takeover tools into one selling workflow.
        </p>
      </section>
      <section className="landing__section">
        <div className="landing__grid-3">
          {[
            ['Native conversations', 'Customers talk to your agent on WhatsApp and email without downloading a new app.'],
            ['Source tracking', 'Every link, QR code, and widget carries attribution so you know which campaigns convert.'],
            ['Human takeover', 'Step into any live conversation and hand it back to the agent when the moment is handled.'],
            ['Knowledge base', 'Train Alimi with catalogues, pricing sheets, policies, FAQs, and business context.'],
            ['Briefings', 'Qualified leads arrive with intent, budget, urgency, objections, and suggested next moves.'],
            ['Analytics', 'See response speed, sources, conversations, qualified leads, and conversion outcomes in real time.'],
          ].map(([title, body]) => (
            <article className="marketing-page__card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <MarketingFooter />
    </div>
  );
}

export function PricingPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const plans = [
    {
      name: 'Starter',
      price: 'NGN 29k',
      body: 'For solo founders and creators.',
      cta: 'Start free trial',
      featured: false,
      features: ['1 AI agent', 'WhatsApp channel', '250 conversations/mo', 'Intelligence briefings', 'Basic analytics'],
    },
    {
      name: 'Growth',
      price: 'NGN 49k',
      body: 'For growing businesses.',
      cta: 'Start free trial',
      featured: true,
      features: ['3 AI agents', 'WhatsApp + Email', '2,500 conversations/mo', 'Human take-over', 'Full analytics and sources', 'QR and embed widgets'],
    },
    {
      name: 'Scale',
      price: 'NGN 249k',
      body: 'For agencies and teams.',
      cta: 'Talk to sales',
      featured: false,
      features: ['Unlimited agents', 'All channels', '15,000 conversations/mo', 'Multi-client workspaces', 'Team roles and permissions', 'API and webhooks', 'Priority support and SLA'],
    },
  ];

  return (
    <div className={`landing ${isMobile ? 'landing--mobile' : ''}`}>
      <MarketingNav active="pricing" />
      <section className="marketing-page__hero">
        <div className="landing__eyebrow">Pricing</div>
        <h1>Simple pricing that scales with your sales team.</h1>
        <p>Start lean, add agents as demand grows, and keep every conversation tied to measurable sources.</p>
      </section>
      <section className="landing__section" style={{ paddingTop: 24 }}>
        <div className="landing__pricing-grid">
          {plans.map((plan) => (
            <article className={`landing__price-card ${plan.featured ? 'landing__price-card--featured' : ''}`} key={plan.name}>
              {plan.featured && <Badge tone="discount" style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)' }}>MOST POPULAR</Badge>}
              <h3 style={{ fontSize: 19 }}>{plan.name}</h3>
              <p style={{ margin: '8px 0 0', fontSize: '13.5px', color: 'var(--color-steel)', lineHeight: 1.5 }}>{plan.body}</p>
              <div style={{ margin: '22px 0 20px' }}>
                <span className="landing__price-amount">{plan.price}</span>
                <span style={{ color: 'var(--color-steel)', fontSize: 14 }}>/mo</span>
              </div>
              <Button variant={plan.featured ? 'primary' : 'secondary'} fullWidth onClick={() => navigate(plan.featured ? '/signup' : plan.name === 'Scale' ? '/demo' : '/signup')}>
                {plan.cta}
              </Button>
              <ul className="marketing-page__list">
                {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <MarketingFooter />
    </div>
  );
}

export function CustomersPage() {
  const isMobile = useIsMobile();

  return (
    <div className={`landing ${isMobile ? 'landing--mobile' : ''}`}>
      <MarketingNav active="customers" />
      <section className="marketing-page__hero">
        <div className="landing__eyebrow">Customers</div>
        <h1>Built for businesses where speed wins the sale.</h1>
        <p>Real estate teams, course creators, agencies, and service businesses use Alimi to answer first and close faster.</p>
      </section>
      <section className="landing__section" style={{ paddingTop: 24 }}>
        <div className="landing__grid-2">
          <article className="landing__testimonial landing__testimonial--brand">
            <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.6, color: '#fff' }}>
              "We used to lose leads overnight. Now questions get answered in seconds, and I only step in once the buyer is ready to book."
            </p>
            <strong style={{ color: '#fff' }}>Tunde Bakare</strong>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12.5px', marginTop: 4 }}>Admin, Lekki Homes</div>
          </article>
          <article className="landing__testimonial landing__testimonial--plain">
            <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.6, color: '#e7ede9' }}>
              "The agent handles pricing and payment-plan questions instantly, then sends me a briefing when someone is ready to enroll."
            </p>
            <strong style={{ color: 'var(--color-on-dark)' }}>Amara Chukwu</strong>
            <div style={{ color: 'var(--color-on-dark-faint)', fontSize: '12.5px', marginTop: 4 }}>Founder, Amara Teaches Design</div>
          </article>
        </div>
      </section>
      <MarketingFooter />
    </div>
  );
}
