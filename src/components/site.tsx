import { Link } from "@tanstack/react-router";
import { Dna, Menu, X } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (el.classList.add("in"), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const links = [
  { to: "/", label: "Início" },
  { to: "/videos", label: "Stop Motion" },
  { to: "/grupo", label: "O Grupo" },
  { to: "/referencias", label: "Referências" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b bg-background/95 transition-all ${scrolled ? "backdrop-blur-lg" : ""}`}>
      <nav aria-label="Navegação principal" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2 font-display text-lg font-bold leading-tight sm:text-xl"><Dna className="h-6 w-6 shrink-0 text-primary" /><span>Evolução <span className="text-primary">&amp;</span> Diversidade</span></Link>
        <Button variant="ghost" size="icon" className="ml-3 shrink-0 lg:hidden" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        <div id="site-navigation" className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-b bg-background px-5 py-3 lg:static lg:flex lg:flex-row lg:border-0 lg:p-0`}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
              className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "bg-primary !text-primary-foreground" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-10 text-center text-sm text-muted-foreground">
      <p className="font-display text-lg text-foreground">Evolução e Diversidade Biológica</p>
      <p className="mt-1">Grupo 6 · Antony, Gustavo, Miguel Carvalho e Rodrigo</p>
    </footer>
  );
}
