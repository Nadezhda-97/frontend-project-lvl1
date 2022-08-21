import { getRandomNumber } from '../utils.js';
import runLogicOfGame from '../index.js';

const runEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getAnswerEvenOrNo = () => {
    const random = getRandomNumber(1, 100);

    let answer;
    if (random % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }

    return [random, answer];
  };

  runLogicOfGame(task, getAnswerEvenOrNo);
};

export default runEven;
