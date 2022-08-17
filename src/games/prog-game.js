import {
  randomNumber, randElementOfArray, game,
} from '../index.js';

const prog = () => {
  const task = 'What number is missing in the progression?';

  const randHiddenNumber = (number) => {
    const num = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    return num(0, number);
  };

  const mathProgression = () => {
    const lengthOfMathProg = [5, 6, 7, 8, 9, 10];
    const randomLengthOfMathProg = randElementOfArray(lengthOfMathProg);

    const hiddenNumber = randHiddenNumber(randomLengthOfMathProg);

    const elements = [2, 3, 5];
    const randomElement = randElementOfArray(elements);

    let firstNumber = randomNumber();
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

  game(task, mathProgression);
};

export default prog;
