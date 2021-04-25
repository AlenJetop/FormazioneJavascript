// Only change code below this line
function urlSlug(title) {
  let res = title.toLowerCase().trim().split(/\W+|\s+|_+/).join('-');
  console.log(res);
  return res;
}
// Only change code above this line