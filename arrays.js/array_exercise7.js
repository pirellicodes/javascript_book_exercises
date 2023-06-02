//Use reduce to compute the sum of the squares of all the numbers in an array

let array = [3, 5, 7];

function sumOfSquares(element) {
    return element.reduce((accumulator, element) => accumulator + element * element, 0);

}

console.log(sumOfSquares(array)); // => 83

