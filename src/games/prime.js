import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};

const runPrime = () => {
  const generateTask = () => {
    const question = getRandomNumber(min, max);
    const answer = isPrime(question) ? 'yes' : 'no';

    return [question, answer];
  };

  run(description, generateTask);
};

export default runPrime;
