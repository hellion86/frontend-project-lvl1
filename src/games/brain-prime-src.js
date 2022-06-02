import runEngine from '../index.js';
import { generateRound } from '../utils.js';

const gameAsq = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let check = 0;
  if (number === 1) {
    return true;
  }
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      check += 1;
    }
  }
  return check === 1;
};

const startGame = () => runEngine(generateRound, gameAsq, isPrime);

export default startGame;
