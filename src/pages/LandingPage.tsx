import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useIsMobile } from '../hooks/useIsMobile';
import { LogoMark, ArrowRightIcon, WhatsAppIcon, EntryIcon, BriefingIcon, TakeoverIcon, CalendarIcon } from '../components/icons';
import { VERTICALS } from '../lib/mockData';
import './LandingPage.css';

const FEATURES = [
  {
    title: 'Native WhatsApp & Email',
    body: 'No app to download. Your agent meets customers where they already are.',
    bg: 'rgba(22,196,127,0.14)',
    icon: <WhatsAppIcon size={20} color="var(--color-brand)" />,
  },
  {
    title: 'Entry point tracking',
    body: 'QR codes, links, and embeds each carry a source label -- you always know where a lead came from.',
    bg: 'rgba(47,107,236,0.14)',
    icon: <EntryIcon size={20} color="#5b90f5" />,
  },
  {
    title: 'Intelligence briefings',
    body: 'Every qualified lead arrives with intent signals, objections, and your next three moves -- ready to act on.',
    bg: 'rgba(245,162,75,0.16)',
    icon: <BriefingIcon size={20} color="#f5a24b" />,
  },
  {
    title: 'Live takeover',
    body: 'Step into any conversation at any moment. The agent hands back cleanly when you\'re done.',
    bg: 'rgba(22,196,127,0.14)',
    icon: <TakeoverIcon size={20} color="var(--color-brand)" />,
  },
  {
    title: 'Trained knowledge base',
    body: 'Upload catalogues, pricing, or FAQs -- your agent answers accurately from day one.',
    bg: 'rgba(245,162,75,0.16)',
    icon: <CalendarIcon size={20} color="#f5a24b" />,
  },
  {
    title: 'Real-time analytics',
    body: 'Track the full funnel -- from first click to closed deal -- and see which sources actually convert.',
    bg: 'rgba(47,107,236,0.14)',
    icon: <ArrowRightIcon size={20} color="#5b90f5" />,
  },
];

const HOW_IT_WORKS = [
  {
    title: 'Build your agent',
    body: 'Describe your business, connect WhatsApp & Email, and upload the pricing sheets or FAQs it should know. Takes under 30 minutes -- no code.',
  },
  {
    title: "It works while you don't",
    body: 'Your agent answers instantly, qualifies interest, and books meetings -- 24/7, on the channels your customers already use.',
  },
  {
    title: 'You step in to close',
    body: 'The moment a lead is ready, you get a full intelligence briefing -- no transcripts to read. Take over, or let the handoff speak for itself.',
  },
];

export function LandingPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [annual, setAnnual] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const proPrice = annual ? 'NGN 39k' : 'NGN 49k';
  const proSub = annual ? 'billed NGN 468k/yr' : 'billed monthly, cancel anytime';

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={`landing ${isMobile ? 'landing--mobile' : ''}`}>
      <div className="landing__nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <LogoMark size={30} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20 }}>Alimi</span>
        </div>
        <div className="landing__nav-links">
          {!isMobile ? (
            <>
              <button className="landing__nav-link" onClick={() => navigate('/product')}>Product</button>
              <button className="landing__nav-link" onClick={() => navigate('/pricing')}>Pricing</button>
              <button className="landing__nav-link" onClick={() => navigate('/customers')}>Customers</button>
              <button className="landing__nav-link" onClick={() => navigate('/signin')} style={{ color: 'var(--color-on-dark)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                Sign in
              </button>
              <Button variant="accent" size="sm" onClick={() => navigate('/signup')}>
                Get started free
              </Button>
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

      <div className="landing__hero">
        <div>
          <div className="landing__hero-badge">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-brand)' }} />
            The 90/10 model -- AI does 90%, you close the 10%
          </div>
          <h1 className="landing__hero-title">
            Your AI closer
            <br />
            starts here.
          </h1>
          <p className="landing__hero-body">
            Set up your Alimi agent in under 30 minutes -- no code, no tech team. Autonomous agents that hold real
            sales conversations on WhatsApp &amp; Email, 24/7.
          </p>
          <div className="landing__hero-ctas">
            <Button variant="accent" size="lg" icon={<ArrowRightIcon size={18} color="var(--color-night-ink)" />} onClick={() => navigate('/signup')}>
              Get started free
            </Button>
            <Button
              variant="ghost"
              size="lg"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--color-on-dark)', border: '1px solid rgba(255,255,255,0.14)' }}
              onClick={() => navigate('/demo')}
            >
              Watch demo
            </Button>
          </div>
          <p className="landing__hero-trust">Trusted by 200+ businesses across Lagos, Accra, and Nairobi.</p>
        </div>

        <div className="landing__visual">
          <div className="landing__visual-header">
            <span className="live-dot" />
            Live conversation | YouTube lead
          </div>
          <div className="landing__visual-chat">
            <div className="landing__bubble landing__bubble--them">Hi, I saw your Lekki penthouse tour. Is the 3-bed still available?</div>
            <div className="landing__bubble landing__bubble--us">It's the north-facing unit with the wraparound terrace. Want to see it this weekend?</div>
            <div className="landing__bubble landing__bubble--them">Saturday 10am works</div>
          </div>
          <div className="landing__briefing-preview">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <BriefingIcon size={14} color="var(--color-brand)" />
              <span style={{ color: 'var(--color-brand)', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em' }}>
                INTELLIGENCE BRIEFING | JUST NOW
              </span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Chioma is ready to close -- viewing booked.</div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, color: 'var(--color-on-dark-faint)', marginBottom: 3 }}>Purchase</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-brand)', fontSize: 16 }}>92%</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, color: 'var(--color-on-dark-faint)', marginBottom: 3 }}>Budget</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#5b90f5', fontSize: 16 }}>78%</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, color: 'var(--color-on-dark-faint)', marginBottom: 3 }}>Urgency</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#f5a24b', fontSize: 16 }}>85%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing__hairline" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="landing__stat-band">
          <div><div className="landing__stat-value">&lt; 60s</div><div className="landing__stat-label">Lead response time</div></div>
          <div><div className="landing__stat-value">24/7</div><div className="landing__stat-label">Always-on conversations</div></div>
          <div><div className="landing__stat-value">90%</div><div className="landing__stat-label">Of the journey, automated</div></div>
          <div><div className="landing__stat-value">30 min</div><div className="landing__stat-label">To first live agent</div></div>
        </div>
      </div>

      <div id="how-it-works" className="landing__section">
        <div className="landing__section-head">
          <div className="landing__eyebrow">How it works</div>
          <h2 className="landing__section-title">From first message to closed deal -- three steps.</h2>
        </div>
        <div className="landing__grid-3">
          {HOW_IT_WORKS.map((step, i) => (
            <div className="landing__step-card" key={step.title}>
              <div className="landing__step-num">{i + 1}</div>
              <h3 style={{ fontSize: 18, marginBottom: 8, color: 'var(--color-on-dark)' }}>{step.title}</h3>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-on-dark-muted)' }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="features" className="landing__hairline">
        <div className="landing__section">
          <div className="landing__section-head">
            <div className="landing__eyebrow">Everything you need to close</div>
            <h2 className="landing__section-title">Built for real sales conversations, not chatbot scripts.</h2>
          </div>
          <div className="landing__grid-3">
            {FEATURES.map((f) => (
              <div className="landing__feature" key={f.title}>
                <div className="landing__feature-icon" style={{ background: f.bg }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, marginBottom: 6, color: 'var(--color-on-dark)' }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--color-on-dark-muted)' }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="pricing" className="landing__hairline">
        <div className="landing__section">
          <div className="landing__section-head" style={{ marginBottom: 32 }}>
            <div className="landing__eyebrow">Pricing</div>
            <h2 className="landing__section-title">Simple pricing that scales with you.</h2>
          </div>

          <div className="landing__toggle-row">
            <div className="landing__billing-toggle">
              <button className={!annual ? 'active' : ''} onClick={() => setAnnual(false)}>Monthly</button>
              <button className={annual ? 'active' : ''} onClick={() => setAnnual(true)}>Annual</button>
            </div>
            <Badge tone="discount">Save 20%</Badge>
          </div>

          <div className="landing__pricing-grid">
            <div className="landing__price-card">
              <h3 style={{ fontSize: 19 }}>Starter</h3>
              <p style={{ margin: '8px 0 0', fontSize: '13.5px', color: 'var(--color-steel)', lineHeight: 1.5 }}>For solo founders and creators.</p>
              <div style={{ margin: '22px 0 20px' }}>
                <span className="landing__price-amount">NGN 29k</span>
                <span style={{ color: 'var(--color-steel)', fontSize: 14 }}>/mo</span>
              </div>
              <Button variant="secondary" fullWidth onClick={() => navigate('/signup')}>Start free trial</Button>
              <div className="landing__price-feature-list">
                <div className="landing__price-feature">✓ 1 AI agent</div>
                <div className="landing__price-feature">✓ WhatsApp channel</div>
                <div className="landing__price-feature">✓ 250 conversations/mo</div>
                <div className="landing__price-feature">✓ Intelligence briefings</div>
                <div className="landing__price-feature">✓ Basic analytics</div>
              </div>
            </div>

            <div className="landing__price-card landing__price-card--featured">
              <Badge tone="discount" style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
                MOST POPULAR
              </Badge>
              <h3 style={{ fontSize: 19 }}>Growth</h3>
              <p style={{ margin: '8px 0 0', fontSize: '13.5px', color: 'var(--color-steel)', lineHeight: 1.5 }}>For growing businesses.</p>
              <div style={{ margin: '22px 0 4px' }}>
                <span className="landing__price-amount">{proPrice}</span>
                <span style={{ color: 'var(--color-steel)', fontSize: 14 }}>/mo</span>
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--color-brand-deep)', marginBottom: 20 }}>{proSub}</div>
              <Button variant="primary" fullWidth onClick={() => navigate('/signup')}>Start free trial</Button>
              <div className="landing__price-feature-list">
                <div className="landing__price-feature" style={{ color: 'var(--color-ink)' }}>✓ 3 AI agents</div>
                <div className="landing__price-feature" style={{ color: 'var(--color-ink)' }}>✓ WhatsApp + Email</div>
                <div className="landing__price-feature" style={{ color: 'var(--color-ink)' }}>✓ 2,500 conversations/mo</div>
                <div className="landing__price-feature" style={{ color: 'var(--color-ink)' }}>✓ Human take-over</div>
                <div className="landing__price-feature" style={{ color: 'var(--color-ink)' }}>✓ Full analytics &amp; sources</div>
                <div className="landing__price-feature" style={{ color: 'var(--color-ink)' }}>✓ QR &amp; embed widgets</div>
              </div>
            </div>

            <div className="landing__price-card">
              <h3 style={{ fontSize: 19 }}>Scale</h3>
              <p style={{ margin: '8px 0 0', fontSize: '13.5px', color: 'var(--color-steel)', lineHeight: 1.5 }}>For agencies and teams.</p>
              <div style={{ margin: '22px 0 20px' }}>
                <span className="landing__price-amount">NGN 249k</span>
                <span style={{ color: 'var(--color-steel)', fontSize: 14 }}>/mo</span>
              </div>
              <Button
                variant="secondary"
                fullWidth
                onClick={() => alert('Thanks -- our team will reach out within one business day.')}
              >
                Talk to sales
              </Button>
              <div className="landing__price-feature-list">
                <div className="landing__price-feature">✓ Unlimited agents</div>
                <div className="landing__price-feature">✓ All channels</div>
                <div className="landing__price-feature">✓ 15,000 conversations/mo</div>
                <div className="landing__price-feature">✓ Multi-client workspaces</div>
                <div className="landing__price-feature">✓ Team roles &amp; permissions</div>
                <div className="landing__price-feature">✓ API &amp; webhooks</div>
                <div className="landing__price-feature">✓ Priority support &amp; SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing__hairline">
        <div className="landing__section">
          <div className="landing__section-head">
            <div className="landing__eyebrow">Built for your business</div>
            <h2 className="landing__section-title">Wherever you sell, Alimi closes.</h2>
          </div>
          <div className="landing__grid-4">
            {VERTICALS.map((v) => (
              <div className="landing__vertical-card" key={v.id}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: v.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 14 }}>
                  {v.emoji}
                </div>
                <h3 style={{ fontSize: 15, marginBottom: 5, color: 'var(--color-on-dark)' }}>{v.title}</h3>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--color-on-dark-muted)' }}>{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="customers" className="landing__hairline">
        <div className="landing__section">
          <div className="landing__section-head">
            <div className="landing__eyebrow">Customers</div>
            <h2 className="landing__section-title">Businesses closing faster with Alimi.</h2>
          </div>
          <div className="landing__grid-2">
            <div className="landing__testimonial landing__testimonial--brand">
              <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.6, color: '#fff' }}>
                "We used to lose leads overnight. Now Chioma's questions get answered in seconds, and I only step in
                once she's ready to book. It's changed how fast we close."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#fff', fontSize: 14 }}>T</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Tunde Bakare</div>
                  <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.75)' }}>Admin, Lekki Homes</div>
                </div>
              </div>
            </div>
            <div className="landing__testimonial landing__testimonial--plain">
              <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.6, color: '#e7ede9' }}>
                "Every enrollment question used to sit in my DMs for days. Now the agent handles pricing and payment
                plans instantly, and I get a briefing the moment someone's ready to enroll."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#2f6bec,#1f4fb0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#fff', fontSize: 14 }}>A</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-on-dark)' }}>Amara Chukwu</div>
                  <div style={{ fontSize: '12.5px', color: 'var(--color-on-dark-faint)' }}>Founder, Amara Teaches Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="landing__hairline">
        <div className="landing__footer-top">
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <LogoMark size={26} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-on-dark)', fontSize: 17 }}>Alimi</span>
            </div>
            <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-on-dark-faint)', lineHeight: 1.6 }}>
              Autonomous AI agents that hold real sales conversations on WhatsApp &amp; Email, 24/7.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            <div>
              <div className="landing__footer-col-title">Product</div>
              <div className="landing__footer-links">
                <button className="landing__footer-link" onClick={() => navigate('/product')}>Features</button>
                <button className="landing__footer-link" onClick={() => scrollTo('how-it-works')}>How it works</button>
                <button className="landing__footer-link" onClick={() => navigate('/demo')}>Watch demo</button>
              </div>
            </div>
            <div>
              <div className="landing__footer-col-title">Company</div>
              <div className="landing__footer-links">
                <button className="landing__footer-link" onClick={() => navigate('/customers')}>Customers</button>
                <button className="landing__footer-link" onClick={() => navigate('/signup')}>Get started</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="landing__footer-bottom">
            <span>Â© 2026 Alimi. All rights reserved.</span>
            <span>Trusted by 200+ businesses across Lagos, Accra, and Nairobi.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
