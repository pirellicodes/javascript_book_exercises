//Will this program produce an error when run? Why or why not
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//Since the two const variables are seperate from eachother because of block scope, no error