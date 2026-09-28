import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Star, ArrowUp } from 'lucide-react';
import { EasterEgg } from '../components/EasterEgg';

export const FinalReveal: React.FC = () => {
  const [starsRevealed, setStarsRevealed] = useState(false);

  const triggerBirthdayCheer = () => {
    setStarsRevealed(true);

    try {
      // Subtle, elegant purple/pink/gold celebration burst
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#c084fc', '#f472b6', '#38bdf8', '#fbbf24', '#ffffff'],
        disableForReducedMotion: true,
      });
    } catch {
      // Canvas fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="celebration" className="relative min-h-screen py-32 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background galaxy glow */}
      <div className="absolute inset-0 bg-radial-gradient from-purple-900/20 via-black to-[#040407] pointer-events-none" />

      {/* Dynamic stars constellation overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_15px_#c084fc]" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-pink-300 shadow-[0_0_12px_#f472b6]" />
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_15px_#a5f3fc]" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Subtle crown / star badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-200 text-xs font-mono-code mb-8 tracking-widest uppercase">
          <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300/30" />
          <span>CELESTIAL FINALE ✦ 23 YEARS</span>
        </div>

        {/* Primary Birthday Header */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 text-gradient-cosmic">
          HAPPY 23RD BIRTHDAY,
          <span className="block mt-2 text-gradient-purple">SANIA</span>
        </h1>

        {/* Beautiful lyrical sentiments */}
        <div className="space-y-4 max-w-2xl mx-auto mb-10">
          <p className="font-serif-title italic text-slate-200 text-xl sm:text-2xl md:text-3xl leading-relaxed">
            “May your next chapter be even more beautiful than the last.”
          </p>
          <p className="font-display text-purple-300 text-base sm:text-lg tracking-wider">
            “The universe is better with you in it.”
          </p>
        </div>

        {/* Interactive celebration action button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={triggerBirthdayCheer}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-mono-code text-xs sm:text-sm tracking-widest uppercase text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(192,132,252,0.6)] focus:outline-none"
          >
            <Sparkles className="w-4 h-4 text-purple-200 group-hover:rotate-45 transition-transform" />
            <span>SEND CELESTIAL BLESSING</span>
          </button>
        </div>

        {starsRevealed && (
          <p className="font-mono-code text-xs text-purple-300/90 animate-fadeIn mb-4">
            ✦ Star count in Sania's honor: 23,000,000 and counting.
          </p>
        )}

        {/* Secret Easter Egg trigger button placed tastefully */}
        <EasterEgg />

        {/* Return to top */}
        <div className="mt-16 pt-12 border-t border-white/[0.08] w-full max-w-md flex flex-col items-center gap-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono-code text-slate-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
            <span>REVISIT THE JOURNEY FROM BEGINNING</span>
          </button>

          <p className="text-[11px] font-mono-code text-slate-500">
            Crafted for Sania with love by Adwaya ✦ 2026
          </p>
        </div>
      </div>
    </section>
  );
};
