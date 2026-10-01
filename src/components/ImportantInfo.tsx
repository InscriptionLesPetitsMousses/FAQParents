import React from 'react';
import { AlertTriangleIcon, BellIcon, InfoIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { RopeRule } from './Decor';
import { LighthouseDoodle } from './Doodles';
import { notices } from '../data/notices';
import type { NoticeTone } from '../types/content';

const toneMeta: Record<NoticeTone, {label: string;icon: typeof InfoIcon;}> = {
  alert: { label: 'Fermeture', icon: AlertTriangleIcon },
  info: { label: 'À noter', icon: InfoIcon },
  rappel: { label: 'Rappel', icon: BellIcon }
};

export function ImportantInfo() {
  const featured = notices.find((notice) => notice.featured) ?? notices[0];
  const rest = notices.filter((notice) => notice.id !== featured.id);

  return (
    <section id="avis" aria-labelledby="avis-titre" className="relative overflow-hidden bg-sand">
      <LighthouseDoodle className="pointer-events-none absolute -right-6 top-4 hidden h-52 w-52 -rotate-[10deg] text-marine/[0.09] lg:block xl:right-2 xl:h-60 xl:w-60" />

      <div className="relative mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-16">
        <SectionHeading
          id="avis-titre"
          doodle={LighthouseDoodle}
          title="Avis de bord"
          description="Ce qui touche votre enfant en ce moment, dans les quatre installations." />
        

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <article className="relative overflow-hidden rounded-card border-l-4 border-buoy bg-white p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-buoy px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {toneMeta[featured.tone].label}
              </span>
              <span className="text-sm text-marine-faint">{featured.date}</span>
            </div>
            <h3 className="mt-3.5 font-display text-[25px] font-bold leading-snug text-marine">{featured.title}</h3>
            <p className="mt-3 text-[15.5px] leading-relaxed text-marine-soft">{featured.body}</p>
            <RopeRule className="mt-6 max-w-[160px]" />
          </article>

          <ul className="border-t border-line">
            {rest.map((notice) => {
              const meta = toneMeta[notice.tone];
              const Icon = meta.icon;
              return (
                <li key={notice.id} className="flex gap-3.5 border-b border-line py-5">
                  <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-sea" />
                  <div>
                    <p className="text-[15px] font-semibold leading-snug text-marine">{notice.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-marine-soft">{notice.body}</p>
                    <p className="mt-1.5 text-[13px] text-marine-faint">
                      {meta.label} · {notice.date}
                    </p>
                  </div>
                </li>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}