import readlineSync from 'readline-sync';
import { userGreeting, randomNumber, endOfCycle } from '../index.js';

const calculator = () => {
    const greeting = userGreeting();
    console.log(greeting);
    console.log('What is the result of the expression?');

    let resultOfMathExpression;
    const mathExpression = () => {
        const operators = ['+', '-', '*'];
        const indexOfOperators = [0, 1, 2];
        const randomIndex = Math.floor(Math.random() * indexOfOperators.length);
        const randomOperator = operators[randomIndex];

        const number1 = randomNumber();
        const number2 = randomNumber();

        switch (randomOperator) {
            case '+':
                resultOfMathExpression = number1 + number2;
                return `${number1} + ${number2}`;
                break;
            case '-':
                resultOfMathExpression = number1 - number2;
                return `${number1} - ${number2}`;
                break;
            default:
                resultOfMathExpression = number1 * number2;
                return `${number1} * ${number2}`;
        }
    };

    let result;
    for (let i = 1; i <= 3; i += 1) {
        console.log(`Question: ${mathExpression()}`);
        const answerOfUser = readlineSync.question('Your answer: ');

        const forCompare = resultOfMathExpression.toString();

        if (forCompare === answerOfUser) {
        result = 'Correct!';
        console.log(result);
        } else {
            result = `"${answerOfUser}" is wrong answer ;(. Correct answer was "${forCompare}".`;
            console.log(result);
            break;
        }
    }

    endOfCycle();
};

export default calculator;
