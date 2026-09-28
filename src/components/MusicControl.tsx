import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicControlProps {
  started: boolean;
  isInLetterSection?: boolean;
}

export const MusicControl: React.FC<MusicControlProps> = ({ started, isInLetterSection = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Playback trigger upon entering
  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [started]);

  // Subtle volume reduction during the intimate personal letter
  useEffect(() => {
    if (!audioRef.current) return;
    const targetVolume = isInLetterSection ? 0.35 : 0.8;
    audioRef.current.volume = targetVolume;
  }, [isInLetterSection]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-2">
      {/* Primary soundtrack referencing /music/birthday.mp3 */}
      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-purple-500/20 text-purple-200/80 shadow-lg text-xs tracking-wider transition-all duration-300 hover:border-purple-400/40 hover:text-white">
        <button
          type="button"
          onClick={togglePlay}
          className="flex items-center gap-1.5 p-1 rounded-full hover:bg-purple-500/20 transition-colors focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer"
          aria-label={isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
          title={isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
        >
          <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse text-purple-300' : 'text-slate-400'}`} />
          <span className="font-mono-code text-[11px] hidden sm:inline select-none">
            {isPlaying ? 'SOUNDTRACK ON' : 'SOUNDTRACK OFF'}
          </span>
        </button>

        <span className="w-[1px] h-3 bg-purple-500/20" />

        <button
          type="button"
          onClick={toggleMute}
          className="p-1 rounded-full hover:bg-purple-500/20 transition-colors focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer"
          aria-label={isMuted ? 'Unmute soundtrack' : 'Mute soundtrack'}
          title={isMuted ? 'Unmute soundtrack' : 'Mute soundtrack'}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-purple-300" />
          )}
        </button>
      </div>
    </div>
  );
};
