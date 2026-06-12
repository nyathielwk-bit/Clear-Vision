'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import Toast from '@/components/Toast';

export default function HomeQuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <>
      <form className="cta__form" onSubmit={handleSubmit}>
        <h3>Request your quote</h3>
        <div className="cta__row">
          <Input label="Your name" placeholder="Jordan Lee" required />
          <Input label="Work email" type="email" placeholder="you@business.com" required />
        </div>
        <Input label="Business name" placeholder="North End Plumbing" />
        <div>
          <label className="cta__field-label">Which package fits?</label>
          <select className="cta__select" defaultValue="">
            <option value="" disabled>
              Select a starting point…
            </option>
            <option>Launch Page — from $500</option>
            <option>Business Website — from $1,500</option>
            <option>Growth Website — from $2,800</option>
            <option>Not sure yet — help me choose</option>
          </select>
        </div>
        <Checkbox label="Email me a copy of my request" defaultChecked />
        <Button variant="accent" size="lg" block type="submit">
          Book a free call
        </Button>
        <p className="cta__note">No spam, ever. We reply within one business day.</p>
      </form>
      {submitted && <Toast />}
    </>
  );
}
