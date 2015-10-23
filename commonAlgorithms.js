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


//get a random number within the range  min <= rand <= max
var rand = min + Math.floor(Math.random() * (max + 1 - min));


//check for NaN. two ways
var n = 0/0;
isNaN(n); //if returns true then n is NaN or string 
if (n !== n) alert( 'n = NaN!' ); // in JavaScript only NaN does not equal to itslef 


//check dor even number
function isEven(n) {
  return !(n % 2);
}

