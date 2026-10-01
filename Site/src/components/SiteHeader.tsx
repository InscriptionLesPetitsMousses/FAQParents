import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { AnchorDoodle } from './Doodles';

const links = [
{ href: '#avis', label: 'Avis de bord' },
{ href: '#documents', label: 'Documents' },
{ href: '#faq', label: 'Questions' },
{ href: '#joindre', label: 'Nous joindre' }];


export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-sand/95 backdrop-blur">
      <div className="mx-auto flex max-w-shell items-center gap-6 px-5 py-3 lg:px-8">
        <a href="#haut" className="flex items-center gap-2.5">
          <AnchorDoodle className="h-6 w-6 text-marine" />
          <span className="font-display text-[19px] font-bold leading-none text-marine">CPE Les Petits Mousses</span>
        </a>

        <nav aria-label="Sections" className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3.5 py-2 text-sm font-medium text-marine-soft transition-colors duration-150 ease-out hover:bg-sea-light hover:text-marine">
            
              {link.label}
            </a>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-line text-marine transition-colors duration-150 ease-out hover:bg-rope md:hidden">
          
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          {open ? <XIcon aria-hidden="true" className="h-5 w-5" /> : <MenuIcon aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open &&
      <nav id="menu-mobile" aria-label="Sections" className="border-t border-line bg-sand px-5 pb-3 md:hidden">
          {links.map((link) =>
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="block border-b border-line/70 py-3 text-[15px] font-medium text-marine last:border-0">
          
              {link.label}
            </a>
        )}
        </nav>
      }
    </header>);

}