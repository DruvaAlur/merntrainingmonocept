let countOfEvenOddZero = (array) => {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) zeroCount++;
    if (array[i] % 2 == 0) evenCount++;
    else oddCount++;
  }
  console.log(
    `count of odd numbers in array=${oddCount}  
count of even numbers in array=${evenCount}  
count of zero in array=${zeroCount}`
  );
};
