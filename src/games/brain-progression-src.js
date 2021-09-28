import readlineSync from 'readline-sync';
import { randomNumber, randomLen } from '../index.js';

export const makeArray = () => {
  const len = randomLen();
  let item = randomNumber();
  const increment = randomLen();
  const coll = [item];
  for (let i = 1; i <= len - 1; i += 1) {
    item += increment;
    coll.push(item);
  }
  return coll;
};

export const hideItem = (coll) => {
  const position = Math.floor(Math.random() * (coll.length));
  return position;
};

export const hideArray = (coll, itemToHide) => {
  const result = coll;
  result[itemToHide] = '..';
  return result.join(' ');
};

export const progressionGameAsq = () => console.log('What number is missing in the progression?');

export const progressionGameSrc = () => {
  const collection = makeArray();
  const itemPosition = hideItem(collection);
  const question = collection[itemPosition];
  console.log(`Question: ${hideArray(collection, itemPosition)}`);
  const answer = Number(readlineSync.question('You answer: '));
  return [answer, question];
};
