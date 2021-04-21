function sum(arr, n) {
  // Only change code below this line
  let somma = 0;
  if(n <= 0){
    return somma;
  }else{
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}