var hutsefluts = 42;
console.log(hutsefluts);
console.log(globalThis.hutsefluts);
console.log(window.hutsefluts);


// window.test(213456, 28);
// globalThis.test(213456, 28);
// console.log(globalThis.test === test);
// console.log(globalThis === window);
// console.log(this === window);

// function test() {
//     console.log('hallo vanuit test');
// }
function test(p1 = 'whaat', p2 = p1) {
    console.log('hallo vanuit test met params:', p1, p2);
}
test();
test(undefined);
test(undefined, 1234567);
test(0, []);
test(undefined, {});
test(undefined, new Date());
test(213456, (u1 = u2, u2) => { return whaat(); });

function whaat() {
    return 42;
}

function hoi(p1, p2, ...rest) {
    console.log('rest:', p1, p2, rest);
}
hoi(4, 8, 15, 16, 23, 42);
// new hoi();

const arrow = () => {
    console.log('hallo vanuit pijl');
};
// arrow = () => {};
// arrow();

// arrow vs gewone function
// - this een stuk voorspelbaar
// - geen new
// - geen arguments
// - geen prototype

// new arrow();

// wanneer nog WEL een function?
// - hoisting
// - prototyping - extension methods
// - lib/framework werkt die heel graag this wil kunnen instellen

function sum(arr) {

    sum.bladiebla++;
    console.log(`sum is nu ${sum.bladiebla} keer aangeroepen`);

    let total = 0;
    for(let item of arr) {
        total += item;
    }
    return total;
}
sum.bladiebla = 0; // static


// function sum(arr) {
//     return arr.reduce((prev, curr) => prev + curr, 0);
// }
console.log('sum:', sum([1,2,4, 5, 8, 12]))
