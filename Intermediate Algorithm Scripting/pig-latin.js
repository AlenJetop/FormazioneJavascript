function translatePigLatin(str) {
  if(/[aeiou]/gi.test(str[0])){
    return str + "way";
  }
  let con = str.match(/[^aeiou]+/i);
  str = str.replace(/^[^aeiou]+/i, "");
  return str + con + "ay";
}

translatePigLatin("consonant");