function fearNotLetter(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let start = letters.indexOf(str[0]);
  let end = letters.indexOf(str[str.length - 1]);
  for(let i = 0; i < letters.slice(start, end).length; i++) {
    if(str[i] != letters.slice(start, end)[i]){
      return letters.slice(start, end)[i];
    }
  }
  return undefined;
}


fearNotLetter("abce");