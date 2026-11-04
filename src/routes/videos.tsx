import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { User, Bird, Fish, TreePine, Clapperboard, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Stop Motion — Grupo 6" },
      { name: "description", content: "Animações em stop motion feitas pelo Grupo 6 sobre evolução e diversidade biológica." },
      { property: "og:title", content: "Stop Motion — Grupo 6" },
      { property: "og:description", content: "Nossas animações sobre evolução humana e animal." },
    ],
  }),
  component: Videos,
});

// Para adicionar um vídeo: coloque o link em "src" (ex: "/videos/humano.mp4" ou link do YouTube embed)
const videos: { t: string; d: string; I: LucideIcon; src?: string }[] = [
  { I: User, t: "A evolução humana", d: "Do Australopithecus ao Homo sapiens, quadro a quadro." },
  { I: Bird, t: "Dos dinossauros às aves", d: "Como os dinossauros viraram os pássaros de hoje." },
  { I: Fish, t: "Da água para a terra", d: "Peixes, anfíbios e a conquista do continente." },
  { I: TreePine, t: "Seleção natural", d: "Por que alguns sobrevivem e outros não." },
];

function Videos() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-32">
      <Reveal>
        <p className="font-semibold uppercase tracking-[0.3em] text-primary">Feito à mão, quadro a quadro</p>
        <h1 className="mt-3 text-5xl font-extrabold sm:text-6xl">Nossos <span className="text-gradient">Stop Motions</span></h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Cada animação foi criada fotografando massinha e bonecos centenas de vezes, movendo-os um pouquinho entre cada foto.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {videos.map((v, i) => (
          <Reveal key={v.t} delay={i * 100}>
            <article className="group overflow-hidden rounded-3xl border bg-card transition hover:border-primary hover:glow">
              <div className="relative aspect-video bg-secondary">
                {v.src ? (
                  v.src.includes("youtube") ? (
                    <iframe src={v.src} title={v.t} className="h-full w-full" allowFullScreen />
                  ) : (
                    <video src={v.src} controls className="h-full w-full object-cover" />
                  )
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3">
                    <v.I className="animate-float h-16 w-16 text-primary" strokeWidth={1.3} />
                    <span className="rounded-full border border-dashed px-4 py-1 text-sm text-muted-foreground"><Clapperboard className="mr-1 inline h-4 w-4" />Vídeo em breve</span>
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">EP {i + 1}</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold">{v.t}</h2>
                <p className="mt-1 text-muted-foreground">{v.d}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
