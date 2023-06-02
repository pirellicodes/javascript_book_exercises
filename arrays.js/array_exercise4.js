//Use the map function to create a new array that contains one element for each in the original array. Should contain the string 'even' and 'odd' corresponding with the numeric values.
let myArray = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
  ];

let newArray = myArray.map(element => {
    if (element % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
});