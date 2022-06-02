import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const numberOfRounds = 3;

const runEngine = (gameRound, gameAsq, game = null) => {
  console.log('Welcome to the Brain Games!');
  const name = greetUser();
  console.log(`Hello, ${name}!`);
  console.log(gameAsq);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = gameRound(game);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (answer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct !');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
