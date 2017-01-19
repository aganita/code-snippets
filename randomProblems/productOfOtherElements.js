// You have an array of integers, and for each index you want to find the product 
//of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() 
//that takes an array of integers and returns an array of the products.
// Do not use division

function findSum(arr){
  let length = arr.length,
      arr1 = [],
      arr2 = [],
      runningProd = 1;

  
  for ( let i = 0; i < length; i++ ){
    arr1.push(runningProd);
    runningProd *= arr[i];
  }
  runningProd = 1;
  
  for ( let i = length-1; i >= 0; i-- ){
    arr2.unshift(runningProd);
    runningProd *= arr[i];    
  }
  
  for ( let i = 0; i < length; i++ ){
    arr[i] = arr1[i] * arr2[i];
  }
  
  return arr;
}

findSum([3, 7, 1, 5]); //[ 35, 15, 105, 21 ]