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


