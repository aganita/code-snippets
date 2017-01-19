var mem = {};

function getHops(arr, n){
  let sum = 0;
  if (n === 0)
    return 1;
  
  for (let i = 0; i < arr.length; i++){
    if (n-arr[i] >= 0)
      if (mem[n-arr[i]]) sum += mem[n-arr[i]];
      else {
        sum += getHops(arr, n-arr[i]);
        mem[n-arr[i]] = sum;
      }

  }
  
  return sum;
}



getHops([1,2,3], 37) //3831006429
getHops([1,2,3], 5) //13