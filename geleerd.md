# Geleerd

## Dinsdagochtend over maandag

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


## Woensdagochtend over dinsdag

Wat oh wat hebben we geleerd van gister?!

- Arrrrrrays
  - gewoon objecten
  - .reduce()  prev/curr   sum


- 




- Destructuring
  - object z'n properties meteen in vars stoppen
  - mixen: objecten in arrays in object
  - default values wordt ondersteund
  - let { ding } = obj;
  - leesbaarheid++   splits[0] splits[1]  wholes decimals  Prettier

- set/get
  - get haalt info op
  - set zet informatie
  - gebruiken we NIET??
  - C#/Java heftiger op encapsulatie - want backend.
        public int Bla { get; set; }  Lombok @Getter @Setter  setName() getName()

- Classes
  - kunnen constructor hebben
  - PascalCase - beginnen met hoofdletter
  - static   "gedeeld over alle instanties"
  - syntactic sugar
  - voornamelijk Angular    .vue .svelte
  - class A extends B {}  super() om je base class aan te spreken
  - "functional abstract"  

	constructor() {
		if (new.target === JouwClass) {   new JouwClass();
			return new AndereClass();
		}
	}

- Date
  - ellende
  - libs: moment date-fns dayjs luxon
  - nieuwe aankomende standaard proposal: Temporal
  - getFullYear() getYear() sinds 1900, getDate() enkel dag, getMonth() enum-index + 1
  - new Date()   is huidige datum/tijd met tijzone die ingesteld is in je browser.
  - .toString('d-m-Y')  toString() ondersteunt geen parameters

- Functions
  - optional parameters    function bla({ iets } = {}) {}   bla()
  - ook dit zijn objecten    function bla() {}   bla.huh = 14;   "aanroepbare objecten"

let obj = {};
obj['wetryju 🎂🎂😎😂❤😁🤞💋'] = 14;


- Arrow functions
  - preferred!
    - this voorspelbaarder
    - geen/minder hoisting
    - vaak gepaard met const
    - ingekaderd/specialist  geen new  arguments  geen prototype
