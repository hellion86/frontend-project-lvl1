import randomNum from '../helpers.js';
import runEngine from '../index.js';

const gameAsq = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const generateRound = () => {
  const num1 = randomNum(1, 100);
  const question = `${num1}`;
  const answer = check(num1);
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
