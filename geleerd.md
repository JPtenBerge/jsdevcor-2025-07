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
  - `Math.round(123.45)` of `~~`
  - `getal.toFixed(4)`  `getal.toString(16)`
  - `let a = 81.2356;`

- how to clone an object
  ```js
  let clone1 = { ...obj }; // shallow copy
  let clone2 = JSON.parse(JSON.stringify(obj)); // JSON is karig qua datatypes, 0n kan bijv. niet worden geserializeerd.
  let clone3 = structuredClone(obj);
  ```

- Scope van variabelen
  - var doet gekke dingen, zo min mogelijk gebruiken
    - hoisting
  - let en const doen geen gekke dingen
    - const is semi-veranderbaar - inhoudelijk
  - globalThis/global/window.mijnVar = 23;

```js
function test() {
	x = 24;
}

// hoisting
for (var i = 0; i < 5; i++) {

}

window.addEventListener('DOMContentLoaded', () => {}); // <== defer
window.onload = () => {}; // gaat pas af als HELE pagina geladen is, inclusief CSS, afbeeldingen, videos, advertenties, iframes
```

unittesten: Jest (facebook) karma jasmine mocha chai sinon vitest


## Woensdagochtend over dinsdag

- Arrrrrrays
  - gewoon objecten
  - .reduce()  prev/curr   sum

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

    ```js
	  constructor() {
  		if (new.target === JouwClass) {   new JouwClass();
			  return new AndereClass();
		  }
	  }
    ```
- `Date`
  - ellende
  - libs: moment date-fns dayjs luxon
  - nieuwe aankomende standaard proposal: Temporal
  - getFullYear() getYear() sinds 1900, getDate() enkel dag, getMonth() enum-index + 1
  - new Date()   is huidige datum/tijd met tijzone die ingesteld is in je browser.
  - .toString('d-m-Y')  toString() ondersteunt geen parameters

- Functions
  - optional parameters    function bla({ iets } = {}) {}   bla()
  - ook dit zijn objecten    function bla() {}   bla.huh = 14;   "aanroepbare objecten"
    ```js
    let obj = {};
    obj['wetryju 🎂🎂😎😂❤😁🤞💋'] = 14;
    ```
- Arrow functions
  - preferred!
    - `this` voorspelbaarder
    - geen/minder hoisting
    - vaak gepaard met const
    - ingekaderd/specialist  geen new  arguments  geen prototype

## Donderdagochtend over woensdag


Wat oh wat hebben we geleerd gister?!

- Classes
  - Heeft een constructor
  - Het scheiden van verantwoordelijkheden
  - Syntactic sugar  - je kan ze zien als functies

- ES Modules
  - import
    - .js erachter zetten
  - export
  - je hoeft niet meer 200 `<script>` in je .html op te nemen
    - geen kennis van dependencies. volgordelijkheid
  - `<script type="module">`
    - import/export werken gewoon allkeen maar als je dit hebt
  - makkelijk om shizzle op te splitsen

- Landschap
  - Svelte
  - Jest
  - Stryker
  - Vite
  - React
  - Vue
  - Angular
  - webpack
  - date-fns dayjs temporal-polyfill 
  - async
  - @apollo
  - express
  - next.js/nuxt.js
  - @angular/ssr
  - SvelteKit
  - requirejs
  - Node / Deno / Bun / amazon - server-side JS
  - WebGL  WebGPU

- TypeScript
  - overdragen van code aan anderen
  - weten wat je kan verwachten
  - directere foutmeldingen
  - compilet/transpilet naar JavaScript
  - ? voor undefined is soms | undefined in tooltip
  - interface
  - type
  - generics! whoo!
  - heul veul gedownloade package: die ene voor extra types. PartialDeep<T>  type-fest

- Demo Vite
  - DOM API  document.querySelector()  .innerHTML += ``;
  - document.createElement('tr')
document.createElement('td')
document.createTextNode()  newTr.appendChild(newTextNode)

let template = doucment.querySelector('template').content;
let clone = template.cloneNode(true);
clone.querySelector('.name').innerText = 'JP';

```html
<template>
	<tr>
		<td>...
	</tr>
</template>
```