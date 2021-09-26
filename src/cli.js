import readlineSync from 'readline-sync';

export const helloUserName = () => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const randomNumber = () => Math.floor(Math.random() * (100 - 1) + 1);
export const randomLen = () => Math.floor(Math.random() * (10 - 5) + 5);

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

export const makeArray = () => {
  const len = randomLen();
  let item = randomNumber();
  const increment = randomLen();
  const coll = [item];
  for (let i = 1; i <= len - 1; i += 1) {
    item += increment;
    coll.push(item);
  }
  return coll;
};

export const hideItem = (coll) => {
  const position = Math.floor(Math.random() * (coll.length));
  return position;
};

export const hideArray = (coll, itemToHide) => {
  const result = coll;
  result[itemToHide] = '..';
  return result.join(' ');
};

export const isNumPrime = (num) => {
  let check = 0;
  if (num === 1) {
    return true;
  }
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      check += 1;
    }
  }
  return check === 1;
};
