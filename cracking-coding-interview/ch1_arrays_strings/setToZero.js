function setToZero(mtx){
  let length = mtx.length,
      rows = new Array(length),
      columns = new Array(length);
      
  // get the coordinates for 0 values     
  for( let i = 0; i < length; i++){
    for( let j = 0; j < length; j++)
      if(mtx[i][j] === 0){
        rows[i] = 0;
        columns[j] = 0;
      }
  }   
  
  // set to the 0 values based on coordinates
  for( let i = 0; i < length; i++){
    for( let j = 0; j < length; j++)
      if(rows[i] === 0 || columns[j] === 0){
        mtx[i][j] = 0;
      }
  }
     
  return mtx; 
}

let mtx2 = [[1, 0, 3], [4, 5, 6], [7, 8, 9]];
setToZero(mtx2);