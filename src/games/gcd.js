import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 100;

const findGcd = (firstNumber, secondNumber) => {
  let valueOne = firstNumber;
  let valueTwo = secondNumber;
  let valueThree;
  while (valueTwo !== 0) {
    valueThree = valueTwo;
    valueTwo = valueOne % valueTwo;
    valueOne = valueThree;
  }

  return valueOne;
};

const runGcd = () => {
  const generateTask = () => {
    const number1 = getRandomNumber(min, max);
    const number2 = getRandomNumber(min, max);

    const question = `${number1} ${number2}`;

    const answer = findGcd(number1, number2);

    return [question, answer.toString()];
  };

  run(description, generateTask);
};

export default runGcd;
