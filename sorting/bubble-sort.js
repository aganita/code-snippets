function bubbleSort(arr) {  
  for (let i = (arr.length - 1); i >= 0; i--) {
    for (let j = (arr.length - i); j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
          swap(arr, j, j-1);
      }
    }
  }
  return arr;
}

function swap(arr, indx1, indx2){
  let tmp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = tmp;
}

bubbleSort([2,7,1,8,0,3,2]);




