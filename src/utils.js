const getRandomNumber = (number1, number2) => Math.floor(Math.random() * (number2 - number1 + 1)) + number1;

const getRandElementOfArray = (array) => {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
};

export {
  getRandomNumber, getRandElementOfArray,
};
