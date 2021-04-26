function myReplace(str, before, after) {
  let firstUp = (before[0] == before[0].toUpperCase());
  after = (firstUp) ? after[0].toUpperCase() + after.slice(1): after[0].toLowerCase() + after.slice(1);
  return str.replace(before, after);
}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");