import Link from 'next/link';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Pullquote } from '@/components/ui/Pullquote';
import { Check, Zap, Shield, Layout, Pin } from '@/components/Icons';
import FaqAccordion from '@/components/FaqAccordion';
import HomeQuoteForm from '@/components/HomeQuoteForm';
import { PACKAGES, WHY, STEPS } from '@/data/index';

const ICON_MAP = { Zap, Shield, Layout, Pin, Check };

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" id="top">
        <div className="container">
          <div className="hero__grid">
            <div>
              <span className="eyebrow">Toronto &amp; GTA Web Design</span>
              <h1 className="hero__title">
                Get online fast. <em>Look credible</em> from day one.
              </h1>
              <p className="hero__lead">
                Clean, professional websites for Toronto businesses — designed to build trust and
                bring in inquiries, without the agency wait.
              </p>
              <div className="hero__cta">
                <Button variant="accent" size="lg" as={Link} href="#quote">
                  Book a free call
                </Button>
                <Button variant="secondary" size="lg" as={Link} href="#packages">
                  See packages
                </Button>
              </div>
              <div className="hero__trust">
                <span className="au-avatar-group">
                  <Avatar name="Dana Reid" size="sm" />
                  <Avatar name="Sam Cole" size="sm" />
                  <Avatar name="Lee Park" size="sm" />
                </span>
                <span className="hero__trust-text">
                  <strong>40+ Toronto businesses</strong> launched with Clearframe
                </span>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__card">
                <img src="/hero-mock.png" alt="Website preview" />
              </div>
              <div className="hero__badge">
                <span className="b-num">~3 days</span>
                <span className="b-lab">
                  to launch
                  <br />
                  your page
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="trust">
        <div className="container">
          <div className="trust__row">
            {[
              ['40+', 'Toronto sites launched'],
              ['~3 days', 'To launch a page'],
              ['4.9★', 'Average client review'],
              ['100%', 'Mobile-ready builds'],
            ].map(([n, l]) => (
              <div className="trust__stat" key={l}>
                <div className="trust__num">{n}</div>
                <div className="trust__lab">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section" id="packages">
        <div className="container">
          <div className="sec-intro center">
            <span className="eyebrow">Packages</span>
            <h2>Straightforward pricing, fixed quotes</h2>
            <p>
              Pick a starting point. Every project is scoped and quoted up front — no surprises, no
              hourly meters.
            </p>
          </div>
          <div className="pkg-grid">
            {PACKAGES.map((p) => (
              <div className={'pkg' + (p.featured ? ' pkg--featured' : '')} key={p.name}>
                {p.featured ? (
                  <span className="pkg__flag">
                    <Badge tone="accent" variant="solid">
                      Most popular
                    </Badge>
                  </span>
                ) : null}
                <div className="pkg__name">{p.name}</div>
                <div className="pkg__price">
                  {p.price} <small>from · CAD</small>
                </div>
                <p className="pkg__desc">{p.desc}</p>
                <ul className="pkg__features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={18} /> {f}
                    </li>
                  ))}
                </ul>
                <div className="pkg__cta">
                  <Button
                    variant={p.featured ? 'accent' : 'primary'}
                    block
                    as={Link}
                    href="/contact"
                  >
                    {p.cta}
                  </Button>
                  <p className="pkg__pay">{p.pay}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section--alt" id="services">
        <div className="container">
          <div className="why__grid">
            <div className="why__head">
              <span className="eyebrow">Why Clearframe</span>
              <h2>A website that works as hard as you do</h2>
              <p>
                We keep it clear and practical: a credible site, launched quickly, built to bring in
                the right inquiries.
              </p>
            </div>
            <div className="why__list">
              {WHY.map(([ico, title, text]) => {
                const I = ICON_MAP[ico];
                return (
                  <div className="why__item" key={title}>
                    <span className="why__ico">{I ? <I size={20} /> : null}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" id="process">
        <div className="container">
          <div className="sec-intro center">
            <span className="eyebrow">The Process</span>
            <h2>From first call to live in four simple steps</h2>
          </div>
          <div className="steps">
            {STEPS.map(([title, text], i) => (
              <div className="step" key={title}>
                <div className="step__num">{i + 1}</div>
                <div className="step__title">{title}</div>
                <p className="step__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section section--alt">
        <div className="container center">
          <Pullquote
            align="center"
            cite="Daniel R."
            role="Owner, North End Plumbing"
            style={{ maxWidth: '30ch', marginInline: 'auto' }}
          >
            Clearframe had our new site live in under two weeks — the inquiries started the same
            month.
          </Pullquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="sec-intro center">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, answered</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Final CTA + form */}
      <section className="section section--navy" id="quote">
        <div className="container">
          <div className="cta__grid">
            <div className="cta__head">
              <span className="eyebrow" style={{ color: 'var(--gold-300)' }}>
                Get started
              </span>
              <h2 style={{ marginTop: '12px' }}>Ready to get online?</h2>
              <p>
                Tell us a little about your business and we&apos;ll send a fixed quote and timeline
                — usually within one business day.
              </p>
              <ul className="cta__list">
                <li>
                  <Check size={18} /> Free, no-pressure consult call
                </li>
                <li>
                  <Check size={18} /> Fixed quote before any work starts
                </li>
                <li>
                  <Check size={18} /> Toronto-based, real human replies
                </li>
              </ul>
            </div>
            <HomeQuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
