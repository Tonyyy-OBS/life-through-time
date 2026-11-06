import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Microscope, Fish, Footprints, Bone, Bird, PawPrint, User, Dna, Globe2, Trophy,
  Rabbit, Feather, Turtle, Bug, Layers, GitCompare, Leaf, TreePine, Flame, Factory,
  Droplets, ShieldCheck, BookOpen, Play, ArrowDown, Brain,
} from "lucide-react";
import hero from "@/assets/hero-tree.jpg";
import darwin from "@/assets/darwin.jpg";
import bio from "@/assets/biodiversity.jpg";
import { Reveal } from "@/components/site";
import { HumanEvolution } from "@/components/human-evolution";
import { ScienceQuiz } from "@/components/science-quiz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolução e Diversidade Biológica" },
      { name: "description", content: "Da primeira célula ao ser humano: evolução, seleção natural e a diversidade da vida na Terra." },
      { property: "og:title", content: "Evolução e Diversidade Biológica" },
      { property: "og:description", content: "Da primeira célula ao ser humano, com animações em stop motion." },
    ],
  }),
  component: Index,
});

const timeline = [
  { I: Microscope, t: "cerca de 3,5 bilhões de anos", n: "Primeiras células", d: "Os fósseis mais antigos aceitos indicam seres unicelulares procariontes." },
  { I: Fish, t: "500 milhões de anos", n: "Peixes", d: "Surgem os primeiros vertebrados, com coluna vertebral." },
  { I: Footprints, t: "370 milhões de anos", n: "Anfíbios", d: "Os vertebrados saem da água e conquistam a terra firme." },
  { I: Bone, t: "230 milhões de anos", n: "Dinossauros", d: "Diversificam-se por milhões de anos; os não avianos se extinguem há 66 milhões de anos." },
  { I: Bird, t: "150 milhões de anos", n: "Aves", d: "Descendentes de dinossauros terópodes conquistam os céus." },
  { I: PawPrint, t: "60 milhões de anos", n: "Primatas", d: "Mamíferos com mãos preênseis, visão frontal e cérebros maiores." },
  { I: User, t: "300 mil anos", n: "Homo sapiens", d: "Nossa espécie: linguagem, cultura e ferramentas complexas." },
];

const evidences = [
  { I: Layers, n: "Fósseis", d: "Restos preservados em rochas mostram seres que já viveram e como mudaram com o tempo." },
  { I: GitCompare, n: "Anatomia comparada", d: "O braço humano, a asa do morcego e a nadadeira da baleia têm os mesmos ossos: órgãos homólogos." },
  { I: Dna, n: "DNA", d: "Humanos e chimpanzés compartilham grande parte das sequências de DNA, evidência de um ancestral comum (não descendemos dos chimpanzés)." },
  { I: Microscope, n: "Embriologia", d: "Embriões de vertebrados compartilham estruturas em fases iniciais, como arcos faríngeos e cauda, indicando origem comum." },
];

const groups = [
  { I: PawPrint, n: "Mamíferos", c: "6.400+ espécies", d: "Pelos, glândulas mamárias e temperatura corporal constante." },
  { I: Feather, n: "Aves", c: "11.000+ espécies", d: "Penas, bico, ovos com casca e ossos ocos para voar." },
  { I: Turtle, n: "Répteis", c: "12.000+ espécies", d: "Pele com escamas e ovos com casca, adaptados à terra." },
  { I: Rabbit, n: "Anfíbios", c: "8.700+ espécies", d: "Vivem entre a água e a terra e respiram também pela pele." },
  { I: Fish, n: "Peixes", c: "35.000+ espécies", d: "Respiram por brânquias: o grupo mais diverso de vertebrados." },
  { I: Bug, n: "Insetos", c: "1 milhão+ espécies", d: "Os animais mais numerosos e diversos do planeta." },
];

const threats = [
  { I: TreePine, n: "Desmatamento", d: "Destrói o habitat de milhares de espécies." },
  { I: Flame, n: "Queimadas", d: "Atingem Amazônia, Cerrado e Pantanal todos os anos." },
  { I: Factory, n: "Poluição", d: "Contamina rios, solos e o ar." },
  { I: Droplets, n: "Mudanças climáticas", d: "Alteram ambientes mais rápido do que as espécies conseguem se adaptar." },
];

function Title({ k, children, sub }: { k: string; children: React.ReactNode; sub?: string }) {
  return (
    <Reveal>
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">{k}</p>
      <h2 className="mt-2 text-4xl font-extrabold sm:text-5xl">{children}</h2>
      {sub && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function Index() {
  return (
    <main>
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Árvore da vida com seres em evolução" width={1600} height={912} className="absolute inset-0 h-full w-full scale-105 object-cover" />
        <div className="hero-fade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-24">
          <p className="animate-rise font-semibold uppercase tracking-[0.3em] text-primary">Trabalho de Ciências · Grupo 6</p>
          <h1 className="animate-rise mt-4 max-w-4xl text-5xl font-extrabold leading-[1.05] sm:text-7xl" style={{ animationDelay: "150ms" }}>
            Evolução e <span className="text-gradient">Diversidade</span> Biológica
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "300ms" }}>
            Uma viagem de 3,8 bilhões de anos, da primeira célula até nós, contada também em stop motion.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "450ms" }}>
            <Link to="/videos" className="glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground transition hover:scale-105"><Play className="h-4 w-4" /> Ver Stop Motion</Link>
            <a href="#conceito" className="inline-flex items-center gap-2 rounded-full border px-7 py-3 font-bold transition hover:bg-secondary">Começar a viagem <ArrowDown className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      {/* Sumário */}
      <nav className="mx-auto -mt-10 max-w-6xl px-5">
        <div className="relative flex flex-wrap justify-center gap-2 rounded-2xl border bg-card/90 p-4 backdrop-blur">
          {[["conceito", "1. Conceito"], ["teorias", "2. Teorias"], ["evidencias", "3. Evidências"], ["linha", "4. Linha do tempo"], ["humana", "5. Evolução humana"], ["diversidade", "6. Diversidade"], ["brasil", "7. Brasil"], ["conclusao", "8. Conclusão"]].map(([id, l]) => (
            <a key={id} href={`#${id}`} className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted-foreground transition hover:bg-primary hover:text-primary-foreground">{l}</a>
          ))}
        </div>
      </nav>

      <section id="conceito" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Title k="1. Conceito">O que é <span className="text-primary">evolução</span>?</Title>
            <Reveal>
              <p className="mt-5 text-lg text-muted-foreground">
                Evolução biológica é o processo de <b className="text-foreground">mudança das características hereditárias</b> das
                populações de seres vivos ao longo de muitas gerações. É por causa dela que existe tanta variedade de vida na Terra.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[[Dna, "Variação", "Indivíduos nascem diferentes"], [Globe2, "Ambiente", "Impõe desafios"], [Trophy, "Seleção", "Os mais aptos se reproduzem"]].map(([I, l, d], i) => {
              const Icon = I as typeof Dna;
              return (
                <Reveal key={l as string} delay={i * 120}>
                  <div className="h-full rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:border-primary">
                    <Icon className="mx-auto h-9 w-9 text-primary" strokeWidth={1.5} />
                    <div className="mt-3 font-bold">{l as string}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{d as string}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="teorias" className="scroll-mt-24 bg-secondary/40 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[2fr_3fr] md:items-center">
          <Reveal><img src={darwin} alt="Charles Darwin, o navio Beagle e os tentilhões de Galápagos" width={912} height={1104} loading="lazy" className="rounded-3xl border shadow-2xl" /></Reveal>
          <div>
            <Title k="2. Teorias">Lamarck <span className="text-muted-foreground">×</span> <span className="text-primary">Darwin</span></Title>
            <div className="mt-8 grid gap-5">
              <Reveal>
                <div className="rounded-2xl border bg-card p-6">
                  <h3 className="text-xl font-bold">Lamarck (1809)</h3>
                  <p className="mt-2 text-muted-foreground"><b className="text-foreground">Lei do uso e desuso:</b> órgãos usados se desenvolvem e as características adquiridas passariam aos filhos. Ex.: a girafa esticaria o pescoço e os filhos nasceriam com pescoço longo. <i>Hoje sabemos que isso não acontece.</i></p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-2xl border border-primary bg-card p-6 glow">
                  <h3 className="text-xl font-bold text-primary">Darwin (1859)</h3>
                  <p className="mt-2 text-muted-foreground"><b className="text-foreground">Seleção natural:</b> girafas já nasciam com pescoços de tamanhos diferentes. As de pescoço longo alcançavam mais folhas, sobreviviam mais e passavam essa característica adiante. Publicado no livro <i>A Origem das Espécies</i>, após a viagem no navio Beagle e os estudos nas Ilhas Galápagos.</p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="text-sm text-muted-foreground"><b className="text-foreground">Neodarwinismo:</b> a teoria atual une a seleção natural de Darwin com a genética (mutações e recombinação gênica), que explica de onde vem a variação.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="evidencias" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <Title k="3. Evidências" sub="Como os cientistas sabem que a evolução aconteceu?">As provas da <span className="text-primary">evolução</span></Title>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {evidences.map((e, i) => (
            <Reveal key={e.n} delay={i * 80}>
              <div className="group h-full rounded-3xl border bg-card p-7 transition duration-300 hover:-translate-y-2 hover:border-primary hover:glow">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition group-hover:rotate-6 group-hover:scale-110"><e.I className="h-7 w-7" strokeWidth={1.6} /></span>
                <h3 className="mt-5 text-xl font-bold">{e.n}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="linha" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-24">
        <div className="text-center"><Title k="4. Linha do tempo">A história da vida</Title></div>
        <div className="relative mt-16 border-l-2 border-primary/40 pl-10">
          {timeline.map((s, i) => (
            <Reveal key={s.n} delay={i * 60} className="relative mb-10">
              <span className="absolute -left-[3.6rem] flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background text-primary"><s.I className="h-5 w-5" /></span>
              <p className="text-sm font-bold text-accent">{s.t}</p>
              <h3 className="text-2xl font-bold">{s.n}</h3>
              <p className="text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <HumanEvolution />

      <section id="diversidade" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <Title k="6. Diversidade biológica" sub="Biodiversidade é a variedade de seres vivos de um lugar. Estima-se que existam cerca de 8,7 milhões de espécies na Terra, e a maioria ainda nem foi descoberta.">A diversidade <span className="text-primary">animal</span></Title>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.n} delay={i * 80}>
              <div className="group h-full rounded-3xl border bg-card p-7 transition duration-300 hover:-translate-y-2 hover:border-primary hover:glow">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition group-hover:rotate-6 group-hover:scale-110"><g.I className="h-7 w-7" strokeWidth={1.6} /></span>
                <h3 className="mt-5 text-2xl font-bold">{g.n}</h3>
                <p className="text-sm font-bold text-primary">{g.c}</p>
                <p className="mt-2 text-muted-foreground">{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="brasil" className="relative scroll-mt-24 overflow-hidden py-28">
        <img src={bio} alt="Animais da fauna brasileira: onça-pintada, tucano, arara, sapo e borboleta" width={1600} height={912} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Title k="7. Brasil" sub="O Brasil é o país com a maior biodiversidade do mundo: abriga cerca de 20% de todas as espécies conhecidas, em seis biomas: Amazônia, Cerrado, Mata Atlântica, Caatinga, Pantanal e Pampa.">O país mais <span className="text-primary">biodiverso</span></Title>
          <Reveal><h3 className="mt-12 text-2xl font-bold">O que ameaça essa diversidade</h3></Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {threats.map((t, i) => (
              <Reveal key={t.n} delay={i * 80}>
                <div className="h-full rounded-2xl border bg-card/80 p-6 backdrop-blur">
                  <t.I className="h-7 w-7 text-accent" strokeWidth={1.6} />
                  <h4 className="mt-3 font-bold">{t.n}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="conclusao" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-24 text-center">
        <Reveal>
          <Leaf className="mx-auto h-10 w-10 text-primary" />
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">8. Conclusão</p>
          <blockquote className="mt-4 font-display text-3xl font-semibold leading-snug sm:text-4xl">
            “Toda a diversidade da vida é resultado de bilhões de anos de evolução. Proteger as espécies é proteger essa história.”
          </blockquote>
          <p className="mt-6 flex items-center justify-center gap-2 text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> Cada espécie extinta é um capítulo perdido para sempre.</p>
        </Reveal>
      </section>

      <ScienceQuiz />

      <section className="mx-auto max-w-4xl px-5 pb-24">
        <Reveal>
          <div className="rounded-3xl border bg-card p-8">
            <h2 className="flex items-center gap-3 text-2xl font-bold"><BookOpen className="h-6 w-6 text-primary" /> Referências</h2>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>DARWIN, Charles. <i>A Origem das Espécies</i>. 1859.</li>
              <li>AMABIS, J. M.; MARTHO, G. R. <i>Biologia Moderna</i>. São Paulo: Moderna.</li>
              <li>MINISTÉRIO DO MEIO AMBIENTE. Biodiversidade brasileira. gov.br/mma</li>
              <li>MORA, C. et al. How many species are there on Earth and in the ocean? <i>PLoS Biology</i>, 2011.</li>
              <li>UNIVERSITY OF CALIFORNIA MUSEUM OF PALEONTOLOGY. Understanding Evolution. evolution.berkeley.edu</li>
              <li>SMITHSONIAN NATIONAL MUSEUM OF NATURAL HISTORY. Human Origins. humanorigins.si.edu</li>
            </ul>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

