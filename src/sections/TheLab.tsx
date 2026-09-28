import React from 'react';
import { Dna, Activity, ShieldCheck, Binary } from 'lucide-react';

interface TheLabProps {
  onOpenMemory?: (id: number) => void;
}

export const TheLab: React.FC<TheLabProps> = ({ onOpenMemory }) => {
  return (
    <section id="the-lab" className="relative min-h-screen py-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono-code text-xs uppercase tracking-widest text-cyan-400 block mb-2">
            CHAPTER 05 ✦ BIOTECH INTELLIGENCE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            THE LAB
          </h2>
          <p className="font-serif-title italic text-slate-300 text-lg sm:text-xl">
            Where molecular brilliance meets unwavering dedication.
          </p>
        </div>

        {/* Laboratory Terminal Panel */}
        <div className="rounded-3xl glass-panel border border-cyan-500/20 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          {/* Subtle DNA background line pattern */}
          <div className="absolute top-0 right-0 p-8 opacity-10 text-cyan-400 pointer-events-none">
            <Dna className="w-64 h-64 -rotate-12" />
          </div>

          {/* Dossier Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8 font-mono-code text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-cyan-300 font-semibold tracking-wider">
                SUNPHARMA & BIOTECH RESEARCH DIVISION
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>SECURITY LEVEL: APEX</span>
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-400/30 text-cyan-300">
                VERIFIED
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Subject Profile Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-2 p-5 rounded-2xl bg-black/40 border border-cyan-500/20 font-mono-code text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">SUBJECT:</span>
                  <span className="text-white font-bold tracking-wider">SANIA</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">AGE:</span>
                  <span className="text-cyan-300 font-bold">23</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">ORGANIZATION:</span>
                  <span className="text-slate-200">SunPharma Baddie</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">CLASSIFICATION:</span>
                  <span className="text-fuchsia-300 font-bold tracking-wider">
                    EXTREMELY COOL
                  </span>
                </div>
              </div>

              {/* Lab Photo Frame */}
              <div
                onClick={() => onOpenMemory?.(4)}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-cyan-500/30 cursor-pointer shadow-lg hover:border-cyan-400/60 transition-all duration-300"
              >
                <img
                  src="/memories/04.jpg"
                  alt="Sania in the Lab / Biotech"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    const fallback = document.getElementById('the-lab-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div
                  id="the-lab-fallback"
                  className="hidden w-full h-full flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-cyan-950/40 via-slate-900 to-black"
                >
                  <Activity className="w-10 h-10 text-cyan-400 mb-2 animate-pulse" />
                  <p className="text-xs font-mono-code text-cyan-300 uppercase tracking-wider">
                    BIOTECH ARCHIVE ✦ MEMORY 04
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono-code mt-2">
                    [ Place photo in /public/memories/04.jpg ]
                  </p>
                </div>
                <div className="absolute bottom-2 left-2 right-2 px-3 py-1 rounded bg-black/70 backdrop-blur-md flex items-center justify-between text-[11px] font-mono-code text-cyan-200">
                  <span>SPECIMEN DATA</span>
                  <Binary className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Fictional Visual Parameters */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="space-y-4 font-mono-code text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>CURIOSITY</span>
                    <span className="text-cyan-400 font-bold">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full w-full shadow-[0_0_10px_#22d3ee]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>INTELLIGENCE</span>
                    <span className="text-cyan-400 font-bold">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full w-full shadow-[0_0_10px_#22d3ee]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>CHAOS</span>
                    <span className="text-cyan-400 font-bold">80%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-400/80 rounded-full w-[80%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>CAT AFFINITY</span>
                    <span className="text-cyan-400 font-bold">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1.5">
                    <span>BIRTHDAY ENERGY</span>
                    <span className="text-fuchsia-400 font-bold text-sm">∞</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-fuchsia-400 to-purple-500 rounded-full w-full shadow-[0_0_12px_#d946ef]" />
                  </div>
                </div>
              </div>

              {/* Experiment Conclusion Message */}
              <div className="mt-4 p-5 rounded-2xl bg-cyan-950/20 border border-cyan-400/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-mono-code text-xs text-cyan-300 font-semibold tracking-wider">
                    “Experiment concluded.”
                  </p>
                  <p className="font-display text-white text-base sm:text-lg font-medium">
                    “Results: one-of-one.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
