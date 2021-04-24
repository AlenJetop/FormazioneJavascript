function chunkArrayInGroups(arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    if (i + size < arr.length) {
      res.push(arr.slice(i, i + size));
    } else {
      res.push(arr.slice(i, ));
    }
  }
  return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);