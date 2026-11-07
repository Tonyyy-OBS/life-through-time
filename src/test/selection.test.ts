import { describe, expect, it } from 'vitest';
import { nextGeneration } from '@/lib/selection';
describe('Teaching model of natural selection', () => {
  it('favors green variants on leaves with weights 0.8 and 0.4', () => { expect(nextGeneration(50, 'folhas')).toBe(67); });
  it('favors brown variants on exposed soil', () => { expect(nextGeneration(50, 'solo')).toBe(33); });
  it('does not invent a variant absent from the population', () => { expect(nextGeneration(0, 'folhas')).toBe(0); expect(nextGeneration(100, 'solo')).toBe(100); });
});