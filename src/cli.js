import readlineSync from 'readline-sync';

const helloUserName = () => readlineSync.question('May I have your name? ');

export default helloUserName;
