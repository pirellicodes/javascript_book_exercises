//Using arithmetic operators, get individual digits of 4936;
//6
let number = 4936
let ones = number % 10; //6

console.log(ones);

number = (number - ones) / 10; //493
console.log(number);

let tens = number % 10;
console.log(tens); //3

number = (number - tens) / 10; //49
console.log(number);

let hundreds = number % 10; //9
console.log(hundreds);

let thousands = (number - hundreds) / 10; //4
console.log(thousands);

