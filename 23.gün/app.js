console.log(window);
console.log(document);

var degiskenIsmi = 10;

console.log(degiskenIsmi);

// global scope
var a = 5;

if (true) {
}
function method1() {
  console.log(a);
}

method1();

var b = 12; //global scope

function method1() {
  var sayi = 10; // function scope
  console.log(b);
  console.log(sayi);
}

method1();
