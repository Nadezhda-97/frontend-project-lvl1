import readlineSync from 'readline-sync';

const userGreeting = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};

const randomNumber = () => {
    const number = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return number(1, 100);
};

let result;
const endOfCycle = () => {
    if (result === 'Correct!') {
        console.log(`Congratulations, ${userName}!`);
    } else {
        console.log(`Let's try again, ${userName}!`);
    }
}


export { userGreeting, randomNumber, endOfCycle };
