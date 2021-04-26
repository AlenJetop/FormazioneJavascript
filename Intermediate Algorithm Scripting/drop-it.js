function dropElements(arr, func) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      newArr.push(...arr.slice(i));
      break;
    }
  }
  return newArr;
}


dropElements([1, 2, 3], function(n) {return n < 3; });