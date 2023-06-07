//Write a function that will return true if the argument is -0 and false if it is 0 or any other number

function negativeZero(value) {
    return 1 / value === -Infinity;
}

negativeZero(-0);
negativeZero(1);