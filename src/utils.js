const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data) => {
  const index = Math.floor(Math.random() * data.length);
  return index;
};

export {
  getRandomNumber, getRandomIndex,
};
