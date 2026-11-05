import { describe, expect, it } from 'vitest';
import { questions, scoreAnswers } from '@/lib/evolution';
describe('Quiz scoring', () => {
  it('scores each correct answer once', () => { expect(scoreAnswers(questions.map(q => q.answer))).toBe(6); });
  it('does not score wrong or unanswered questions', () => { expect(scoreAnswers([])).toBe(0); expect(scoreAnswers(questions.map(q => (q.answer+1)%3))).toBe(0); });
  it('scores a partial attempt without adding unanswered points', () => { expect(scoreAnswers([1,2])).toBe(2); });
});