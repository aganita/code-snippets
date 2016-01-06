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


/// ELEGANT WAY TO USE REDUCE//////////////////////////
// need to get array of partial sums like getPartialSums( [1,2,3,4,5] ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
var arr = [1,2,3,4,5];

function getPartialSums(arr){
    var resArr =[];
    arr.reduce(function(sum, current){
       resArr.push(sum + current);
       return sum + current;
    }, 0);
    return resArr;
}

console.log(getPartialSums(arr)); // 1, 3, 6, 10, 15

///////////////////////////////////////////////////////////


// find the min angle between two hands of a clock
var clock = function(hours, minutes) {
    return Math.abs(30 * (hours-(minutes/5)) + (minutes/2)) ;
}

clock (9, 30);


// from GH admission test. Problem 4
function divisor_match(divisor_array, low, high) {
    var arr = [];
    var all_match_counter = 0;
    
    var resArr = [];
    
    // create and array with all the numbers from low to high 
    for (var i = low; i<=high; i++) {
        arr.push(i);
    } 
    
    for (i = 0; i < arr.length; i++ ) {
        all_match_counter = 0;
        for (var j = 0; j < divisor_array.length; j++){
            if (arr[i]%divisor_array[j] === 0) {
                all_match_counter += 1;
            }
        }
        if (all_match_counter === divisor_array.length) {
            resArr[i] = (i +1) + " all_match";
        }
        else if (all_match_counter > 0) {
            resArr[i] = (i + 1) + " one_match";
        }
        else resArr[i] = (i + 1);
    }
    
    for (i = 0; i < resArr.length; i++ ) {
        console.log (resArr[i]);
    }
}


divisor_match([2, 3], 1, 7);
// 1
// 2 one_match
// 3 one_match
// 4 one_match
// 5
// 6 all_match
// 7




// set up a function counter
// solution #1
function makeCounter() {
  var currentCount = 1;

  return { // возвратим объект вместо функции
    getNext: function() {
      return currentCount++;
    },

    set: function(value) {
      currentCount = value;
    },

    reset: function() {
      currentCount = 1;
    }
  };
}

var counter = makeCounter();

alert( counter.getNext() ); // 1
alert( counter.getNext() ); // 2

counter.set(5);
alert( counter.getNext() ); // 5

//solution #2 - preferred 
function makeCounter() {
  var currentCount = 1;

  // возвращаемся к функции
  function counter() {
      return currentCount++;
    }

  // ...и добавляем ей методы!
  counter.set = function(value) {
    currentCount = value;
  };

  counter.reset = function() {
    currentCount = 1;
  };

  return counter;
}

var counter = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2

counter.set(5);
alert( counter() ); // 5





// get sum
function sum(a) {
  return function(b) {
    return a + b; // возьмет a из внешнего LexicalEnvironment
  };
}

alert( sum(1)(2) );
alert( sum(5)(-1) );

// get sum, generic version
function sum(a) {
  var currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function() {
    return currentSum;
  };
  return f;
}
alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15


////// fun facts about objects ////////
var obj = {
  go: function() { alert(this) }
}
(obj.go)()  // error cuz ; is missing after before (obj.go)()


"use strict"
var obj, method;
obj = {
  go: function() { alert(this); }
};
obj.go();            // (1) object
(obj.go)();          // (2) object
(method = obj.go)();      // (3) undefined
(obj.go || obj.stop)(); // (4) undefined

var name = "";
var user = {
  name: "Василий",
  export: this // here "this" points to global element 
};
alert( user.export.name ); // will get empty string and with "use strict" - undefined 


var name = "";
var user = {
  name: "Ani",
  export: function() {
    return this;
  }
};
alert( user.export().name ); // will return Ani




alert( [] == [] ); // false   object equals only to itself, never to another object 
alert( [] == ![] ); // true   ![] -> false -> 0  [] -> '' -> 0  array object does not have 


alert(['x'] == 'x'); // true   ['x'] -> 'x'

new Date(0) - 0 = 0 // (1)
new Array(1)[0] + "" = "undefined" // (2)
({})[0]  = undefined // (3)
[1] + 1 = "11" // (4)
[1,2] + [3,4] = "1,23,4" // (5)
[] + null + 1 = "null1" // (6)
[[0]][0][0] = 0 // (7)
({} + {}) = "[object Object][object Object]" // (8)



//// Creating objects using a cinstructor

function Animal(name) {
  this.name = name;
  this.canWalk = true;
}
var animal = new Animal("rabbit");

// the constructor can be called with or without ()
var animal = new Animal; //
var animal = new Animal();



// create a calculator constructor

function Calculator(){
    
    this.read = function(){
        this.a = prompt("a = ", 0);
        this.b = prompt("b = ", 0);
    };
    this.sum = function() {
        return +this.a + +this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
};


var cal = new Calculator();
cal.read();

console.log("cal.sum" + cal.sum());
console.log("" + cal.mul());