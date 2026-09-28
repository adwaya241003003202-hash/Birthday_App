import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alphaSpeed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize stars
    const starCount = Math.min(Math.floor((width * height) / 9000), 160);
    const starColors = ['#ffffff', '#e9d5ff', '#c084fc', '#a5f3fc', '#fbcfe8'];
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      baseAlpha: Math.random() * 0.7 + 0.2,
      alphaSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      color: starColors[Math.floor(Math.random() * starColors.length)],
    }));

    // Shooting stars
    const shootingStars: ShootingStar[] = [];
    const spawnShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.015) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 7 + 5,
          angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1),
          opacity: 1,
          active: true,
        });
      }
    };

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Deep space subtle gradient wash
      const bgGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.35, 100,
        width * 0.5, height * 0.5, Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#0c0b17');
      bgGrad.addColorStop(0.5, '#07070f');
      bgGrad.addColorStop(1, '#040407');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render cosmic nebulae
      const nebulae = [
        { x: width * 0.25, y: height * 0.3, r: Math.min(width, height) * 0.45, col: 'rgba(147, 51, 234, 0.04)' },
        { x: width * 0.75, y: height * 0.6, r: Math.min(width, height) * 0.5, col: 'rgba(79, 70, 229, 0.035)' },
        { x: width * 0.5, y: height * 0.85, r: Math.min(width, height) * 0.4, col: 'rgba(219, 39, 119, 0.025)' },
      ];

      for (const neb of nebulae) {
        const grad = ctx.createRadialGradient(neb.x, neb.y, 10, neb.x, neb.y, neb.r);
        grad.addColorStop(0, neb.col);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(neb.x, neb.y, neb.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render stars
      for (const star of stars) {
        star.baseAlpha += star.alphaSpeed;
        if (star.baseAlpha > 0.95 || star.baseAlpha < 0.15) {
          star.alphaSpeed = -star.alphaSpeed;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.baseAlpha));
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra twinkle glow on larger stars
        if (star.size > 1.4 && star.baseAlpha > 0.6) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = (star.baseAlpha - 0.5) * 0.8;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2.5, star.y);
          ctx.lineTo(star.x + star.size * 2.5, star.y);
          ctx.moveTo(star.x, star.y - star.size * 2.5);
          ctx.lineTo(star.x, star.y + star.size * 2.5);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Handle shooting stars
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        if (!s.active) {
          shootingStars.splice(i, 1);
          continue;
        }

        const dx = Math.cos(s.angle) * s.speed;
        const dy = Math.sin(s.angle) * s.speed;
        s.x += dx;
        s.y += dy;
        s.opacity -= 0.012;

        if (s.opacity <= 0 || s.x > width + 100 || s.y > height + 100) {
          s.active = false;
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.opacity);
        const trailGrad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        trailGrad.addColorStop(0, '#ffffff');
        trailGrad.addColorStop(0.3, '#c084fc');
        trailGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');

        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle vignette layer */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-[#040407]/80" />
      {/* Delicate grid lattice in background */}
      <div 
        className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />
    </div>
  );
};
