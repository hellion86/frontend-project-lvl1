import { randomNum } from '../index.js';

export const findGcd = (num1, num2) => {
  const max = num1 > num2 ? num1 : num2;
  const min = num1 < num2 ? num1 : num2;
  if (max % min === 0) {
    return min;
  }
  const res = max % min;
  return findGcd(res, min);
};

export const gcdGameAsq = 'Find the greatest common divisor of given numbers.';

export const gcdGameSrc = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  const question = `Question: ${num1} ${num2}`;
  const answer = findGcd(num1, num2);
  return [question, answer];
};
