import { useState } from 'react';
import { Bug, ArrowRight, RotateCcw, Leaf, Mountain, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { nextGeneration } from '@/lib/selection';

export function SelectionLab() {
  const [green, setGreen] = useState(50);
  const [generation, setGeneration] = useState(0);
  const [environment, setEnvironment] = useState<'folhas' | 'solo'>('folhas');
  return <div className="mt-10 rounded-lg border bg-card p-5 sm:p-8">
    <h3 className="text-2xl font-bold">Uma população, dois ambientes</h3>
    <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">Neste modelo simplificado, a cor dos besouros é hereditária. Os menos visíveis para predadores deixam, em média, mais descendentes. A cor de um indivíduo não muda: o que muda é a proporção de cores na população.</p>
    <div className="mt-5 flex flex-wrap gap-2" aria-label="Ambiente"><Button variant={environment === 'folhas' ? 'default' : 'outline'} aria-pressed={environment === 'folhas'} onClick={() => setEnvironment('folhas')}><Leaf /> Folhas verdes</Button><Button variant={environment === 'solo' ? 'default' : 'outline'} aria-pressed={environment === 'solo'} onClick={() => setEnvironment('solo')}><Mountain /> Solo exposto</Button></div>
    <div className="mt-6 grid grid-cols-10 gap-2" aria-hidden="true">{Array.from({ length: 40 }, (_, i) => <Bug key={i} className={`mx-auto size-5 sm:size-7 ${i < Math.round(green * 0.4) ? 'text-primary' : 'text-accent'}`} />)}</div>
    <p className="mt-5 font-semibold" role="status">Geração {generation} · {green}% verdes · {100 - green}% castanhos</p>
    <div className="mt-4 flex flex-wrap gap-2"><Button onClick={() => { setGreen(nextGeneration(green, environment)); setGeneration(generation + 1); }}>Próxima geração <ArrowRight /></Button><Button variant="outline" onClick={() => { setGreen(50); setGeneration(0); setEnvironment('folhas'); }}><RotateCcw /> Reiniciar</Button></div>
    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Modelo didático determinístico: variantes camufladas recebem peso reprodutivo 0,8 e as mais visíveis, 0,4. A população é normalizada para 100%; os ícones representam proporções arredondadas. Na natureza, acaso, migração, mutação e outros fatores também interferem. Castanho aparece em tom dourado para facilitar a distinção.</p>
  </div>;
}

const mechanisms = [
  ['Variabilidade genética', 'Indivíduos possuem variantes de genes, chamadas alelos. Mutações criam novas variantes; recombinação na reprodução sexuada reorganiza as existentes. Nem toda diferença visível é genética: o ambiente também influencia características.'],
  ['Mutação', 'É uma alteração no material genético. Não aparece porque o organismo “precisa” dela. Seus efeitos podem ser neutros, prejudiciais ou benéficos, dependendo do contexto. Em animais, só mutações transmitidas aos descendentes contribuem diretamente para a evolução da linhagem.'],
  ['Seleção natural e adaptação', 'Quando uma característica hereditária afeta o sucesso reprodutivo em determinado ambiente, suas variantes podem mudar de frequência. Adaptação é uma característica favorecida por esse processo, não uma decisão individual nem sinônimo de perfeição.'],
  ['Deriva genética e fluxo gênico', 'Deriva é a mudança aleatória de frequências de alelos, especialmente importante em populações pequenas. Fluxo gênico é a transferência de variantes entre populações por reprodução após migração. Evolução não se resume à seleção natural.'],
  ['Ancestralidade comum', 'Espécies compartilham ancestrais em diferentes momentos do passado. Semelhanças no DNA, fósseis e estruturas homólogas ajudam a reconstruir esse parentesco. Um ancestral não é necessariamente idêntico a nenhuma espécie atual.'],
  ['Especiação', 'Populações podem acumular diferenças quando o fluxo gênico diminui, por exemplo após uma barreira geográfica. Se surgem barreiras reprodutivas, podem formar espécies distintas. O processo varia; uma separação geográfica não cria automaticamente uma nova espécie.'],
];

export function EvolutionMechanisms() {
  return <section id="mecanismos" className="scroll-mt-28 border-y py-20"><div className="mx-auto max-w-6xl px-5">
    <p className="text-sm font-bold text-primary">Do conceito ao processo</p><h2 className="mt-2 text-4xl font-bold">Como as populações mudam?</h2>
    <p className="mt-4 max-w-3xl text-lg text-muted-foreground">Indivíduos se desenvolvem durante a vida; populações evoluem ao longo das gerações. Mudanças hereditárias não seguem um plano nem têm como objetivo produzir humanos.</p>
    <div className="mt-8 grid gap-x-10 md:grid-cols-2">{mechanisms.map(([title, text]) => <article key={title} className="border-t py-6"><h3 className="text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
    <SelectionLab />
    <div className="mt-10 border-t pt-6"><h3 className="text-2xl font-bold">Um exemplo observado: resistência a antibióticos</h3><p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">Em uma população bacteriana, variantes resistentes podem estar presentes antes do tratamento ou surgir por mutação; genes também podem ser transferidos entre bactérias. O antibiótico elimina ou inibe as suscetíveis, enquanto resistentes podem se multiplicar. Não é o corpo da pessoa que “fica resistente”: são os microrganismos. Usar antibióticos exige orientação profissional.</p></div>
    <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4" href="https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/" target="_blank" rel="noreferrer"><BookOpen className="size-4" /> Fonte: Understanding Evolution — UC Berkeley</a>
  </div></section>;
}

export function BiodiversityLevels() {
  return <div className="mt-8">
    <div className="grid gap-6 md:grid-cols-3">{[
      ['Genética', 'Variantes dentro de uma espécie: por exemplo, populações de uma planta com diferentes tolerâncias à seca. Essa diversidade pode favorecer respostas a mudanças ambientais.'],
      ['Espécies', 'A variedade de animais, plantas, fungos e microrganismos. Cada grupo participa de relações como predação, polinização e decomposição.'],
      ['Ecossistemas', 'Diferentes ambientes e suas interações: florestas, campos, rios, manguezais e recifes. Conservá-los protege organismos e processos ecológicos.'],
    ].map(([title, text]) => <article key={title} className="border-t py-5"><h3 className="text-xl font-bold text-accent">Diversidade {title?.toLowerCase()}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
    <div className="mt-5 border-l-2 border-primary pl-5"><h3 className="text-xl font-bold">Classificação também revela parentesco</h3><p className="mt-2 leading-relaxed text-muted-foreground">Um clado reúne um ancestral comum e todos os seus descendentes. Aves pertencem aos dinossauros; humanos pertencem aos primatas e aos mamíferos. Os grupos abaixo são úteis para estudo, mas não formam uma lista de ramos equivalentes: “peixes”, por exemplo, é um agrupamento tradicional que exclui descendentes terrestres.</p></div>
    <p className="mt-6 leading-relaxed text-muted-foreground">A biodiversidade sustenta polinização, fertilidade do solo, ciclos da água e alimentos. Conservação envolve proteger habitats, restaurar áreas degradadas, reduzir poluição e uso insustentável e respeitar comunidades locais. Extinções fazem parte da história da vida; a perda atual de biodiversidade é acelerada por atividades humanas.</p>
    <a className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4" href="https://www.cbd.int/convention/articles?a=cbd-02" target="_blank" rel="noreferrer">Fonte: Convenção sobre Diversidade Biológica, artigo 2</a>
  </div>;
}