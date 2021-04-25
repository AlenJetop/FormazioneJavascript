function diffArray(array1, array2) {
  var newArr = [];
  function control(arr1, arr2) {
    for (let item in arr1) {
      if (arr2.indexOf(arr1[item]) == -1) {
        newArr.push(arr1[item]);
      }
    }
    return newArr;
  }
  control(array1, array2);
  control(array2, array1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);