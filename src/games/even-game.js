import readlineSync from 'readline-sync';
import {
  greeting, getUserName, greetingByName, task, randomNumber,
} from '../index.js';

const even = () => {
  greeting();
  const name = getUserName();
  greetingByName(name);
  task('Answer "yes" if the number is even, otherwise answer "no".');

  let element;
  const isEven = (number) => {
    element = number;
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  let result;
  for (let i = 1; i <= 3; i += 1) {
    const forCompare = isEven(randomNumber());

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

export default even;
