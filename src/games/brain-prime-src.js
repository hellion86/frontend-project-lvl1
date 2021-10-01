import randomNum from '../helpers.js';
import runEngine from '../index.js';

const gameAsq = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let check = 0;
  if (num === 1) {
    return 'yes';
  }
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      check += 1;
    }
  }
  return check === 1;
};

const generateRound = () => {
  const num1 = randomNum(1, 100);
  const question = `${num1}`;
  const answer = isPrime(num1) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
