import readlineSync from 'readline-sync';

const runEngine = (gameRound, gameAsq) => {
  const gameRounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameAsq);
  for (let i = 0; i < gameRounds; i += 1) {
    const [question, answer] = gameRound();
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
