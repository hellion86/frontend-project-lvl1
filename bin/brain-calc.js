#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  helloUserName,
  randomNumber,
  randomAction,
  doCalculation,
} from '../src/cli.js';

const name = helloUserName();
console.log(`Hello, ${name}!`);

const calcGames = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const action = randomAction();
    console.log(`Question: ${num1} ${action} ${num2}`);
    const result = doCalculation(num1, num2, action);
    const answer = Number(readlineSync.question('You answer: '));
    if (answer === result) {
      console.log('Correct !');
    } else if (answer !== result) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
console.log(calcGames());

export default calcGames;
