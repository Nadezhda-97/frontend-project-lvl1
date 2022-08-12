const greeting = () => console.log('Welcome to the Brain Games!');

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
  greeting, task, randomNumber, randElementOfArray,
};
