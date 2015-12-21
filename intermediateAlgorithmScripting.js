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
// first solution
function diff(arr1, arr2) {
  var newArr = [];
  
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    } 
  }

  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
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
    // Build the roman numerial while the decimal vaue from decimalNumArray is smaller or equal num
    while (decimalNumArray[index] <= num) {
      // Add the roman numeral to the romanNumber array
      resultRomanNumber.push(romanNumArray[index]);
      // Decrease num by the decimal equivalent
      num -= decimalNumArray[index];
    }
  }

// String concatenation is slower and causes major performance problems in older versions of IE. Manipulating array is more efficient
// Therefore it is highly recommended to use .push then use join("") to return a string instead of array
  return resultRomanNumber.join("");
};

convert(36);
