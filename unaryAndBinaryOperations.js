// fun facts about unary operations
//a ^ b ^ b === a
//~n === -(n+1)
// 3 << 3 === 3 * (2*2*2) === 3 * Math.pow(2, 3);

// check if the variable is integer 
function isInteger(num) {
  return (num ^ 0) === num;
}

// round the number. will literally keep only integer part
function round(num) {
  return (num ^ 0);
  //return ~~num;
}




// fun facts about binary operations 
alert( true || false || true ); // returns the first true and stops the check 
alert( true && true ); // returns the last true value
alert( false && true ); // returns false
alert( true && false ); //returns false
alert( false && false ); // returns first false




// Using binary operations for user roles ---- IMORTANT JavaScript can work only with 32 bit numbers. 

var ACCESS_ADMIN = 1;          // 00001
var ACCESS_GOODS_EDIT = 2;   // 00010
var ACCESS_GOODS_VIEW = 4;     // 00100
var ACCESS_ARTICLE_EDIT = 8; // 01000
var ACCESS_ARTICLE_VIEW = 16;  // 10000

var guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW; // 10100
var editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT; // 11110
var admin = editor | ACCESS_ADMIN; // 11111


alert(editor & ACCESS_ADMIN); // 0, decline access
alert(editor & ACCESS_ARTICLE_EDIT); // 8, allow access 

var check = ACCESS_GOODS_VIEW | ACCESS_GOODS_EDIT; // 6, 00110

alert( admin & check ); // not 0, the use can view OR edit the goods

// find users that have access to edit goods or have admin access
findUsers(ACCESS_GOODS_EDIT | ACCESS_ADMIN);