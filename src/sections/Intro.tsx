import React, { useState } from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';

interface IntroProps {
  onEnter: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onEnter }) => {
  const [step, setStep] = useState<'initial' | 'entered' | 'revealed'>('initial');

  const handleEnterClick = () => {
    onEnter();
    setStep('entered');

    setTimeout(() => {
      setStep('revealed');
    }, 2800);
  };

  const handleExploreClick = () => {
    const mainSection = document.getElementById('main-character');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center select-none overflow-hidden"
    >
      {/* Step 1: Initial mystical greeting */}
      {step === 'initial' && (
        <div className="max-w-2xl mx-auto flex flex-col items-center transition-all duration-1000 animate-fadeIn">
          {/* Subtle cosmic aura badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-950/20 text-purple-300 text-xs font-mono-code mb-8 tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>CELESTIAL COORDINATES SET</span>
          </div>

          <h2 className="font-serif-title italic text-2xl sm:text-3xl md:text-4xl text-slate-200 font-normal leading-relaxed max-w-xl mb-12">
            “There’s a little universe waiting for you.”
          </h2>

          <button
            onClick={handleEnterClick}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-mono-code text-sm tracking-widest uppercase text-white bg-gradient-to-r from-purple-600/80 via-fuchsia-600/80 to-purple-800/80 hover:from-purple-500 hover:to-fuchsia-500 border border-purple-400/40 shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:shadow-[0_0_50px_rgba(192,132,252,0.6)] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <span>ENTER</span>
            <span className="text-purple-200 group-hover:rotate-45 transition-transform duration-300">✦</span>
          </button>
        </div>
      )}

      {/* Step 2: Cinematic narrative build-up */}
      {step === 'entered' && (
        <div className="max-w-xl mx-auto flex flex-col items-center transition-all duration-1000 animate-fadeIn">
          <p className="font-serif-title italic text-lg sm:text-2xl text-slate-300 tracking-wide mb-6">
            “Today, the universe has one important event.”
          </p>

          <div className="w-12 h-[1px] bg-purple-500/40 my-4" />

          <p className="font-display text-2xl sm:text-3xl font-light text-purple-200 tracking-wider animate-pulse">
            “Her birthday.”
          </p>
        </div>
      )}

      {/* Step 3: Cinematic grand reveal */}
      {step === 'revealed' && (
        <div className="max-w-4xl mx-auto flex flex-col items-center transition-all duration-1000 animate-fadeIn">
          {/* Subtle cosmic aura badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/30 text-purple-200 text-xs font-mono-code mb-6 tracking-widest uppercase">
            <span>CHAPTER 23 ✦ 2026</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 text-gradient-cosmic">
            HAPPY 23RD BIRTHDAY,
            <span className="block mt-2 text-gradient-purple">SANIA</span>
          </h1>

          <p className="font-serif-title italic text-slate-300 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed mb-10">
            An entire cosmos woven from your grace, strength, laughter, and unbreakable spirit.
          </p>

          {/* Smooth scroll down cue */}
          <button
            onClick={handleExploreClick}
            className="flex flex-col items-center gap-2 text-purple-300/80 hover:text-white transition-colors duration-300 group focus:outline-none"
            aria-label="Begin journey"
          >
            <span className="font-mono-code text-[11px] tracking-widest uppercase opacity-70 group-hover:opacity-100">
              EXPLORE HER UNIVERSE
            </span>
            <div className="w-8 h-8 rounded-full border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400 group-hover:translate-y-1 transition-all duration-300">
              <ArrowDown className="w-4 h-4 text-purple-300" />
            </div>
          </button>
        </div>
      )}

      {/* Atmospheric subtle bottom fog */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  );
};
