import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetingByName = (str) => console.log(`Hello, ${str}!`);

const task = (str) => console.log(str);

const randomNumber = () => {
  const number = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  return number(1, 100);
};

const randElementOfArray = (array) => {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
};

export {
  greeting, getUserName, greetingByName, task, randomNumber, randElementOfArray,
};
