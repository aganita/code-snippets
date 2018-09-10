function mergeSort(arr=[]){
	var resArr = [];

	if (arr.length === 1){
		return arr;
	}else{
		var splitArr = split(arr);
		var left = splitArr[0];
		var right = splitArr[1];
	}
	return merge(mergeSort(left), mergeSort(right));
}

function split(arr) {
	var firstHalf = arr.slice(0,Math.round(arr.length/2));
	var secondHalf = arr.slice(Math.round(arr.length/2));
	console.log(firstHalf, secondHalf);
	return [firstHalf, secondHalf]
}

function merge(arr1, arr2){
	var sortedArr = [];
	while(arr1.length > 0 && arr2.length > 0){

		if(arr1[0]<=arr2[0]) {
			sortedArr.push(arr1[0]);
			arr1.shift();
		} else{
			sortedArr.push(arr2[0]);
			arr2.shift();
		}
	} 

	if(arr1.length > 0) {
		sortedArr = sortedArr.concat(arr1);
	} else if(arr2.length > 0) {
		sortedArr = sortedArr.concat(arr2);
	}

	return sortedArr;
}