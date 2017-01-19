function procAdj(arr, i, j) {
  let procArr = [[i,j]],
    currIndx;
  while (procArr.length > 0){
    currIndx = procArr.pop();
    arr[currIndx[0]][currIndx[1]] = 0;
    
    if (arr[Math.max(currIndx[0]-1, 0)][currIndx[1]] === 1)
      procArr.push([currIndx[0]-1, currIndx[1]]);
      
    if (arr[Math.min(currIndx[0]+1, arr.length-1)][currIndx[1]] === 1)
      procArr.push([currIndx[0]+1, currIndx[1]]);
      
    if (arr[currIndx[0]][Math.max(currIndx[1]-1, 0)] === 1)
      procArr.push([currIndx[0], currIndx[1]-1]);
    
    if (arr[currIndx[0]][Math.min(currIndx[1]+1, arr[currIndx[0]].length-1)] === 1)
      procArr.push([currIndx[0], currIndx[1]+1]);
  }

}


function islandNum(arr) {
  let rows = arr.length,
    columns = arr[0].length,
    inslandCount = 0;
  
  for (let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
      if (arr[i][j] === 1) {
        procAdj(arr, i, j);
        inslandCount++;
      }
    }
  }
  return inslandCount;
}


let arr = [[0,  1,  0,  1,  0],
      [0,  0,  1,  1,  1],
      [1,  0,  0,  1,  0],
      [0,  1,  1,  0,  0],
      [1,  0, 1,  0,  1]];
      
islandNum(arr);  



// iterate through mtx


// if I find 1 process all the neighbours

function islandCount(mtx){
   let counter = 0; 
   for (let i = 0; i < mtx.length; i++)
      for (let j = 0; k < mtx[0].length; j++){
         if (mtx[i][j] === 1) {
            processIsland(mtx, i, j);
            counter++;
         }
      }   
   return counter;
}

// function processIsland(mtx, row, column){
//    mtx[row][column] = 0;
//    let arrayOfCoord = [];
//    if ( row-1 >= 0 ) arrayOfCoord.push([row-1, column]);
//    if ( column+1 < mtx[0].length ) arrayOfCoord.push([row, column+1]);
//    if ( row+1 < mtx.length ) arrayOfCoord.push([row+1, column]);
//    if ( column-1 >=0 ) arrayOfCoord.push([row, column-1]);
   
//    for (let i = 0; i < arrayOfCoord; i++){
//       if (mtx[arrayOfCoord[0]][arrayOfCoord[1]] === 1)
//          processIsland(mtx, arrayOfCoord[0], arrayOfCoord[1]);
//    }
// }

// // Vladimir Churyukin
// // vladich@gmail.com

// function processIsland(mtx, row, column){
//    let arrayOfCoord = [[row, column]],
//        x, 
//        y;
//    while(arrayOfCoord.length){
//          current = arrayOfCoord.pop();
//          x = current[0];
//          y = current[1];
//          mtx[x][y] = 0;
    
//       if ( x-1 >= 0 && mtx[x-1][y] === 1 ) arrayOfCoord.push([x-1, y]);
//       if ( y+1 < mtx[0].length && mtx[x-1][y] === 1 ) arrayOfCoord.push([x, y+1]);
//       if ( x+1 < mtx.length && mtx[x+1][y] === 1 ) arrayOfCoord.push([x+1, y]);
//       if ( y-1 >=0 && mtx[x][y-1] === 1) arrayOfCoord.push([x, y-1]);
//    }

// }