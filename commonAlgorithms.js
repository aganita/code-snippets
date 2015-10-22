// sort numbers in reverse order
var arr = [5, 2, 1, -10, 8];

function compare(a, b) {
  return a - b;
}

function compareReversed(a, b) {
  return b - a;
}

alert( arr.sort(compareReversed)) ;

	
	
//	