//Write a function that logs whether an integer is between 0 and 50, between 51 and 100, greater than 100 or less than 0;
// function numberRange(num) {
//     if (num < 0) {
//         console.log(`${num} is less than 0`);
//     } else if (num <= 50) {
//         console.log(`${num} is between 0 and 50`);
//     } else if (num <= 100) {
//         console.log(`${num} is between 51 and 100`);
//     } else {
//         console.log(`${num} is greater than 100`);
//     };
// }

// numberRange(25);
// numberRange(75);
// numberRange(125);
// numberRange(-25);

//Now in ternary
function numberRange(num) {
   return num < 0 ? console.log(`${num} is less than 0`)
         : num <= 50 ? console.log(`${num} is between 0 and 50`)
         : num <= 100 ? console.log(`${num} is between 51 and 100`)
         : console.log(`${num} is greater than 100`);
};

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);