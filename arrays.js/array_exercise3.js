//Log the even numbers in this nested array
let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

//forEach example 
// myArray.forEach(nestedArray => {
//     nestedArray.forEach(value => {
//         if (value % 2 === 0) {
//             console.log(value);
//         }
//     });
// });

for (let i = 0; i < myArray.length; i += 1) {
    for (let j = 0; j < myArray[i].length; j += 1) {
        let value = myArray[i][j];
        if (value % 2 === 0) {
            console.log(value);
        }
    }
};

