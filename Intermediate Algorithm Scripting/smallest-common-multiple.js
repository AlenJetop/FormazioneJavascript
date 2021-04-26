function smallestCommons(arr) {
  let [min, max] = (arr[0] < arr[1]) ? [arr[0], arr[1]] : [arr[1], arr[0]];
  let divisori = max - min + 1;
  let maxValue = 1;

  for (let i = min; i <= max; i++) {
    maxValue *= i;
  }

  for (let i = max; i <= maxValue; i += max) {
    let numDivisori = 0;
    for (let j = min; j <= max; j++) {
      if (i % j === 0) {
        numDivisori++;
      }
    }
    if (numDivisori === divisori) {
      return i;
    }
  }
}

smallestCommons([1,5]);