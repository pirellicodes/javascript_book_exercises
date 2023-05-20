//Why does the following code log '510' instead of 15?
console.log('5' + 10);

//Because of implicit coercion, JavaScript concatenates both values as if they were both strings. 