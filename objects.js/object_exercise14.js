//Identify all variables, object property names, prim values and objects
function hello(greeting, name) {
    return greeting + ' ' + name;
  }
  
  function xyzzy() {
    return { a: 1, b: 2, c: [3, 4, 5], d: {} };
  }
  
  const howdy = hello('Hi', 'Grace');
  let foo = xyzzy();

  //variables: hello, greeting, name | xyzzy, a, b, c, d | howdy, foo
  //object prop: a, b, c, d, [3, 4, 5]index: 0, 1, 2
  //prim vals: '' | a, b, c, d, 1, 2, 3, 4, 5, [3, 4, 5]index: 0, 1, 2 | 'Hi', 'Grace'
  //objects: hello(), xzzy(), {a: 1, b: 2, etc}, [3, 4, 5], {}