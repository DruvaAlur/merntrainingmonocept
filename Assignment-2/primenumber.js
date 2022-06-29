let primeNumber = (number) => {
  let isPrime = true;
  if (number === 1 || number === 0) {
    isPrime = false;
  } else if (number > 1) {
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
};
