const fs = require("fs");

const ceoSearch = () => {

}

const parseInput = (filePath) => {
  const text = fs.readFileSync(filePath, "utf-8");
  const textByLine = text.split("\n");

  let inputArrays = [];
  textByLine.forEach((string, indx) => {
    if (indx !== 0 && indx % 2 === 0) {
      inputArrays.push(string.split(' ').map(Number));
    }
  });

  return inputArrays;
}

function main() {
  const burgerIngrArraysSmall = parseInput('./A-small-practice.in');
  for (let i = 0; i < burgerIngrArraysSmall.length; i++ ){
    fs.appendFileSync('output-small.txt', `Case #${i+1}: ${burgerOptimization(burgerIngrArraysSmall[i])}\n`, function (err) {
      if (err) throw err;
    });
  };

  const burgerIngrArraysLarge = parseInput('./A-large-practice.in');
  for (let i = 0; i < burgerIngrArraysLarge.length; i++ ){
    fs.appendFileSync('output-large.txt', `Case #${i+1}: ${burgerOptimization(burgerIngrArraysLarge[i])}\n`, function (err) {
      if (err) throw err;
    });
  };  
}