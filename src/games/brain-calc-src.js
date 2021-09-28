import { randomNum } from '../index.js';

export const randomAction = () => {
  const coll = ['-', '+', '*'];
  return coll[Math.floor(Math.random() * (4 - 1))];
};

export const doCalculation = (a, b, action) => {
  if (action === '+') {
    return a + b;
  }
  if (action === '-') {
    return a - b;
  }
  return a * b;
};

export const calcGameAsq = 'What is the result of the expression?';

export const calcGameSrc = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  const action = randomAction();
  const question = `Question: ${num1} ${action} ${num2}`;
  const answer = doCalculation(num1, num2, action);
  return [question, answer];
};
