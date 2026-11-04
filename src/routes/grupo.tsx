import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site";

export const Route = createFileRoute("/grupo")({
  head: () => ({
    meta: [
      { title: "O Grupo — Grupo 6" },
      { name: "description", content: "Conheça Antony, Gustavo, Miguel Carvalho e Rodrigo, o Grupo 6." },
      { property: "og:title", content: "O Grupo — Grupo 6" },
      { property: "og:description", content: "Os integrantes do projeto Evolução e Diversidade Biológica." },
    ],
  }),
  component: Grupo,
});

const members = [
  { n: "Antony", e: "🦁" },
  { n: "Gustavo", e: "🦅" },
  { n: "Miguel Carvalho", e: "🐢" },
  { n: "Rodrigo", e: "🐺" },
];

function Grupo() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 text-center">
      <Reveal>
        <h1 className="text-5xl font-extrabold sm:text-6xl">Grupo <span className="text-gradient">6</span></h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Quatro estudantes, uma viagem pela história da vida.</p>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m, i) => (
          <Reveal key={m.n} delay={i * 120}>
            <div className="group rounded-3xl border bg-card p-8 transition hover:-translate-y-2 hover:border-primary hover:glow">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-5xl transition group-hover:scale-110 group-hover:rotate-12">{m.e}</div>
              <h2 className="mt-5 text-xl font-bold">{m.n}</h2>
              <p className="text-sm text-primary">Integrante</p>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
