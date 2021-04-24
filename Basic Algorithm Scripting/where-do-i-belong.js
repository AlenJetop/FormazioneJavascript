function getIndexToIns(arr, num) {
  arr.sort();
  let res = 0;
  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] < num){
      res++;
    }
  }
  return res;
}

getIndexToIns([40, 60], 50);