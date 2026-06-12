import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Check } from '@/components/Icons';
import { PACKAGES, CARE, STEPS } from '@/data/index';

function ServiceRow({ pkg, flip }) {
  return (
    <div className={'svc-row' + (flip ? ' svc-row--flip' : '')}>
      <div className="svc-row__body">
        <div className="svc-row__head">
          <span className="svc-row__name">{pkg.name}</span>
          {pkg.featured ? <Badge tone="accent">Most popular</Badge> : null}
        </div>
        <div className="svc-row__price">
          {pkg.price} <small>{pkg.cadence}</small>
        </div>
        <p className="svc-row__desc">{pkg.desc}</p>
        <p className="svc-row__who">
          <strong>Best for:</strong> {pkg.who}
        </p>
        <div className="svc-row__cta">
          <Button variant={pkg.featured ? 'accent' : 'primary'} as={Link} href="/contact">
            {pkg.cta}
          </Button>
          <span className="svc-row__meta">
            {pkg.timeline} · {pkg.pay}
          </span>
        </div>
      </div>
      <div className="svc-row__card">
        <span className="svc-row__inc">What&apos;s included</span>
        <ul className="svc-row__list">
          {pkg.features.map((f) => (
            <li key={f}>
              <Check size={18} /> {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Services — Clearframe Studio',
  description:
    'Three clear starting points for Toronto businesses. Launch Page from $500, Business Website from $1,500, Growth Website from $2,800.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Intro */}
      <section className="page-hero">
        <div className="container center">
          <span className="eyebrow">Services</span>
          <h1 className="page-hero__title">Websites built for Toronto businesses</h1>
          <p className="page-hero__lead">
            Three clear starting points, each scoped and quoted up front. Pick the one that fits
            where your business is today — we&apos;ll handle the rest.
          </p>
        </div>
      </section>

      {/* Detailed service rows */}
      <section className="section" id="packages">
        <div className="container">
          <div className="svc-rows">
            {PACKAGES.map((p, i) => (
              <ServiceRow key={p.id} pkg={p} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Care & maintenance */}
      <section className="section section--alt" id="care">
        <div className="container">
          <div className="sec-intro center">
            <span className="eyebrow">Care &amp; Maintenance</span>
            <h2>Launched is just the start</h2>
            <p>
              Keep your site fast, secure, and up to date with a simple monthly plan — hosting,
              updates, and edits handled, so you can focus on running your business.
            </p>
          </div>
          <div className="care-grid">
            {CARE.map((c) => (
              <div className={'care' + (c.featured ? ' care--featured' : '')} key={c.name}>
                {c.featured ? (
                  <span className="care__flag">
                    <Badge tone="accent" variant="solid">
                      Recommended
                    </Badge>
                  </span>
                ) : null}
                <div className="care__name">{c.name}</div>
                <div className="care__price">
                  {c.price}
                  <small>{c.unit}</small>
                </div>
                <ul className="care__list">
                  {c.features.map((f) => (
                    <li key={f}>
                      <Check size={17} /> {f}
                    </li>
                  ))}
                </ul>
                <div className="care__cta">
                  <Button
                    variant={c.featured ? 'accent' : 'secondary'}
                    block
                    as={Link}
                    href="/contact"
                  >
                    Choose {c.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="care__note">
            Hosting runs on fast, secure infrastructure. No long contracts — cancel or change plans
            anytime.
          </p>
        </div>
      </section>

      {/* Process recap */}
      <section className="section" id="process">
        <div className="container">
          <div className="sec-intro center">
            <span className="eyebrow">How it works</span>
            <h2>From first call to live in four steps</h2>
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

      {/* CTA band */}
      <section className="section section--navy">
        <div className="container center">
          <h2 className="band-cta__title">Not sure which fits? Let&apos;s talk it through.</h2>
          <p className="band-cta__lead">
            A quick, no-pressure call and a fixed quote — usually within one business day.
          </p>
          <div className="band-cta__actions">
            <Button variant="accent" size="lg" as={Link} href="/contact">
              Book a free call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
