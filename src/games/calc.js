import { getRandomNumber, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';

const min = 1;
const max = 100;
const operators = ['+', '-', '*'];

const getMathExpressionResult = (randomOperator, firstNumber, secondNumber) => {
  switch (randomOperator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const runCalc = () => {
  const generateTask = () => {
    const number1 = getRandomNumber(min, max);
    const number2 = getRandomNumber(min, max);
    const operator = operators[getRandomIndex(operators)];

    const mathExpression = `${number1} ${operator} ${number2}`;

    const mathExpressionResult = getMathExpressionResult(operator, number1, number2);

    return [mathExpression, mathExpressionResult.toString()];
  };

  run(description, generateTask);
};

export default runCalc;
