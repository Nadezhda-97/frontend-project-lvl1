import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;

const findGcd = (x, y) => ((!y) ? x : findGcd(y, x % y));

const generateRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);

  const question = `${number1} ${number2}`;
  const answer = findGcd(number1, number2).toString();

  return [question, answer];
};

const runGcd = () => {
  run(description, generateRound);
};

export default runGcd;
