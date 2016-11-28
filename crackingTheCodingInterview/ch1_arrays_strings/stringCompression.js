function stringCompression(str){
  let strArr = str.split(''),
      length = strArr.length,
      compressed = [],
      count = 1;
  for(let i = 0; i < length; i++){
    if (strArr[i] === strArr[i+1])
      count++;
    else {
      compressed.push(count + strArr[i]);
      count = 1;
    }
  }
  
  return compressed.length < length ? compressed.join('') : str;
}


stringCompression("aaabbccccccaab");
stringCompression("abc");
