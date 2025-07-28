console.log("hallo!");

// ' " `
// ' hier kun je " in je string gebruiken
// " hier kun je ' in je string gebruiken
// ` interpolation

// var bla = 14;
// let text = `hoi bla ${bla}`;
// // let text2 = 'hoi bla ' + bla + ' hoi';

// console.log(text);
// console.log('bla:', globalThis.bla);

// x = 31;
// console.log('x:', x);

// function test() {
//     // code isoleren: scoping
//     globalThis.hoi = 'bla';
//     console.log('test hoi:', hoi);
// }
// test();
// console.log('test hoi:', hoi);

// undefined vs null?
// - undefined heeft geen waarde geassigned?
// - null is niks?

// undefined:
// - kom je VEEL tegen
// - standaardwaarde voor iets wat er niet is/geen waarde heeft
// - console.log(config.dezepropertybestaatniet);

// null:
// - deze is altijd expliciet door een mededeveloper ingesteld
// - ter bewustwording
// - document.getElementById()

// primitive datatypen:
// number
// string
// boolean

// let getal = 12.1;
// console.log('getal:', getal);
// console.log('getal * iets:', getal * 9);
// console.log('getal * 9 afronden:', Math.round(getal * 9));
// console.log('getal * 9 afronden op 2 decimalen:', (getal * 9).toFixed(3));
// console.log('getal * 9 afronden op 2 decimalen:', +(getal * 9).toFixed(3));

// console.log('NaN', NaN);
// console.log('7 * "bla"', 7 * 'bla');
// console.log('NaN == NaN', NaN == NaN);
// console.log('NaN === NaN', NaN === NaN);

if (7 * "bla" === 4 / "hoi") {
}
if (Number.isNaN(7 * "bla")) {
  console.log("yes isNaN");
} else {
  console.log("nope");
}

let getalletje = 812345;
console.log(getalletje.toString(10));

let tekstje = "qwerty ❤😍";
console.log("length:", tekstje.length);
console.log("correcte length:", [...tekstje].length);

// regular expressions: regex
let postcode = "4673PL";
let regex = /^[0-9]{4} ?[a-zA-Z]{2}$/;

// let regex2 = new RegExp('^[0-9]{4} ?[a-zA-Z]{2}$');

if (regex.test(postcode)) {
  console.log("matches!", postcode);
} else {
  console.log("no match", postcode);
}
