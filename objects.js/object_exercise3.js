//Use object literal syntax to create an object that behaves as an array in a for statement. 
let myArray = {
    0: 'pickles',
    1: 'bullhorn',
    2: 'bethany dutton',
    length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
};