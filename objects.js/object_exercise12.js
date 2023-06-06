//Consider and update to work without chaning lines 6 or 7 or creating a new function:
//This is a little hard
function foo(bar) {
    console.log(bar);
  }
  
  let bar = foo;

  foo("hello"); // should print "hello hello hello"
  bar("hi");    // should print "hi hi hi"