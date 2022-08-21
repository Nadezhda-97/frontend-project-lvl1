import { getRandomNumber, getRandElementOfArray } from '../utils.js';
import {
  runLogicOfGame
} from '../index.js';

const runCalc = () => {
  const task = 'What is the result of the expression?';

  const getMathExpression = () => {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);

    const operators = ['+', '-', '*'];
    const randomOperator = getRandElementOfArray(operators);

    let resultOfMathExpression;
    let resultToString;
    switch (randomOperator) {
      case '+':
        resultOfMathExpression = number1 + number2;
        resultToString = `${number1} + ${number2}`;
        break;
      case '-':
        resultOfMathExpression = number1 - number2;
        resultToString = `${number1} - ${number2}`;
        break;
      default:
        resultOfMathExpression = number1 * number2;
        resultToString = `${number1} * ${number2}`;
    }

    return [resultToString, resultOfMathExpression.toString()];
  };

  runLogicOfGame(task, getMathExpression);
};

export default runCalc;
