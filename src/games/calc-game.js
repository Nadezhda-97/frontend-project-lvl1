import readlineSync from 'readline-sync';
import {
  greeting, getUserName, greetingByName, task, randomNumber, randElementOfArray,
} from '../index.js';

const calc = () => {
  greeting();
  const name = getUserName();
  greetingByName(name);
  task('What is the result of the expression?');

  let resultOfMathExpression;
  const mathExpression = (number1, number2) => {
    const operators = ['+', '-', '*'];
    const randomOperator = randElementOfArray(operators);

    switch (randomOperator) {
      case '+':
        resultOfMathExpression = `${number1} + ${number2}`;
        return number1 + number2;
      case '-':
        resultOfMathExpression = `${number1} - ${number2}`;
        return number1 - number2;
      default:
        resultOfMathExpression = `${number1} * ${number2}`;
        return number1 * number2;
    }
  };

  let result;
  for (let i = 1; i <= 3; i += 1) {
    const forCompare = mathExpression(randomNumber(), randomNumber()).toString();

    console.log(`Question: ${resultOfMathExpression}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    if (forCompare === answerOfUser) {
      result = 'Correct!';
      console.log(result);
    } else {
      result = `"${answerOfUser}" is wrong answer ;(. Correct answer was "${forCompare}".`;
      console.log(result);
      break;
    }
  }

  if (result === 'Correct!') {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default calc;
