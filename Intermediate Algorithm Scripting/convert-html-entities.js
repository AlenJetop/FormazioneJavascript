function convertHTML(str) {
  let newArr = str.split("");
  for (let char in newArr) {
    switch (newArr[char]) {
      case "&": 
        newArr[char] = '&amp;';
        break;
      case "<": 
        newArr[char] = '&lt;';
        break;
      case ">": 
        newArr[char] = '&gt;';
        break;
      case '"': 
        newArr[char] = '&quot;';
        break;
      case "'": 
        newArr[char] = '&apos;';
        break;
    }
  }
  return newArr.join("");
}


convertHTML("Dolce & Gabbana");