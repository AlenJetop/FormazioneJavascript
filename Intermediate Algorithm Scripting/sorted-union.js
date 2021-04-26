function uniteUnique(arr) {
  var args = [...arguments];
  var res = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!res.includes(args[i][j])) {
        res.push(args[i][j]);
      }
    }
  }
  return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);