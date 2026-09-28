import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { SANIA_PROFILE } from '../data/content';

export const PersonalLetter: React.FC = () => {
  return (
    <section id="letter" className="relative min-h-screen py-32 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center bg-[#030306]">
      {/* Subtle atmospheric vignette focusing attention solely on the letter */}
      <div className="absolute inset-0 bg-radial-gradient from-purple-950/15 via-transparent to-[#030306] pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Subtle Intimate Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-300 font-mono-code text-xs tracking-widest uppercase mb-4">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span>UNFILTERED THOUGHTS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            ONE LAST THING
          </h2>

          <p className="font-serif-title italic text-slate-400 text-sm sm:text-base">
            From Adwaya to Sania
          </p>
        </div>

        {/* The Letter: Pristine, intimate digital parchment styling with generous whitespace */}
        <div className="relative w-full rounded-3xl p-8 sm:p-14 md:p-16 glass-panel border border-white/[0.08] shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl bg-[#08080f]/90">
          {/* Subtle decorative quotation mark */}
          <span className="font-serif-title text-6xl sm:text-7xl text-purple-400/20 absolute top-4 left-6 select-none pointer-events-none">
            “
          </span>

          {/* Letter Body: EXACT wording, not rewritten, not synthesized */}
          <div className="relative z-10 font-serif text-slate-200 text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-[2.2] tracking-wide space-y-6">
            <p className="whitespace-pre-line text-slate-100 font-light">
              {SANIA_PROFILE.letter}
            </p>
          </div>

          {/* Letter Footer Signature */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono-code text-purple-300">
              <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/30" />
              <span>BEYOND TIME & DISTANCE</span>
            </div>
            <span className="font-mono-code text-xs text-slate-400">
              SANIA'S 23RD BIRTHDAY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
