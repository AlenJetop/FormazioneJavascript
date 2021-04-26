function sumPrimes(num) {
  function numPrimo(num) {
    for (let i = 2; i <= (num ** 0.5); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (numPrimo(i)){
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);