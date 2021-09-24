#!/usr/bin/env node

import readlineSync from 'readline-sync';
import helloUserName from '../src/cli.js';

const randomNumber = () => Math.floor(Math.random() * (100 - 1) + 1);
console.log('Welcome to the Brain Games!');
const name = helloUserName();
console.log(`Hello, ${name}!`);

const evenGames = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = randomNumber();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ');
    const checkIsEven = question % 2 === 0;
    if (answer === 'yes' && checkIsEven) {
      console.log('Correct !');
    } else if (answer === 'no' && !checkIsEven) {
      console.log('Correct !');
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
console.log(evenGames());
export default evenGames;
