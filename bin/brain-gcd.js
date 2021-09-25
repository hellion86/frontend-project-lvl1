#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  helloUserName,
  randomNumber,
  findGcd,
} from '../src/cli.js';

const name = helloUserName();
console.log(`Hello, ${name}!`);

const gcdGames = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const result = findGcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
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
console.log(gcdGames());

export default gcdGames;
