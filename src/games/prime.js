import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 100;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomNumber(min, max);

  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

const runPrime = () => {
  run(description, generateRound);
};

export default runPrime;
