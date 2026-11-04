import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (el.classList.add("in"), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const links = [
  { to: "/", label: "Início" },
  { to: "/videos", label: "Stop Motion" },
  { to: "/grupo", label: "O Grupo" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-background/80 backdrop-blur-lg border-b" : ""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-xl font-bold">🧬 Grupo <span className="text-primary">6</span></Link>
        <div className="flex gap-1 sm:gap-2">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }}
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
