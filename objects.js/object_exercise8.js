//Create a function that creates and returns a copy of an object. Should take two arguments, object to copy and array of keys. Do not mutate
//Difficult for me to put together the logic and remembering the empty object variable 


let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
  };
  
function copyObj(sourceObj, keys) {
    let finalObject = {};

    if (keys) { //Go into conditional if there are keys
      keys.forEach(key => finalObject[key] = sourceObj[key]);
      return finalObject;
    } else {
      return Object.assign(finalObject, sourceObj);
  }
}

  let newObj = copyObj(objToCopy);
  console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
  
  let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
  console.log(newObj2);       // => { foo: 1, qux: 3 }
  
  let newObj3 = copyObj(objToCopy, [ 'bar' ]);
  console.log(newObj3);       // => { bar: 2 }