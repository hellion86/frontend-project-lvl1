#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  helloUserName,
  makeArray,
  hideArray,
  hideItem,
} from '../src/cli.js';

const name = helloUserName();
console.log(`Hello, ${name}!`);

const progressionGames = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const collection = makeArray();
    const itemPosition = hideItem(collection);
    const question = collection[itemPosition];
    console.log(hideArray(collection, itemPosition));
    const answer = Number(readlineSync.question('You answer: '));
    if (answer === question) {
      console.log('Correct !');
    } else if (answer !== question) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${question}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
console.log(progressionGames());

export default progressionGames;
