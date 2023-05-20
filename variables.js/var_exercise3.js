// What happens when you run the following program and why?
{
    let foo = 'bar';
}

console.log(foo);

//We get a reference error because the variable foo is block scoped and only accessible within the block