//What happens when you run the following code and why?
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

//In the first set of console.log statements Victor is printed, but because of the reassignment of the constant variable, NAME does not get changed to Joe and throws an error
