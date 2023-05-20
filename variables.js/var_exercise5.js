//What does this program log to the console and why?
let foo ='bar';

{
    let foo = 'qux';
}

console.log(foo);

//Bar is logged to the console because the only foo in scope is the one initialized on line 1