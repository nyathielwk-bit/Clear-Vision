'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import Toast from '@/components/Toast';
import { PACKAGES } from '@/data/index';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
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
            <option value="" disabled>
              Select a starting point…
            </option>
            {PACKAGES.map((p) => (
              <option key={p.id}>
                {p.name} — {p.price}
              </option>
            ))}
            <option>Not sure yet — help me choose</option>
            <option>Care &amp; maintenance only</option>
          </select>
        </div>
        <div>
          <label className="cta__field-label">Tell us about your project</label>
          <textarea
            className="contact-textarea"
            rows="4"
            placeholder="A few sentences about your business and what you need…"
          ></textarea>
        </div>
        <Checkbox label="Email me a copy of my request" defaultChecked />
        <Button variant="accent" size="lg" block type="submit">
          Send request
        </Button>
        <p className="cta__note">No spam, ever. We only use your details to reply to your inquiry.</p>
      </form>
      {submitted && <Toast message="Request sent! We'll be in touch within one business day." />}
    </>
  );
}
