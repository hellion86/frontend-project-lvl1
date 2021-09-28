import { randomNum } from '../index.js';

export const makeArray = () => {
  const len = randomNum(5, 10);
  let item = randomNum(1, 100);
  const increment = randomNum(2, 7);
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

export const progressionGameAsq = 'What number is missing in the progression?';

export const progressionGameSrc = () => {
  const collection = makeArray();
  const itemPosition = hideItem(collection);
  const answer = collection[itemPosition];
  const question = `Question: ${hideArray(collection, itemPosition)}`;
  return [question, answer];
};
