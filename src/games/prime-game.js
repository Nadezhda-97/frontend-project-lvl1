import {
  randomNumber, game,
} from '../index.js';

const prime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  let random;
  const isPrime = () => {
    random = randomNumber();
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

  const booleanToAnswer = () => {
    const result = isPrime();

    let answer;
    if (result === true) {
      answer = 'yes';
    } else {
      answer = 'no';
    }

    return [random, answer];
  };

  game(task, booleanToAnswer);
};

export default prime;
