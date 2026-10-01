import React from 'react';
import { ClockIcon } from 'lucide-react';
import { WaveDivider } from './Decor';
import { BoatDoodle, CrabDoodle, WhaleDoodle } from './Doodles';

const groupes = [
{ doodle: WhaleDoodle, name: 'Les Mousses', age: '0 à 18 mois' },
{ doodle: CrabDoodle, name: 'Les Moussaillons', age: '18 mois à 3 ans' },
{ doodle: BoatDoodle, name: 'Les Bateliers', age: '3 à 5 ans' }];


export function Hero() {
  return (
    <section id="haut" aria-labelledby="hero-titre" className="relative overflow-hidden bg-marine text-sand">
      <div className="relative mx-auto max-w-shell px-5 pb-14 pt-12 lg:px-8 lg:pb-16 lg:pt-14">
        <p className="flex items-center gap-2 text-sm font-medium text-sand/70">
          <ClockIcon aria-hidden="true" className="h-4 w-4" />
          Ouvert de 7 h à 18 h, du lundi au vendredi
        </p>
        <h1
          id="hero-titre"
          className="mt-4 max-w-[16ch] font-display text-[44px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[58px] lg:text-[66px]">
          
          Bienvenue à bord, chers parents.
        </h1>
        <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-sand/85">
          Les avis en cours, les documents à remettre, les réponses aux questions du quotidien et les coordonnées de
          nos quatre installations.
        </p>

        <ul className="mt-9 flex flex-wrap gap-3">
          {groupes.map((groupe) => {
            const Doodle = groupe.doodle;
            return (
              <li
                key={groupe.name}
                className="flex items-center gap-3 rounded-full border border-sand/25 bg-marine-dark/50 py-2 pl-3 pr-5">
                
                <Doodle className="h-6 w-6 shrink-0 text-sand" />
                <span className="text-[15px] font-semibold leading-tight">
                  {groupe.name}
                  <span className="ml-2 font-normal text-sand/65">{groupe.age}</span>
                </span>
              </li>);

          })}
        </ul>
      </div>

      <WaveDivider className="relative text-sand" />
    </section>);

}