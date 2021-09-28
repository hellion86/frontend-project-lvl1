import readlineSync from 'readline-sync';

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const startGame = (gameName, gameAsq) => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameAsq);
  for (let i = 0; i < 3; i += 1) {
    const gameParameters = gameName();
    const question = gameParameters[0];
    console.log(question);
    const answer = String(gameParameters[1]);
    const userAnswer = readlineSync.question('You answer: ');
    if (answer === userAnswer) {
      console.log('Correct !');
    } else if (answer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
