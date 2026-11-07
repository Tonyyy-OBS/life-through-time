import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { User, Bird, Fish, TreePine, Clapperboard, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Stop Motion — Evolução e Diversidade Biológica" },
      { name: "description", content: "Espaço para os vídeos escolares do Grupo 6 e temas de evolução para animações em stop motion." },
      { property: "og:title", content: "Stop Motion — Grupo 6" },
      { property: "og:description", content: "Nossas animações sobre evolução humana e animal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Videos,
});

// Para adicionar um vídeo: coloque o link em "src" (ex: "/videos/humano.mp4" ou link do YouTube embed)
const videos: { t: string; d: string; I: LucideIcon; src?: string }[] = [
  { I: User, t: "Linhagens humanas", d: "Espécies de hominínios, coexistência e ancestralidade comum — sem uma marcha até o ser humano." },
  { I: Bird, t: "Dinossauros e aves", d: "As aves são o ramo sobrevivente dos dinossauros terópodes." },
  { I: Fish, t: "A origem dos tetrápodes", d: "Mudanças em linhagens de vertebrados ao longo de muitas gerações, não a transformação de um peixe individual." },
  { I: TreePine, t: "Seleção natural", d: "Variação hereditária e diferenças no sucesso reprodutivo em determinado ambiente." },
];

function Videos() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-32">
      <Reveal>
        <p className="font-semibold text-primary">Evolução e Diversidade Biológica</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl"><span className="text-gradient">Stop Motion</span></h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Stop motion é uma animação feita com fotografias sucessivas de objetos movidos entre os registros. Os vídeos do grupo ainda não foram enviados. Abaixo estão sugestões de temas, não produções concluídas.
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
                    <span className="text-sm text-muted-foreground"><Clapperboard className="mr-1 inline h-4 w-4" />Tema sugerido · sem vídeo enviado</span>
                  </div>
                )}
                <span className="absolute left-4 top-4 text-xs font-bold text-primary">Tema {i + 1}</span>
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
