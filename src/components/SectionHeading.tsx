import React from 'react';
import type { Doodle } from './Doodles';

interface SectionHeadingProps {
  id: string;
  title: string;
  description: string;
  doodle: Doodle;
}

export function SectionHeading({ id, title, description, doodle: Doodle }: SectionHeadingProps) {
  return (
    <div className="max-w-[58ch]">
      <div className="flex items-center gap-3">
        <Doodle className="h-8 w-8 shrink-0 text-sea" />
        <h2 id={id} className="font-display text-[30px] font-bold leading-tight text-marine sm:text-[34px]">
          {title}
        </h2>
      </div>
      <p className="mt-2 text-[15.5px] leading-relaxed text-marine-soft">{description}</p>
    </div>);

}