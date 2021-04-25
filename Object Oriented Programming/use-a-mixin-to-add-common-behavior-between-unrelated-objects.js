let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function(object){
  object.glide = function(){
    return "glide";
  }
}

glideMixin(bird);
glideMixin(boat);