import readlineSync from 'readline-sync';
import { greeting, task, randomNumber } from '../index.js';

const gcd = () => {
    greeting();
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    task('Find the greatest common divisor of given numbers.');

let resultOfFindGcd;
    const findGcd = (a, b) => {
        resultOfFindGcd = `${a} ${b}`;

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
        const forCompare = findGcd(randomNumber(), randomNumber()).toString();

        console.log(`Question: ${resultOfFindGcd}`);
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

    result === 'Correct!' ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

export default gcd;
