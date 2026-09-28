import React from 'react';
import { Dumbbell, Flame, Zap } from 'lucide-react';

interface BuiltDifferentProps {
  onOpenMemory?: (id: number) => void;
}

export const BuiltDifferent: React.FC<BuiltDifferentProps> = ({ onOpenMemory }) => {
  return (
    <section id="built-different" className="relative min-h-screen py-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono-code text-xs uppercase tracking-widest text-indigo-400 block mb-2">
            CHAPTER 04 ✦ RELENTLESS GRIND
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            BUILT DIFFERENT
          </h2>
          <div className="space-y-1 font-serif-title italic text-slate-300 text-lg sm:text-xl">
            <p>“She doesn’t just go to the gym.”</p>
            <p className="text-indigo-300 not-italic font-display font-medium text-xl sm:text-2xl mt-1">
              “She enters another dimension.”
            </p>
          </div>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Gym Media Card */}
          <div className="md:col-span-7 order-2 md:order-1">
            <div
              onClick={() => onOpenMemory?.(3)}
              className="group relative w-full aspect-[16/10] rounded-3xl overflow-hidden glass-panel border border-indigo-500/30 cursor-pointer shadow-2xl transition-all duration-500 hover:border-indigo-400/60"
            >
              <img
                src="/memories/03.jpg"
                alt="Sania Gym Mode"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const fallback = document.getElementById('built-different-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />

              {/* Artistic Fallback */}
              <div
                id="built-different-fallback"
                className="hidden w-full h-full flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-indigo-950/60 via-slate-900 to-[#05050b]"
              >
                <div className="w-20 h-20 rounded-full border border-indigo-500/30 flex items-center justify-center mb-4 bg-indigo-500/10">
                  <Dumbbell className="w-9 h-9 text-indigo-300" />
                </div>
                <span className="font-mono-code text-xs tracking-widest text-indigo-400 uppercase mb-1">
                  PHYSICAL PEAK ✦ MEMORY 03
                </span>
                <p className="text-white font-display text-lg font-medium">
                  “Discipline turned into pure art at the gym.”
                </p>
                <p className="text-[11px] text-slate-500 font-mono-code mt-3">
                  [ Place photo in /public/memories/03.jpg ]
                </p>
              </div>

              {/* Status Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-indigo-500/40 text-[11px] font-mono-code text-indigo-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>GYM MODE: ACTIVE</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono-code text-slate-300">
                <span>INTENSITY: UNMATCHED</span>
                <span>LEVEL 23 POWER</span>
              </div>
            </div>
          </div>

          {/* Futuristic Telemetry / Performance Indicators */}
          <div className="md:col-span-5 order-1 md:order-2 flex flex-col gap-6">
            <div className="p-8 rounded-3xl glass-panel border border-indigo-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-indigo-300 font-mono-code text-xs tracking-wider">
                  <Zap className="w-4 h-4 text-indigo-400" />
                  <span>KINETIC TELEMETRY</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-code bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  OVERDRIVE
                </span>
              </div>

              {/* Indicator Bars */}
              <div className="space-y-5 font-mono-code text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>STRENGTH</span>
                    <span className="text-indigo-400 font-bold">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-full shadow-[0_0_10px_#6366f1]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>DISCIPLINE</span>
                    <span className="text-indigo-400 font-bold">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-full shadow-[0_0_10px_#6366f1]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>ENERGY</span>
                    <span className="text-indigo-400 font-bold">94%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[94%]" />
                  </div>
                </div>
              </div>

              {/* Quote Footer */}
              <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center gap-3">
                <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Consistency in silence, results in neon. Always setting the standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
