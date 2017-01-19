// array is in ascending order. no dups
function magicIndex(arr, start=0, end=arr.length-1){
  if (start > end) return;
  
  let midIndx = Math.floor((end + start)/2);
  if (arr[midIndx] === midIndx) return midIndx;
  
  if (arr[midIndx] > midIndx)
    return magicIndex(arr, start, midIndx-1);
  else 
    return magicIndex(arr, midIndx+1, end);
}

magicIndex([-3, -2, 1, 3, 5, 8]); // 3

magicIndex([-3, -2, 1, 4, 5, 8]); // undefined

// array is in ascending order. with dups
function magicIndexDup(arr, start=0, end=arr.length-1){
  if (start > end) return -1;
  let left = -1,
      right = -1;
  
  let midIndx = Math.floor((end + start)/2);
  if (arr[midIndx] === midIndx) return midIndx;
  
  left = magicIndexDup(arr, start, Math.min(midIndx-1, arr[midIndx]));
  if (left >= 0) 
    return left;
  
  right = magicIndexDup(arr, Math.max(midIndx+1,arr[midIndx]), end);
  
  return right;
}

magicIndexDup([0, 1, 1, 1, 5, 8]); // 0

magicIndexDup([-3, -2, 1, 4, 5, 8]); // -1