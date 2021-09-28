import readlineSync from 'readline-sync';

const helloUserName = () => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default helloUserName;
