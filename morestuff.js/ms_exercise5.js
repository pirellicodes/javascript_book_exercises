//What does this function do?
function doSomething(string) {
    return string.split(' ').reverse().map((value) => value.length);
  }

  //First it splits the given string, then reverses the order, then creates a new array with the length of the string for each element