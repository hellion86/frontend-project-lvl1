import readlineSync from 'readline-sync';
import { randomNumber } from '../index.js';

export const isNumPrime = (num) => {
  let check = 0;
  if (num === 1) {
    return 'yes';
  }
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      check += 1;
    }
  }
  return check === 1 ? 'yes' : 'no';
};

export const primeGameAsq = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const primeGameSrc = () => {
  const question = randomNumber();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('You answer: ');
  const checkIsEven = isNumPrime(question);
  return [answer, checkIsEven];
};
