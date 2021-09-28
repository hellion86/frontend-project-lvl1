import readlineSync from 'readline-sync';
import { randomNumber, findGcd } from '../index.js';

export const gcdGameAsq = () => console.log('Find the greatest common divisor of given numbers.');

export const gcdGameSrc = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const result = findGcd(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const answer = Number(readlineSync.question('You answer: '));
  return [answer, result];
};
