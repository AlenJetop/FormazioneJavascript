function telephoneCheck(str) {
  if (str.replace(/\D/g, "").length < 10) {
    return false;
  } else {
    if (str.length >= 14){
      if(str[0] == "(" && str.slice(4, 6) == ") "){
        return /^\(\d{3}\)\s\d{3}\-\d{4}$/.test(str);
      } else if (str[0] == 1){
        return (telephoneCheck(str.slice(2)) || telephoneCheck(str.slice(1)));
      }
    }else if(str.length == 12){
      return (/^\d{3}[ -]\d{3}[ -]\d{4}$/.test(str));
    }
    return ((str.length == 13 && /^\(\d{3}\)\d{3}\-\d{4}$/.test(str)) || (str.length == 10 && /^\d{10}$/.test(str)));
  }
  return false;
}

telephoneCheck("555-555-5555");