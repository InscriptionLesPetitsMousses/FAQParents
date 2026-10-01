import React from 'react';

export interface DoodleProps {
  className?: string;
}

export type Doodle = (props: DoodleProps) => JSX.Element;

function Frame({ className, children }: DoodleProps & {children: React.ReactNode;}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      
      {children}
    </svg>);

}

export function WheelDoodle({ className }: DoodleProps) {
  const spokes = [0, 45, 90, 135, 180, 225, 270, 315];
  const point = (angle: number, radius: number) => {
    const rad = angle * Math.PI / 180;
    return [60 + Math.cos(rad) * radius, 60 + Math.sin(rad) * radius];
  };

  return (
    <Frame className={className}>
      <circle cx="60" cy="60" r="36" />
      <circle cx="60" cy="60" r="20" />
      <circle cx="60" cy="60" r="7" />
      {spokes.map((angle) => {
        const [x1, y1] = point(angle, 12);
        const [x2, y2] = point(angle, 36);
        const [hx1, hy1] = point(angle, 40);
        const [hx2, hy2] = point(angle, 52);
        return (
          <g key={angle}>
            <path d={`M${x1} ${y1}L${x2} ${y2}`} />
            <path d={`M${hx1} ${hy1}L${hx2} ${hy2}`} />
          </g>);

      })}
    </Frame>);

}

export function WhaleDoodle({ className }: DoodleProps) {
  return (
    <Frame className={className}>
      <path d="M16 66c0-18 18-31 40-31s38 13 40 29c1 6-3 10-9 11-12 3-24 5-35 5-20 0-36-5-36-14z" />
      <path d="M20 55c-4-8-9-12-13-13 2 9 2 22 0 31 5-2 10-6 13-13" />
      <path d="M60 30c0-9 3-14 8-18-2 7 1 11 4 13" />
      <path d="M60 82c6 4 13 4 19 0" />
      <circle cx="44" cy="58" r="3" fill="currentColor" stroke="none" />
    </Frame>);

}

export function BoatDoodle({ className }: DoodleProps) {
  return (
    <Frame className={className}>
      <path d="M18 78h84c-6 12-18 20-32 20H50c-14 0-26-8-32-20z" />
      <path d="M60 74V22" />
      <path d="M70 72V32c0-4 4-5 6-2l19 36c2 3 0 6-3 6H70z" />
      <path d="M50 72V42c0-4-5-5-7-2L29 66c-2 3 0 6 3 6h18z" />
      <path d="M62 20h16l-6 7 6 7H62" />
      <path d="M16 110c6-5 13-5 19 0s13 5 19 0 13-5 19 0 13 5 19 0" />
    </Frame>);

}

export function LighthouseDoodle({ className }: DoodleProps) {
  return (
    <Frame className={className}>
      <path d="M44 22l16-12 16 12" />
      <rect x="47" y="26" width="26" height="16" rx="5" />
      <path d="M47 44h26l8 48H39l8-48z" />
      <path d="M43 62h34M41 77h38" />
      <rect x="28" y="94" width="64" height="14" rx="6" />
      <path d="M24 22l-9-7M96 22l9-7M20 40H9M100 40h11" />
    </Frame>);

}

export function AnchorDoodle({ className }: DoodleProps) {
  return (
    <Frame className={className}>
      <circle cx="60" cy="22" r="11" />
      <path d="M60 33v62" />
      <path d="M40 48h40" />
      <path d="M24 62c0 20 16 34 36 34s36-14 36-34" />
      <path d="M24 62l-13-3 3 15M96 62l13-3-3 15" />
    </Frame>);

}

export function CrabDoodle({ className }: DoodleProps) {
  return (
    <Frame className={className}>
      <path d="M27 68c0-16 15-27 33-27s33 11 33 27c0 13-15 21-33 21s-33-8-33-21z" />
      <path d="M46 41v-7M74 41v-7" />
      <circle cx="46" cy="28" r="5" />
      <circle cx="74" cy="28" r="5" />
      <path d="M52 68c5 4 11 4 16 0" />
      <path d="M23 57c-8-2-15 2-16 9-1 5 3 9 8 8 4-1 7-4 7-9M97 57c8-2 15 2 16 9 1 5-3 9-8 8-4-1-7-4-7-9" />
      <path d="M32 84c-6 4-10 8-12 14M42 89c-3 5-5 9-6 14M88 84c6 4 10 8 12 14M78 89c3 5 5 9 6 14" />
    </Frame>);

}