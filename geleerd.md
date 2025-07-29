# Geleerd

## Dinsdag

- Functions:
  - Arrow function:  () => {} - this veel voorspelbaarder. - korter. minder bytes. beter voor schijfruimte.
  - Gewone function: function() {}

- landschap der packages:
  - frontendlibraries/frameworks: React/Angular/Vue/Svelte
  - buildtool/module bundler: Vite webpack
  - JS runtime/backend JS: Node.js Deno (TypeScript, security) Bun (TypeScript, performance) $$$
  - trend: Rust Go  Rollup Rolldown  webpack rspack  TypeScript  Go JavaScript


node bla.js
deno run --allow-net --allow-read=c:\temp bla.ts



- Conversions
  - 1 + '1' = '11'
  - '4' * '4' = 16  '4444'
  - '4' / '2' = 2
  - % remainder  even/oneven autocompleter  binnen de bounds van je array blijven

- Strings
  - .replace() eenmalig. .replaceAll()
  

- Operators
  - + - & && || ?? nullish coalescing  *  % ~   ~n n-(n+1) ~[4.23]  -5

- Bitshifting
  - >> <<  >>>

- Control structures
  - while
  - if ()
  - switch
  - do while
  - for (let i = 0; ...)
  - for..in - door alle props van een object. Houdt geen rekening met eigen/overgeerfde
    - betere: for..of Object.keys(obj)
  - for..of - foreach

- Types
  - string
  - boolean
  - number
  - bigint
  - null
  - undefined
  - NaN
    - NaN === NaN // false
    - isNaN('bla') Number.isNaN()  Object.is(NaN, NaN)

- Arrays
  - stiekem geen echte array, maar objecten
  - .length kun je aanpassen. .length = 0
  - functies: .push(), .slice(), .includes() .indexOf() .shift() .unshift()
  - +[]  0  ++[] 1

- Brendan Eich - Brave
- ECMA International tc39
- afronden:
  - Math.round(123.45) of ~~
  - getal.toFixed(4)  getal.toString(16)
  - let a = 81.2356;

- how to clone an object
  - let clone1 = { ...obj }; // shallow copy
  - let clone2 = JSON.parse(JSON.stringify(obj)); // JSON is karig.
  - let clone3 = structuredClone(obj);

- Scope van variabelen
  - var doet gekke dingen, zo min mogelijk gebruiken
    - hoisting
  - let en const doen geen gekke dingen
    - const is semi-veranderbaar - inhoudelijk
  - globalThis/global/window.mijnVar = 23;

function test() {
	x = 24;
}

// hoisting
for (var i = 0; i < 5; i++) {

}




window.addEventListener('DOMContentLoaded',  <== defer

window.onload = () => {};



unittesten: Jest (facebook) karma jasmine mocha chai sinon vitest












