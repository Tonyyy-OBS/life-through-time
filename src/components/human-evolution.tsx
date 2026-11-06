import { useState } from 'react';
import { ArrowUpRight, GitBranch, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HomininStage } from '@/components/hominin-stage';
import { hominins } from '@/lib/evolution';

export function HumanEvolution() {
  const [selected, setSelected] = useState(0);
  const human = hominins[selected];
  if (!human) return null;
  return <section id="humana" className="scroll-mt-28 border-y bg-secondary/20 py-20">
    <div className="mx-auto max-w-6xl px-5">
      <p className="text-sm font-bold uppercase text-primary">5. Evolução humana</p>
      <h2 className="mt-2 text-4xl font-extrabold sm:text-5xl">Nossa história tem <span className="text-primary">muitos ramos</span></h2>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">Bipedalismo, mudanças no crânio e modos de vida distintos: a história humana não foi uma fila de espécies, nem uma marcha rumo à perfeição.</p>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Espécies de hominínios">{hominins.map((h,i) => <Button key={h.id} variant={selected===i ? 'default':'outline'} aria-pressed={selected===i} onClick={() => setSelected(i)} className="h-auto min-h-11 whitespace-normal">{h.short}</Button>)}</div>
      <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_1fr]">
        <HomininStage species={selected} />
        <div key={human.id} className="animate-rise py-6" aria-live="polite">
          <p className="font-semibold text-accent">{human.age}</p>
          <h3 className="mt-3 break-words text-3xl font-bold italic sm:text-4xl">{human.name}</h3>
          <dl className="mt-6 grid gap-4 border-y py-5 text-sm"><div><dt className="font-bold text-primary">Locomoção e corpo</dt><dd className="mt-1 text-muted-foreground">{human.posture}</dd></div><div><dt className="font-bold text-primary">Crânio</dt><dd className="mt-1 text-muted-foreground">{human.brain}</dd></div></dl>
          <p className="mt-5 leading-relaxed text-muted-foreground">{human.description}</p>
          <p className="mt-5 flex items-start gap-2 text-sm"><Info className="mt-1 size-4 shrink-0 text-accent" />{human.caution}</p>
          <Button asChild variant="link" className="mt-4 px-0"><a href={human.url} target="_blank" rel="noreferrer">Fonte: Smithsonian <ArrowUpRight /></a></Button>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">Reconstruções artísticas ilustrativas baseadas em descrições de fósseis; cor de pele, pelos e roupas são hipóteses.</p>
      <div className="mt-12 border-t pt-8">
        <h3 className="flex items-center gap-2 text-2xl font-bold"><GitBranch className="text-primary" /> Linhagens, não degraus</h3>
        <p className="mt-3 max-w-3xl text-muted-foreground">Um ancestral comum pode dar origem a vários ramos. A relação exata entre algumas espécies antigas continua em investigação. Este esquema destaca ramificação, não uma genealogia completa.</p>
        <div className="lineage-tree mt-6 text-sm"><div className="lineage-root">Linhagens antigas de hominínios <span className="text-muted-foreground">· australopitecos e outros ramos</span></div><div className="lineage-branch">Diversificação do gênero <i>Homo</i><div className="mt-4 grid gap-4 sm:grid-cols-3"><div className="border-l-2 border-primary pl-4">Ramos antigos<br /><i>H. habilis</i> e <i>H. erectus</i></div><div className="border-l-2 border-accent pl-4">Linhagem neandertal<br /><span className="text-muted-foreground">Europa e Ásia</span></div><div className="border-l-2 border-primary pl-4"><i>Homo sapiens</i><br /><span className="text-muted-foreground">Origem africana</span></div></div></div></div>
        <p className="mt-5 text-sm text-accent">Neandertais e Homo sapiens coexistiram e cruzaram entre si. Nenhum dos dois representa um nível “mais evoluído”.</p>
      </div>
    </div>
  </section>;
}