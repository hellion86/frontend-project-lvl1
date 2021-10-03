import randomNumber from '../utils.js';
import runEngine from '../index.js';

const gameAsq = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const number = randomNumber(1, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
