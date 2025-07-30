
// let huh = 'dit is gaaf 2';


// function test() {

// }

// module loaders



// export default function() { // Vue

// };


export class Customer {
    buy() {
        console.log('kopen kopen kopen')
    }

}

export function doeIets() {

}
export let someVar = 14;
export var someLet = 28;
export const config = {};


document.querySelector('button').addEventListener('click', () => {
    import('./mijn-andere-module.js'); // lazy loading
});