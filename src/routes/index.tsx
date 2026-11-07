import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Microscope, Fish, Footprints, Bone, Bird, PawPrint, User, Dna, Globe2, Trophy,
  Feather, Turtle, Bug, Layers, GitCompare, Leaf, TreePine, Flame, Factory,
  Droplets, ShieldCheck, BookOpen, Play, ArrowDown,
} from "lucide-react";
import forest from '@/assets/photos/floresta.asset.json';
import darwinPhoto from '@/assets/photos/darwin.asset.json';
import toucan from '@/assets/photos/tucano.asset.json';
import jaguar from '@/assets/photos/onca.asset.json';
import { Button } from '@/components/ui/button';
import { EvolutionMechanisms, BiodiversityLevels } from '@/components/science-lab';
import { Reveal } from "@/components/site";
import { HumanEvolution } from "@/components/human-evolution";
import { ScienceQuiz } from "@/components/science-quiz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolução e Diversidade Biológica" },
      { name: "description", content: "A história ramificada da vida: mecanismos evolutivos, hominínios, biodiversidade e atividades educativas com fontes científicas." },
      { property: "og:title", content: "Evolução e Diversidade Biológica" },
      { property: "og:description", content: "Explore evolução, ancestralidade comum e biodiversidade com fontes e atividades educativas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const timeline = [
  { I: Microscope, t: 'Cerca de 3,5 bilhões de anos', n: 'Evidências antigas de vida', d: 'Evidências amplamente aceitas registram vida microbiana. A origem da vida é anterior, mas sua data exata permanece incerta.' },
  { I: Fish, t: 'Mais de 500 milhões de anos', n: 'Primeiros vertebrados conhecidos', d: 'Fósseis cambrianos registram pequenos vertebrados aquáticos sem mandíbulas, diferentes dos peixes atuais.' },
  { I: Footprints, t: 'Cerca de 375–360 milhões de anos', n: 'Primeiros tetrápodes', d: 'Linhagens de peixes de nadadeiras lobadas deram origem aos tetrápodes. Muitos eram aquáticos; a ocupação terrestre foi gradual.' },
  { I: Bone, t: 'Cerca de 230 milhões de anos', n: 'Dinossauros antigos', d: 'O grupo se diversificou; a extinção de cerca de 66 milhões de anos eliminou os dinossauros não avianos, mas não as aves.' },
  { I: Bird, t: 'Cerca de 150 milhões de anos', n: 'Aves antigas', d: 'Fósseis como Archaeopteryx documentam esse ramo de dinossauros terópodes. As aves atuais continuam pertencendo aos dinossauros.' },
  { I: PawPrint, t: 'Cerca de 56 milhões de anos', n: 'Primatas de aspecto moderno', d: 'Aparecem no registro no início do Eoceno; parentes mais basais são anteriores. Mãos, pés e visão variam entre as linhagens.' },
  { I: User, t: 'Cerca de 300 mil anos', n: 'Homo sapiens', d: 'Nossa espécie surgiu na África. Sua história inclui tecnologias e manifestações culturais diversas, sem constituir a meta da evolução.' },
];

const evidences = [
  { I: Layers, n: "Fósseis", d: "Restos preservados em rochas mostram seres que já viveram e como mudaram com o tempo." },
  { I: GitCompare, n: "Anatomia comparada", d: "O braço humano, a asa do morcego e a nadadeira da baleia compartilham um plano ósseo herdado de ancestrais comuns: estruturas homólogas, mesmo com funções diferentes." },
  { I: Dna, n: "DNA", d: "Humanos e chimpanzés compartilham grande parte das sequências de DNA, evidência de um ancestral comum (não descendemos dos chimpanzés)." },
  { I: Microscope, n: "Embriologia", d: "Embriões de vertebrados compartilham estruturas em fases iniciais, como arcos faríngeos e cauda, indicando origem comum." },
];

const groups = [
  { I: PawPrint, n: 'Mamíferos', d: 'Possuem pelos em alguma fase da vida e glândulas mamárias. São endotérmicos, mas sua temperatura corporal pode variar.' },
  { I: Feather, n: 'Aves', d: 'Possuem penas e bico sem dentes nas espécies atuais. Todas põem ovos; nem todas voam, e a estrutura dos ossos varia.' },
  { I: Turtle, n: 'Répteis não avianos', d: 'Tartarugas, crocodilianos, lagartos e serpentes. Muitos põem ovos, mas há espécies vivíparas. Filogeneticamente, as aves também são répteis.' },
  { I: Droplets, n: 'Anfíbios', d: 'Anuros, salamandras e cecílias. A pele participa das trocas gasosas em muitas espécies; nem todos alternam entre água e terra.' },
  { I: Fish, n: 'Peixes', d: 'Vertebrados aquáticos com brânquias, alguns também respiram ar. O agrupamento tradicional exclui descendentes terrestres de seus ancestrais.' },
  { I: Bug, n: 'Insetos', d: 'Artrópodes com três pares de pernas na fase adulta. São o grupo animal com maior número de espécies descritas.' },
];

const threats = [
  { I: TreePine, n: "Desmatamento", d: "Destrói o habitat de milhares de espécies." },
  { I: Flame, n: "Queimadas", d: "Atingem Amazônia, Cerrado e Pantanal todos os anos." },
  { I: Factory, n: "Poluição", d: "Contamina rios, solos e o ar." },
  { I: Droplets, n: "Mudanças climáticas", d: "Alteram temperaturas e chuvas; podem superar a capacidade de resposta de muitas populações." },
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
      <section className="relative flex min-h-[min(780px,90svh)] items-end overflow-hidden">
        <img src={forest.url} alt="Fotografia de floresta tropical com árvores e vegetação densa" width={1600} height={912} className="absolute inset-0 h-full w-full scale-105 object-cover" />
        <div className="hero-fade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32">
          <p className="animate-rise font-semibold uppercase tracking-[0.3em] text-primary">Trabalho de Ciências · Grupo 6</p>
          <h1 className="animate-rise mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-6xl lg:text-7xl" style={{ animationDelay: "150ms" }}>
            Evolução e <span className="text-gradient">Diversidade</span> Biológica
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "300ms" }}>
            A história ramificada da vida: como populações mudam, espécies compartilham ancestrais e a biodiversidade sustenta o planeta.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "450ms" }}>
            <Button asChild size="lg"><Link to="/videos"><Play className="h-4 w-4" /> Stop Motion</Link></Button>
            <Button asChild variant="outline" size="lg"><a href="#conceito">Explorar o tema <ArrowDown className="h-4 w-4" /></a></Button>
          </div>
        </div>
      </section>

      {/* Sumário */}
      <nav className="mx-auto max-w-6xl px-5">
        <div className="relative flex flex-wrap justify-center gap-2 border-b py-5">
          {[["conceito", "1. Conceito"], ["teorias", "2. Teorias"], ["mecanismos", "Mecanismos e laboratório"], ["evidencias", "3. Evidências"], ["linha", "4. Linha do tempo"], ["humana", "5. Evolução humana"], ["diversidade", "6. Diversidade"], ["brasil", "7. Brasil"], ["conclusao", "8. Conclusão"], ["quiz", "Quiz"], ["fontes", "Fontes"]].map(([id, l]) => (
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
                populações ao longo das gerações, incluindo mudanças nas frequências de variantes genéticas. Pode ocorrer em poucas gerações. Indivíduos se desenvolvem e podem se aclimatar; populações evoluem. A evolução não tem uma meta.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4 text-center sm:grid-cols-3">
            {[[Dna, "Variação", "Parte das diferenças é hereditária"], [Globe2, "Ambiente", "Influencia o sucesso reprodutivo"], [Trophy, "Seleção", "Variantes podem favorecer mais descendentes"]].map(([I, l, d], i) => {
              const Icon = I as typeof Dna;
              return (
                <Reveal key={l as string} delay={i * 120}>
                  <div className="h-full rounded-lg border bg-card p-5 transition hover:-translate-y-1 hover:border-primary">
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
          <Reveal><figure><img src={darwinPhoto.url} alt="Retrato fotográfico histórico de Charles Darwin, com barba longa" width={912} height={1104} loading="lazy" className="w-full rounded-lg object-contain" /><figcaption className="mt-3 text-sm text-muted-foreground">Charles Darwin, 1880 · Elliott &amp; Fry · domínio público.</figcaption></figure></Reveal>
          <div>
            <Title k="2. Teorias">Como a explicação <span className="text-primary">mudou</span></Title>
            <div className="mt-8 grid gap-5">
              <Reveal>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-bold">Lamarck (1809)</h3>
                  <p className="mt-2 text-muted-foreground">Lamarck propôs uso e desuso e herança de características adquiridas. Usar um músculo pode desenvolvê-lo, mas isso não significa que os descendentes herdarão músculos maiores. Alterações adquiridas não são transmitidas automaticamente; essa proposta não explica, de forma geral, as adaptações evolutivas.</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-lg border border-primary bg-card p-6 glow">
                  <h3 className="text-xl font-bold text-primary">Darwin e Wallace (1858)</h3>
                  <p className="mt-2 text-muted-foreground">Darwin e Alfred Russel Wallace formularam independentemente a seleção natural; seus trabalhos foram apresentados conjuntamente em 1858. Darwin publicou <i>A Origem das Espécies</i> em 1859. Diferenças hereditárias que afetam o sucesso reprodutivo podem mudar de frequência. Aptidão significa contribuição reprodutiva relativa em um ambiente, não necessariamente força.</p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="text-sm text-muted-foreground"><b className="text-foreground">Síntese moderna:</b> integrou seleção natural e genética de populações. A teoria continua sendo aprofundada por novas evidências. Seleção natural, deriva genética e fluxo gênico modificam populações; mutação e recombinação participam da variabilidade.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <EvolutionMechanisms />

      <section id="evidencias" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <Title k="3. Evidências" sub="Como os cientistas sabem que a evolução aconteceu?">As evidências da <span className="text-primary">evolução</span></Title>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {evidences.map((e, i) => (
            <Reveal key={e.n} delay={i * 80}>
              <div className="group h-full rounded-lg border bg-card p-7 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-none">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/15 text-primary transition group-hover:rotate-6 group-hover:scale-110"><e.I className="h-7 w-7" strokeWidth={1.6} /></span>
                <h3 className="mt-5 text-xl font-bold">{e.n}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="linha" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-24">
        <div className="text-center"><Title k="4. Linha do tempo">A história da vida</Title></div>
        <p className="mt-6 leading-relaxed text-muted-foreground">Alguns acontecimentos, não uma sequência de transformação entre todos os grupos. A evolução é ramificada; muitas linhagens coexistem. As datas são aproximadas e refletem o registro conhecido.</p>
        <div className="relative mt-10 border-l-2 border-primary/40 pl-10">
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
        <Title k="6. Diversidade biológica" sub="Biodiversidade é a variedade da vida em três níveis: genes, espécies e ecossistemas. Inclui animais, plantas, fungos e microrganismos.">A diversidade <span className="text-primary">da vida</span></Title>
        <BiodiversityLevels />
        <h3 className="mt-10 text-2xl font-bold">Alguns grupos de animais</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.n} delay={i * 80}>
              <div className="group h-full rounded-lg border bg-card p-7 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-none">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/15 text-primary transition group-hover:rotate-6 group-hover:scale-110"><g.I className="h-7 w-7" strokeWidth={1.6} /></span>
                <h3 className="mt-5 text-2xl font-bold">{g.n}</h3>
                <p className="mt-2 text-muted-foreground">{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="brasil" className="relative scroll-mt-24 overflow-hidden py-28">

        <div className="relative mx-auto max-w-6xl px-5">
          <Title k="7. Brasil" sub="O Brasil é reconhecido como um dos países mais biodiversos do mundo. Possui seis biomas terrestres — Amazônia, Cerrado, Mata Atlântica, Caatinga, Pantanal e Pampa —, além de ambientes costeiros, marinhos e de águas continentais.">Brasil: um país <span className="text-primary">megadiverso</span></Title>
          <div className="mt-8 grid gap-6 md:grid-cols-2">{[{ image: toucan.url, name: 'Tucano-toco', scientific: 'Ramphastos toco', alt: 'Fotografia de tucano-toco com bico grande alaranjado e plumagem preta e branca', text: 'Ave encontrada em diferentes paisagens sul-americanas; pode participar da dispersão de sementes ao consumir frutos.' }, { image: jaguar.url, name: 'Onça-pintada', scientific: 'Panthera onca', alt: 'Fotografia de onça-pintada com pelagem marcada por rosetas', text: 'Grande felino das Américas. A conservação de suas populações exige habitats e disponibilidade de presas.' }].map(photo => <figure key={photo.name}><img src={photo.image} alt={photo.alt} width={900} height={600} loading="lazy" className="aspect-[3/2] w-full rounded-lg object-cover" /><figcaption className="mt-4"><h3 className="text-xl font-bold">{photo.name} <i className="text-base font-normal text-muted-foreground">{photo.scientific}</i></h3><p className="mt-2 text-muted-foreground">{photo.text}</p></figcaption></figure>)}</div>
          <Reveal><h3 className="mt-12 text-2xl font-bold">O que ameaça essa diversidade</h3></Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {threats.map((t, i) => (
              <Reveal key={t.n} delay={i * 80}>
                <div className="h-full rounded-lg border bg-card/80 p-6 backdrop-blur">
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

      <section id="fontes" className="mx-auto max-w-4xl scroll-mt-28 px-5 pb-24">
        <Reveal>
          <div className="rounded-lg border bg-card p-8">
            <h2 className="flex items-center gap-3 text-2xl font-bold"><BookOpen className="h-6 w-6 text-primary" /> Referências</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Referências consultadas na revisão de 7 de novembro de 2026. As fontes originais podem estar em inglês; as explicações deste site estão em português.</p>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              {[
                ['UC Berkeley · Understanding Evolution: mecanismos, seleção, especiação e evidências', 'https://evolution.berkeley.edu/evolution-101/'],
                ['Smithsonian · Human Origins: datas e características dos hominínios', 'https://humanorigins.si.edu/evidence/human-fossils/species'],
                ['Convenção sobre Diversidade Biológica · Artigo 2: definição de biodiversidade', 'https://www.cbd.int/convention/articles?a=cbd-02'],
                ['MMA · Biodiversidade e biomas brasileiros', 'https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas/biodiversidade'],
                ['Mora et al. (2011) · How Many Species Are There on Earth and in the Ocean? PLoS Biology, DOI: 10.1371/journal.pbio.1001127', 'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1001127'],
                ['Natural History Museum · Origem da vida e evidências antigas', 'https://www.nhm.ac.uk/discover/origin-of-life-on-earth.html'],
                ['UC Berkeley · História evolutiva em escala temporal', 'https://evolution.berkeley.edu/evolution-101/the-history-of-life-looking-at-the-patterns/'],
                ['Smithsonian · Aves são dinossauros', 'https://www.si.edu/stories/birds-are-dinosaurs'],
              ].map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noreferrer" className="underline underline-offset-4 transition hover:text-primary">{label}</a></li>)}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">A estimativa de Mora et al. é de cerca de 8,7 milhões de espécies eucarióticas (erro-padrão de 1,3 milhão), publicada em 2011. Não é uma contagem definitiva e não abrange completamente bactérias e arqueias. Datas fósseis indicam evidências conhecidas, não necessariamente o momento exato da origem.</p>
            <h3 className="mt-8 text-xl font-bold">Créditos das imagens</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Floresta tropical: Rully Aan Firmansyah · <a className="underline" href="https://commons.wikimedia.org/wiki/File:Tropical_rain_forest.jpg" target="_blank" rel="noreferrer">Wikimedia Commons</a> · <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>.</li>
              <li>Tucano-toco: benjli · <a className="underline" href="https://commons.wikimedia.org/wiki/File:Toco_toucan_(Ramphastos_toco).jpg" target="_blank" rel="noreferrer">Wikimedia Commons</a> · <a className="underline" href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noreferrer">CC BY-SA 2.0</a>.</li>
              <li>Onça-pintada: Eric Kilby · <a className="underline" href="https://commons.wikimedia.org/wiki/File:Jaguar_-_Paws_Crossed_(6251640999).jpg" target="_blank" rel="noreferrer">Wikimedia Commons</a> · <a className="underline" href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noreferrer">CC BY-SA 2.0</a>.</li>
              <li>Charles Darwin (1880): Elliott &amp; Fry · <a className="underline" href="https://commons.wikimedia.org/wiki/File:Charles_Darwin_1880.jpg" target="_blank" rel="noreferrer">Wikimedia Commons</a> · domínio público.</li>
              <li>Fotografias redimensionadas e comprimidas para a web, com enquadramento adaptado à tela. Reconstruções de hominínios geradas por IA: ilustrações hipotéticas, não registros fotográficos. As figuras não estão em escala anatômica rigorosa.</li>
            </ul>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

