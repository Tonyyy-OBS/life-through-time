import { useRef, useState, type PointerEvent } from 'react';
import afarensis from '@/assets/hominins/afarensis.png';
import habilis from '@/assets/hominins/habilis.png';
import erectus from '@/assets/hominins/erectus.png';
import neanderthal from '@/assets/hominins/neanderthal.png';
import sapiens from '@/assets/hominins/sapiens.png';
import { Button } from '@/components/ui/button';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { hominins } from '@/lib/evolution';

const images: Record<string, string> = { afarensis, habilis, erectus, neanderthal, sapiens };

export function HomininStage({ species }: { species: number }) {
  const human = hominins[species];
  const card = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [paused, setPaused] = useState(false);
  const src = human ? images[human.id] : undefined;
  if (!human) return null;
  if (!src) return null;
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const r = card.current?.getBoundingClientRect();
    if (!r) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 2, y: ((e.clientY - r.top) / r.height - 0.5) * 2 });
  };
  return (
    <div ref={card} className={`hominin-stage ${paused ? 'motion-paused' : ''}`} onPointerMove={move} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="hominin-orbit" aria-hidden />
      <div className="hominin-float" style={{ transform: `rotateY(${tilt.x * 18}deg) rotateX(${-tilt.y * 10}deg)` }}>
        <img key={human.id} src={src} width={768} height={1152} loading="lazy"
          alt={`Reconstrução artística de ${human.name}`} className="hominin-img animate-rise" />
      </div>
      <div className="hominin-shadow" aria-hidden style={{ transform: `translateX(${-tilt.x * 14}px) scaleX(${1 - Math.abs(tilt.x) * 0.15})` }} />
      <div className="absolute bottom-3 flex gap-2"><Button variant="outline" size="icon" title={paused ? 'Retomar movimento' : 'Pausar movimento'} aria-label={paused ? 'Retomar movimento' : 'Pausar movimento'} onClick={() => setPaused(!paused)}>{paused ? <Play /> : <Pause />}</Button><Button variant="outline" size="icon" title="Centralizar figura" aria-label="Centralizar figura" onClick={() => setTilt({ x: 0, y: 0 })}><RotateCcw /></Button></div>
    </div>
  );
}
