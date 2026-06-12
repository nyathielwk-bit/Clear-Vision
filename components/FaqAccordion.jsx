'use client';

import { useState } from 'react';
import { Plus } from '@/components/Icons';
import { FAQS } from '@/data/index';

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq__list">
      {FAQS.map(([q, a], i) => (
        <div className="faq__item" data-open={open === i} key={q}>
          <button
            className="faq__q"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            {q}
            <span className="faq__ico">
              <Plus size={20} />
            </span>
          </button>
          <div className="faq__a" style={{ maxHeight: open === i ? '240px' : '0' }}>
            <div className="faq__a-inner">{a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
