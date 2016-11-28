// This is a non-recursive approach to avoid stack overflow.
// The runtime complexity will be O(n), where n is the number elements of the resulting dictionary object.

// Solution #1
function flattenDictionary(dictObj) {
   
   let flatDict = {},
       stack = [],
       currentElm;
   
   for (let key in dictObj){
      stack.push([key, dictObj[key]]);
   }
   
   while (stack.length > 0){
      currentElm = stack.pop();
      if (typeof currentElm[1] === 'object'){
         for (let key in currentElm[1]){
            stack.push([currentElm[0] + "." + key, currentElm[1][key]]);
         }
      }
      else
         flatDict[currentElm[0]] = currentElm[1];       
   }
   
   return flatDict;
}


// Solution #2 Recursive
function flattenDictionaryRec(obj, key, newObj) {   
   
   for (let key1 in obj){
      if (typeof obj[key1] !== 'object') {
         newObj[key + key1] = obj[key1];     
      } else {         
         flattenDictionaryRec(obj[key1], `${key}${key1}.`, newObj);
      }
   }
   
   return newObj;
}

let obj = {
  'Key1': '1',
  'Key2': {
    'a' : '2',
    'b' : '3',
    'c' : {
      'd' : '3',
      'e' : '1'
      }
    }
};

flattenDictionary(obj);