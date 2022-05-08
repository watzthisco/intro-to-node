const sumModule = (number1, number2, callback) => {
  let sum = number1 + number2;
  if (isNaN(sum)) {
    callback('sum is not a number');
  } else if (number1 <= 0 || number2 <= 0) {
    callback('all inputs must be positive');
  }
  callback(null, sum);
};

module.exports = sumModule;
