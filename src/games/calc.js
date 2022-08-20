import {
  randomNumber, randElementOfArray, game,
} from '../index.js';

const calc = () => {
  const task = 'What is the result of the expression?';

  const mathExpression = () => {
    const number1 = randomNumber();
    const number2 = randomNumber();

    const operators = ['+', '-', '*'];
    const randomOperator = randElementOfArray(operators);

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

  game(task, mathExpression);
};

export default calc;
