function rotateMtx(mtx){
  let newMtx = [[],[],[]],
      length = mtx.length - 1;
  for( let i = 0; i <= length; i++){
    for( let j = 0; j <= length; j++)
      newMtx[i][j] = mtx[length-j][i];
  }
  return newMtx;
}

let mtx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

rotateMtx(mtx);