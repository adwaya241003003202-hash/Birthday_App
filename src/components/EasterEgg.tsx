import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { AlertTriangle, Sparkles, Cat, Heart } from 'lucide-react';

export const EasterEgg: React.FC = () => {
  const [stage, setStage] = useState<'idle' | 'warning' | 'countdown' | 'celebrate'>('idle');
  const [countdown, setCountdown] = useState(3);

  const startCountdown = () => {
    setStage('countdown');
    setCountdown(3);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          triggerCelebration();
          return 0;
        }
        return prev - 1;
      });
    }, 700);
  };

  const handleTrigger = () => {
    if (stage !== 'idle') return;
    setStage('warning');
    setTimeout(startCountdown, 1500);
  };

  const triggerCelebration = () => {
    setStage('celebrate');

    try {
      const duration = 3.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      const interval: ReturnType<typeof setInterval> = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: Math.random() * 0.4 + 0.3, y: Math.random() - 0.2 },
          colors: ['#a855f7', '#d946ef', '#38bdf8', '#fb7185', '#ffffff'],
        });
      }, 250);
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setStage('idle');
    }, 5000);
  };

  return (
    <>
      {/* Discreet secret button */}
      <div className="flex justify-center my-12 relative z-20">
        <button
          type="button"
          onClick={handleTrigger}
          className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 text-xs font-mono-code transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(219,39,119,0.4)] focus:outline-none cursor-pointer"
          title="Curiosity killed the cat... or made the universe brighter"
        >
          <span className="w-2 h-2 rounded-full bg-pink-500 group-hover:animate-ping" />
          <span className="font-semibold tracking-wider">✦ DON'T TOUCH</span>
        </button>
      </div>

      {/* Full-screen dramatic Easter egg overlay */}
      {stage !== 'idle' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-6 transition-all duration-300">
          {stage === 'warning' && (
            <div className="text-center max-w-md animate-bounce">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-red-500/40 bg-red-950/40 flex items-center justify-center text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h4 className="font-mono-code text-sm tracking-widest text-red-400 mb-2 uppercase">
                WARNING
              </h4>
              <p className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                COSMIC STABILITY COMPROMISED.
              </p>
              <p className="font-mono-code text-xs text-slate-400 mt-2">
                Recalibrating spacetime coordinates around Sania...
              </p>
            </div>
          )}

          {stage === 'countdown' && (
            <div className="text-center animate-pulse">
              <span className="font-display text-7xl sm:text-9xl font-extrabold bg-gradient-to-b from-purple-200 via-pink-400 to-indigo-500 bg-clip-text text-transparent">
                {countdown}
              </span>
              <p className="font-mono-code text-xs text-purple-300 tracking-widest uppercase mt-4">
                Deploying astral singularity...
              </p>
            </div>
          )}

          {stage === 'celebrate' && (
            <div className="text-center max-w-lg p-8 rounded-3xl glass-panel border border-purple-400/40 shadow-[0_0_80px_rgba(168,85,247,0.4)] animate-fadeIn">
              <div className="flex justify-center items-center gap-3 mb-4 text-purple-300">
                <Sparkles className="w-6 h-6 animate-spin text-yellow-300" />
                <Cat className="w-8 h-8 text-pink-400 animate-bounce" />
                <Heart className="w-6 h-6 text-red-400 animate-pulse" />
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Okay. Happy Birthday. ✨
              </h2>
              <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed font-sans mb-4">
                Cosmic anomaly resolved: Sania is officially 23 and the entire multiverse agreed she's the coolest.
              </p>
              <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 font-mono-code text-xs">
                LEVEL 23 UNLOCKED ✦ ADVENTURE RESUMED
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
