function ReadError(message, cause) {
  this.message = message;
  this.cause = cause;
  this.name = 'ReadError';
  this.stack = cause.stack;
}

function readData() {
  var data = '{ bad data }';

  try {
    // ...
    JSON.parse(data);
    // ...
  } catch (e) {
    // ...
    if (e.name == 'URIError') {
      throw new ReadError("URI Error", e);
    } else if (e.name == 'SyntaxError') {
      throw new ReadError("Data Syntax Error", e);
    } else {
      throw e; // пробрасываем
    }
  } finally {
    alert("end of readData function");
  }

}

try {
  readData();
} catch (e) {
  if (e.name == 'ReadError') {
    alert( e.message );
    alert( e.cause ); // the original cause of the error 
  } else {
    throw e;
  }
}