import { Mail, Phone, Pin, Clock, Check } from '@/components/Icons';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — Clearframe Studio',
  description:
    "Get in touch with Clearframe Studio. Tell us about your project and we'll send a fixed quote within one business day.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero page-hero--tight">
        <div className="container center">
          <span className="eyebrow">Contact</span>
          <h1 className="page-hero__title">Let&apos;s get your site started</h1>
          <p className="page-hero__lead">
            Tell us a little about your business and we&apos;ll send a fixed quote and timeline —
            usually within one business day.
          </p>
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
                  <li>
                    <span className="contact-ico">
                      <Mail size={18} />
                    </span>
                    <div>
                      <span className="contact-k">Email</span>
                      <a href="mailto:hello@clearframe.studio">hello@clearframe.studio</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-ico">
                      <Phone size={18} />
                    </span>
                    <div>
                      <span className="contact-k">Phone</span>
                      <a href="tel:+14165550142">(416) 555-0142</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-ico">
                      <Pin size={18} />
                    </span>
                    <div>
                      <span className="contact-k">Studio</span>
                      <span>Toronto, Ontario — serving the GTA</span>
                    </div>
                  </li>
                  <li>
                    <span className="contact-ico">
                      <Clock size={18} />
                    </span>
                    <div>
                      <span className="contact-k">Hours</span>
                      <span>Mon–Fri, 9am–6pm ET</span>
                    </div>
                  </li>
                </ul>
                <div className="contact-promise">
                  <Check size={16} /> We reply within one business day.
                </div>
              </div>
              <div className="contact-quote">
                <p>
                  &ldquo;Clearframe had our new site live in under two weeks — the inquiries started
                  the same month.&rdquo;
                </p>
                <span>— Daniel R., North End Plumbing</span>
              </div>
            </aside>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
