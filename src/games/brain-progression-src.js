import randomNum from '../utils.js';
import runEngine from '../index.js';

const gameAsq = 'What number is missing in the progression?';

const makeArray = () => {
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

const hideArray = (coll, itemToHide) => {
  const result = coll;
  result[itemToHide] = '..';
  return result.join(' ');
};

const generateRound = () => {
  const collection = makeArray();
  const itemPosition = randomNum(0, collection.length - 1);
  const answer = String(collection[itemPosition]);
  const question = `${hideArray(collection, itemPosition)}`;
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
