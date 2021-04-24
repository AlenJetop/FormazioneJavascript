function repeatStringNumTimes(str, num) {
  let res = "";
  for(let i = 0; i < num; i++){
    res += str;
  }
  return (str == "") ? "" : res;
}

repeatStringNumTimes("abc", 3);