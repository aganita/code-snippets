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
