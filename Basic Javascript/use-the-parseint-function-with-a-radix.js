function convertToInteger(str) {
  var result = 0;
  for(var i = str.length - 1, j = 0; i >= 0; i--, j++){
    result += (parseInt(str[j]) * 2)** i;
  }
  return result;
}

convertToInteger("10011");