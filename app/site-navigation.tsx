'use client';

import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
];

export function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a, button') ?? [];
    focusable[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('nav-open');
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.classList.remove('nav-open'); };
  }, [open]);

  return <>
    <nav className="links fleet-links" aria-label="Main navigation">
      {links.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}
    </nav>
    <button ref={buttonRef} className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>Menu</button>
    {open ? <div className="mobile-menu-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) { setOpen(false); buttonRef.current?.focus(); } }}>
      <nav ref={panelRef} id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
        <button type="button" onClick={() => { setOpen(false); buttonRef.current?.focus(); }} aria-label="Close navigation">Close</button>
        {links.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}
      </nav>
    </div> : null}
  </>;
}
