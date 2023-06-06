//Identify all variables, object property names, prim values and objects
function bar(arg1, arg2) {
    let foo = 'Hello';
    const qux = {
      abc: [1, 2, 3, [4, 5, 6]],
      def: null,
      ghi: NaN,
      jkl: foo,
      mno: arg1,
      pqr: arg2,
    };
  
    return qux;
  }
  
  let result = bar('Victor', 'Antonina');
  //variables: bar(), arg1, arg2, foo, qux, result
  //object property names(remember array indexes): abc, def, ghi, jkl, mno, pqr, array index: 3, arrayindex: 2
  //primitive values(remember array indexes): 'Hello', 1, 2, 3, 4, 5, 6, abc, def, ghi, jkl, mno, pqr, null, NaN, array index: 3, arrayindex: 2, 'Victor' 'Antonia'
  //objects: bar(), qux, [1, 2, 3, [4, 5, 6]], [4, 5, 6]