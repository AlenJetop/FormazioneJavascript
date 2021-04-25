function destroyer(arr, ...args) {
  for(let arg of args){
    for(let elem in arr){
      if(arg == arr[elem]){
        delete arr[elem];
      }
    }
  }
  let newArr = [];
  for (let i of arr){
    if(i != null){
      newArr.push(i);
    }
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);