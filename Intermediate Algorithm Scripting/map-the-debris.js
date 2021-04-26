function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let a = 2 * Math.PI;
  let newArr = [];

  for (var elem of arr) {
    var c = Math.pow(earthRadius + elem.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    newArr.push({name: elem.name, orbitalPeriod: orbPeriod});
  }
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);