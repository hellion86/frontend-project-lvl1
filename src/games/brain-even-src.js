import readlineSync from 'readline-sync';
import { randomNumber } from '../index.js';

export const evenGameAsq = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const evenGameSrc = () => {
  const vopros = randomNumber();
  console.log(`Question: ${vopros}`);
  const answer = readlineSync.question('You answer: ');
  const checkIsEven = vopros % 2 === 0;
  const negativeAnswer = checkIsEven === true ? 'yes' : 'no';
  return [answer, negativeAnswer];
};
