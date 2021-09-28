import readlineSync from 'readline-sync';

export const randomNumber = () => Math.floor(Math.random() * (100 - 1) + 1);

export const randomLen = () => Math.floor(Math.random() * (10 - 5) + 5);

export const startGame = (gameName, gameasq) => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  gameasq();
  for (let i = 0; i < 3; i += 1) {
    const result = gameName();
    const answer = result[0];
    const question = result[1];
    if (answer === question) {
      console.log('Correct !');
    } else if (answer !== question) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${question}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
