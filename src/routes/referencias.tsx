import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, BookOpen, Camera, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/referencias')({
  head: () => ({ meta: [
    { title: 'Referências — Evolução e Diversidade Biológica' },
    { name: 'description', content: 'Fontes científicas por assunto e créditos das imagens utilizadas pelo Grupo 6.' },
    { property: 'og:title', content: 'Referências — Evolução e Diversidade Biológica' },
    { property: 'og:description', content: 'A origem das informações sobre evolução, biodiversidade e história humana.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: References,
});
const sources = [
  ['Conceito, mecanismos e especiação', 'Universidade da Califórnia, Berkeley', 'Understanding Evolution — Evolution 101', 'Material educativo universitário. Sustenta as explicações de seleção natural, mutação, deriva genética, fluxo gênico, evidências e ancestralidade comum.', 'https://evolution.berkeley.edu/evolution-101/'],
  ['Evolução humana', 'Smithsonian · Museu Nacional de História Natural', 'Human Origins — Human Fossil Species', 'Museu científico. Fonte dos intervalos aproximados do registro fóssil e características dos cinco hominínios apresentados. Cada ficha no Início liga também à página da respectiva espécie.', 'https://humanorigins.si.edu/evidence/human-fossils/species'],
  ['Biodiversidade em três níveis', 'Convenção sobre Diversidade Biológica', 'Artigo 2 — Uso de termos', 'Convenção internacional. Define diversidade genética, de espécies e de ecossistemas, incluindo animais, plantas e microrganismos.', 'https://www.cbd.int/convention/articles?a=cbd-02'],
  ['Brasil, biomas e conservação', 'Ministério do Meio Ambiente e Mudança do Clima', 'Biodiversidade', 'Órgão público brasileiro. Contextualiza a diversidade biológica do Brasil e sua conservação. Os seis biomas citados no site são terrestres.', 'https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas/biodiversidade'],
  ['Estimativas de espécies', 'Mora, C.; Tittensor, D. P.; Adl, S.; Simpson, A. G. B.; Worm, B.', 'How Many Species Are There on Earth and in the Ocean? (2011)', 'Artigo revisado por pares, PLoS Biology 9(8): e1001127. Estima 8,7 milhões de espécies eucarióticas (erro-padrão: 1,3 milhão), não uma contagem definitiva nem uma estimativa completa de bactérias e arqueias. DOI: 10.1371/journal.pbio.1001127.', 'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1001127'],
  ['Evidências antigas de vida', 'Natural History Museum, Londres', 'Origin of life on Earth', 'Museu científico. Distingue evidências preservadas da data incerta da origem da vida; não data exatamente a primeira célula.', 'https://www.nhm.ac.uk/discover/origin-of-life-on-earth.html'],
  ['Linha do tempo', 'Universidade da Califórnia, Berkeley', 'The history of life: looking at the patterns', 'Material educativo universitário. Apresenta história evolutiva e ramificações, sem uma sequência de progresso até o ser humano.', 'https://evolution.berkeley.edu/evolution-101/the-history-of-life-looking-at-the-patterns/'],
  ['Dinossauros e aves', 'Smithsonian', 'Birds are dinosaurs', 'Divulgação científica de museu. Explica que as aves pertencem ao ramo dos dinossauros terópodes.', 'https://www.si.edu/stories/birds-are-dinosaurs'],
];
const credits = [
  ['Floresta tropical', 'Rully Aan Firmansyah', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Tropical_rain_forest.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/', 'Imagem de abertura'],
  ['Tucano-toco', 'benjli', 'CC BY-SA 2.0', 'https://commons.wikimedia.org/wiki/File:Toco_toucan_(Ramphastos_toco).jpg', 'https://creativecommons.org/licenses/by-sa/2.0/', 'Brasil e biodiversidade'],
  ['Onça-pintada', 'Eric Kilby', 'CC BY-SA 2.0', 'https://commons.wikimedia.org/wiki/File:Jaguar_-_Paws_Crossed_(6251640999).jpg', 'https://creativecommons.org/licenses/by-sa/2.0/', 'Brasil e biodiversidade'],
  ['Charles Darwin, 1880', 'Elliott & Fry', 'Domínio público', 'https://commons.wikimedia.org/wiki/File:Charles_Darwin_1880.jpg', 'https://commons.wikimedia.org/wiki/File:Charles_Darwin_1880.jpg', 'História das ideias'],
];
function References() {
 return <main className="mx-auto max-w-5xl px-5 pb-20 pt-32">
  <p className="text-sm font-bold text-primary">Evolução e Diversidade Biológica · Grupo 6</p>
  <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Referências</h1>
  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">A origem das informações, organizada pelos assuntos do trabalho. Fontes científicas, documentos oficiais e pesquisas sustentam as explicações.</p>
  <nav aria-label="Seções de referências" className="mt-7 flex flex-wrap gap-5 border-b pb-5 text-sm font-semibold"><a href="#cientificas" className="text-primary underline underline-offset-4">Fontes científicas</a><a href="#imagens" className="text-primary underline underline-offset-4">Créditos das imagens</a><a href="#limites" className="text-primary underline underline-offset-4">Datas e limites</a></nav>
  <section id="cientificas" className="scroll-mt-28 pt-10"><h2 className="flex items-center gap-3 text-2xl font-bold"><BookOpen className="text-primary" /> Fontes científicas por assunto</h2>
  <div className="mt-6">{sources.map(([topic, institution, title, detail, url], i) => <article key={url} className="grid gap-3 border-t py-7 sm:grid-cols-[190px_1fr]">
   <p className="text-sm font-bold text-primary">{String(i+1).padStart(2,'0')} · {topic}</p>
   <div><p className="text-sm font-semibold text-accent">{institution}</p><h3 className="mt-2 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{detail}</p><Button asChild variant="link" className="mt-2 h-auto whitespace-normal px-0 text-left"><a href={url} target="_blank" rel="noreferrer">Consultar fonte original <ArrowUpRight className="shrink-0" /></a></Button></div>
  </article>)}</div></section>
  <section id="imagens" className="scroll-mt-28 border-t pt-10"><h2 className="flex items-center gap-3 text-2xl font-bold"><Camera className="text-primary" /> Créditos das imagens</h2><div className="mt-6 grid gap-x-8 sm:grid-cols-2">{credits.map(([name, author, license, url, licenseUrl, place]) => <article key={name} className="border-t py-6"><p className="text-sm font-semibold text-accent">{place}</p><h3 className="mt-2 text-xl font-bold">{name}</h3><p className="mt-2 text-muted-foreground">Fotografia: {author}</p><div className="mt-3 flex flex-wrap gap-4 text-sm text-primary"><a className="underline underline-offset-4" href={url} target="_blank" rel="noreferrer">Origem: Wikimedia Commons</a><a className="underline underline-offset-4" href={licenseUrl} target="_blank" rel="noreferrer">{license}</a></div></article>)}</div>
  <p className="mt-4 leading-relaxed text-muted-foreground">Fotos redimensionadas e comprimidas para a web; enquadramento adaptado à tela. Hominínios são ilustrações geradas por IA a partir de descrições de fósseis, não fotografias, evidências ou modelos anatômicos 3D completos. Pele, pelos e vestimentas são escolhas ilustrativas. As figuras não estão em escala anatômica rigorosa.</p></section>
  <section id="limites" className="mt-10 scroll-mt-28 border-t pt-8"><h2 className="text-2xl font-bold">Datas, aproximações e limites</h2><p className="mt-4 leading-relaxed text-muted-foreground">Fontes consultadas na revisão de 7 de novembro de 2026; organização revisada em 8 de novembro de 2026. Originais podem estar em inglês; explicações em português. Datas fósseis refletem o registro conhecido e podem mudar com novas descobertas. Modelos educativos simplificam a realidade e declaram suas hipóteses.</p></section>
  <Button asChild variant="outline" className="mt-8"><Link to="/"><ArrowLeft /> Voltar ao estudo</Link></Button>
 </main>;
}
