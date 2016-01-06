
// example of a ladder code without method chaining
var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};

ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 2


// example of a ladder code with method chaining 
var ladderChaining = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this; // this will return the object 
  }
}

ladderChaining.up().up().down().up().down().showStep(); // 1