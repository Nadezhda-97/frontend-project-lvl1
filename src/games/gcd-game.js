import readlineSync from 'readline-sync';
import { greeting, task, randomNumber } from '../index.js';

const gcd = () => {
    greeting();
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    task('Find the greatest common divisor of given numbers.');

    const number1 = randomNumber();
    const number2 = randomNumber();
    
    const twoNumbers = `${number1} ${number2}`;

    const findGcd = (a, b) => {

        let c;
        while (b !== 0) {
            c = b;
            b = a % b;
            a = c;
        }
        return a;
    };

    let result;
    for (let i = 1; i <= 3; i += 1) {
        console.log(`Question: ${twoNumbers}`);
        const answerOfUser = readlineSync.question('Your answer: ');

        const forCompare = findGcd(number1, number2).toString();

        if (forCompare === answerOfUser) {
            result = 'Correct!';
            console.log(result);
        } else {
            result = `"${answerOfUser}" is wrong answer ;(. Correct answer was "${forCompare}".`;
            console.log(result);
            break;
        }
    }

    result === 'Correct!' ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

export default gcd;
