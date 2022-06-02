import runEngine from '../index.js';
import { generateRound } from '../utils.js';

const gameAsq = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const startGame = () => runEngine(generateRound, gameAsq, isEven);

export default startGame;
