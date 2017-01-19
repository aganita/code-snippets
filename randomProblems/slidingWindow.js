function slidingWindow(arr, k){
  let maxArr = [],
      length = arr.length,
      q = [arr[0]];
      
  for (let i = 1; i < k; i++){
    while (q[q.length-1] < arr[i]) 
      q.pop();
    q.push(arr[i]);
  }
  
  for (let i = k; i < length; i++){
    maxArr.push(q[0]);
    if (arr[i - k] === q[0])
      q.shift();
    console.log('max array', maxArr);
    while (q[q.length-1] < arr[i]) 
      q.pop();
    q.push(arr[i]);
  }
  
  maxArr.push(q[0]);
  return maxArr;
}

slidingWindow([11, 3, 7, 6, 8], 3);