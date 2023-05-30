//doubler

// function doubler(number) {
//     console.log(number);

//     if (number <= 50) {
//         doubler(number * 2);
//     }
// };

// doubler(2);

function fibonacci(number) {
    if (number < 2)/* <- baseline condition */ return number;

    return fibonacci(number - 1) +
    fibonacci(number - 2);
};

console.log(fibonacci(6));
console.log(fibonacci(20));