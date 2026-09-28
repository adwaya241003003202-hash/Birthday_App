import React from 'react';
import { Cat, Sparkles, Heart } from 'lucide-react';

interface CatUniverseProps {
  onOpenMemory?: (id: number) => void;
}

export const CatUniverse: React.FC<CatUniverseProps> = ({ onOpenMemory }) => {
  return (
    <section id="cat-universe" className="relative min-h-screen py-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono-code text-xs uppercase tracking-widest text-fuchsia-400 block mb-2">
            CHAPTER 03 ✦ FELINE HARMONY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            HER LITTLE UNIVERSE
          </h2>
          <p className="font-serif-title italic text-slate-300 text-lg sm:text-xl">
            “Every main character needs a sidekick.”
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Subtle cat silhouette art & Certified Cat Mom badge */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl glass-panel border border-fuchsia-500/20 relative overflow-hidden group">
              {/* Subtle ambient cat whiskers background */}
              <div className="absolute top-4 right-4 opacity-20 text-fuchsia-300">
                <Cat className="w-16 h-16" />
              </div>

              {/* Title & Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-950/40 border border-fuchsia-500/30 text-fuchsia-300 font-mono-code text-xs tracking-wider mb-6">
                <Heart className="w-3.5 h-3.5 text-pink-400" />
                <span>SANIA'S DOMAIN</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Certified Cat Mom™
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans mb-6">
                Between high-stakes biotech and intense workouts, this is where calm returns. 
                Quiet purrs, selective cuddles, and an unspoken cosmic bond with her feline royalty.
              </p>

              {/* Subtle stats/details */}
              <div className="space-y-3 border-t border-white/[0.08] pt-4 font-mono-code text-xs text-slate-400">
                <div className="flex justify-between items-center">
                  <span>NAP COMPANION COMPATIBILITY</span>
                  <span className="text-fuchsia-300 font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>UNCONDITIONAL PURR FREQUENCY</span>
                  <span className="text-purple-300 font-semibold">∞ Hz</span>
                </div>
              </div>
            </div>

            {/* Little paw print decoration */}
            <div className="flex items-center justify-center gap-3 text-slate-600 opacity-60">
              <span className="text-xs font-mono-code">🐾</span>
              <span className="w-8 h-[1px] bg-slate-700" />
              <span className="text-xs font-mono-code">🐾</span>
              <span className="w-8 h-[1px] bg-slate-700" />
              <span className="text-xs font-mono-code">🐾</span>
            </div>
          </div>

          {/* Right Column: Interactive Photo Placeholder Frame */}
          <div className="md:col-span-7">
            <div
              onClick={() => onOpenMemory?.(2)}
              className="group relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-fuchsia-500/30 cursor-pointer shadow-2xl transition-all duration-500 hover:border-fuchsia-400/60"
            >
              <img
                src="/memories/02.jpg"
                alt="Sania & Her Cat Companion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const fallback = document.getElementById('cat-universe-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />

              {/* Graceful artistic fallback */}
              <div
                id="cat-universe-fallback"
                className="hidden w-full h-full flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-fuchsia-950/40 via-purple-950/50 to-[#07070f]"
              >
                <div className="w-20 h-20 rounded-full border border-fuchsia-500/30 flex items-center justify-center mb-4 bg-fuchsia-500/10">
                  <Cat className="w-9 h-9 text-fuchsia-300 animate-float-slow" />
                </div>
                <span className="font-mono-code text-xs tracking-widest text-fuchsia-400 uppercase mb-1">
                  FELINE ARCHIVE ✦ MEMORY 02
                </span>
                <p className="text-white font-display text-lg font-medium">
                  “Feline companion duties & unconditional purrs.”
                </p>
                <p className="text-[11px] text-slate-500 font-mono-code mt-3">
                  [ Place photo in /public/memories/02.jpg ]
                </p>
              </div>

              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="font-mono-code text-xs text-fuchsia-200 bg-black/60 px-3 py-1 rounded-full border border-fuchsia-500/30">
                  CERTIFIED CAT MOM ✦ ARCHIVE
                </span>
                <span className="p-2 rounded-full bg-fuchsia-500/20 text-fuchsia-300 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
