//Using code from exercise 9, classify each variable name as either global or local.
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

  //line1: multiply(global), left(local), right(local)
  //line2: product(local), left(local), right(local)
  //line3: product(local)
  //line6: getNumber(global), prompt(local)
  //line7:  parseFloat(global),question(global), prompt(local)
  //line10: left(global), getNumber(global)
  //line11: right(global), getNumber(global)
  //line12: console(global), left(global), right(global), multiply(global), left(local), right(local)