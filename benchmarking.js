// benchmarking. 

// comparing the performance of two versions of reverse function
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





// comparing the performance forEach vs for loop
var arr = [1,2,3];

var f1 = function(arr){
    var arr3 = [];
    arr.forEach(function (item, i, arr) {
        arr3.push(item + "blah-blah");
    });
    return arr3;
};

var f2 = function(arr){
    var arr3 = [];
    for (var i = 0; i<arr.length; i++){
        arr3.push(i + "blah-blah");
    }
    return arr3;
};



// call the selected function 10000 times
function benchTest(f) {
	for (var i = 0; i < 10000; i++) f(arr);
}

// show in console the results 
console.time("All Together");
console.time("function #1");
benchTest(f1);
console.timeEnd("function #1");
console.time("function #2");
benchTest(f2);
console.timeEnd("function #2");
console.timeEnd("All Together");
