import readlineSync from 'readline-sync';
import { randomNumber, isNumPrime } from '../index.js';

export const primeGameAsq = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const primeGameSrc = () => {
  const question = randomNumber();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('You answer: ');
  const checkIsEven = isNumPrime(question);
  console.log(checkIsEven);
  return [answer, checkIsEven];
};
