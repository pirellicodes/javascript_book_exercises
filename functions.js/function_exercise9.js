//Identify all variable names on each line of code
function multiply(left, right) {
    let product = left * right;
    return product;
  }
  
  function getNumber(prompt) {
    return parseFloat(question(prompt));
  }
  
  let left = getNumber('Enter the first number: ');
  let right = getNumber('Enter the second number: ');
  console.log(`${left} * ${right} = ${multiply(left, right)}`);

  // line1: multiply, left, right
  // line2: product, left, right
  //line3: product
  //line6: getNumber, prompt
  //line7:  parseFloat, question, prompt
  //line10: left, getNumber
  //line11: right, getNumber
  //line12: console, left, right, multiply, left, right