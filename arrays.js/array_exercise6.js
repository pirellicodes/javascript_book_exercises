//Use map and filter to first determine the lengths of all the elements in an array of string vals, then disgard the even values
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
    return arr.map(letters => letters.length).filter(num => num % 2 === 1);
} 

console.log(oddLengths(arr)); // => [1, 5, 3]