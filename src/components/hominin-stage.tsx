import { useRef, useState, type PointerEvent } from 'react';
import afarensis from '@/assets/hominins/afarensis.png';
import habilis from '@/assets/hominins/habilis.png';
import neanderthal from '@/assets/hominins/neanderthal.png';
import sapiens from '@/assets/hominins/sapiens.png';
import { HomininScene } from '@/components/hominin-scene';
import { hominins } from '@/lib/evolution';

const images: Record<string, string> = { afarensis, habilis, neanderthal, sapiens };

export function HomininStage({ species }: { species: number }) {
  const human = hominins[species];
  const card = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const src = human ? images[human.id] : undefined;
  if (!human) return null;
  if (!src) return <HomininScene species={species} />;
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const r = card.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 2, y: ((e.clientY - r.top) / r.height - 0.5) * 2 });
  };
  return (
    <div ref={card} className="hominin-stage" onPointerMove={move} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="hominin-orbit" aria-hidden />
      <div className="hominin-float" style={{ transform: `rotateY(${tilt.x * 18}deg) rotateX(${-tilt.y * 10}deg)` }}>
        <img key={human.id} src={src} width={768} height={1152} loading="lazy"
          alt={`Reconstrução artística de ${human.name}`} className="hominin-img animate-rise" />
      </div>
      <div className="hominin-shadow" aria-hidden style={{ transform: `translateX(${-tilt.x * 14}px) scaleX(${1 - Math.abs(tilt.x) * 0.15})` }} />
      <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-muted-foreground">Mova o cursor sobre a figura para girá-la</p>
    </div>
  );
}
