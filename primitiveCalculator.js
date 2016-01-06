"use strict"
// simple calculator that works with prompts 
var calculator = {
    sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },

  read: function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );