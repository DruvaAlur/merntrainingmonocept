let factorial = (number) => {
  if (number < 0) {
    console.log("Please enter a positive number");
  } else if (number === 0) {
    console.log(`factorial of 0 is 1`);
  } else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact = fact * i;
    }
    console.log(`factorial of ${number} is ${fact}`);
  }
};
