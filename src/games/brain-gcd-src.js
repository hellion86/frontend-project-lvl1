import readlineSync from 'readline-sync';
import { randomNumber } from '../index.js';

export const findGcd = (num1, num2) => {
  const max = num1 > num2 ? num1 : num2;
  const min = num1 < num2 ? num1 : num2;
  if (max % min === 0) {
    return min;
  }
  const res = max % min;
  return findGcd(res, min);
};

export const gcdGameAsq = () => console.log('Find the greatest common divisor of given numbers.');

export const gcdGameSrc = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const result = findGcd(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const answer = Number(readlineSync.question('You answer: '));
  return [answer, result];
};
