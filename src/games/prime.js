import { getRandomNumber } from '../utils.js';
import runLogicOfGame from '../index.js';

const runPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  let random;
  const isPrime = () => {
    random = getRandomNumber(1, 100);
    if (random < 2) {
      return false;
    }

    for (let i = 2; i < random; i += 1) {
      if (random % i === 0) {
        return false;
      }
    }

    return random > 1;
  };

  const exportBooleanToAnswer = () => {
    const result = isPrime();

    let answer;
    if (result === true) {
      answer = 'yes';
    } else {
      answer = 'no';
    }

    return [random, answer];
  };

  runLogicOfGame(task, exportBooleanToAnswer);
};

export default runPrime;
