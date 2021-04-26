let convertToRoman = function (num) {
  let decimali = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romani = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let newstr = "";

  for (let i = 0; i < decimali.length; i++) {
    while (num >= decimali[i]) {
      newstr += romani[i];
      num -= decimali[i];
    }
  }
  return newstr;
}

convertToRoman(36);