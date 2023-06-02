//Use the reduce method to write a function and determine the lengths of all the elements in an array of string vals, then disgard the even values
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (string) {
    return string.reduce((filteredNumArray, letters) => {
        let length = letters.length
        if (length % 2 === 1) {
            filteredNumArray.push(length);
        }

        return filteredNumArray
    }, []); 
}

console.log(oddLengths(arr)); // => [1, 5, 3]