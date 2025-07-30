# Notes

## Geschiedenis

- Begonnen 1995/6 bij Netscape 
- gemaakt door Brendan Eich
  - even wat interactiviteit aan de browser toevoegen
  - in 10 werkdagen neergezet
  - 
- frontend
  - 2010+
  - heul veul libraries
    - prettier
- JavaScript heet eigenlijk ECMAScript
  - W3C onderhouden HTML/CSS, maar wilden JS niet doen
  - ECMA International is nu verantwoordelijk over JS
    - ECMAScript!
    - komt o.a. ook terug bij je TypeScript config met `target`: "ES2022", "ES2023", etc.

### jQuery

- Voor websites niet dood: WordPress, heel veel plugins gebruiken jQuery
- voor webapplicaties redelijk dood: allerlei mijn-omgevingen (mijnpensioenoverzicht, mijnvgz, mijn.ns.nl, etc.) gebruiken modernere en betere alternatieven.

jQuery was vooral goed in:
- DOM interacties  `document....()`
  - `document.getElementById()` `.getElementsByTagName()`
  - `$('nav a.special')` was zoveel korter en leesbaarder:
    ```js
    var nav = document.getElementByTagName('nav');
    var as = nav.getElementsByTagName('a');
    for(a in as) {
      if(a.className 
    }.special')
    ```
- Asynchronous JavaScript And XML - vanuit JS een request naar de backend stuurt
  - `$.ajax()` en `$.getJSON()` waren lekker kort en makkelijk
  - browser had een `XMLHttpRequest`, maar was wat lomp in gebruik
  - `fetch()` is een moderne functie
- browserabstractie  `$('#btn').click(function() { });` ipv:
  ```ts
  var btn = document.getElementByid('btn');
  if (btn.addEventListener) {
    btn.addEventListener('click', function() { }); // IE
  }
  else { // IE
    btn.attachEvent('onclick', function() { } );
  }
  ```

## Variabele aanmaken 

JavaScript heeft 5 manieren om een variabele aan te maken:

- `const`
- `var`
- `let`
- (geen keyword ervoor)
  ```js
  function bla() {
    x = 14;
  }
  ```
  JavaScript interpreteert dit als "een globale var aanmaken"
- globale object: globalThis/window (browser)/global (server Node.js/Deno/Bun)
  ```js
  globalThis.mijnVar = 25;
  ```

`var` gebruikt een lexicale scope, `let`/`const` een block scope. `let`/`const` hebben de voorkeur.

## Wat ooit proposals waren en nu "in JavaScript"

- `Set`
- `Map`
- `Promise`s
- ES Modules
- ...
- ...

Momenteel nog hype/proposal:
- signals
- observables
- `Temporal`

## Datums

`Date` is niet heel chic om mee te werken. Alternatieven:

- [Moment.js](https://www.npmjs.com/package/moment)
  - al jaren "in maintenance mode", niet op nieuwe projecten nog nieuw installeren
- [day.js](https://www.npmjs.com/package/dayjs)
  - [is niet tree-shakeable, gebruikt geen ESM](https://github.com/iamkun/dayjs/issues/1765)
    - gaat er hier en daar wat onvriendelijk aan toe
- [luxon](https://www.npmjs.com/package/luxon)
  - komt niet met TypeScript-types
- [date-fns](https://www.npmjs.com/package/date-fns)
  - tree-shakeable, TypeScript, alles! 👍
- [Temporal](https://github.com/tc39/proposal-temporal)
  - momenteel stage 3. Maar is al wel bruikbaar via de [polyfill](https://www.npmjs.com/package/temporal-polyfill#tree-shakable-api). "Polyfill": een browser iets laten hebben als hij dat zelf nog niet heeft:
    ```ts
    globalThis.Temporal ??= {
      ...
    };
    ```

## Functions

- Overloading bestaat niet. Soms lijkt het zo, bijv. bij jQuery:
  ```js
  // jQuery
  $('div span')
  $('<div>')
  $(function() { }) // document ready
  ```
  - [Hun `init()` doet gewoon een hoop `if`](https://code.jquery.com/jquery-3.7.1.js):
    ```js
    init = jQuery.fn.init = function( selector, context, root ) {
      // HANDLE: $(""), $(null), $(undefined), $(false)
      if ( !selector ) {
        return this;
      }
      //...
      // Handle HTML strings
      if ( typeof selector === "string" ) {
        if ( selector[ 0 ] === "<" &&
          selector[ selector.length - 1 ] === ">" &&
          selector.length >= 3 ) {
          // ...
          // HANDLE: $(#id)
          } else {
            elem = document.getElementById( match[ 2 ] );
          }

        // HANDLE: $(expr, $(...))
        } else if ( !context || context.jquery ) {
          return ( context || root ).find( selector );
        // HANDLE: $(expr, context)
        } else {
        // ...
      // HANDLE: $(DOMElement)
      } else if ( selector.nodeType ) {
      // ...
      // HANDLE: $(function)
      // Shortcut for document ready
      } else if ( isFunction( selector ) ) {
        
      }
    };
    ```

### Arrow function

```js
const func = (p1 = 42, p2 = 'what') => { };
```

Arrow function vs gewone function? Zoveel mogelijk arrow functions:
- `this` is een stuk voorspelbaar
- geen `new`
  ```js
  new arrow();
  ```
- geen `arguments`
- geen prototype

Wanneer nog WEL een function?

- hoisting
- prototyping - extension methods
  ```js
  Date.prototype.toPrettyString = function() {
    return `${this.getDate()}-${this.getMonth() + 1}-${this.getFullYear()}`;
  };
  ```
- lib/framework werkt die heel graag `this` wil kunnen instellen

## Classes

- 2015
- syntactic sugar
- werden best veel gebruikt! tot:
  - React 18 => terugdraaien
  - Vue 3 => terugdraaien
  - Angular => steeds minder classes. Zie guards/interceptors

## ES Modules

- delen importeren/exporteren
- zeer vergelijkbaar met packages in Java, namespace in C#

Initiatieven vanuit de JavaScript-wereld:

- CommonJS
  - herkenbaar aan `require()`
    - browserify
    - Node.js
      - ~~nog steeds de default~~ niet meer de default sinds Node ~22 lijkt het! In package.json aan te passen:
        ```json
        {
          // ...
          "type": "module"
        }
        ```
- AMD (Asynchronous Module Definition)
  - requirejs

Maar nu eindelijk gestandaardiseerd: ECMAScript Modules

```js
// bestand1.js
export class Customer {}
export const config = {};
export let someVar = 42;

// bestand2.js
import { Customer, config } from './bestand.js';
import { Customer as Cust } from './bestand.js';
import * as alles from './bestand.js';
```

En nog een bijzondere notatie: [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) voor lazy loading

```js
import('./bla.js');
```

- Code in modulebestanden is geisoleerd van andere bestanden
- Code in modulebestanden wordt in stricte modus geevalueerd

## Mutation testing

Met [Stryker](https://stryker-mutator.io/)

Met mutation testing wordt productiecode gemuteerd. Dus dit:

```ts
if (x > 40) { ... }
```

Wordt aangepast naar mutanten:

```ts
if (x < 40) { ... }
if (x == 40) { ... }
if (x > 400) { ... }
```

En dan opnieuw alle tests runnen. Geen falende test? mutant overleefd.

## Coole links

- [State of JS survey](https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/)
- [TC39 proposals](https://github.com/tc39/proposals), wat er aan zit te komen aan JavaScript-features
- [Coole Svelte-transitions](https://svelte.dev/tutorial/svelte/in-and-out)
  ```html
	<p in:fade  out:fade>
		Fades in, fades out
	</p>
  ```
