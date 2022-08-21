import readlineSync from 'readline-sync';

const runLogicOfGame = (taskOfGame, resultOfGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(taskOfGame);

  let result;
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const questionAndRightAnswer = resultOfGame();

    console.log(`Question: ${questionAndRightAnswer[0]}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    const answerOfSystem = questionAndRightAnswer[1];

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

export default runLogicOfGame;
