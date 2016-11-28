// TODO finish the code 
function pramp(arr) {
   
   let helpArr = [],
       length = arr.length,
       max = 0,
       min = 0;
   
   for ( let i = 0; i <length; i++){
      if (max < arr[i]) max = arr[i];
      if (min > arr[i]) min = arr[i];
   }
   
   if ( (max - min) === (length - 1)) return null;
   
   return findNum(arr, min, max);
   
}

function findNum(arr, min, max){
   let helpArr = [],
       length = arr.length;
   
   for ( let i = 0; i < length; i++){
      helpArr[arr[i]] = arr[i];
   }
   // [0,9,20,100]
   
   for (let i = min; i < max; i++){   
      if (helpArr[i]) return i;
   }
}
