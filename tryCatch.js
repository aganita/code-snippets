// https://learn.javascript.ru/exception
// credit to Ilya Kantor

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


// Web services that help catching client side errors https://errorception.com/ or http://www.muscula.com/
// they use window.onerror. somwthing like: 
<script>
  window.onerror = function(message, url, lineNumber) {
    alert("Error that was not caught by functions \n" +
      "Message: " + message + "\n(" + url + ":" + lineNumber + ")");
  };

  function readData() {
    error(); // ooops something is wrong
  }

  readData();
</script>