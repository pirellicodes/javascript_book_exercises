//Add a function to greeter.js program that solicits the users first and last names in seperate invocations
//You write a function invocation that will be called when a program runs

function askForName(question) {
    let rlSync = require('readline-sync');    
    let name = rlSync.question(question);
    return name;
} 

let firstName = askForName('What is your first name, dilly dally? ');
let lastName = askForName('What the hell is your last name, criminal!? ');
console.log(`You are under arrest ${firstName} ${lastName}, anything you say can and will be used against you in the court of law.`);