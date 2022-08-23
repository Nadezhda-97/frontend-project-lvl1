import readlineSync from 'readline-sync';

const runLogicOfGame = (taskOfGame, resultOfGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(taskOfGame);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const questionAndRightAnswer = resultOfGame();
    const [questionForUser, rightAnswer] = questionAndRightAnswer;

    console.log(`Question: ${questionForUser}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    if (rightAnswer !== answerOfUser) {
      console.log(`"${answerOfUser}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runLogicOfGame;
