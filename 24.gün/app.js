// var : function scope  ram bellekte cok fazla yer kaplar.
// let/const : block scope özelliğne sahiptir.

function selamVer() {
  var selam = "Herkese selam";
  if (true) {
    let b = 10;
    console.log(b);
  }
  console.log(selam);
}
selamVer();

var a = 5;
var a = 10; // değişimi kabul eder
console.log(a);

if (true) {
  let a = 5;
  let b = 10; // değişimi kabul etmiyor
  console.log(a);
}

const user = {
  username: "ömer",
  password: "6161",
};

user.username = "ömer can";

console.log(user);
