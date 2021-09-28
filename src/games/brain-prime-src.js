import { randomNum } from '../index.js';

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

export const primeGameAsq = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const primeGameSrc = () => {
  const num1 = randomNum(1, 100);
  const question = `Question: ${num1}`;
  const answer = isNumPrime(num1);
  return [question, answer];
};
