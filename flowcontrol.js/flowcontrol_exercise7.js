//Write a function that takes a string as an argument and returns an all caps version of string when longer than 10 words

function allCaps(string) {
    if (string.length > 10) {
        return string.toUpperCase();
    } else {
        return string;
    }
};

console.log(allCaps('miss girl gotta big bank'));
console.log(allCaps('pretty flower'));
console.log(allCaps('joseph'));