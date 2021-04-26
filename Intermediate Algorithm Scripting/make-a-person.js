var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let [first, last] = firstAndLast.split(' ');
  let completo = firstAndLast;
  this.getFirstName = function() {
    return first;
  };

  this.getLastName = function() {
    return last;
  };

  this.getFullName = function() {
    return completo;
  };

  this.setFirstName = function(name) {
    completo = name + " " + last;
    first = name;
  };

  this.setLastName = function(name) {
    completo = first + " " + name;
    last = name;
  };

  this.setFullName = function(name) {
    completo = name;
    [first, last] = completo.split(' ');
  };

};

var bob = new Person('Bob Ross');
bob.getFullName();