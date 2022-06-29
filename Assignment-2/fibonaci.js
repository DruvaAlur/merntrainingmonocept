let fibonaci = (number) => {
  let fibo = [];
  if (number <= 0) {
    console.log("0");
    return;
  }
  fibo[0] = 0;
  fibo[1] = 1;
  let sum = fibo[0] + fibo[1];
  for (let i = 2; i <= number; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    sum += fibo[i];
  }
  console.log(sum);
};
