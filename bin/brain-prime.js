#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  helloUserName,
  isNumPrime,
  randomNumber,
} from '../src/cli.js';

const name = helloUserName();
console.log(`Hello, ${name}!`);

const praimGames = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = randomNumber();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ');
    const negativeAnswer = answer === 'yes' ? 'no' : 'yes';
    const checkIsEven = isNumPrime(question);
    if (answer === 'yes' && checkIsEven) {
      console.log('Correct !');
    } else if (answer === 'no' && !checkIsEven) {
      console.log('Correct !');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${negativeAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
console.log(praimGames());

export default praimGames;
