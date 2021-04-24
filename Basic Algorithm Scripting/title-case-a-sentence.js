function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  console.log(arr);
  for(let i = 0; i < arr.length; i++){
    arr[i] = (arr[i].length > 1) ? arr[i][0].toUpperCase() + arr[i].slice(1,) : arr[i].toUpperCase(); 
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot");