var counter = 0;

function makeArr(row, column){
  let mem = new Array(row+1);
  for (let i = 0; i < mem.length; i++){
    mem[i] = new Array(column+1);
    for (let j = 0; j < mem.length; j++){
      mem[i][j] = 0;
    }
  }
  return mem;
}

mem = makeArr(100, 25);

function coins(arr, n, prev){
  if( !prev ) prev = Number.MAX_SAFE_INTEGER;
  if (n === 0){
    return 1;
  }
  let sum = 0;
  for (let i=0; i < arr.length; i++){
    // counter++; // count iterations time complexity
    if (arr[i]<=prev && arr[i]<=n){
      if (mem[n-arr[i]][arr[i]])
        sum += mem[n-arr[i]][arr[i]];
      else{
        sum += coins(arr, n-arr[i], arr[i]);
      }
    }
  }
  mem[n][prev] = sum;
  return sum;
}

coins([25, 10, 5, 1], 100);
// console.log(counter);