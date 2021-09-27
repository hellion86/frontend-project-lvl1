import readlineSync from 'readline-sync';
import { randomNumber } from './cli.js';

export const evenG = (name) => {
  const check = false;
  const question = randomNumber();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('You answer: ');
  const negativeAnswer = answer === 'yes' ? 'no' : 'yes';
  const checkIsEven = question % 2 === 0;
  return [answer, checkIsEven];
};

export const startGames = () => {
  console.log('\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < 3; i += 1) {
    const result = evenG(name);
    console.log(result);
  }
  /*if (check === true) {
    (answer === 'yes' && checkIsEven) {
      console.log('Correct !');
    }(answer === 'no' && !checkIsEven) {
      console.log('Correct !');
    } 
  }
  if (check === false) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${negativeAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);*/
};

console.log(startGames());

/*
Мне нужно без массива

let h = 'hello';
let w = 'world';

function MyTest(a, b) {
  return `${a}, ${b}`;
}

console.log(MyTest(h, w))

function getValues() {
    return [getFirstValue(), getSecondValue()];
}
Тогда вы можете получить к ним доступ следующим образом:

var values = getValues();
var first = values[0];
var second = values[1];

все вводы и выводы (велком, приветствие, сообщения о выигрыше/проигрыше и т.д.)
Все это делается путем использования напрямую readlineSync и console.log. Никаких оберток над ними не нужно.
Цикл раундов. Внутри цикла получается ответ юзера и сравнивается с правильным ответом. 

*/