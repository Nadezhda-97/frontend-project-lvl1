import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 100;

const isEven = (number) => number % 2 === 0;

const runEven = () => {
  const generateTask = () => {
    const number = getRandomNumber(min, max);
    const answer = isEven(number) ? 'yes' : 'no';

    return [number, answer];
  };

  run(description, generateTask);
};

export default runEven;
