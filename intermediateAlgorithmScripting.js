//SUM ALL NUMBERS IN A RANGE
//We'll pass you an array of two numbers. 
//Return the sum of those two numbers and all numbers between them.
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i<= Math.max(...arr); i++)
    sum += i;  
  return sum;
}

sumAll([5, 10]);


//DIFF TWO ARRAYS
//Compare two arrays and return a new array with 
//any items only found in one of the original arrays.
// first solution - runs about two times faster than second solution
function diff(arr1, arr2) {
  var newArr = [];
  // looping through arr1 to detect if element of arr1 exists in arr2
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      // pushing every unique to arr1 element to newArr
      newArr.push(arr1[i]);
    } 
  }
  // looping through arr2 to detect if element of arr2 exists in arr1
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      // pushing every unique to arr2 element to newArr      
      newArr.push(arr2[j]);
    } 
  }
  
  return newArr;
}

// second solution 
function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


//ROMAN NUMERAL CONVERTER
//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.
var convert = function(num) {

  // Create arrays with default conversion with matching indices
  var decimalNumArray = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumArray = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var resultRomanNumber = [];

  // Loop through the indices of the decimalNumArray array
  for (var index = 0; index < decimalNumArray.length; index++) {
    // Build the roman numeral while the decimal value from decimalNumArray is smaller or equal num
    while (decimalNumArray[index] <= num) {
      // Add the roman numeral to the romanNumber array
      resultRomanNumber.push(romanNumArray[index]);
      // Decrease num by the decimal equivalent
      num -= decimalNumArray[index];
    }
  }

// String concatenation is slower and causes major performance problems in older versions of IE. 
// Manipulating array is more efficient
// It is highly recommended to use .push then use join("") to return a string
  return resultRomanNumber.join("");
};

convert(36);





// WHERE ART THOU 
//Make a function that looks through an array of objects (first argument) 
//and returns an array of all objects that have matching property and value pairs (second argument). 
//Each property and value pair of the source object has to be present in the object from 
//the collection if it is to be included in the returned array.


function where(collection, source) {
  var arr = [];
  // get all the keys from source
  var sourceKeyArr = Object.keys(source);
  // in callback function iterate through sourceKeyArr to find key-value pair in collection 
  arr = collection.filter(function(obj){
    for (var i = 0; i < sourceKeyArr.length; i++){
      if (!obj.hasOwnProperty(sourceKeyArr[i]) || obj[sourceKeyArr[i]] != source[sourceKeyArr[i]] )
        return false;
      }
      return true;
    });

  return arr;
}

where([{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



// SEARCH AND REPLACE
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it. 
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


function myReplace(str, before, after) {
    // match the casing of source parameter to target and return target
    function matchCasing(source, target) {
        var targetArr = target.split("");
        var sourceArr = source.split("");
       
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
            // use regular expression to determine if sourseArr[i] is upper case
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            else targetArr[i] = targetArr[i].toLowerCase();
        } 
        return (targetArr.join(""));
    }
    
    // replace "before" with "after" with "before"-casing 
    return str.replace(before, matchCasing(before, after));
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


// PIG LATIN
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) 
// of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.

function translate(str) {
    var strArr = [];
    var tmpChar;
    
    // check if the char is consonant using regex
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }
    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else 
        strArr = str.split("");
        
    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
    
 return strArr.join("")+"ay";
}

translate("consonant");


//DNA PAIRING
//The DNA strand is missing the pairing element. 
//Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. 
//Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//The character and its pair are paired up in an array, 
//and all the arrays are grouped into one encapsulating array.

function pair(str) {
    // convert input string to upper case and split into an array of letters
    var strArr = str.toUpperCase().split("");    
    // create an map with DNA key pairs 
    var dnaPairMap = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    var resArr = [];
    // insert into 2d resArr DNA pairs if key-value exists in the map
    for (var i = 0; i < strArr.length; i++) {
        if (dnaPairMap.hasOwnProperty(strArr[i]))
            resArr[i] = [strArr[i], dnaPairMap[strArr[i]]];
    }
    
 return resArr;
}

pair("GCkjjGKg");



// MISSIGN LETTER
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);

    if ( code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code-1);
    }  
  }
  return undefined;
}
fearNotLetter("abce");


// MISSIGN LETTERS
// Find the missing letter sequence in the passed letter range and return the complete version.
function fearNotLetter(str) {
    var strArr = str.split("");
    // sort the array incase the letter sequence is not sorted
    // if collback is not defined for sort(), 
    // by default JavaScript will sort items as strings -> by Unicode numbers
    strArr = strArr.sort();
    var tmpStr, j;
    var codeOfCurrentLetter = 0; 
    var codeOfFirstLetter = strArr[0].charCodeAt(0);

    for (var i = 0; i < strArr.length; i++) {
        codeOfCurrentLetter = strArr[i].charCodeAt(0);
        if (codeOfCurrentLetter !== codeOfFirstLetter + i){
            tmpStr = "";
            // construct tmpStr of missing letters
            for (j = codeOfFirstLetter + i; j < codeOfCurrentLetter ; j++){
                tmpStr += (String.fromCharCode(j));
            }
            // insert the tmpStr into the main array as one element
            strArr.splice(i, 0, tmpStr);
        }
    }
    // return a string out of a new array
    return strArr.join("");
}
fearNotLetter("abcefh");


// BOO WHO
//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

function boo(bool) {
  return typeof bool === 'boolean';
}

boo(null);


// SORTED UNION 
//Write a function that takes two or more arrays and returns a new array 
//of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included 
//in their original order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, 
//but the final array should not be sorted in numerical order.
//Check the assertion tests for examples.

// Solution #1 - without any specific JavaScript functions 
function unite(arr1, arr2, arr3) {
    var argArr = [];
    // concatenate all items of arguments object into one array
    for (var i = 0; i < arguments.length; i++) {
        argArr = argArr.concat(arguments[i]);
    }
    
    // filter out all non unique elements of the array 
    var resArr = [];
    for (var j = 0; j < argArr.length; j++) {
        if (resArr.indexOf(argArr[j]) === -1) {
           resArr.push(argArr[j]);
        }
    }
    
  return resArr;
}

// Solution #2 - using filter() and reduce() functions 
function unite(arr1, arr2, arr3) {

    //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    
    //Use reduce function to flatten the array
    var resArr = args.reduce(function(arrA,arrB){
        //Apply filter to remove the duplicate elements in the array
        return arrA.concat(arrB.filter(function(i){
            return arrA.indexOf(i) === -1;
            }));
        });

   return resArr;                    
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);  // [ 1, 3, 2, 5, 4 ]


// CONVERT HTML ENTITIES
//Convert the characters 
//"&", "<", ">", '"' (double quote), and "'" (apostrophe), 
//in a string to their corresponding HTML entities.

function convert(str) {
    // create map object for HTML elements
    var html = {
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      "\"":"&quot;",
      "\'":"&apos;"
    };
    
    return str.replace(/&|<|>|"|'/gi, function(matched){
            return html[matched];
        });
}

// SUM ALL ODD FIBONACCI NUMBERS
//Return the sum of all odd Fibonacci numbers up to 
//and including the passed number if it is a Fibonacci number.
//The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, 
//and each subsequent number is the sum of the previous two numbers.
//As an example, passing 4 to the function should return 5 
//because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
// solution #1
function sumFibs(num) {
  
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }
  
  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) { 
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });
  
  
  return res;
}

sumFibs(4); // 5

// solution #2
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}



// SUM ALL PRIMES
//Sum all the prime numbers up to and including the provided number.
//A prime number is defined as having only two divisors, 1 and itself. 
//For example, 2 is a prime number because it's only divisible by 1 and 2. 
//1 isn't a prime number, because it's only divisible by itself.
//The provided number may not be a prime.


function sumPrimes(num) {
    
    // create an array of all prime numbers 
    function primeNumbers(lastPrime) {
        // step 1 - create an array of all numbers with true value till lastPrime 
        var primes = [];
        for(var i = 2; i <= lastPrime; i++) {
            primes[i] = true;
        }
        
        // step 2 - find the next available prime number
        var limit = Math.sqrt(lastPrime);
        for(i = 2; i < limit; i++) {
            if(primes[i] === true) {
                // eliminate all the numbers that are multiples of the chosen prime number 
                for(var j = i * i; j <= lastPrime; j += i) {
                    primes[j] = false;
                }
            }
        }
        // create an array pf prime numbers and return it
        var resArr = [];
        for(i = 2; i <= lastPrime; i++) {
            if(primes[i] === true) {
                resArr.push(i);
            }
        }
        
        return resArr;
    }
    
    
    // get the array of prime numbers 
    var tmpArr = primeNumbers(num);
    
    // return the sum of array
    return tmpArr.reduce((prev, curr) => prev + curr);
}


sumPrimes(7);


//ARGUMENTS OPTIONAL
//Create a function that sums two arguments together. 
//If only one argument is provided, then return a function that expects one argument and returns the sum.
//For example, add(2, 3) should return 5, and add(2) should return a function.
//Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = add(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function add() {
  var args = new Array(arguments.length);
  //Storing the arguments in an array
  for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }
 //Check for the arguments length
 if(args.length == 2){
    //If there are two arguments,check for the type of both arguments
    //Use typeof to check the type of the argument(both should be numbers)
    if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
      return undefined;
      }
    return args[0]+args[1];
   }
 //When only one argument is provided
 if(args.length == 1){
     a= args[0];
     //Check the  argument using typeof 
    if(typeof a!=='number'){
        return undefined;
      }
    else{
       //Making use of closures 
       return function(b){
       //Checking the second argument 
         if(typeof b !=='number'){
           return undefined;
           }
         else
           return a+b;
          };
      }
    }
}
add(2,3);

// SMALLEST COMMON MULTIPLE
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
//as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {
    // create an array of all numbers 
    var newArr =[];
    for(i = Math.max(...arr); i >= Math.min(...arr); i--) newArr.push(i);
    // calculate gcd of two numbers
    function gcd(a,b){
        var t = 0, gcd = b;
        while (a%gcd) {
           a = a % gcd;
           t = a;
           a = gcd;
           gcd = t;
        }
        return gcd;
    }
    // calculate lcm of two numbers
    function lcm(a,b){
        return a/gcd(a,b) * b;
    }
    // calculate lcm of an array
    return newArr.reduce(function(a,b){
        return lcm(a,b);
    });
    
}
smallestCommons([1,5]);


// FINDERS KEEPERS
//Create a function that looks through an array (first argument) 
//and returns the first element in the array that passes a truth test (second argument).

function find(arr, func) {
    if (!Array.isArray(arr)) return "First argument is not array";
    
    return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });



// DROP IT
//Drop the elements of an array (first argument), 
//starting from the front, until the predicate (second argument) returns true.
//Return the rest of the array, otherwise return an empty array.
// solution #1
function drop(arr, func) {
  if (!Array.isArray(arr)) return "the first argument is not an array";
  if (typeof func !== "function") return "The second argument is not a function";
  
  var indefOfFirstTrueElement = arr.findIndex(func);
  if (indefOfFirstTrueElement === -1) return [];
  
  return arr.slice(indefOfFirstTrueElement);
}
// solution #2
function drop(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 && arr.findIndex(func), arr.length);
}
drop([1, 2, 3, 4], function(n) {return n >= 3;}); //should return [3, 4].
drop([0, 1, 0, 1], function (){}); //should return [1, 0, 1]



// STEAMROLLER
//Flatten a nested array. You must account for varying levels of nesting.
function steamroller(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten);
  }, []);
}

steamroller([1, [2], [3, [[4]]]]);

// BINARY AGENT
//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.
function binaryAgent(str) {
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



// EVERYTHING BE TRUE
//Check if the predicate (second argument) 
//is truthy on all elements of a collection (first argument).
//Remember, you can access object properties through 
//either dot notation or [] notation.
// solution #1
function every(collection, pre) {
  var bool = true;
  for (var i = 0; i < collection.length; i++){
     if (!(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre]))) bool = false;
  }
  return bool;
}
// solution #2

function every(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");


