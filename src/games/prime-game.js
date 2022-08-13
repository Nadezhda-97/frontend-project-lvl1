import readlineSync from 'readline-sync';
import { greeting, task, randomNumber } from '../index.js';

const isPrime = () => {
    greeting();
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    task('Answer "yes" if given number is prime. Otherwise answer "no".');

    //logic of the game

    let result;
    for (let i = 1; i <= 3; i += 1) {
        console.log(`Question: ${nnn}`); //здесь будет другое

        const answerOfUser = readlineSync.question('Your answer: ');

        let forCompare;

        if (forCompare === answerOfUser) {
            result = 'Correct!';
            console.log(result);
        } else {
            result = `"${answerOfUser}" is wrong answer ;(. Correct answer was "yes".`;
            console.log(result);
            break;
            }
    }

    if (result === 'Correct!') {
        console.log(`Congratulations, ${userName}!`);
    } else {
        console.log(`Let's try again, ${userName}!`);
    }
};

export default isPrime;
