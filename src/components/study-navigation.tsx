import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const chapters = [
  { id: 'conceito', title: 'O que é evolução?' },
  { id: 'mecanismos', title: 'Como ela acontece?' },
  { id: 'teorias', title: 'Como a ideia foi construída?' },
  { id: 'evidencias', title: 'Quais são as evidências?' },
  { id: 'linha', title: 'Quando tudo aconteceu?' },
  { id: 'humana', title: 'Onde entramos nessa história?' },
  { id: 'diversidade', title: 'O que é biodiversidade?' },
  { id: 'brasil', title: 'Por que conservar no Brasil?' },
  { id: 'conclusao', title: 'O que aprendemos?' },
  { id: 'quiz', title: 'Teste seus conhecimentos' },
] as const;

export function StudyNavigation() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const update = () => {
      let index = 0;
      chapters.forEach((chapter, i) => {
        const top = document.getElementById(chapter.id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= 200) index = i;
      });
      setActive(index);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const current = chapters[active];
  if (!current) return null;
  return <nav aria-label="Capítulos do estudo" className="sticky top-20 z-30 border-y bg-background/95 backdrop-blur-sm">
    <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3">
      <span className="shrink-0 text-sm font-bold text-primary">{String(active + 1).padStart(2, '0')} / 10</span>
      <div className="relative min-w-0 flex-1"><label className="sr-only" htmlFor="study-chapter">Capítulo atual</label><select id="study-chapter" value={current.id} onChange={event => { document.getElementById(event.target.value)?.scrollIntoView({ behavior: 'instant' }); }} className="w-full appearance-none bg-background py-2 pr-6 text-sm font-semibold text-foreground">{chapters.map((chapter, i) => <option key={chapter.id} value={chapter.id}>{i + 1}. {chapter.title}</option>)}</select><ChevronDown className="pointer-events-none absolute right-0 top-2 size-4 text-muted-foreground" /></div>
      <Button asChild variant="ghost" size="icon" aria-label="Capítulo anterior" title="Capítulo anterior"><a href={`#${chapters[Math.max(0, active-1)]?.id}`}><ArrowUp /></a></Button>
      <Button asChild variant="ghost" size="icon" aria-label="Próximo capítulo" title="Próximo capítulo"><a href={`#${chapters[Math.min(9, active+1)]?.id}`}><ArrowDown /></a></Button>
    </div>
  </nav>;
}

export function ChapterBridge({ summary, next, href }: { summary: string; next: string; href: string }) {
  return <div className="mt-10 border-t pt-6"><p className="max-w-3xl leading-relaxed"><span className="font-bold text-primary">Ideia principal: </span>{summary}</p><a href={`#${href}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4">{next}<ArrowDown className="size-4 shrink-0" /></a></div>;
}