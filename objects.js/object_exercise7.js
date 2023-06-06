//Add a qux property with value 3 to myObj we created
let myProtoObj = {
    foo: 1,
    bar: 2,
  };

let myObj = {
    foo: 1,
    bar: 2,
  };
myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
//Iterates over the transformed array of keys
//foo
//bar
//qux

for (let key in myObj) {
//Can add a conditional like if (myObj.hasOwnProperty(key))
    console.log(key);
  }
//Iterates over just the keys of myObj since it doesn't access the objects values
//foo
//bar
//qux

//My answer: They do produce the same output because for/in and forEach both only iterate over keys because they both do not include bracket notation to access values
//Correct answer: They do not because for/in iterates over all including protype

