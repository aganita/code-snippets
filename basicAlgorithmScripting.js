// REVERSE STRING

function reverseString1(str) {
  var result = str.split("").reverse().join("");
  return result;
}

function reverseString2(s) {
  var o = "";
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function reverseString3(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
    return o;
}
// more examples on reverese string: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/


// FACTORIALIZE USING RECURSION

function factorialize(num) {
  if (num == 1 || num == 0)
    return 1;
  else return num * factorialize(num-1);
}


// CHECK FOR PALINDROMES
//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing

function palindrome1(str) {
  return (str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("").reverse().join("")) ;
}

function palindrome2(str) {
  // remove all non-alpha-numeric characters and make the string non case sensetive 
  var strArray = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("");
  
  // loop through the array and check if the first element equals the last element and so on
  for (var i = 0; i < strArray.length/2; i++) {
    if (strArray[i] != strArray[strArray.length - 1 - i])
      return false;
  } 
  return true;
}


// LENGTH OF THE LONGEST WORD IN A STRING

function findLongestWord(str) {
  var resultLength = 0;
  var stringArray = str.split(" ");
  
  for (var i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
    if (stringArray[i].length > resultLength) {
      resultLength = stringArray[i].length;
    }
  }
  return resultLength;
}


// TITLE CASE A SENTENCE
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    var strArray = str.toLowerCase().split(" ");
    
    for (var i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    }
    
    return strArray.join(" ");
}


// RETURN THE LARGEST NUMBERS IN ARRAY
//Return an array consisting of the largest number from each provided sub-array. 
function compare(a,b) { return b-a;}
function largestOfFour(arr) {
  var resultArray = [ ];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].sort(compare));
    console.log(arr[i][0]);
    resultArray.push(arr[i][0]);
  }
  return resultArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// CONFIRM THE ENDING 
// Check if a string (first argument) ends with the given target string (second argument).
function end(str, target) {
    return (str.slice(-target.length) === target);
}


//REPEAT A STRING
//Repeat a given string (first argument) n times (second argument). 
//Return an empty string if n is a negative number.
function repeat(str, num) {
    if (num < 0) return "";
    return str.repeat(num);
}


//CHUNKY MONKEY
//Write a function that splits an array (first argument) 
//into groups the length of size (second argument) and returns them as a multidimensional array.
function chunk(arr, size) {
  var subArray = [];
  var resultArray = [];
  for ( var i = 0; i < arr.length; i +=size ) {
    subArray = arr.slice(i, i+size);
    resultArray.push(subArray);
  }
  return resultArray;
}


//SLASHER FLICK
//Return the remaining elements of an array 
//after chopping off n elements from the head.
function slasher(arr, howMany) {
  if (arr.length < howMany) return [];    
  var resultArray = [];
  resultArray = arr.slice(-(arr.length - howMany));
  return resultArray;
}


//MUTATIONS
//Return true if the string in the first element of the array contains 
//all of the letters of the string in the second element of the array.
function mutation(arr) {
  var mainStr = arr[0].toLowerCase().split("");
  var subStr = arr[1].toLowerCase().split("");
  
  for (var i = 0; i < subStr.length; i++) {
      if (mainStr.indexOf(subStr[i]) < 0)
      return false;
  }
  return true;
}


//FALSY BOUNCER
//Remove all falsy values from an array.
//Falsy values in javascript are false, null, 0, "", undefined, and NaN.
function filterFalsy (a) {
    if (a!==a) return false; //check if NaN. in JavaScript only NaN does not equal to NaN
    switch (a) {
        case false:
            return false;
        case "":
            return false;
        case null:
            return false;
        case 0:
            return false;
        case undefined:
            return false;
    }
    return true;
}

function bouncer(arr) {
    console.log (arr.filter(filterFalsy));
    return arr.filter(filterFalsy);
}

