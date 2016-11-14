// Access to the oject properties from within
// https://learn.javascript.ru/internal-external-interface
// credit to Ilya Kantor

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



// compbained set-get for water amount 
// Solution #4
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  this.waterAmount = function(amount) {
    // works as getWaterAmount() if no argument is passed 
    if (!arguments.length) return waterAmount;

    // works as setWaterAmount(amount)
    if (amount < 0) {
      throw new Error("Water amount must be positive!");
    }
    if (amount > capacity) {
      throw new Error("Water amount can't be more than the capacity of " + capacity);
    }

    waterAmount = amount;
  };


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

var coffeeMachine = new CoffeeMachine(1000, 500);

coffeeMachine.waterAmount(450);
alert( coffeeMachine.waterAmount() ); // 450




// inheritance
function Machine(power) {
  this._power = power; // 

  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power, capacity) {
  Machine.apply(this, arguments); // 

  var parentEnable = this.enable; // overriding enable
  this.enable = function() { 
      parentEnable.call(this); 
      this.run(); 
    }


  alert( this._enabled ); // false
  alert( this._power ); // 10000
}

var coffeeMachine = new CoffeeMachine(10000);







