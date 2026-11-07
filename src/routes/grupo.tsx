import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { User } from "lucide-react";

export const Route = createFileRoute("/grupo")({
  head: () => ({
    meta: [
      { title: "O Grupo — Evolução e Diversidade Biológica" },
      { name: "description", content: "Conheça Antony, Gustavo, Miguel Carvalho e Rodrigo, o Grupo 6." },
      { property: "og:title", content: "O Grupo — Grupo 6" },
      { property: "og:description", content: "Os integrantes do projeto Evolução e Diversidade Biológica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Grupo,
});

const members = [
  { n: "Antony" },
  { n: "Gustavo" },
  { n: "Miguel Carvalho" },
  { n: "Rodrigo" },
];

function Grupo() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 text-center">
      <Reveal>
        <p className="text-sm font-bold text-primary">Evolução e Diversidade Biológica · Grupo 6</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">Nosso <span className="text-gradient">grupo</span></h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Quatro estudantes, uma viagem pela história da vida.</p>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m, i) => (
          <Reveal key={m.n} delay={i * 120}>
            <div className="group rounded-3xl border bg-card p-8 transition hover:-translate-y-2 hover:border-primary hover:glow">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-primary transition group-hover:scale-110"><User className="h-10 w-10" strokeWidth={1.4} /></div>
              <h2 className="mt-5 text-xl font-bold">{m.n}</h2>
              <p className="text-sm text-primary">Integrante · Grupo 6</p>
            </div>
          </Reveal>
        ))}
      </div>
      <section className="mx-auto mt-12 max-w-2xl border-t pt-8 text-left"><h2 className="text-2xl font-bold">Autoria e participação</h2><p className="mt-3 leading-relaxed text-muted-foreground">Este projeto escolar é do Grupo 6, formado por Antony, Gustavo, Miguel Carvalho e Rodrigo. A descrição da contribuição de cada integrante será acrescentada após a confirmação do grupo; não atribuímos tarefas sem essa informação.</p></section>
    </main>
  );
}
