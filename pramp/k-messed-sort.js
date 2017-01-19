// Given an array arr of length n where each element is at most k places away from its sorted position,
// Plan and code an efficient algorithm to sort arr.
// Analyze the runtime and space complexity of your solution.

// Example: n=10, k=2. The element belonging to index 6 in the sorted array, may be at indices 4, 5, 6, 7 or 8 on the given array.

// selection sort solution
function arraySort(arr, k) {
   let minIndx = 0;
   for (let i = 0; i < arr.length-k; i++ ){
      minIndx = findMin(arr, i, i + k);
      swap(arr, i, minIndx);  
   }
   return arr;
} // O(n)  n - length of array 

function findMin(arr, start, end){
   let minIndx = start;
   end = Math.min(arr.length-1, end);
   for (let i = start; i <= end; i++){
      if (arr[i] < arr[minIndx])
         minIndx = i;
   }
   return minIndx;
} // O(k) k - const


function swap(arr, start, end){
   let temp = arr[start];
   arr[start] = arr[end];
   arr[end] = temp;   
} //O(1)


arraySort([0,2,4,1,3], 2); // O(kn) O(n)


// quick sort solution
function quickSort2 (array, minIndex, maxIndex, k) {
  if (maxIndex - minIndex < 1) return;
  let pivot = maxIndex;
  let wall = maxIndex;

  for (var i = maxIndex - 1; i >= minIndex && maxIndex - wall < k; i--) {
    if (array[i] > array[pivot]) {
      if (array[i] !== array[wall - 1]) {
        var swap = array[wall - 1];
        array[wall - 1] = array[i];
        array[i] = swap;
      }
      wall--;
    }
  }
  if (array[wall] !== array[pivot]) {
    var swap = array[wall];
    array[wall] = array[pivot];
    array[pivot] = swap;
  }

  quickSort2(array, minIndex, wall - 1, k);
  quickSort2(array, wall + 1, maxIndex, k);
}


var myArr = [4, 8, 6, 2, 7, 14, 19, 20, 16, 18];
quickSort2(myArr, 0, myArr.length-1, 4);
console.log(myArr);