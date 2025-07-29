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

## Coole links

- [State of JS survey](https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/)
- [TC39 proposals](https://github.com/tc39/proposals), wat er aan zit te komen aan JavaScript-features
- [Coole Svelte-transitions](https://svelte.dev/tutorial/svelte/in-and-out)
  ```html
	<p in:fade  out:fade>
		Flies in, fades out
	</p>
  ```
