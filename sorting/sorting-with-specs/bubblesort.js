function compare(a, b){
	return Math.max(a,b);
}

function bubbleSort(arr = []){
	if (arr.length === 0 || arr.length === 1) return arr;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			var temp = arr[j];
			var max = compare(arr[i],arr[j]);

			if(max !== arr[j]) {
				arr[i] = temp;
				arr[j] =max;
			}

		};
	
	};

	return arr;
}