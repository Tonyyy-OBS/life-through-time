import { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { hominins } from '@/lib/evolution';

export function HomininScene({ species }: { species: number }) {
  const host = useRef<HTMLDivElement>(null);
  const api = useRef<{ rotate: (v: boolean) => void; reset: () => void; zoom: (v: number) => void } | null>(null);
  const [playing, setPlaying] = useState(true);
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    const element = host.current;
    const human = hominins[species];
    if (!element || !human) return;
    let disposed = false;
    let cleanup = () => {};
    setStatus('loading');
    Promise.all([import('three'), import('three/addons/controls/OrbitControls.js')]).then(([T, { OrbitControls }]) => {
      if (disposed) return;
      const css = getComputedStyle(element);
      const color = (token: string) => new T.Color(css.getPropertyValue(token).trim());
      // Canvas colors come from resolved semantic CSS tokens (sRGB for Three).
      const resolved = (token: string) => {
        const probe = document.createElement('span');
        probe.style.color = `var(${token})`; element.append(probe);
        const c = getComputedStyle(probe).color; probe.remove();
        const canvas = document.createElement('canvas'); const ctx = canvas.getContext('2d');
        if (!ctx) return color('--foreground');
        ctx.fillStyle = c; ctx.fillRect(0, 0, 1, 1);
        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        return new T.Color().setRGB((r ?? 0) / 255, (g ?? 0) / 255, (b ?? 0) / 255, T.SRGBColorSpace);
      };
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0, 1.15, 4.8);
      const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setClearAlpha(0); element.append(renderer.domElement);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0.95, 0); controls.enablePan = false; controls.enableDamping = true;
      controls.minDistance = 2.8; controls.maxDistance = 7; controls.minPolarAngle = 0.5; controls.maxPolarAngle = 1.9;
      controls.autoRotate = !matchMedia('(prefers-reduced-motion: reduce)').matches; controls.autoRotateSpeed = 1.6;
      setPlaying(controls.autoRotate);
      scene.add(new T.HemisphereLight(resolved('--foreground'), resolved('--secondary'), 2.6));
      const light = new T.DirectionalLight(resolved('--accent'), 3.2); light.position.set(3, 5, 4); scene.add(light);
      const rim = new T.DirectionalLight(resolved('--primary'), 2.4); rim.position.set(-3, 2, -2); scene.add(rim);
      const sculpture = new T.Group(); scene.add(sculpture);
      const skin = new T.MeshStandardMaterial({ color: resolved('--sculpture'), roughness: 0.64, metalness: 0.18 });
      const dark = new T.MeshStandardMaterial({ color: resolved('--sculpture-detail'), roughness: 0.8 });
      const sphere = new T.SphereGeometry(1, 32, 24);
      const ellipsoid = (x: number, y: number, z: number, sx: number, sy: number, sz: number, material = skin) => {
        const mesh = new T.Mesh(sphere, material); mesh.position.set(x,y,z); mesh.scale.set(sx,sy,sz); sculpture.add(mesh); return mesh;
      };
      const limb = (a: number[], b: number[], radius: number) => {
        const from = new T.Vector3(...a as [number,number,number]); const to = new T.Vector3(...b as [number,number,number]);
        const mesh = new T.Mesh(new T.CapsuleGeometry(radius, from.distanceTo(to), 8, 16), skin);
        mesh.position.copy(from).add(to).multiplyScalar(0.5); mesh.quaternion.setFromUnitVectors(new T.Vector3(0,1,0), to.sub(from).normalize()); sculpture.add(mesh);
      };
      const s = human.height / 1.7; const robust = species === 3 ? 1.18 : 1;
      ellipsoid(0, 0.96, 0, 0.22*robust, 0.32, 0.13);
      ellipsoid(0, 0.7, 0, 0.2*robust, 0.17, 0.14);
      limb([0,1.16,0],[0,1.37,0],0.075);
      ellipsoid(0,1.53,0,0.145*human.head,0.19*human.head,0.145*human.head);
      ellipsoid(0,1.47,0.095,0.115,0.12,0.085);
      ellipsoid(0,1.52,0.184,0.032,0.047,0.043);
      ellipsoid(0,1.57,0.132,0.122,0.028*human.brow,0.037);
      for (const sign of [-1,1]) {
        ellipsoid(sign*0.16,1.52,0,0.033,0.054,0.028);
        ellipsoid(sign*0.055,1.554,0.177,0.021,0.013,0.012,dark);
        limb([sign*0.11,0.72,0],[sign*0.13,0.4,0.015],0.088*robust);
        limb([sign*0.13,0.4,0.015],[sign*0.12,0.095,0],0.063*robust);
        ellipsoid(sign*0.12,0.045,0.065,0.069,0.044,0.14);
        limb([sign*0.2,1.15,0],[sign*0.3,0.92,0.01],0.058*robust);
        limb([sign*0.3,0.92,0.01],[sign*0.34,0.92-0.28*human.arms,0.035],0.045);
        ellipsoid(sign*0.35,0.87-0.28*human.arms,0.04,0.045,0.07,0.035);
        for (let finger=0;finger<4;finger++) limb([sign*(0.326+finger*0.014),0.82-0.28*human.arms,0.04],[sign*(0.326+finger*0.014),0.77-0.28*human.arms,0.04],0.009);
      }
      sculpture.scale.setScalar(s);
      const ring = new T.Mesh(new T.TorusGeometry(0.67,0.006,8,96),new T.MeshBasicMaterial({ color: resolved('--primary') })); ring.rotation.x=Math.PI/2; ring.position.y=-0.018; scene.add(ring);
      const resize = () => { const width = element.clientWidth; const height = element.clientHeight; renderer.setSize(width,height); camera.aspect=width/height; camera.updateProjectionMatrix(); };
      const observer = new ResizeObserver(resize); observer.observe(element); resize();
      const visible = { value: true }; const intersection = new IntersectionObserver(([entry]) => { visible.value = entry?.isIntersecting ?? false; }); intersection.observe(element);
      api.current = { rotate: v => { controls.autoRotate=v; }, reset: () => { camera.position.set(0,1.15,4.8); controls.target.set(0,0.95,0); controls.update(); }, zoom: v => { camera.position.sub(controls.target).multiplyScalar(v).add(controls.target); controls.update(); } };
      let frame = 0; const clock = new T.Clock();
      const animate = () => { frame=requestAnimationFrame(animate); const delta=Math.min(clock.getDelta(),0.05); if (visible.value) { controls.update(delta); renderer.render(scene,camera); } }; animate(); setStatus('ready');
      cleanup = () => { cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect(); controls.dispose(); scene.traverse(object => { if (object instanceof T.Mesh) { object.geometry.dispose(); } }); skin.dispose(); dark.dispose(); (ring.material as InstanceType<typeof T.MeshBasicMaterial>).dispose(); renderer.dispose(); renderer.domElement.remove(); api.current=null; };
    }).catch(() => { if (!disposed) setStatus('error'); });
    return () => { disposed=true; cleanup(); };
  }, [species]);
  return <div className="relative min-w-0">
    <div ref={host} className="hominin-canvas" role="img" aria-label={`Sculpture 3D stylisée de ${hominins[species]?.name}`.replace('Sculpture 3D stylisée de','Representação 3D estilizada de')} />
    {status !== 'ready' && <div className="absolute inset-0 flex items-center justify-center text-muted-foreground" role="status">{status === 'loading' ? 'Preparando a representação…' : 'A representação 3D não está disponível neste dispositivo. As informações permanecem abaixo.'}</div>}
    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
      <Button variant="secondary" size="icon" title={playing ? 'Pausar rotação' : 'Iniciar rotação'} aria-label={playing ? 'Pausar rotação' : 'Iniciar rotação'} onClick={() => { api.current?.rotate(!playing); setPlaying(!playing); }}>{playing ? <Pause /> : <Play />}</Button>
      <Button variant="secondary" size="icon" title="Restaurar vista" aria-label="Restaurar vista" onClick={() => api.current?.reset()}><RotateCcw /></Button>
      <Button variant="secondary" size="icon" title="Aproximar" aria-label="Aproximar" onClick={() => api.current?.zoom(0.85)}><ZoomIn /></Button>
      <Button variant="secondary" size="icon" title="Afastar" aria-label="Afastar" onClick={() => api.current?.zoom(1.15)}><ZoomOut /></Button>
    </div>
  </div>;
}