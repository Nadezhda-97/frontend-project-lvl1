import readlineSync from 'readline-sync';

const randomNumber = () => {
  const number = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  return number(1, 100);
};

const randElementOfArray = (array) => {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
};

const runLogicOfGame = (str, func) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(str);

  let result;
  for (let i = 0; i < 3; i += 1) {
    const resultOfImportGame = func();

    console.log(`Question: ${resultOfImportGame[0]}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    const answerOfSystem = resultOfImportGame[1];

    if (answerOfSystem === answerOfUser) {
      result = 'Correct!';
      console.log(result);
    } else {
      result = `"${answerOfUser}" is wrong answer ;(. Correct answer was "${answerOfSystem}".`;
      console.log(result);
      break;
    }
  }

  if (result === 'Correct!') {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export {
  randomNumber, randElementOfArray, runLogicOfGame,
};
