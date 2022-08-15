import readlineSync from 'readline-sync';
import {
  greeting, getUserName, greetingByName, task, randomNumber,
} from '../index.js';

const prime = () => {
  greeting();
  const name = getUserName();
  greetingByName(name);
  task('Answer "yes" if given number is prime. Otherwise answer "no".');

  let element;
  const isPrime = (number) => {
    element = number;
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }

    return number > 1;
  };

  const booleanToAnswer = (func) => {
    if (func === true) {
      return 'yes';
    }
    return 'no';
  };

  let result;
  for (let i = 1; i <= 3; i += 1) {
    const forCompare = booleanToAnswer(isPrime(randomNumber()));

    console.log(`Question: ${element}`);
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

export default prime;
