import { useState } from 'react';
import { ArrowRight, Brain, RotateCcw, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { questions, scoreAnswers } from '@/lib/evolution';

export function ScienceQuiz() {
  const [answers,setAnswers] = useState<number[]>([]);
  const [index,setIndex] = useState(0);
  const question = questions[index]; const choice=answers[index]; const score=scoreAnswers(answers);
  return <section id="quiz" className="mx-auto max-w-3xl scroll-mt-28 px-5 py-20"><div className="rounded-lg border bg-card p-5 sm:p-8">
    <h2 className="flex items-center gap-3 text-3xl font-bold"><Brain className="shrink-0 text-primary" /> Pense como um cientista</h2>
    {!question ? <div className="mt-8" aria-live="polite"><p className="text-5xl font-bold text-primary">{score}/{questions.length}</p><p className="mt-3 text-muted-foreground">{score===questions.length ? 'Você acertou todas as questões deste quiz!' : 'Revise as explicações e tente novamente.'}</p><Button className="mt-6" onClick={() => { setAnswers([]); setIndex(0); }}><RotateCcw /> Tentar novamente</Button></div> : <>
      <p className="mt-6 text-sm text-accent">Pergunta {index+1} de {questions.length}</p><h3 className="mt-3 text-xl font-semibold">{question.q}</h3>
      <div className="mt-5 grid gap-3">{question.options.map((option,i) => <Button key={option} variant="outline" disabled={choice!==undefined} className={`h-auto min-h-12 justify-start whitespace-normal py-3 text-left ${choice!==undefined && i===question.answer ? 'border-primary bg-primary/15 text-foreground' : ''}`} onClick={() => setAnswers([...answers,i])}>{choice!==undefined && (i===question.answer ? <Check /> : i===choice ? <X /> : null)}{option}</Button>)}</div>
      {choice!==undefined && <div className="mt-6" role="status"><p className={`font-bold ${choice===question.answer ? 'text-primary' : 'text-accent'}`}>{choice===question.answer ? 'Resposta correta' : 'Vamos entender a resposta'}</p><p className="mt-2 leading-relaxed text-muted-foreground">{question.explanation}</p><Button className="mt-5" onClick={() => setIndex(index+1)}>{index===questions.length-1 ? 'Ver resultado':'Próxima pergunta'}<ArrowRight /></Button></div>}
    </>}
  </div></section>;
}