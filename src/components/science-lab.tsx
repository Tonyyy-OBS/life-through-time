import { useState } from 'react';
import { Bug, ArrowRight, RotateCcw, Leaf, Mountain, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { nextGeneration } from '@/lib/selection';
import { ChapterBridge } from '@/components/study-navigation';

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
    <details className="mt-4 text-sm leading-relaxed text-muted-foreground"><summary className="cursor-pointer font-semibold text-foreground">Hipóteses e limites deste modelo</summary><p className="mt-3">Modelo didático determinístico: variantes camufladas recebem peso reprodutivo 0,8 e as mais visíveis, 0,4. A população é normalizada para 100%; os ícones representam proporções arredondadas. Na natureza, acaso, migração, mutação e outros fatores também interferem. Castanho aparece em tom dourado para facilitar a distinção.</p></details>
  </div>;
}

const mechanisms = [
  ['1. Existem diferenças que podem ser herdadas', 'DNA é o material que guarda informações hereditárias. Genes são trechos desse material; diferentes versões de um gene são chamadas alelos. Uma população pode ter vários alelos. O ambiente também influencia o corpo, por isso nem toda diferença é herdada.'],
  ['2. Novas variações podem surgir', 'Uma mutação é uma alteração no DNA. Ela não surge porque o organismo precisa mudar. Pode ter efeito neutro, prejudicial ou benéfico. Na reprodução sexuada, a recombinação mistura variantes já existentes. Para passar às próximas gerações, uma alteração precisa ser herdada.'],
  ['3. Algumas variantes favorecem mais descendentes', 'Em certo ambiente, uma característica herdada pode ajudar seus portadores a deixar mais filhos. Ao longo das gerações, ela pode ficar mais comum: isso é seleção natural. Uma característica favorecida dessa forma pode ser uma adaptação. Não significa ser o mais forte nem ser perfeito.'],
  ['4. O acaso e a migração também contam', 'Imagine que uma tempestade elimine, por acaso, parte de uma pequena população. Algumas variantes podem se tornar raras ou desaparecer: é deriva genética. Quando indivíduos de populações diferentes se reproduzem, levam variantes de uma para outra: é fluxo gênico.'],
  ['5. Linhagens compartilham uma história', 'Um ancestral comum é uma população antiga da qual descendem duas ou mais linhagens. É uma ideia de parentesco, não uma fila. Humanos e chimpanzés atuais são ramos diferentes com ancestrais compartilhados; um não se transformou no outro.'],
  ['6. Populações podem formar espécies diferentes', 'Se duas populações trocam menos genes, podem acumular diferenças. Com o tempo, podem surgir barreiras que dificultam a reprodução entre elas, formando espécies distintas: é especiação. Um rio separando populações pode favorecer esse processo, mas não cria uma espécie automaticamente.'],
];

export function EvolutionMechanisms() {
  return <section id="mecanismos" className="scroll-mt-28 border-y py-20"><div className="mx-auto max-w-6xl px-5">
    <p className="text-sm font-bold text-primary">02 · Como acontece</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">Como as populações mudam?</h2>
    <p className="mt-4 max-w-3xl text-lg text-muted-foreground">Já sabemos que evolução é uma mudança entre gerações. Agora, vamos ligar as peças: diferenças herdadas, reprodução e formação de novas linhagens.</p>
    <div className="mt-8 max-w-3xl">{mechanisms.map(([title, text]) => <article key={title} className="border-t py-6"><h3 className="text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
    <SelectionLab />
    <div className="mt-10 border-t pt-6"><h3 className="text-2xl font-bold">Um exemplo observado: resistência a antibióticos</h3><p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">Em uma população bacteriana, variantes resistentes podem estar presentes antes do tratamento ou surgir por mutação; genes também podem ser transferidos entre bactérias. O antibiótico elimina ou inibe as suscetíveis, enquanto resistentes podem se multiplicar. Não é o corpo da pessoa que “fica resistente”: são os microrganismos. Usar antibióticos exige orientação profissional.</p></div>
    <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4" href="https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/" target="_blank" rel="noreferrer"><BookOpen className="size-4" /> Fonte: Understanding Evolution — UC Berkeley</a>
    <ChapterBridge summary="Diferenças herdadas, reprodução, acaso e migração ajudam a explicar a mudança das populações. Não há uma intenção de evoluir." next="Como essa explicação foi construída?" href="teorias" />
  </div></section>;
}

export function BiodiversityLevels() {
  return <div className="mt-8">
    <div className="grid gap-6 md:grid-cols-3">{[
      ['Diversidade genética', 'Diferenças herdadas dentro de uma espécie. Exemplo: plantas da mesma espécie com diferentes tolerâncias à seca.'],
      ['Diversidade de espécies', 'Diferentes espécies em um lugar: árvores, aves, fungos e bactérias, por exemplo. Não é apenas contar animais grandes.'],
      ['Diversidade de ecossistemas', 'Diferentes ambientes e as relações entre seus seres vivos e o meio físico. Uma floresta, um rio e um manguezal são exemplos.'],
    ].map(([title, text]) => <article key={title} className="border-t py-5"><h3 className="text-xl font-bold text-accent">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
    <div className="mt-5 border-l-2 border-primary pl-5"><h3 className="text-xl font-bold">Classificação também revela parentesco</h3><p className="mt-2 leading-relaxed text-muted-foreground">Um clado reúne um ancestral comum e todos os seus descendentes. Aves pertencem aos dinossauros; humanos pertencem aos primatas e aos mamíferos. Os grupos abaixo são úteis para estudo, mas não formam uma lista de ramos equivalentes: “peixes”, por exemplo, é um agrupamento tradicional que exclui descendentes terrestres.</p></div>
    <p className="mt-6 leading-relaxed text-muted-foreground">A biodiversidade sustenta polinização, fertilidade do solo, ciclos da água e alimentos. Conservação envolve proteger habitats, restaurar áreas degradadas, reduzir poluição e uso insustentável e respeitar comunidades locais. Extinções fazem parte da história da vida; a perda atual de biodiversidade é acelerada por atividades humanas.</p>
    <a className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4" href="https://www.cbd.int/convention/articles?a=cbd-02" target="_blank" rel="noreferrer">Fonte: Convenção sobre Diversidade Biológica, artigo 2</a>
  </div>;
}