import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import type { MemoryItem } from '../data/memories';

interface MediaViewerProps {
  memory: MemoryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
}

export const MediaViewer: React.FC<MediaViewerProps> = ({
  memory,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total,
}) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (memory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [memory, onClose, onNext, onPrev]);

  if (!memory) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={memory.caption || `Memory ${memory.id} detail view`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/92 backdrop-blur-2xl transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl glass-panel border border-purple-500/25 shadow-2xl overflow-hidden bg-[#090912]/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/[0.08] bg-black/40">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
              MEMORY {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            {memory.tag && (
              <span className="hidden sm:inline-flex items-center gap-1 font-mono-code text-[11px] text-slate-400">
                <Tag className="w-3 h-3 text-purple-400" />
                {memory.tag}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer"
              aria-label="Close memory viewer (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media display area */}
        <div className="relative flex-1 min-h-[360px] sm:min-h-[460px] max-h-[68vh] flex items-center justify-center bg-black/75 overflow-hidden">
          {memory.type === 'video' ? (
            <div className="relative w-full h-full max-h-[68vh] flex items-center justify-center">
              <video
                key={memory.src}
                src={memory.src}
                controls
                autoPlay
                playsInline
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="relative w-full h-full max-h-[68vh] flex items-center justify-center p-2">
              <img
                src={memory.src}
                alt={memory.caption || `Memory ${memory.id}`}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
              />
            </div>
          )}

          {/* Navigation overlay buttons */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white border border-white/15 transition-all hover:scale-105 focus:outline-none cursor-pointer"
            aria-label="Previous memory (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white border border-white/15 transition-all hover:scale-105 focus:outline-none cursor-pointer"
            aria-label="Next memory (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption & Metadata Footer */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 bg-gradient-to-b from-black/50 to-[#07070d] border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div>
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-purple-400 block mb-0.5">
                {memory.chapter || `Memory ${memory.id}`}
              </span>
              {memory.caption ? (
                <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
                  {memory.caption}
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-slate-400 font-mono-code">
                  ✦ Sania's 23rd Birthday Universe
                </p>
              )}
            </div>
            {memory.date && (
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-code whitespace-nowrap self-start sm:self-center">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>{memory.date}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
