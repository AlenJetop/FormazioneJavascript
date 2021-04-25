const squareList = arr => {
  // Only change code below this line
  arr = arr.filter(number => number / Math.floor(number) == 1 && number > 0).map(number => number ** 2);
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);