//What does this log to the console and why
let foo = {
    a: 'hello',
    b: 'world',
  };
  
  let qux = 'hello';
  
  function bar(argument1, argument2) {
    argument1.a = 'hi';
    argument2 = 'hi';
  }
  
  bar(foo, qux);
  
  console.log(foo.a);
  console.log(qux);

  //Logs
  //'hi'
  //'hello'
  //foo is mutated on line 9 to a new value on line 14
  //second console.logs 'hello' because the string does not get mutated