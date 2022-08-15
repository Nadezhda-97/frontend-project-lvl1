import readlineSync from 'readline-sync';
import {
  greeting, getUserName, greetingByName, task, randomNumber,
} from '../index.js';

const gcd = () => {
  greeting();
  const name = getUserName();
  greetingByName(name);
  task('Find the greatest common divisor of given numbers.');

  let resultOfFindGcd;
  const findGcd = (number1, number2) => {
    resultOfFindGcd = `${number1} ${number2}`;

    let a = number1;
    let b = number2;
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

  if (result === 'Correct!') {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default gcd;
