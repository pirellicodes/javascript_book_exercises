//Write a function that searches an array of strings that matches the regular expression
let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
  ];
  

function allMatches(array, regex) {
    return words.filter((word) => regex.test(word))
}

  console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']