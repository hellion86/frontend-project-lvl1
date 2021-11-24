import generateNumber from '../utils.js';
import runEngine from '../index.js';

const gameAsq = 'What number is missing in the progression?';

const makeArray = (first, step, length) => {
  const collection = [];
  for (let i = 0; i <= length - 1; i += 1) {
    collection.push(first + i * step);
  }
  return collection;
};

const hideElement = (collection, itemToHide) => {
  const result = collection;
  result[itemToHide] = '..';
  return result.join(' ');
};

const generateRound = () => {
  const firstElementArray = generateNumber(1, 100);
  const stepOfArray = generateNumber(2, 7);
  const lengthArray = generateNumber(5, 10);
  const collection = makeArray(firstElementArray, stepOfArray, lengthArray);
  const hiddenItemPosition = generateNumber(0, collection.length - 1);
  const answer = String(collection[hiddenItemPosition]);
  const question = `${hideElement(collection, hiddenItemPosition)}`;
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
