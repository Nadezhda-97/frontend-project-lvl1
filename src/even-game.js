import readlineSync from 'readline-sync';

const evenAndOddNumbersGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  let result;
  while (i <= 3) {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);

    const answerOfUser = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0) {
      if (answerOfUser === 'yes') {
        result = 'Correct!';
        console.log(result);
      } else {
        result = `${answerOfUser} is wrong answer ;(. Correct answer was "yes".`;
        console.log(result);
        break;
      }
    } else if (randomNumber % 2 !== 0) {
      if (answerOfUser === 'no') {
        result = 'Correct!';
        console.log(result);
      } else {
        result = `${answerOfUser} is wrong answer ;(. Correct answer was "no".`;
        console.log(result);
        break;
      }
    }
    i += 1;
  }

  if (result === 'Correct!') {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default evenAndOddNumbersGame;
