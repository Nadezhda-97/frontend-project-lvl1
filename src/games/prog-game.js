import readlineSync from 'readline-sync';
import {
  greeting, task, randomNumber, randElementOfArray,
} from '../index.js';

const prog = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  task('What number is missing in the progression?');

  let answer;
  const mathProgression = () => {
    const lengthOfMathProg = [5, 6, 7, 8, 9, 10];
    const randomLengthOfMathProg = randElementOfArray(lengthOfMathProg);

    const randHiddenNumber = (number) => {
      const num = (min, max) => Math.floor(Math.random() * (max - min)) + min;
      return num(0, number);
    };
    const hiddenNumber = randHiddenNumber(randomLengthOfMathProg);

    let firstNumber = randomNumber();

    const nElements = [2, 3, 5];
    const randomNElement = randElementOfArray(nElements);

    const resultOfMathProg = [];
    for (let i = 0; i < randomLengthOfMathProg; i += 1) {
      if (i !== hiddenNumber) {
        firstNumber += randomNElement;
        resultOfMathProg[i] = firstNumber;
      } else {
        firstNumber += randomNElement;
        resultOfMathProg[i] = '..';
        answer = firstNumber;
      }
    }
    return resultOfMathProg;
  };

  let result;
  for (let i = 1; i <= 3; i += 1) {
    console.log(`Question: ${mathProgression().join(' ')}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    const forCompare = answer.toString();

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
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default prog;
