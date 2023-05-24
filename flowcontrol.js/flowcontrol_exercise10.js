//What will this code print
function show(foo = undefined, bar = null) {
    console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
  }
  
  show(5, 7);
  show(0, 0);
  show(4);
  show();
  
//5, 7
//0, 0
//4, 42
//3, 42