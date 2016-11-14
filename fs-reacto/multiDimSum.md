mensional Array Sum
<a href="http://slides.com/seemaullal/reacto-3" target="_blank">Slides</a>
### Write a function that computes the sum of a multi-dimensional array. ###

#### Problem ####
You have an array that consists of subarrays that are of varying length. Write a function to find the sum of each element in the array. You may not use any Array methods such as reduce (the only Array method you can use is for checking the type of an element).


#### Examples ####
``` javascript
multiDimSumRec([1, 2, 4, [2, [4, 6], 8], 6]) // 33
multiDimSumRec([1, 2, 3, 4]); // 10
multiDimSumRec([[2, 4] , [1], [4, 2, 1]]); // 14
multiDimSumRec([2, [3, 4], 5, [-3, [6, [ 4, 5 ]]]]); // 26
```

#### Solution ####
```javascript
// none recursive solution
function multiDimSumNoneRec(arr) {
  let sum = 0, 
    currentElm;
    
  while (arr.length) {
    currentElm = arr.pop();
    if ( Array.isArray(currentElm))
      arr = arr.concat(currentElm)
    else 
      sum += currentElm;
  }
  
  return sum;
}

// recursive solution
function multiDimSumRec(arr) {
  let sum = 0,
    length = arr.length;
  for ( let i = 0; i < length; i++ ) {
    if (Array.isArray(arr[i]))
      sum += multiDimSumRec(arr[i])
    else
      sum += arr[i]
  }
  return sum;
} 

```
