'use strict';

let lijstje = [2, 5, 8];

lijstje.length = 900;
// lijstje.length = 1;
lijstje.length = 0; // snelste manier om array te clearen
// lijstje.length = 5;

// lijstje.unshift() toevoegen aan begin
// lijstje.shift() verwijder eerste element


console.log(lijstje);

lijstje['2000'] = 789;
lijstje.push(123);
lijstje.push(456);
console.log(lijstje.length);

for (let i = 0; i < lijstje.length; i++) {
    console.log(lijstje[i]);
}
for (let item of lijstje) {
    console.log('item:', item);
}

let obj = { x: 24, y: 'hoi' };
console.log(obj.y);
console.log(obj['y']);

[4,8,15,16,23,42]
    .filter(x => x > 10)
    .forEach(x => console.log(x));
