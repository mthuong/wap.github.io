let animal = {
  sleep: function () {
    this.sleeping = true;
  },
  walk: function () {
    if (!this.sleeping) {
      console.log("animal walking");
    } else {
      console.log("animal is sleeping");
    }
  },
};

let rabbit = {
  jump: true,
  sleep: function () {
    console.log("Sleeping!");
  },
};

rabbit = Object.create(animal);
animal.eat = true;

rabbit.eat = false;

console.log(rabbit);
console.log(animal);