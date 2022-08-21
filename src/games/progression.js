import { getRandomNumber, getRandElementOfArray } from '../utils.js';
import runLogicOfGame from '../index.js';

const runProgression = () => {
  const task = 'What number is missing in the progression?';

  const getMathProgression = () => {
    const lengthOfMathProg = [5, 6, 7, 8, 9, 10];
    const randomLengthOfMathProg = getRandElementOfArray(lengthOfMathProg);

    const hiddenNumber = getRandomNumber(0, (randomLengthOfMathProg - 1));

    const elements = [2, 3, 5];
    const randomElement = getRandElementOfArray(elements);

    let firstNumber = getRandomNumber(1, 100);
    let answer;
    const resultOfMathProg = [];
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

    return [resultOfMathProg.join(' '), answer.toString()];
  };

  runLogicOfGame(task, getMathProgression);
};

export default runProgression;
