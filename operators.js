

let obj = { x: 24 };
console.log(obj);

delete obj.x;
console.log(obj);

console.log(obj.x);
console.log(obj.wertyuiop);

// delete undefined;

undefined = 'hoi'; // ES3 IE6
console.log('undefined??', undefined);

// globalThis = {};
// globalThis.parseInt('123');

let value = 4 && 8 && 0 && 18;
if (4 && 8) {
    console.log('ja');
}
console.log(value);

// Svelte
// <button on:keydown={e => e.key === 38 && doe()}></button>


// function bla(param) {
//     !param && return;
// }

let value2 = '' || 8 || 0 || 18;
if (0 || 8) {
    console.log('ja ||');
}
console.log(value2);

let value3 = null ?? undefined ?? null ?? 18; // nullish coalescing operator
if (value3) {
    console.log('ja ??');
}
console.log('value3:', value3);

// assignment operators
let span = document.querySelector('#test');
span.innerText ??= 'qwertyu';

console.log(4 > 8 ? 'woehoe' : 'aaaww');
