import { getRandomNumber, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';

const min = 1;
const max = 100;
const operators = ['+', '-', '*'];

const calculate = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const operator = operators[getRandomIndex(operators)];

  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(operator, number1, number2).toString();

  return [question, answer];
};

const runCalc = () => {
  run(description, generateRound);
};

export default runCalc;
