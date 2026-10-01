import React from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { ImportantInfo } from './components/ImportantInfo';
import { Documents } from './components/Documents';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { SiteFooter } from './components/SiteFooter';

export function App() {
  return (
    <div className="min-h-full w-full bg-sand font-sans text-marine">
      <a
        href="#avis"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-marine focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-sand">
        
        Aller au contenu
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <ImportantInfo />
        <Documents />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>);

}