"use strict";

// fun facts about unary operations
//a ^ b ^ b === a
//~n === -(n+1)
// 3 << 3 === 3 * (2*2*2) === 3 * Math.pow(2, 3);

// check if the variable is integer 
function isInteger(num) {
  return (num ^ 0) === num;
}

// round the number. will literally keep only integer part
function round(num) {
  return (num ^ 0);
  //return ~~num;
}


// fun facts about binary operations 
alert( true || false || true ); // returns the first true and stops the check 
alert( true && true ); // returns the last true value
alert( false && true ); // returns false
alert( true && false ); //returns false
alert( false && false ); // returns first false


// different function types 


sum(3, 5); //right
// Function Declaration
function sum(a, b) {
  return a + b;
}


sum2 (2, 6); //wrong
// Function Expression
var sum2 = function(a, b) {
  return a + b;
}


//Named Function Expression
var f = function factorial(n) {
  return n ? n*factorial(n-1) : 1;
};

var g = f;  // copied link to the function to g
f = null;

alert( g(5) ); // returs 120


//functions as parameters, anonymous functions 
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

// использование
ask("Do you agree?", showOk, showCancel);

// the shorter way of the same function 
ask(
  "Do you agree?",
  function() { alert("Agreed"); }, // anonymous function 
  function() { alert("Disagreed"); }
);

var newFunct = new Function('a,b', ' return a+b; '); // Function(params, code):

var result = sum(1, 2);
alert( result ); // 3









//get a random number within the range  min <= rand <= max
var rand = min + Math.floor(Math.random() * (max + 1 - min));


//check for NaN. two ways
var n = 0/0;
isNaN(n); //if returns true then n is NaN or string 
if (n !== n) alert( 'n = NaN!' ); // in JavaScript only NaN does not equal to itslef 


//check for even number
function isEven(n) {
  return !(n % 2);
}

//check if the variable is integer 
function isInteger(num) {
  return (num ^ 0) === num;
}

//round the number. Will literally cut the decimals 
function round(num) {
  return (num ^ 0);
  //return ~~num;
}


//sort array of numbers 
// By default, the sort() method sorts the values as strings in alphabetical and ascending order. 

var arr = [5, 2, 1, -10, 8];

function compare(a, b) {
  return a - b;
}

function compareReversed(a, b) {
  return b - a;
}

alert( arr.sort(compareReversed)) ;

	
	
//get the sum of the Max sub array - Kadane's algorithm
function getMaxSubSum(arr) {
  var maxSum = 0,
    partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

alert (getMaxSubSum(arr));


//find the prime numbers - Sieve of Eratosthenes algorithm 
// step one - create an array with true values
var arr = [];

for (var i = 2; i < 100; i++) {
  arr[i] = true
}

// step 2 - start with the first prime number
var p = 2;

do {
  // step 3 - eliminate all the numbers that are multiples of the chosen prime number 
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  // step 4 - find the next available prime number
  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p < 100); // step 5 - keep going till the square of prime number is inside the array

// save the prime numbers in the string then show them in alert
var printPrimeNum = "";
for (var j = 2; j < 10; j++) {
	if (arr[j]) {
		printPrimeNum = printPrimeNum + j + ", ";
	}
}
alert (printPrimeNum);



//Filter the array by given range 

function filterRangeInPlace(arr, a, b) {

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (val < a || val > b) {
      arr.splice(i--, 1);
    }
  }

}

var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
alert( arr ); // [3, 1]



// create a list class in JavaScript

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  var tmp = list;

  while (tmp) {
    alert( tmp.value );
    tmp = tmp.next;
  }

}

// 
function printReverseList(list) {
  var arr = [];
  var tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

// recursion
function printReverseListRec(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert( list.value );
}

