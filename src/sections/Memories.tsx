import React, { useState } from 'react';
import { Maximize2, Calendar, Sparkles, Play } from 'lucide-react';
import { MEMORIES_DATA, type MemoryItem } from '../data/memories';

interface MemoriesProps {
  onSelectMemory: (memory: MemoryItem) => void;
}

export const Memories: React.FC<MemoriesProps> = ({ onSelectMemory }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const tags = ['all', 'AURA', 'MOMENTS', 'ENERGY', 'CINEMATIC', 'PORTRAIT', 'LEVEL 23'];

  const filteredMemories = activeFilter === 'all'
    ? MEMORIES_DATA
    : MEMORIES_DATA.filter((m) => m.tag?.toUpperCase() === activeFilter.toUpperCase());

  // Asymmetric editorial layout classes for rhythmic visual composition
  const getGridSpanClass = (index: number) => {
    switch (index % 6) {
      case 0:
        return 'col-span-1 md:col-span-8 md:row-span-2 min-h-[420px] sm:min-h-[500px]'; // Grand featured hero card
      case 1:
        return 'col-span-1 md:col-span-4 min-h-[300px] sm:min-h-[340px]';
      case 2:
        return 'col-span-1 md:col-span-4 min-h-[300px] sm:min-h-[340px]';
      case 3:
        return 'col-span-1 md:col-span-4 min-h-[320px] sm:min-h-[360px]';
      case 4:
        return 'col-span-1 md:col-span-4 min-h-[320px] sm:min-h-[360px]';
      case 5:
        return 'col-span-1 md:col-span-4 min-h-[320px] sm:min-h-[360px]';
      default:
        return 'col-span-1 md:col-span-4 min-h-[300px] sm:min-h-[340px]';
    }
  };

  return (
    <section id="memories" className="relative min-h-screen py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Editorial Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-300 font-mono-code text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ARCHIVE OF 23 YEARS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            12 LITTLE PIECES OF HER UNIVERSE
          </h2>

          <p className="font-serif-title italic text-slate-300 text-base sm:text-xl max-w-2xl mx-auto">
            A curated gallery celebrating the moments, milestones, and quiet brilliance that define her.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code transition-all duration-200 cursor-pointer ${
                  activeFilter === tag
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {filteredMemories.map((item, idx) => {
            const spanClass = getGridSpanClass(idx);
            return (
              <div
                key={item.id}
                onClick={() => onSelectMemory(item)}
                className={`group relative rounded-3xl overflow-hidden glass-panel border border-purple-500/20 cursor-pointer shadow-xl transition-all duration-500 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] flex flex-col justify-end p-5 sm:p-6 bg-black/60 ${spanClass}`}
              >
                {/* Background real media: video or image */}
                <div className="absolute inset-0 bg-[#06060c] overflow-hidden flex items-center justify-center">
                  {item.type === 'video' ? (
                    <div className="relative w-full h-full">
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Play badge indicator */}
                      <div className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 backdrop-blur-md text-white/80 group-hover:text-white group-hover:scale-110 transition-all border border-white/10">
                        <Play className="w-3.5 h-3.5 fill-white/80" />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.caption || `Memory ${item.id}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Gentle gradient vignette to make bottom text readable while leaving most of the photo completely clear */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none group-hover:opacity-90 transition-opacity" />

                {/* Top Corner Details */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-purple-300">
                    #{String(item.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Lower Information Card */}
                <div className="relative z-20 space-y-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-purple-400 block">
                      {item.chapter || `Memory ${item.id}`}
                    </span>
                    {item.tag && (
                      <span className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-purple-950/80 border border-purple-400/20 text-purple-200">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {item.caption && (
                    <p className="font-display text-sm sm:text-base font-medium text-white group-hover:text-purple-200 transition-colors line-clamp-2">
                      {item.caption}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono-code text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {item.date || `Part ${item.id}`}
                    </span>
                    <span className="flex items-center gap-1 text-purple-300 group-hover:opacity-100 transition-opacity">
                      <span>EXPAND</span>
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
