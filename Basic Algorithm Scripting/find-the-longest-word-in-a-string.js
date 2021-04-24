function findLongestWordLength(str) {
  let max = 0;
  for(let word of str.split(' ')){
    max = Math.max(word.length, max);
  }
  return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


findLongestWordLength("The quick brown fox jumped over the lazy dog");