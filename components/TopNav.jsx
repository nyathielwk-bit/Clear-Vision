'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Phone } from '@/components/Icons';

export default function TopNav() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/#packages', label: 'Pricing' },
    { href: '/#process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ];

  function isActive(href) {
    if (href.includes('#')) return false;
    return pathname === href;
  }

  function handleAnchorClick(e, href) {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (pathname !== '/') {
        window.location.href = href;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  return (
    <header className="nav">
      <div className="container">
        <div className="nav__inner">
          <Link href="/" className="nav__brand">
            <span className="nav__word">Clearframe</span>
          </Link>
          <nav className="nav__links">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={'nav__link' + (isActive(href) ? ' nav__link--active' : '')}
                onClick={(e) => handleAnchorClick(e, href)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="nav__right">
            <span className="nav__phone">
              <Phone size={16} /> (416) 555-0142
            </span>
            <Button variant="accent" size="sm" as={Link} href="/contact">
              Get a quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
