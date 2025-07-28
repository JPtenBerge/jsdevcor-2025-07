

let bla = '3.14';
console.log(+bla);

let obj = { x: 24, toString() { return 'hoi'; } };
console.log(`obj: ${obj}`);


let lijstje = [3];

if (obj === 'hoi') { // strict compare
    console.log('ja hoor!');
}
else {
    console.log('nope');
}
if (lijstje === '3') { // strict compare
    console.log('ja hoor!');
}
else {
    console.log('nope');
}

// falsey values
let value = -0n;
if (value) { // 8 falsey waarden: false NaN null undefined 0 '' 0n -0
    console.log('jep!');
}
else {
    console.log('nope');
}