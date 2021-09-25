import readlineSync from 'readline-sync';

export const helloUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const randomNumber = () => Math.floor(Math.random() * (100 - 1) + 1);
