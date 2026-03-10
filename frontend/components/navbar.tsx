'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const leftLinks = [
  ['Products', '/products'],
  ['Services', '/services'],
  ['Resources', '/resources']
];

const rightLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Membership', '/membership']
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <div className="hidden items-center gap-6 md:flex">
          {leftLinks.map(([label, href]) => (
            <Link key={label} href={href} className="text-sm text-white/80 transition hover:text-brand">
              {label}
            </Link>
          ))}
        </div>

        <Link href="/" className="text-xl font-semibold tracking-wide text-white">
          24CTLifestyle
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {rightLinks.map(([label, href]) => (
            <Link key={label} href={href} className="text-sm text-white/80 transition hover:text-brand">
              {label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/20 p-2 md:hidden" aria-label="menu">
          <Menu size={18} />
        </button>
      </nav>

      {open && (
        <div className="space-y-2 border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          {[...leftLinks, ...rightLinks].map(([label, href]) => (
            <Link key={label} href={href} className="block rounded-md px-2 py-1 text-white/85 hover:bg-white/10" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/login" className="mt-2 block rounded-md bg-brand px-3 py-2 text-center text-sm font-medium text-white">
            Login / Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
