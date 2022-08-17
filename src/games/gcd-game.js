import {
  randomNumber, game,
} from '../index.js';

const gcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';

  const findGcd = () => {
    const number1 = randomNumber();
    const number2 = randomNumber();

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

  game(task, findGcd);
};

export default gcd;
