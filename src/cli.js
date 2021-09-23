import readlineSync from 'readline-sync';

const helloUserName = () => {
    const name = readlineSync.question('May I have your name?: ');
    return `Hello, ${name}`;
};

export default helloUserName;
