function mergeSort (array) {
  if (array.length < 2) return array; // base case
  var splits = split(array),
      left = splits[0],
      right = splits[1];
  return merge(mergeSort(left), mergeSort(right)); // merge sorted!
}

function split(array){
  return [array.slice(0, Math.floor(array.length/2)), array.slice(Math.floor(array.length/2))];
}

function merge(arr1, arr2){
  let result = [];
  while (arr1.length && arr2.length){
    if (arr1[arr1.length-1] > arr2[arr2.length-1]){
      result.push(arr1.pop());
    }else{
      result.push(arr2.pop());
    }
  }
  let restOfArr = arr1.length > 0 ? arr1 : arr2;
  while (restOfArr.length){
    result.push(restOfArr.pop());
  }
  return result.reverse();
}

// merge([1, 2, 6, 15, 60, 80], [-1, 0, 5, 7, 9, 100, 200]);
// merge([1,5], [100])
// split([1, 2, 6, 15, 60, 80, 100, 4, 5])
mergeSort([1, 2, 6, 15, 88, 60, 80, -1, 0, 5, 7, 9, 100]);
// mergeSort([100, 1, 5, 0, 6, -1])
