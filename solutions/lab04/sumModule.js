module.exports = function (number1, number2, callback) {
  let sum = number1 + number2;
  if (isNaN(sum)) {
    callback('sum is not a number');
  }
  callback(null, sum);
};
