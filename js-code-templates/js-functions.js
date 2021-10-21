// different types of functions 

// 1 // Function Declaration
function fafa(a) {
  return (a === "fafa");
}


// 2 // Function Expression
var fafa = function(a) {
  return (a === "fafa");
}


// 3 // Named Function Expression with example 
var f = function factorial(n) {
  return n ? n*factorial(n-1) : 1;
};

var g = f;  // copy the link to g
f = null;

alert( g(5) ); // returs 120


// Function Declaration vs Function Expression -- hoisting

//////Example #1
function foo(){
  function fafa() {
    return 21;
  }
  return fafa();
  function fafa() {
    return 2;
  }
}
alert(foo());

//////Example #2
function foo(){
  var fafa = function() {
    return 21;
  };
  return fafa();
  var fafa = function() {
    return 2;
  };
}

alert(foo());

//////Example #3
alert(foo());
function foo(){
    var fafa = function() {
        return 21;
    };
    return bar();
    var bar = function() {
        return 2;
    };
}

//////Example #4
function foo(){
  return bar();
  var fafa = function() {
    return 21;
  };
  var fafa = function() {
    return 3;
  };
}
alert(foo());

//////The outputs will be: 21, 2, 2 and [Type Error: bar is not a function] 



// Functions as parameters, anonymous functions 

//////Example #1
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

function showOk() {
  alert( "Agreed" );
}

function showCancel() {
  alert( "Disagreed" );
}

ask("Do you agree?", showOk, showCancel);

// the shorter implementation of the above function 
ask(
  "Do you agree?",
  function() { alert("Agreed"); }, // anonymous function 
  function() { alert("Disagreed"); }
);

//////Example #2
var newFunct = new Function('a,b', ' return a+b; '); // Function(params, code):

var result = newFunct(1, 2);
alert( result ); // 3



// new Function 

var a = 1;
function getFunc() {
  var a = 2;
  var func = new Function('', 'alert(a)');
  return func;
}
getFunc()(); // 1
