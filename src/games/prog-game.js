import readlineSync from 'readline-sync';
import {
  greeting, getUserName, greetingByName, task, randomNumber, randElementOfArray,
} from '../index.js';

const prog = () => {
  greeting();
  const name = getUserName();
  greetingByName(name);
  task('What number is missing in the progression?');

  const resultOfMathProg = [];
  const mathProgression = (rndNumber) => {
    const lengthOfMathProg = [5, 6, 7, 8, 9, 10];
    const randomLengthOfMathProg = randElementOfArray(lengthOfMathProg);

    const randHiddenNumber = (number) => {
      const num = (min, max) => Math.floor(Math.random() * (max - min)) + min;
      return num(0, number);
    };
    const hiddenNumber = randHiddenNumber(randomLengthOfMathProg);

    const elements = [2, 3, 5];
    const randomElement = randElementOfArray(elements);

    let firstNumber = rndNumber;
    let answer;
    for (let i = 0; i < randomLengthOfMathProg; i += 1) {
      if (i !== hiddenNumber) {
        firstNumber += randomElement;
        resultOfMathProg[i] = firstNumber;
      } else {
        firstNumber += randomElement;
        resultOfMathProg[i] = '..';
        answer = firstNumber;
      }
    }
    return answer;
  };

  let result;
  for (let i = 1; i <= 3; i += 1) {
    const forCompare = mathProgression(randomNumber()).toString();

    console.log(`Question: ${resultOfMathProg.join(' ')}`);
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

export default prog;
