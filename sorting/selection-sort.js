function selectionSort(arr){
  let minIndx;
  for(let i = 0; i < arr.length; i++){
    minIndx = getIndexOfMin(arr, i, arr.length-1);
    swap(arr, i, minIndx);
  }
  return arr;
}

function swap(arr, indx1, indx2){
  let tmp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = tmp;
}

function getIndexOfMin(arr, start, end){
  let min = start;
    for(let i = start+1; i <= end; i++){
      if(arr[i] < arr[min]){
        min = i;
      }
    }
  return min;
}

selectionSort([2,6,1,8,9,10]);




