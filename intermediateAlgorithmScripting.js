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



