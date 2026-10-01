import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { AnchorDoodle, BoatDoodle, CrabDoodle, LighthouseDoodle, WheelDoodle } from './Doodles';
import type { Doodle } from './Doodles';
import { installations } from '../data/installations';
import type { InstallationEmblem } from '../types/content';

const emblems: Record<InstallationEmblem, Doodle> = {
  phare: LighthouseDoodle,
  voilier: BoatDoodle,
  ancre: AnchorDoodle,
  crabe: CrabDoodle
};

export function Contact() {
  return (
    <section
      id="joindre"
      aria-labelledby="joindre-titre"
      className="relative overflow-hidden border-t border-line bg-sea-light/70">
      
      <WheelDoodle className="pointer-events-none absolute -left-12 top-8 hidden h-52 w-52 -rotate-[8deg] text-sea/[0.18] lg:block xl:-left-6 xl:h-60 xl:w-60" />

      <div className="relative mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-16">
        <SectionHeading
          id="joindre-titre"
          doodle={WheelDoodle}
          title="Nous joindre"
          description="Joignez directement l’installation de votre enfant. Pour une absence, appelez avant 9 h." />
        

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {installations.map((installation) => {
            const Emblem = emblems[installation.emblem];
            return (
              <li key={installation.id} className="flex flex-col rounded-card border border-line bg-white p-5">
                <Emblem className="h-11 w-11 text-marine" />
                <h3 className="mt-3 font-display text-[20px] font-bold leading-snug text-marine">
                  {installation.name}
                </h3>
                <p className="mt-0.5 text-[13px] text-marine-faint">{installation.contact}</p>
                <p className="mt-3 flex items-start gap-2 text-[14px] leading-relaxed text-marine-soft">
                  <MapPinIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sea" />
                  {installation.address}
                </p>

                <div className="mt-auto space-y-2 pt-5">
                  <a
                    href={installation.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-full bg-marine px-4 py-2.5 text-[15px] font-semibold text-sand transition-colors duration-150 ease-out hover:bg-marine-dark">
                    
                    <PhoneIcon aria-hidden="true" className="h-4 w-4" />
                    {installation.phone}
                  </a>
                  <a
                    href={`mailto:${installation.email}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-line px-3 py-2 text-[13.5px] font-semibold text-sea transition-colors duration-150 ease-out hover:bg-sea-light">
                    
                    <MailIcon aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span className="truncate">{installation.email}</span>
                  </a>
                </div>
              </li>);

          })}
        </ul>

        <p className="mt-6 rounded-card border border-buoy/30 bg-buoy-light px-5 py-4 text-[15px] leading-relaxed text-marine">
          <span className="font-semibold">Hors des heures d’ouverture :</span> bureau administratif au{' '}
          <a href="tel:+14507712400" className="font-semibold text-buoy underline underline-offset-4">
            450 771-2400
          </a>
          , ou 911 en cas d’urgence médicale.
        </p>
      </div>
    </section>);

}