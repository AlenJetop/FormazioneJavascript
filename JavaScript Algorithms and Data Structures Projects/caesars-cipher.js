function rot13(str) {
  let newStr = "";
  for(let char of str){
    char = (char.charCodeAt(0) < 65||char.charCodeAt(0) > 90) ? char.charCodeAt(0) : (char.charCodeAt(0) - 52) % 26 + 65;
    newStr += String.fromCharCode(char);
  }
  return newStr;
}

rot13("SERR PBQR PNZC");