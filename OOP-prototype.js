// inheritance version #2
var machine = {
  enabled: false,
  
  enable: function() {
    this.enabled = true;
  },
  
  disable: function() {
    this.enabled = false;
  }
};

var coffeeMachine = { 
   __proto__ : machine
};

coffeeMachine.disable();
alert(coffeeMachine.enabled);