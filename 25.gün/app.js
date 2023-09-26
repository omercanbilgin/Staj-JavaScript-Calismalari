/*----------------STRİNG VERİTİPİ-----------------*/
let isim = "Enes Bayram 23 yaşındadır.";
console.log(isim);
console.log(typeof isim);

let sayi1 = 10.7;
let sayi2 = 5.3;

console.log(sayi1 + sayi2);
console.log(typeof sayi1);

/*----------------NUMBER VERİTİPİ-----------------*/
let a = 5;
let b = 2;
let stringDegisken = "Yaşınız : ";
let yas = 23;
console.log(stringDegisken + yas);

/*----------------BOOLEAN VERİTİPİ-----------------*/

console.log(5 > 8);

let x = 3;
let y = 12;

let sonuc = a + b;
console.log(sonuc != 15);

/*----------------NULL VERİTİPİ-----------------*/

let c = null;
b;

a = 27;

console.log(a);

/*----------------UNDEFİNED VERİTİPİ-----------------*/

let k;
console.log(typeof a);

/*----------------OBJECT VERİTİPİ-----------------*/
let insan = {
  isim: "Enes",
  soyisim: "Bayram",
  yas: 23,
};

console.log(typeof insan);

let func = function () {
  console.log("Merhaba");
};

func();
console.log(typeof func);
