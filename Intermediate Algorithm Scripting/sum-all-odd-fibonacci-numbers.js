function sumFibs(num) {
  let numPrec = 0;
  let numCorr = 1;
  let result = 0;
  while (numCorr <= num) {
    if (numCorr % 2 !== 0) {
      result += numCorr;
    }
    numCorr += numPrec;
    numPrec = numCorr - numPrec;
  }
  return result;
}

sumFibs(4);