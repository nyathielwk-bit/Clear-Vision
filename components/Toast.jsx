'use client';

import { Check } from '@/components/Icons';

export default function Toast({ message = "Request sent! We'll be in touch within one business day." }) {
  return (
    <div className="toast">
      <Check size={18} />
      {message}
    </div>
  );
}
