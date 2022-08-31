import { getRandomNumber, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const min = 1;
const max = 100;

const minLength = 5;
const maxLength = 10;

const minStep = 2;
const maxStep = 5;

const getMathProgression = (start, length, step) => {
  let firstNumber = start;
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result[i] = firstNumber;
    firstNumber += step;
  }

  return result;
};

const runProgression = () => {
  const generateTask = () => {
    const progressionStart = getRandomNumber(min, max);
    const progressionLength = getRandomNumber(minLength, maxLength);
    const stepSize = getRandomNumber(minStep, maxStep);

    const mathProgression = getMathProgression(progressionStart, progressionLength, stepSize);

    const hiddenNumberIndex = getRandomIndex(mathProgression);
    const hiddenNumber = mathProgression[hiddenNumberIndex];

    mathProgression[hiddenNumberIndex] = '..';

    return [mathProgression.join(' '), hiddenNumber.toString()];
  };

  run(description, generateTask);
};

export default runProgression;
