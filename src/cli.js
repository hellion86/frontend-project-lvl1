import readlineSync from 'readline-sync';

const helloUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default helloUserName;
