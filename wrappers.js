"use strict";

//------------- bind wrapper -------------
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}



// ------------- timer wripper -------------
var timers = {};

// add the time to the obj timers[timer] that mesures the timing of function f
function timingDecorator(f, timer) {
  return function() {
    var start = performance.now();

    var result = f.apply(this, arguments); // Forwarding function calls 

    if (!timers[timer]) timers[timer] = 0;
    timers[timer] += performance.now() - start;

    return result;
  }
}

// we will use fibonacci function 
function fibonacci(n) {
  return (n > 2) ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
}

// wrapping fibonnaci with timingDecorator decorator function
fibonacci = timingDecorator(fibonacci, "fibo");


alert( fibonacci(10) ); // 55
alert( fibonacci(20) ); // 6765

alert( timers.fibo + 'msec' );





// ------------- logging wrapper ------------- 
function work(a, b) {
  alert( a + b ); 
}

function makeLogging(f, log) {

  function wrapper() {
      log.push([].slice.call(arguments));
      return f.apply(this, arguments);
    }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // array or arguments on i call
  alert( 'Log:' + args.join() ); // "Log:1,2", "Log:4,5"
}




// ------------- check the type wrapper ------------- 
// check if number
function checkNumber(value) {
  return typeof value == 'number';
}

// decorator that checks type of f
// checks - array with functions that check the type 
function typeCheck(f, checks) {
  return function() {
    for (var i = 0; i < arguments.length; i++) {
      if (!checks[i](arguments[i])) {
        alert( "Wrong argument type " + i );
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function sum(a, b) {
  return a + b;
}

// wrapping to the decorator 
sum = typeCheck(sum, [checkNumber, checkNumber]); // 

alert( sum(1, 2) ); // 3

sum(true, null); // Wrong argument type 0
sum(1, ["array", "in", "sum?!?"]); // Wrong argument type 1



// ------------- check persmission wrapper ------------- 
function checkPermissionDecorator(f) {
  return function() {
    if (user.isAdmin()) f()
    else alert('Not an admin yet')
  }
}
// Usage: make save check permissions
save = checkPermissionDecorator(save)
// Now save() calls will check permissions
save();



// ------------- double or triple the number wrapper ------------- 
function mul(a, b) {
  return a * b;
};

var double = mul.bind(null, 2);
alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10

var triple = mul.bind(null, 3);
alert( triple(3) ); // = mul(3, 3) = 9
alert( triple(4) ); // = mul(3, 4) = 12
alert( triple(5) ); // = mul(3, 5) = 15





// ------------- ask a question wrapper ------------- 
function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Ani',
  password: '12345',

  loginOk: function() {
    alert( this.login + ' got access' );
  },

  loginFail: function() {
    alert( this.login + ' permission denied' );
  },

  checkPassword: function() {
    ask("Password?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};

var tom = user;
user = null;
tom.checkPassword();