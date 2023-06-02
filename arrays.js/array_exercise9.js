//Without using for, while or do/while, write some code that checks if the number 3 appears inside these arrays
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function isItThree(num) {
    return console.log(num.includes(3));
}

// numbers1.includes(3);
// numbers2.includes(3);
// numbers3.includes(3);

isItThree(numbers1);
isItThree(numbers2);
isItThree(numbers3);