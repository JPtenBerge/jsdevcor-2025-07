'use strict';

// use strict
// ===
// let/const over var
// () => {} ipv function() { }
// - this


function test(p1, p2) {
    console.log(p1, p2);
    console.log(arguments);
    arguments[0] = 14;
    console.log(p1, p2);
    
}
test(4, 8);

undefined = 'hjkdsd';

if (true) {
    var huh = 'what';
    console.log('yay');
}

let config = {};
let bla = 'huh';
switch(bla) {
    case 'what': console.log('wauw!'); break;
    case 'what2': console.log('wauw!'); break;
    case 'what3': console.log('wauw!'); break;
    case 'what4': console.log('wauw!'); break;
    case 'what36': console.log('wauw!'); break;
    case 42: console.log('wauw!'); break;
    case []: console.log('wauw!'); break;
    case config: console.log('wauw!'); break;
    case NaN: console.log('wauw!'); break;
    default: console.log('default!');
}



for (let i = 0; i < 5; i++) {

}
console.log(huh);

let obj = { x: 24, y: 'hoi', z: [], q: {} };
// for (let prop in obj) { // reflection javascript normaler/toegankelijker
//     console.log(prop);
// }
for (let prop of Object.keys(obj)) { // <== liever deze dan for..in
    if (prop === 'y') {
        break;
    }
    console.log(prop);
}
let lijstje = [2,4,6]; // array set map
for (let item of lijstje) { // error
    console.log(item);
}
