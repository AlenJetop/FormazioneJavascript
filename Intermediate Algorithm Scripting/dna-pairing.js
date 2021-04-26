function pairElement(str) {
  let newArr = [];
  for(let i of str){
    if(i == "A"){
      newArr.push(["A","T"]);
    }else if(i == "C"){
      newArr.push(["C", "G"]);
    }else if(i == "G"){
      newArr.push(["G", "C"]);
    }else if(i == "T"){
      newArr.push(["T", "A"]);
    }
  }
  return newArr;
}

pairElement("GCG");