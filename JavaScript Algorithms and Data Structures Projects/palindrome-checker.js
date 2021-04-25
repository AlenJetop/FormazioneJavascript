function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let numHalf = Math.floor(str.length / 2);
  let firstHalf = str.slice(0, numHalf);
  let lastHalf = (str.length % 2 == 1) ? str.slice(numHalf + 1, str.length) : str.slice(numHalf, str.length);

  let temp = "";
  for (let i = numHalf - 1; i >= 0; i--) {
    temp += lastHalf[i];
  }
  lastHalf = temp;
  
  return (lastHalf == firstHalf);
}



palindrome("eye");