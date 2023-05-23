//Write a program that uses a multiply function to multiply two numbers and return the result. Ask user to enter two numbers then output numbers and result
//My answer that worked
// function multiply(integers) {
//     let rlSync = require('readline-sync');
//     let  numbers = rlSync.question(integers);
//     return numbers;

// };

// let firstNum = multiply('Enter the first number: ');
// let secondNum = multiply('Enter the second number: ');
// let sum = Number(firstNum * secondNum);


// console.log(`${firstNum} * ${secondNum} = ${sum};`);
//Correct answer
function multiply(left, right) {
    return left * right;
}

function getNumber(prompt) {
    let rlSync = require('readline-sync');
    return parseFloat(rlSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);