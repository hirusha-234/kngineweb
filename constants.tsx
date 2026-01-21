import React from 'react';

export const COLORS = {
  bg: '#0B0B0B',
  surface: '#121212',
  surfaceLight: '#1A1A1A',
  primary: '#2563EB',
  secondary: '#3B82F6',
  textPrimary: '#FFFFFF',
  textSecondary: '#9CA3AF',
  textMuted: '#6B7280',
};

export const Logo = ({ className = "" }: { className?: string }) => (
<>
  <img src="/logo.png" alt="logo"  width="50"/>
</>
);

export const GeometricSymbol = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g opacity="0.8">
      {[...Array(8)].map((_, i) => (
        <rect
          key={i}
          x="85"
          y="20"
          width="30"
          height="70"
          fill="url(#gradient-blue)"
          transform={`rotate(${i * 45} 100 100)`}
          rx="4"
        />
      ))}
    </g>
    <defs>
      <linearGradient id="gradient-blue" x1="100" y1="20" x2="100" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E40FF" />
        <stop offset="1" stopColor="#0B21A8" />
      </linearGradient>
    </defs>
  </svg>
);

export const StarburstGraphic = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {[...Array(24)].map((_, i) => (
      <rect
        key={i}
        x="48"
        y="0"
        width="4"
        height="100"
        transform={`rotate(${i * 7.5} 50 50)`}
      />
    ))}
  </svg>
);

export const CompetitionLogos = {
  Intellect: () => (
    <div className="flex flex-col items-start leading-none font-bold">
      <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 text-white">Inter-School Quiz</span>
      <span className="text-3xl md:text-4xl font-black tracking-tighter bg-gradient-to-r from-[#2563EB] via-[#9333EA] to-[#EF4444] bg-clip-text text-transparent">Intellect</span>
    </div>
  ),
  CodeCom: () => (
    <div className="flex flex-col items-start leading-none">
      <span className="text-4xl md:text-5xl font-serif italic font-light bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">Code<span className="font-sans not-italic font-black">__com</span></span>
      <span className="text-[9px] uppercase tracking-[0.1em] mt-1 opacity-60 font-bold text-white">Inter-School Programming Competition</span>
    </div>
  ),
  CyberCombat: () => (
    <div className="flex flex-col items-start leading-none font-black italic">
      <span className="text-4xl md:text-5xl uppercase tracking-tighter bg-gradient-to-r from-[#2563EB] to-[#EF4444] bg-clip-text text-transparent">CYBER</span>
      <span className="text-xl uppercase tracking-widest text-white -mt-1 ml-1 border-t border-white/20 pt-1">COMBAT</span>
    </div>
  ),
  DeXigner: () => (
    <div className="flex items-center gap-1 font-black tracking-tighter">
      <span className="text-4xl md:text-5xl text-white">de</span>
      <span className="text-5xl md:text-6xl text-[#2563EB] transform rotate-12 scale-110">X</span>
      <div className="flex flex-col">
        <span className="text-3xl md:text-4xl text-white -ml-2">igner</span>
        <span className="text-[8px] uppercase tracking-tighter opacity-50 font-bold -ml-1 text-white">Graphic Competition</span>
      </div>
    </div>
  )
};

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
  </svg>
);

export const CloseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);