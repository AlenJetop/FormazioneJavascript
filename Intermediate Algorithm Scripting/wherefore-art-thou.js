function whatIsInAName(collection, source) {
  var arr = [];

  // Only change code below this line
  let keys = Object.keys(source);

  for (let item of collection) {
    if(keys.every((elemKey) => item.hasOwnProperty(elemKey)) && keys.every((elem) => source[elem] === item[elem])){
      arr.push(item);
    }
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });