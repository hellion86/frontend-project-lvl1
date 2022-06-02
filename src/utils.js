const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateRound = (game) => {
  const number = generateNumber(1, 100);
  const question = `${number}`;
  const answer = game(number) ? 'yes' : 'no';
  return [question, answer];
};

export default generateNumber;
