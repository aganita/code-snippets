//TODO organize the code 

// Given a 2D array (matrix) named M, print all items of M in a spiral order, clockwise.
// For example:

// M  =  1   2   3   4   5
//       6   7   8   9  10
//       11  12  13  14  15
//       16  17  18  19  20

// The clockwise spiral print is:  1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12

function matrixSpiralPrint(m){
  let uRow = 1,
      bRow = m.length - 1,
      lColumn = 0,
      rColumn = m[0].length - 1,
      resArr = m[0];

  while (bRow != uRow && rColumn != lColumn){
    let i;
    for (i = uRow; i <= bRow; i++) {
      resArr.push(m[i][rColumn]);
    }
    rColumn--;
    for(i = rColumn; i >= lColumn; i--){
      resArr.push(m[bRow][i]);
    }
    bRow++;
    console.log(lColumn)
    for(i = bRow; i >= uRow; i--){
      console.log(i)
      resArr.push(m[i][lColumn]);
    }
    lColumn++;
    for(i = lColumn; i <= rColumn; i++){
      resArr.push(m[uRow][i]);
    }
    uRow--;
  }
  
  console.log(resArr);

}


let m = [[1,   2,   3,   4,   5],
        [6,   7,   8,   9,  10],
        [11,  12,  13,  14,  15],
        [16,  17,  18,  19,  20]];
        
matrixSpiralPrint(m);





// solution #2
function spiral(array) {
  let result = [];
  while (array.length) {
    // Steal the first row.
    result = result.concat(array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++) result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
  }
  return result;
}