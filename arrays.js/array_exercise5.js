//Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use filter method
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];


function findIntegers(array) {
    return things.filter(num => {
        return Number.isInteger(num);
    })
};

let integers = findIntegers(things);
console.log(integers);