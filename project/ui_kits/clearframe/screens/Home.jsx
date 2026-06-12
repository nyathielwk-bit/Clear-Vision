// Clearframe UI kit — Home screen (all homepage sections).
const { Icons, PACKAGES, WHY, STEPS, FAQS } = APP;
const { Button, Badge, Card, Pullquote, Input, Checkbox, Avatar } = DS;
const { useState } = React;

function img(n) { return "../../assets/placeholders/" + n + ".png"; }

function Home({ onQuote, onSubmitForm, onNavigate }) {
  const [open, setOpen] = useState(0);
  const goQuote = () => APP.scrollTo("quote");
  return (
    <main>
      {/* Hero */}
      <section className="hero" id="top">
        <div className="container">
          <div className="hero__grid">
            <div>
              <span className="eyebrow">Toronto &amp; GTA Web Design</span>
              <h1 className="hero__title">Get online fast. <em>Look credible</em> from day one.</h1>
              <p className="hero__lead">Clean, professional websites for Toronto businesses — designed to build trust and bring in inquiries, without the agency wait.</p>
              <div className="hero__cta">
                <Button variant="accent" size="lg" onClick={goQuote}>Book a free call</Button>
                <Button variant="secondary" size="lg" onClick={() => APP.scrollTo("packages")}>See packages</Button>
              </div>
              <div className="hero__trust">
                <span className="au-avatar-group">
                  <Avatar name="Dana Reid" size="sm" /><Avatar name="Sam Cole" size="sm" /><Avatar name="Lee Park" size="sm" />
                </span>
                <span className="hero__trust-text"><strong>40+ Toronto businesses</strong> launched with Clearframe</span>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__card"><img src={img("hero-mock")} alt="Website preview" /></div>
              <div className="hero__badge">
                <span className="b-num">~3 days</span>
                <span className="b-lab">to launch<br/>your page</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="trust">
        <div className="container">
          <div className="trust__row">
            {[["40+","Toronto sites launched"],["~3 days","To launch a page"],["4.9★","Average client review"],["100%","Mobile-ready builds"]].map(([n,l]) => (
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
            <p>Pick a starting point. Every project is scoped and quoted up front — no surprises, no hourly meters.</p>
          </div>
          <div className="pkg-grid">
            {PACKAGES.map((p) => (
              <div className={"pkg" + (p.featured ? " pkg--featured" : "")} key={p.name}>
                {p.featured ? <span className="pkg__flag"><Badge tone="accent" variant="solid">Most popular</Badge></span> : null}
                <div className="pkg__name">{p.name}</div>
                <div className="pkg__price">{p.price} <small>from · CAD</small></div>
                <p className="pkg__desc">{p.desc}</p>
                <ul className="pkg__features">
                  {p.features.map((f) => <li key={f}><Icons.Check size={18} /> {f}</li>)}
                </ul>
                <div className="pkg__cta">
                  <Button variant={p.featured ? "accent" : "primary"} block onClick={goQuote}>{p.cta}</Button>
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
              <p>We keep it clear and practical: a credible site, launched quickly, built to bring in the right inquiries.</p>
            </div>
            <div className="why__list">
              {WHY.map(([ico, title, text]) => {
                const I = Icons[ico];
                return (
                  <div className="why__item" key={title}>
                    <span className="why__ico"><I size={20} /></span>
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
          <Pullquote align="center" cite="Daniel R." role="Owner, North End Plumbing" style={{ maxWidth: "30ch" }}>
            Clearframe had our new site live in under two weeks — the inquiries started the same month.
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
          <div className="faq__list">
            {FAQS.map(([q, a], i) => (
              <div className="faq__item" data-open={open === i} key={q}>
                <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  {q}<span className="faq__ico"><Icons.Plus size={20} /></span>
                </button>
                <div className="faq__a" style={{ maxHeight: open === i ? "240px" : "0" }}>
                  <div className="faq__a-inner">{a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section className="section section--navy" id="quote">
        <div className="container">
          <div className="cta__grid">
            <div className="cta__head">
              <span className="eyebrow" style={{ color: "var(--gold-300)" }}>Get started</span>
              <h2 style={{ marginTop: "12px" }}>Ready to get online?</h2>
              <p>Tell us a little about your business and we’ll send a fixed quote and timeline — usually within one business day.</p>
              <ul className="cta__list">
                <li><Icons.Check size={18} /> Free, no-pressure consult call</li>
                <li><Icons.Check size={18} /> Fixed quote before any work starts</li>
                <li><Icons.Check size={18} /> Toronto-based, real human replies</li>
              </ul>
            </div>
            <form className="cta__form" onSubmit={(e) => { e.preventDefault(); onSubmitForm(); }}>
              <h3>Request your quote</h3>
              <div className="cta__row">
                <Input label="Your name" placeholder="Jordan Lee" required />
                <Input label="Work email" type="email" placeholder="you@business.com" required />
              </div>
              <Input label="Business name" placeholder="North End Plumbing" />
              <div>
                <label className="cta__field-label">Which package fits?</label>
                <select className="cta__select" defaultValue="">
                  <option value="" disabled>Select a starting point…</option>
                  <option>Launch Page — from $500</option>
                  <option>Business Website — from $1,500</option>
                  <option>Growth Website — from $2,800</option>
                  <option>Not sure yet — help me choose</option>
                </select>
              </div>
              <Checkbox label="Email me a copy of my request" defaultChecked />
              <Button variant="accent" size="lg" block type="submit">Book a free call</Button>
              <p className="cta__note">No spam, ever. We reply within one business day.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

APP.Home = Home;
