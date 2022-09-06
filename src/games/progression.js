import { getRandomNumber, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const min = 1;
const max = 100;

const minLength = 5;
const maxLength = 10;

const minStep = 2;
const maxStep = 5;

const buildProgression = (start, length, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(min, max);
  const length = getRandomNumber(minLength, maxLength);
  const step = getRandomNumber(minStep, maxStep);

  const progression = buildProgression(start, length, step);

  const index = getRandomIndex(progression);
  const answer = progression[index].toString();

  progression[index] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runProgression = () => {
  run(description, generateRound);
};

export default runProgression;
