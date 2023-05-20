let rlSync = require('readline-sync');

let name1 = rlSync.question(`What is your first name, ma'am?\n`);
let name2 = rlSync.question(`What is your last name, ${name1}?\n`);
console.log(`You are under arrest ${name1} ${name2}, anything you say can and will be used against you in the court of law.`);