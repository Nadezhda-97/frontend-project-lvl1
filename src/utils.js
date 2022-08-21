const getRandomNumber = (num1, num2) => Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

const getRandElementOfArray = (array) => {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
};

export {
  getRandomNumber, getRandElementOfArray,
};
