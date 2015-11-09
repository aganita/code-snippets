// in this example I am testing which of the two reverse functions works faster

var s = "123456789";

function reverseStringOptOne(s) {
	var o = '';
	for (var i = s.length - 1; i >= 0; i--)
		o += s[i];
	return o;
}

function reverseStringOptTwo(s) {
	for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
		return o;
}

// call the selected function 10000 times
function benchTest(f) {
	for (var i = 0; i < 10000; i++) f(s);
}

// show in console the results 
console.time("All Together");
console.time("reverse function #1");
benchTest(reverseStringOptOne);
console.timeEnd("reverse function #1");
console.time("reverse function #2");
benchTest(reverseStringOptTwo);
console.timeEnd("reverse function #2");
console.timeEnd("All Together");
