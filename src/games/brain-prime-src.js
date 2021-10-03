import randomNumber from '../utils.js';
import runEngine from '../index.js';

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

const generateRound = () => {
  const number = randomNumber(1, 100);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
