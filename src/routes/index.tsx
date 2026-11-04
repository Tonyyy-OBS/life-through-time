import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero-tree.jpg";
import { Reveal } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolução e Diversidade Biológica — Grupo 6" },
      { name: "description", content: "Da primeira célula ao ser humano: conheça a evolução e a diversidade da vida na Terra." },
      { property: "og:title", content: "Evolução e Diversidade Biológica — Grupo 6" },
      { property: "og:description", content: "Da primeira célula ao ser humano, com animações em stop motion." },
    ],
  }),
  component: Index,
});

const timeline = [
  { e: "🦠", t: "3,8 bilhões de anos", n: "Primeiras células", d: "Bactérias simples surgem nos oceanos primitivos." },
  { e: "🐟", t: "500 milhões", n: "Peixes", d: "Surgem os primeiros vertebrados, com coluna vertebral." },
  { e: "🐸", t: "370 milhões", n: "Anfíbios", d: "A vida sai da água e conquista a terra firme." },
  { e: "🦖", t: "230 milhões", n: "Dinossauros", d: "Répteis gigantes dominam o planeta por 165 milhões de anos." },
  { e: "🐦", t: "150 milhões", n: "Aves", d: "Descendentes diretos dos dinossauros ganham os céus." },
  { e: "🐒", t: "60 milhões", n: "Primatas", d: "Mamíferos com mãos ágeis e cérebros maiores." },
  { e: "🧍", t: "300 mil anos", n: "Homo sapiens", d: "Nós! Linguagem, cultura e ferramentas complexas." },
];

const humans = [
  { n: "Australopithecus", a: "4 milhões de anos", d: "Andava em duas pernas, mas ainda subia em árvores." },
  { n: "Homo habilis", a: "2,4 milhões", d: "O “homem habilidoso”: primeiras ferramentas de pedra." },
  { n: "Homo erectus", a: "1,9 milhão", d: "Dominou o fogo e saiu da África." },
  { n: "Neandertal", a: "400 mil", d: "Forte, adaptado ao frio, enterrava seus mortos." },
  { n: "Homo sapiens", a: "300 mil", d: "Arte, linguagem e o mundo inteiro conquistado." },
];

const groups = [
  { e: "🐘", n: "Mamíferos", c: "6.400+ espécies", d: "Pelos, glândulas mamárias e sangue quente." },
  { e: "🦅", n: "Aves", c: "11.000+ espécies", d: "Penas, bico e ossos ocos para voar." },
  { e: "🐍", n: "Répteis", c: "12.000+ espécies", d: "Pele com escamas e ovos com casca." },
  { e: "🐸", n: "Anfíbios", c: "8.700+ espécies", d: "Vivem entre a água e a terra." },
  { e: "🐠", n: "Peixes", c: "35.000+ espécies", d: "Respiram por brânquias, o grupo mais diverso de vertebrados." },
  { e: "🦋", n: "Insetos", c: "1 milhão+ espécies", d: "Os animais mais numerosos do planeta." },
];

const quiz = [
  { q: "Quem propôs a teoria da seleção natural?", o: ["Isaac Newton", "Charles Darwin", "Albert Einstein"], a: 1 },
  { q: "As aves descendem de qual grupo?", o: ["Dinossauros", "Peixes", "Insetos"], a: 0 },
  { q: "Qual é o grupo animal com mais espécies?", o: ["Mamíferos", "Aves", "Insetos"], a: 2 },
];

function Index() {
  const [open, setOpen] = useState(0);
  return (
    <main>
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Árvore da vida com seres em evolução" className="absolute inset-0 h-full w-full object-cover scale-105 animate-[float_20s_ease-in-out_infinite]" />
        <div className="hero-fade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-24">
          <p className="animate-rise font-semibold uppercase tracking-[0.3em] text-primary">Grupo 6 · Ciências</p>
          <h1 className="animate-rise mt-4 max-w-4xl text-5xl font-extrabold leading-[1.05] sm:text-7xl" style={{ animationDelay: "150ms" }}>
            Evolução e <span className="text-gradient">Diversidade</span> Biológica
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "300ms" }}>
            Uma viagem de 3,8 bilhões de anos — da primeira célula até nós, contada também em stop motion.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "450ms" }}>
            <Link to="/videos" className="glow rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground transition hover:scale-105">▶ Ver Stop Motion</Link>
            <a href="#linha" className="rounded-full border px-7 py-3 font-bold transition hover:bg-secondary">Começar a viagem ↓</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-extrabold sm:text-5xl">O que é <span className="text-primary">evolução</span>?</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Evolução é a mudança das características dos seres vivos ao longo das gerações. Charles Darwin explicou isso
              pela <b className="text-foreground">seleção natural</b>: indivíduos mais adaptados ao ambiente sobrevivem e
              deixam mais descendentes.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[["🧬", "Variação"], ["🌍", "Ambiente"], ["🏆", "Seleção"]].map(([e, l], i) => (
              <div key={l} className="animate-float rounded-2xl border bg-card p-6" style={{ animationDelay: `${i * 0.6}s` }}>
                <div className="text-4xl">{e}</div><div className="mt-2 font-semibold">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="linha" className="mx-auto max-w-4xl px-5 py-24">
        <Reveal><h2 className="text-center text-4xl font-extrabold sm:text-5xl">Linha do tempo da vida</h2></Reveal>
        <div className="relative mt-16 border-l-2 border-primary/40 pl-8">
          {timeline.map((s, i) => (
            <Reveal key={s.n} delay={i * 60} className="relative mb-10">
              <span className="absolute -left-[3.15rem] flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-background text-xl">{s.e}</span>
              <p className="text-sm font-bold text-accent">{s.t}</p>
              <h3 className="text-2xl font-bold">{s.n}</h3>
              <p className="text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal><h2 className="text-4xl font-extrabold sm:text-5xl">A evolução <span className="text-primary">humana</span></h2>
            <p className="mt-3 text-muted-foreground">Clique em cada espécie para descobrir mais.</p></Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {humans.map((h, i) => (
              <button key={h.n} onClick={() => setOpen(i)}
                className={`rounded-full border px-5 py-2 font-semibold transition ${open === i ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>
                {h.n}
              </button>
            ))}
          </div>
          <div key={open} className="animate-rise mt-8 rounded-3xl border bg-card p-8">
            <div className="flex items-end gap-2">{humans.map((_, i) => (
              <div key={i} className={`text-4xl transition ${i <= open ? "opacity-100" : "opacity-20"}`} style={{ fontSize: `${1.8 + i * 0.5}rem` }}>{i < 2 ? "🐒" : "🧍"}</div>
            ))}</div>
            <p className="mt-6 text-sm font-bold text-accent">{humans[open].a}</p>
            <h3 className="text-3xl font-bold">{humans[open].n}</h3>
            <p className="mt-2 text-lg text-muted-foreground">{humans[open].d}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal><h2 className="text-4xl font-extrabold sm:text-5xl">Diversidade <span className="text-primary">animal</span></h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Estima-se que existam cerca de 8,7 milhões de espécies na Terra — e a maioria ainda nem foi descoberta.</p></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.n} delay={i * 80}>
              <div className="group h-full rounded-3xl border bg-card p-7 transition duration-300 hover:-translate-y-2 hover:border-primary hover:glow">
                <div className="text-5xl transition group-hover:scale-125 group-hover:rotate-6">{g.e}</div>
                <h3 className="mt-4 text-2xl font-bold">{g.n}</h3>
                <p className="text-sm font-bold text-primary">{g.c}</p>
                <p className="mt-2 text-muted-foreground">{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Quiz />
    </main>
  );
}

function Quiz() {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = i >= quiz.length;
  return (
    <section className="mx-auto max-w-2xl px-5 pb-24">
      <div className="rounded-3xl border bg-card p-8 text-center">
        <h2 className="text-3xl font-extrabold">🧠 Quiz rápido</h2>
        {done ? (
          <div className="animate-rise mt-6">
            <p className="text-5xl font-extrabold text-primary">{score}/{quiz.length}</p>
            <button onClick={() => { setI(0); setScore(0); setPick(null); }} className="mt-6 rounded-full bg-primary px-6 py-2 font-bold text-primary-foreground">Jogar de novo</button>
          </div>
        ) : (
          <div key={i} className="animate-rise mt-6">
            <p className="text-lg font-semibold">{quiz[i].q}</p>
            <div className="mt-5 grid gap-3">
              {quiz[i].o.map((o, k) => {
                const st = pick === null ? "hover:border-primary" : k === quiz[i].a ? "border-primary bg-primary/20" : k === pick ? "border-destructive bg-destructive/20" : "opacity-50";
                return (
                  <button key={o} disabled={pick !== null} onClick={() => { setPick(k); if (k === quiz[i].a) setScore(score + 1); setTimeout(() => { setPick(null); setI(i + 1); }, 1100); }}
                    className={`rounded-xl border px-4 py-3 font-semibold transition ${st}`}>{o}</button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
