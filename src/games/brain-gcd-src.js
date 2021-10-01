import randomNum from '../utils.js';
import runEngine from '../index.js';

const gameAsq = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  const mod = max % min;
  if (mod === 0) {
    return min;
  }
  return findGcd(mod, min);
};

const generateRound = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(findGcd(num1, num2));
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
