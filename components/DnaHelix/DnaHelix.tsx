'use client';
import { useEffect, useRef } from 'react';

export default function DnaHelix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number, angle = 0, frameId: number;
    const particles = 40;

    const resize = () => {
      w = canvas.width = canvas.clientWidth;
      h = canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      angle += 0.02;

      for (let i = 0; i < particles; i++) {
        const x = (w / particles) * i;
        const offset = i * 0.3 + angle;

        const y1 = h / 2 + Math.sin(offset) * 80;
        ctx.fillStyle = '#00f2fe';
        ctx.beginPath();
        ctx.arc(x, y1, (Math.cos(offset) + 1.5) * 3, 0, Math.PI * 2);
        ctx.fill();

        const y2 = h / 2 + Math.sin(offset + Math.PI) * 80;
        ctx.fillStyle = '#4facfe';
        ctx.beginPath();
        ctx.arc(x, y2, (Math.cos(offset + Math.PI) + 1.5) * 3, 0, Math.PI * 2);
        ctx.fill();

        if (i % 2 === 0) {
          ctx.strokeStyle = 'rgba(255,255,255,0.1)';
          ctx.beginPath();
          ctx.moveTo(x, y1);
          ctx.lineTo(x, y2);
          ctx.stroke();
        }
      }
      frameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className='w-full h-full' />;
}
