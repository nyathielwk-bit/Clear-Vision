// Clearframe UI kit — Contact page.
const { Icons, PACKAGES } = APP;
const { Button, Input, Checkbox } = DS;

function Contact({ onSubmitForm }) {
  return (
    <main>
      <section className="page-hero page-hero--tight">
        <div className="container center">
          <span className="eyebrow">Contact</span>
          <h1 className="page-hero__title">Let's get your site started</h1>
          <p className="page-hero__lead">Tell us a little about your business and we'll send a fixed quote and timeline — usually within one business day.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            {/* Details */}
            <aside className="contact-aside">
              <div className="contact-card">
                <h3 className="contact-card__title">Talk to a person</h3>
                <ul className="contact-list">
                  <li><span className="contact-ico"><Icons.Mail size={18} /></span><div><span className="contact-k">Email</span><a href="mailto:hello@clearframe.studio">hello@clearframe.studio</a></div></li>
                  <li><span className="contact-ico"><Icons.Phone size={18} /></span><div><span className="contact-k">Phone</span><a href="tel:+14165550142">(416) 555-0142</a></div></li>
                  <li><span className="contact-ico"><Icons.Pin size={18} /></span><div><span className="contact-k">Studio</span><span>Toronto, Ontario — serving the GTA</span></div></li>
                  <li><span className="contact-ico"><Icons.Clock size={18} /></span><div><span className="contact-k">Hours</span><span>Mon–Fri, 9am–6pm ET</span></div></li>
                </ul>
                <div className="contact-promise">
                  <Icons.Check size={16} /> We reply within one business day.
                </div>
              </div>
              <div className="contact-quote">
                <p>“Clearframe had our new site live in under two weeks — the inquiries started the same month.”</p>
                <span>— Daniel R., North End Plumbing</span>
              </div>
            </aside>

            {/* Form */}
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); onSubmitForm(); }}>
              <h3 className="contact-form__title">Request your quote</h3>
              <div className="contact-form__row">
                <Input label="Your name" placeholder="Jordan Lee" required />
                <Input label="Work email" type="email" placeholder="you@business.com" required />
              </div>
              <div className="contact-form__row">
                <Input label="Business name" placeholder="North End Plumbing" />
                <Input label="Phone (optional)" type="tel" placeholder="(416) 555-0000" optional />
              </div>
              <div>
                <label className="cta__field-label">Which package fits?</label>
                <select className="cta__select" defaultValue="">
                  <option value="" disabled>Select a starting point…</option>
                  {PACKAGES.map((p) => <option key={p.id}>{p.name} — {p.price}</option>)}
                  <option>Not sure yet — help me choose</option>
                  <option>Care &amp; maintenance only</option>
                </select>
              </div>
              <div>
                <label className="cta__field-label">Tell us about your project</label>
                <textarea className="contact-textarea" rows="4" placeholder="A few sentences about your business and what you need…"></textarea>
              </div>
              <Checkbox label="Email me a copy of my request" defaultChecked />
              <Button variant="accent" size="lg" block type="submit">Send request</Button>
              <p className="cta__note">No spam, ever. We only use your details to reply to your inquiry.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

APP.Contact = Contact;
