import React, { useEffect, useState } from 'react';
import { SANIA_PROFILE } from '../data/content';

export const ProgressIndicator: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = SANIA_PROFILE.chapters.map((ch) => document.getElementById(ch.id));
      const scrollPosition = currentScroll + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveChapterIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentChapter = SANIA_PROFILE.chapters[activeChapterIndex] || SANIA_PROFILE.chapters[0];

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top subtle progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating chapter counter on left */}
      <nav
        aria-label="Story chapters"
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-full glass-panel border border-white/10 text-xs font-mono-code text-slate-300 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-center gap-1.5 text-purple-300">
          <span className="font-semibold text-white tracking-widest">{currentChapter.number}</span>
          <span className="opacity-40">/</span>
          <span className="opacity-60">{String(SANIA_PROFILE.chapters.length).padStart(2, '0')}</span>
        </div>
        <span className="w-1 h-1 rounded-full bg-purple-400/60 animate-ping" />
        <span className="text-[11px] tracking-wider uppercase text-slate-400 font-sans truncate max-w-[140px] md:max-w-[180px]">
          {currentChapter.title}
        </span>
      </nav>

      {/* Dot indicators on right for navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2.5">
        {SANIA_PROFILE.chapters.map((ch, idx) => {
          const isActive = idx === activeChapterIndex;
          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="group relative flex items-center justify-center p-1.5 focus:outline-none"
              aria-label={`Jump to ${ch.title}`}
            >
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2 h-6 bg-gradient-to-b from-purple-400 to-fuchsia-500 shadow-[0_0_12px_rgba(192,132,252,0.8)]'
                    : 'w-1.5 h-1.5 bg-slate-600 group-hover:bg-purple-300/80 group-hover:scale-125'
                }`}
              />
              <span className="absolute right-7 py-1 px-2.5 rounded bg-slate-900/90 text-purple-200 text-[10px] font-mono-code whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-purple-500/20 shadow-md">
                {ch.number} • {ch.title}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};
