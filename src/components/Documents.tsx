import React from 'react';
import { DownloadIcon, FileTextIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { BoatDoodle } from './Doodles';
import { documentGroups } from '../data/documents';

export function Documents() {
  return (
    <section
      id="documents"
      aria-labelledby="documents-titre"
      className="relative overflow-hidden border-y border-line bg-sea-light/70">
      
      <BoatDoodle className="pointer-events-none absolute -left-10 bottom-2 hidden h-56 w-56 rotate-[8deg] text-sea/[0.16] lg:block xl:-left-4 xl:h-64 xl:w-64" />

      <div className="relative mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-16">
        <SectionHeading
          id="documents-titre"
          doodle={BoatDoodle}
          title="Documents de bord"
          description="Tous les fichiers sont en PDF et peuvent être imprimés." />
        

        <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {documentGroups.map((group) =>
          <div key={group.id}>
              <h3 className="font-display text-[19px] font-bold text-marine">{group.label}</h3>
              <ul className="mt-2 border-t-2 border-dotted border-sea/30">
                {group.items.map((item) =>
              <li key={item.id} className="border-b border-dotted border-sea/30">
                    <a href={item.url} className="group flex items-center gap-3.5 py-3.5">
                      <FileTextIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-sea" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15.5px] font-semibold leading-snug text-marine transition-colors duration-150 ease-out group-hover:text-sea">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-[13.5px] text-marine-soft">
                          {item.description}{' '}
                          <span className="text-marine-faint">
                            · {item.fileType}, {item.size} · {item.updated}
                          </span>
                        </span>
                      </span>
                      <DownloadIcon
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-marine-faint transition-colors duration-150 ease-out group-hover:text-sea" />
                  
                      <span className="sr-only">Télécharger {item.title}</span>
                    </a>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

}