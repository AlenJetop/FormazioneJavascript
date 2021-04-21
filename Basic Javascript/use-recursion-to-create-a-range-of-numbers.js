var arr = [];
function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    arr.push(startNum);
  } else {
    arr.push(startNum);
    rangeOfNumbers(++startNum, endNum);
  }
  return arr;
};