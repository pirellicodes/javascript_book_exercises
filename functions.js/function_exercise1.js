//What does this code log to the console? 
// Does executing the foo function affect the output & why or why not?
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

//It logs foo(); = 2 and console.log(bar) = 1; The foo function doesn't affect the output because they are seperate variables. 