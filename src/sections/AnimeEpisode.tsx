import React from 'react';
import { Film, Play } from 'lucide-react';

interface AnimeEpisodeProps {
  onOpenMemory?: (id: number) => void;
}

export const AnimeEpisode: React.FC<AnimeEpisodeProps> = ({ onOpenMemory }) => {
  return (
    <section id="anime-episode" className="relative min-h-screen py-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-950/30 border border-pink-500/30 text-pink-300 font-mono-code text-xs tracking-widest uppercase mb-3">
            <Film className="w-3.5 h-3.5 text-pink-400" />
            <span>SEASON 23 ✦ OFFICIAL PREMIERE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            EPISODE 23: <span className="text-gradient-purple">SANIA</span>
          </h2>

          <p className="font-serif-title italic text-slate-300 text-lg sm:text-xl max-w-xl mx-auto">
            “Every frame carries intention. Every arc pushes boundaries.”
          </p>
        </div>

        {/* Cinematic Anime / Love Death + Robots Style Wide Letterbox Frame */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-purple-500/20 shadow-2xl p-2 sm:p-4">
          {/* Letterbox Bars styling */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
            {/* Top and Bottom Letterbox Bars */}
            <div className="absolute top-0 left-0 right-0 h-6 sm:h-10 bg-black/90 z-20 flex items-center justify-between px-6 text-[10px] sm:text-xs font-mono-code text-slate-400">
              <span className="text-purple-300">REC [●] 23.976 FPS</span>
              <span>4K CINEMA ARCHIVE</span>
            </div>

            {/* Clickable interactive media placeholder */}
            <div
              onClick={() => onOpenMemory?.(6)}
              className="group relative w-full h-full cursor-pointer"
            >
              <img
                src="/memories/06.jpg"
                alt="Episode 23 Sania"
                className="w-full h-full object-cover object-center filter saturate-[1.15] contrast-105 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const fallback = document.getElementById('anime-episode-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />

              {/* Cinematic Art Fallback */}
              <div
                id="anime-episode-fallback"
                className="hidden w-full h-full flex-col items-center justify-center p-8 text-center bg-gradient-to-tr from-purple-950/70 via-slate-950 to-pink-950/60"
              >
                <div className="w-16 h-16 rounded-full border border-pink-400/40 bg-pink-500/10 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(244,114,182,0.3)]">
                  <Play className="w-7 h-7 text-pink-300 ml-1" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  THE PROTAGONIST IN MOTION
                </h3>
                <p className="text-xs text-slate-400 font-mono-code max-w-sm">
                  Memory 06 ✦ [ Place cinematic photo or video in /public/memories/06.jpg ]
                </p>
              </div>

              {/* Dramatic lower third title */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-20 flex items-end justify-between px-6 pb-4">
                <div>
                  <span className="font-mono-code text-[10px] text-pink-400 tracking-widest block uppercase">
                    PROTAGONIST ✦ SANIA
                  </span>
                  <span className="font-display text-sm sm:text-base font-semibold text-white">
                    “The story continues...”
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-slate-400">
                  ACT III / SCENE 23
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative closing note */}
        <div className="text-center mt-8">
          <p className="font-mono-code text-xs text-purple-300/80 tracking-widest uppercase">
            ✦ PRODUCED WITH LOVE & ADMIRATION ✦
          </p>
        </div>
      </div>
    </section>
  );
};
