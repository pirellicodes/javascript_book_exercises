//Why does this code cause an infinite loop?
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
};

//Because counter never reaches the stopping condition of being more than 2