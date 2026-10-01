import React from 'react';
import { AnchorIcon } from 'lucide-react';
import { WaveDivider } from './Decor';

export function SiteFooter() {
  return (
    <footer className="bg-marine text-sand/75">
      <WaveDivider className="text-sea-light/70" flip />
      <div className="mx-auto flex max-w-shell flex-col gap-3 px-5 pb-8 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="flex items-center gap-2 font-display text-[17px] font-bold text-sand">
          <AnchorIcon aria-hidden="true" className="h-4 w-4" />
          CPE Les Moussaillons
        </p>
        <p>Quatre installations · Mise à jour du 8 septembre 2026</p>
      </div>
    </footer>);

}