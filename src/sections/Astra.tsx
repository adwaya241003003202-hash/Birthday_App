import React from 'react';
import { Orbit, Sparkles, Compass } from 'lucide-react';

interface AstraProps {
  onOpenMemory?: (id: number) => void;
}

export const Astra: React.FC<AstraProps> = ({ onOpenMemory }) => {
  return (
    <section id="astra" className="relative min-h-screen py-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Subtle glowing cosmic aura */}
        <div className="relative text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 font-mono-code text-xs tracking-widest mb-4">
            <Orbit className="w-3.5 h-3.5 text-violet-400 animate-spin-very-slow" />
            <span>COSMIC ENERGY DETECTED</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            THE ASTRAL FREQUENCY
          </h2>

          <div className="space-y-2 font-serif-title italic text-slate-300 text-lg sm:text-2xl max-w-xl mx-auto">
            <p>“For a while, she controlled the stars.”</p>
          </div>
        </div>

        {/* Celestial Geometry Composition */}
        <div className="relative max-w-3xl mx-auto rounded-3xl glass-panel border border-violet-500/20 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Background Celestial Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-violet-500/10 pointer-events-none animate-spin-very-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-dashed border-purple-500/10 pointer-events-none" />

          {/* Golden/Violet Astral stars node layout */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <span className="font-mono-code text-xs text-violet-400 tracking-widest uppercase block">
                EASTER EGG ✦ ASTRAL RECALL
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                Cosmic Alignment: 23° North
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                A subtle tribute to the astral orchestrator. Pulling gravity wells, anchoring the chaos,
                and reshaping the celestial map with calm, effortless precision.
              </p>

              <div className="pt-2 flex items-center justify-center md:justify-start gap-4 font-mono-code text-xs text-violet-300">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-violet-400" />
                  GRAVITY: ANCHORED
                </span>
                <span>•</span>
                <span>STELLAR FORM: TRANSCENDENT</span>
              </div>
            </div>

            {/* Clickable Astral Memory Frame */}
            <div
              onClick={() => onOpenMemory?.(5)}
              className="group relative w-64 h-64 rounded-full p-1 bg-gradient-to-tr from-violet-600/40 via-purple-500/40 to-cyan-400/40 cursor-pointer shadow-[0_0_35px_rgba(139,92,246,0.25)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-500"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                <img
                  src="/memories/05.jpg"
                  alt="Sania Astral / Cosmic Energy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    const fallback = document.getElementById('astra-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div
                  id="astra-fallback"
                  className="hidden w-full h-full flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-violet-950 via-purple-950 to-black"
                >
                  <Sparkles className="w-8 h-8 text-violet-300 animate-pulse mb-2" />
                  <span className="text-[11px] font-mono-code text-violet-300 uppercase tracking-widest">
                    ASTRAL NODE
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono-code mt-1">
                    MEMORY 05
                  </span>
                </div>

                <div className="absolute inset-0 bg-violet-900/10 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
