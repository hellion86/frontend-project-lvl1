import readlineSync from 'readline-sync';
import {
  randomNumber,
  randomAction,
  doCalculation,
} from '../index.js';

export const calcGameAsq = () => console.log('What is the result of the expression?');

export const calcGameSrc = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const action = randomAction();
  console.log(`Question: ${num1} ${action} ${num2}`);
  const result = doCalculation(num1, num2, action);
  const answer = Number(readlineSync.question('You answer: '));
  return [answer, result];
};
