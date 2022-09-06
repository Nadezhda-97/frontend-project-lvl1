import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 100;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(min, max);

  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const runEven = () => {
  run(description, generateRound);
};

export default runEven;
