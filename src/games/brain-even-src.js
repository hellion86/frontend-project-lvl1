import { randomNum } from '../index.js';

export const evenGameAsq = 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenGameSrc = () => {
  const num1 = randomNum(1, 100);
  const question = `Question: ${num1}`;
  const answer = num1 % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
