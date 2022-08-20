import {
  randomNumber, game,
} from '../index.js';

const even = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = () => {
    const random = randomNumber();

    let answer;
    if (random % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }

    return [random, answer];
  };

  game(task, isEven);
};

export default even;
