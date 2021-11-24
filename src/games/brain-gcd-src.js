import generateNumber from '../utils.js';
import runEngine from '../index.js';

const gameAsq = 'Find the greatest common divisor of given numbers.';

const findGcd = (numberA, numberB) => {
  const min = Math.min(numberA, numberB);
  const max = Math.max(numberA, numberB);
  const mod = max % min;
  if (mod === 0) {
    return min;
  }
  return findGcd(mod, min);
};

const generateRound = () => {
  const numberA = generateNumber(1, 100);
  const numberB = generateNumber(1, 100);
  const question = `${numberA} ${numberB}`;
  const answer = String(findGcd(numberA, numberB));
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
