import readlineSync from 'readline-sync';

export const helloUserName = () => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const randomNumber = () => Math.floor(Math.random() * (100 - 1) + 1);

export const randomAction = () => {
  const coll = ['-', '+', '*'];
  return coll[Math.floor(Math.random() * (4 - 1))];
};

export const doCalculation = (a, b, action) => {
  if (action === '+') {
    return a + b;
  }
  if (action === '-') {
    return a - b;
  }
  return a * b;
};

export const findGcd = (num1, num2) => {
  const max = num1 > num2 ? num1 : num2;
  const min = num1 < num2 ? num1 : num2;
  if (max % min === 0) {
    return min;
  }
  const res = max % min;
  return findGcd(res, min);
};
