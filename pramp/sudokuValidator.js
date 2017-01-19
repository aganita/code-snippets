//TODO under construction
function sudokuValidator(arr){
   
   for (let i = 0; i < 9; i++)
      for (let j = 0; j < 9; j++)
         if (!arr[i][j]) 
           break;
   
    if (i === 8 && j === 8) return true; 
   
   // i = row
   // j = column
   
   let helpArr = [1,2,3,4,5,6,7,8,9];
   // check the row
   for (let k = 0; k < 9; k++ )
      if (arr[i][k]) 
         helpArr[arr[i][k]-1] = 0;
   
   // check the column   
   for (let k = 0; k < 9; k++ )
      if (arr[k][j]) 
         helpArr[arr[k][j]-1] = 0;
      
   //check the sub sq
   for (let k = 0; k < 9; k++ )
      
      
   // helpArr [1,2,0,0,0,0,0,0,0]
   
   
   for (let k = 0; k < 9; k++ )
     if (helpArr[k]) {
         arr[i][j] = helpArr[k];
         return sudokuValidator(arr);   
     }
   
    return false;    
   
};