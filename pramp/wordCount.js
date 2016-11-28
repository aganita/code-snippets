// TODO finish the code. Optimize it

// solution #1
function wordCount(str){
	str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	let wordArr = str.split(" ");
	
	let countMap = {};
	let length = wordArr.length;
	for (let i = 0; i < length; i++){
		if (countMap.hasOwnProperty(wordArr[i]))
			countMap[wordArr[i]]++;
		else countMap[wordArr[i]] = 1;
	}
	console.log(countMap);
}

function mergeSortObj(obj){
	
}


/// soluton #2

function wordCount(str) {
   var map = {};
   
   //str = str.replace(",", "").replace(".", "")
   str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
   
   var arr = str.split(" ");
   
   for (var i in arr) {
      var word = arr[i];
      if (!map[word]) {
         map[word] = 1;
      }
      else {
         map[word] += 1;
      }
   }
   
   var arrObj = [];
   for (var key in map) {
      //arrObj.push({key:map[key]});
      arrObj.push([key, map[key]]);
   }
   
   arrObj.sort(function(a, b) {
      return b[1] - a[1];
   });
   
   var result = {};
   for (var i in arrObj) {
      var obj = arrObj[i];
      result[obj[0]] = obj[1];
   }

   return result;
}
