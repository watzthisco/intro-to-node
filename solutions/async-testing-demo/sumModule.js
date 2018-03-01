
module.exports.sumSync = (number1, number2) => {
    return number1 + number2;
};

module.exports.sum = (number1, number2, callback) => {
    setTimeout(function(){  //simulating delay while performing query or contacting outside service
        let sum = number1 + number2;
        if (isNaN(sum)) {
            callback("sum is not a number");
        } else if ((number1 <= 0) || (number2 <= 0)) {
            callback("all inputs must be positive")
        }
        callback(null,sum);
    },1000);
};
