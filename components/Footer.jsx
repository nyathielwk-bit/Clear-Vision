import Link from 'next/link';
import { Mail, Phone, Pin } from '@/components/Icons';

export default function Footer() {
  const cols = [
    [
      'Services',
      [
        ['Launch Page', '/services#packages'],
        ['Business Website', '/services#packages'],
        ['Growth Website', '/services#packages'],
        ['Care & maintenance', '/services#care'],
      ],
    ],
    [
      'Company',
      [
        ['Services', '/services'],
        ['Process', '/#process'],
        ['FAQ', '/#faq'],
        ['Contact', '/contact'],
      ],
    ],
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="footer__brand footer__brand--btn">
              Clearframe Studio
            </Link>
            <p className="footer__about">
              Fast, professional websites for Toronto &amp; GTA businesses. Clean, credible, and
              built to convert.
            </p>
          </div>
          {cols.map(([title, items]) => (
            <div className="footer__col" key={title}>
              <h4>{title}</h4>
              {items.map(([label, href]) => (
                <Link key={label} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
          <div className="footer__col">
            <h4>Get in touch</h4>
            <a href="mailto:hello@clearframe.studio">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                <Mail size={15} /> hello@clearframe.studio
              </span>
            </a>
            <a href="tel:+14165550142">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                <Phone size={15} /> (416) 555-0142
              </span>
            </a>
            <Link href="/contact">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                <Pin size={15} /> Toronto, ON
              </span>
            </Link>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Clearframe Studio. All rights reserved.</span>
          <span>Toronto &amp; the GTA</span>
        </div>
      </div>
    </footer>
  );
}
