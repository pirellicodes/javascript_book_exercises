//Improve code from exercise 2 to add a validation check to insure number is an integer
// //my answer
// function evenOrOdd(num) {
//     if (num % 2 === 0 && Number.isInteger(num)) {
//         console.log('its even');
//   } else if (num % 1 == 0 && Number.isInteger(num)) {
//     console.log('its odd');
//   } else {
//     console.log('the value must be an integer')
//   }

// }
// evenOrOdd(3);
//Correct solution

function evenOrOdd(num) {
    if (!Number.isInteger(num)) {
        console.log('Sorry, the value you gave isnt an integer');
        return;
    }

    if (num % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
};

evenOrOdd(20);