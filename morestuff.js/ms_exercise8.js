//Write a function named isNotANumber that returns true if the value passed is NaN, false if not without using Number.isNan

function isNotANumber(value) {
    return console.log(value !== value);

};

isNotANumber(NaN);
isNotANumber(3);

