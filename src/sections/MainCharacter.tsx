import React from 'react';
import { Sparkles, Dna, Dumbbell, Cat, Orbit, Play } from 'lucide-react';
import { SANIA_PROFILE } from '../data/content';
import { MEMORIES_DATA } from '../data/memories';

interface MainCharacterProps {
  onOpenMemory?: (id: number) => void;
}

export const MainCharacter: React.FC<MainCharacterProps> = ({ onOpenMemory }) => {
  const heroMemory = MEMORIES_DATA.find((m) => m.id === 1) || MEMORIES_DATA[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cat': return <Cat className="w-3.5 h-3.5" />;
      case 'dumbbell': return <Dumbbell className="w-3.5 h-3.5" />;
      case 'dna': return <Dna className="w-3.5 h-3.5" />;
      case 'sparkles': return <Sparkles className="w-3.5 h-3.5" />;
      case 'orbit': return <Orbit className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="main-character" className="relative min-h-screen py-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-mono-code text-xs uppercase tracking-widest text-purple-400 block mb-2">
            CHAPTER 02 ✦ THE ORIGIN
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            THE MAIN CHARACTER
          </h2>
          <div className="space-y-2 font-serif-title italic text-slate-300 text-lg sm:text-xl md:text-2xl max-w-xl mx-auto">
            <p>“Every good story has a main character.”</p>
            <p className="text-slate-400 text-base sm:text-lg">“Some are ordinary.”</p>
            <p className="text-slate-400 text-base sm:text-lg">“Some are extraordinary.”</p>
            <p className="text-purple-300 font-semibold text-xl sm:text-2xl not-italic font-display mt-3">
              “And then there’s you.”
            </p>
          </div>
        </div>

        {/* Centerpiece Hero Frame: Sania's Portrait/Video with Orbital Rings & Constellations */}
        <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] sm:aspect-[4/5] flex items-center justify-center mb-12">
          {/* Orbital Rings - subtle and positioned cleanly behind/around */}
          <div className="absolute inset-0 -m-6 sm:-m-10 rounded-full border border-purple-500/15 pointer-events-none animate-spin-very-slow -z-10" />
          <div className="absolute inset-0 -m-12 sm:-m-18 rounded-full border border-fuchsia-500/10 border-dashed pointer-events-none -z-10" />
          <div className="absolute -inset-4 rounded-3xl border border-purple-500/20 pointer-events-none glow-purple-md -z-10" />

          {/* Glowing orbital celestial nodes */}
          <div className="absolute -top-3 left-1/4 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc] animate-ping" />
          <div className="absolute bottom-6 -right-2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_15px_#38bdf8]" />

          {/* The Hero Container */}
          <div
            onClick={() => onOpenMemory?.(heroMemory.id)}
            className="group relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-purple-500/30 cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-[1.01] bg-black/40 flex items-center justify-center"
          >
            {heroMemory.type === 'video' ? (
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <video
                  src={heroMemory.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md text-white/80 group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-white/80" />
                </div>
              </div>
            ) : (
              <img
                src={heroMemory.src}
                alt="Sania — The Main Character"
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
              />
            )}

            {/* Corner geometric sci-fi brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-purple-400/60 pointer-events-none" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-purple-400/60 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-400/60 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-purple-400/60 pointer-events-none" />

            {/* Bottom identifier badge */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-between pointer-events-none">
              <div>
                <span className="font-mono-code text-[10px] tracking-widest text-purple-300 uppercase block mb-0.5">
                  THE PROTAGONIST ✦ 23
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  SANIA
                </span>
              </div>
              <span className="font-mono-code text-[11px] px-2.5 py-1 rounded bg-purple-950/70 border border-purple-400/30 text-purple-200">
                1 OF 1
              </span>
            </div>
          </div>
        </div>

        {/* Personality Labels */}
        <div className="w-full flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 max-w-3xl mt-2">
          {SANIA_PROFILE.traits.map((trait) => (
            <div
              key={trait.label}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full glass-panel-subtle border border-purple-500/20 text-slate-200 text-xs sm:text-sm font-mono-code tracking-wider hover:border-purple-400/40 hover:text-white transition-all duration-300"
            >
              <span className="text-purple-400">{getIcon(trait.icon)}</span>
              <span className="font-medium text-white">{trait.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
