// Access to the oject properties from within

// Solution #1 

function CoffeeMachine(power) {
  this.waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;

  function getBoilTime() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Coffe is ready!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime.call(this));
  };

}

var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();



// Solution #2 
function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var getBoilTime = function() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }.bind(this);

  function onReady() {
    alert( 'Coffe is ready!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };

}

var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();


// Solution #3 - preferred 
function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var getBoilTime = function() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }.bind(this);

  function onReady() {
    alert( 'Coffe is ready!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };

}

var coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();