import generateNumber from '../utils.js';
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
      throw new Error(`Operation ${action} is not supported`);
  }
};

const generateRound = () => {
  const arrayOfActions = ['-', '+', '*'];
  const action = arrayOfActions[generateNumber(0, 2)];
  const numberA = generateNumber(1, 100);
  const numberB = generateNumber(1, 100);
  const question = `${numberA} ${action} ${numberB}`;
  const answer = String(calculate(numberA, numberB, action));
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
