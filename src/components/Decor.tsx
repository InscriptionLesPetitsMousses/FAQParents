import React from 'react';

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ className = 'text-sand', flip = false }: WaveDividerProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      className={`block h-6 w-full ${flip ? 'rotate-180' : ''} ${className}`}>
      
      <path
        d="M0 22c60 0 60-14 120-14s60 14 120 14 60-14 120-14 60 14 120 14 60-14 120-14 60 14 120 14 60-14 120-14 60 14 120 14 60-14 120-14 60 14 120 14 60-14 120-14 60 14 120 14v18H0z"
        fill="currentColor" />
      
    </svg>);

}

export function RopeRule({ className = '' }: {className?: string;}) {
  return (
    <div
      aria-hidden="true"
      className={`h-1 w-full rounded-full bg-[repeating-linear-gradient(90deg,#C9D8E4_0_10px,transparent_10px_16px)] ${className}`} />);


}