// let names = ['Chonny', 'Lisa', 'Bart', 'Nami', 'Shithead'];
// let upperNames = [];
// let i = 0;

// while (i < names.length) {
//     let upperCaseName = 
//     names[i].toUpperCase();
//     upperNames.push(upperCaseName);
//     i += 1;
// };

// console.log(upperNames);

//Rewrite in for loop
// let names = ['Chonny', 'Lisa', 'Bart', 'Nami', 'Shithead'];
// let upperNames = [];


// for (let i = 0; i < names.length; ++i) {
//     let upperCaseName = 
//     names[i].toUpperCase();
//     upperNames.push(upperCaseName);
    
// };

// console.log(upperNames);
//Controlling loops exercise
let names = ['Chonny', 'Lisa', 'Bart', 'Nami', 'Shithead'];
let upperNames = [];


for (let i = 0; i < names.length; ++i) {
    if(names[i] === 'Shithead') continue;
    
    
    let upperCaseName = names[i].toUpperCase();
    upperNames.push(upperCaseName);
    
};

console.log(upperNames);