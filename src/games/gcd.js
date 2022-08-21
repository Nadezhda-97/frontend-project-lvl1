import { getRandomNumber } from '../utils.js';
import {
  runLogicOfGame
} from '../index.js';

const runGcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';

  const findGcd = () => {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);

    const rndNumbersToString = `${number1} ${number2}`;

    let a = number1;
    let b = number2;
    let c;
    while (b !== 0) {
      c = b;
      b = a % b;
      a = c;
    }
    const resultOfFindGcd = a;

    return [rndNumbersToString, resultOfFindGcd.toString()];
  };

  runLogicOfGame(task, findGcd);
};

export default runGcd;
