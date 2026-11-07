// A deterministic teaching model, not a prediction for a real population.
export function nextGeneration(green: number, environment: 'folhas' | 'solo') {
  const greenFitness = environment === 'folhas' ? 0.8 : 0.4;
  const brownFitness = environment === 'folhas' ? 0.4 : 0.8;
  const total = green * greenFitness + (100 - green) * brownFitness;
  return Math.round((green * greenFitness / total) * 100);
}