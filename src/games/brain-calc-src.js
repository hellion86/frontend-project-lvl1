import randomNumber from '../utils.js';
import runEngine from '../index.js';

const gameAsq = 'What is the result of the expression?';

const calculate = (a, b, action) => {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'No numbers are present!';
  }
};

const generateRound = () => {
  const arrayOfActions = ['-', '+', '*'];
  const action = arrayOfActions[randomNumber(0, 2)];
  const numberA = randomNumber(1, 100);
  const numberB = randomNumber(1, 100);
  const question = `${numberA} ${action} ${numberB}`;
  const answer = String(calculate(numberA, numberB, action));
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
