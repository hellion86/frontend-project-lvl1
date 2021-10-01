import randomNum from '../helpers.js';
import runEngine from '../index.js';

const gameAsq = 'What is the result of the expression?';

const doCalculation = (a, b, action) => {
  let result = 0;
  switch (action) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
  }
  return result;
};

const generateRound = () => {
  const arrActions = ['-', '+', '*'];
  const action = arrActions[randomNum(0, 2)];
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  const question = `${num1} ${action} ${num2}`;
  const answer = doCalculation(num1, num2, action);
  return [question, answer];
};

const startGame = () => runEngine(generateRound, gameAsq);

export default startGame;
