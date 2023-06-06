//Create an array from the keys of the object obj with all the keys converted to uppercase. Must not mutate
let obj = {
    b: 2,
    a: 1,
    c: 3,
  };

let newObj = Object.keys(obj);
newObj = newObj.map(keys => keys.toUpperCase());
console.log(newObj);
console.log(obj);
//   newObj.forEach(key => {
//     console.log(obj[key]);
//   });
  