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




// remove anagrams from an array 
function aclean(arr) {
  // этот объект будем использовать для уникальности
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    // split the sting to letters, sort, then concatinate back
    var sorted = arr[i].toLowerCase().split('').sort().join(''); 

    // save only objects with unique key
    obj[sorted] = arr[i]; 
  }

  var result = [];

  // now in obj we have only one value for each key 
  for (var key in obj) result.push(obj[key]);

  return result;
}

var arr = ["ani", "play", "ina", "dog", "GOD", "night"];

alert( aclean(arr) );



///// USE MAP with callback///////////// 
var arr = ["Hello", "world!!!"];
// get the legths of array elements 
function getLength(arr){
    var arrLength = [];
    for (var i = 0; i < arr.length; i++) {
        arrLength[i] = arr[i].length;
    }
    return arrLength;
}
console.log("array of item lengths " + getLength(arr)); // 5, 8

// get the legths of array elements using map 
function getLengthUseMap(arr){
    return arr.map(function(item){
        return item.length;
    });
}
console.log ("array of item lengths " + getLengthUseMap(arr));  // 5, 8

//////////////////////////////////



