import readlineSync from 'readline-sync';
import {
  makeArray,
  hideArray,
  hideItem,
} from '../index.js';

export const progressionGameAsq = () => console.log('What number is missing in the progression?');

export const progressionGameSrc = () => {
  const collection = makeArray();
  const itemPosition = hideItem(collection);
  const question = collection[itemPosition];
  console.log(`Question: ${hideArray(collection, itemPosition)}`);
  const answer = Number(readlineSync.question('You answer: '));
  return [answer, question];
};
