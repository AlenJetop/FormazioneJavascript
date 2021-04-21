// Only change code below this line
var arr = [];
function countdown(n){
  if(n < 1){
    return [];
  }else{
    arr.push(n);
    countdown(n - 1);
  }
  return arr;
}
// Only change code above this line