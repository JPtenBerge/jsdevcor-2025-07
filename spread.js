
// arrays spreaden
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let merge = [...arr1, ...arr2];
console.log(merge);



// objects spreaden

// export class HomeComponent {
//     // newHuman: Human = { name: '', age: ''};
//     newHuman = createHuman();

//     processHuman() {
//         this.humanService.process(this.newHuman);
//     }
// }

let obj = { x: 24, nestedObj: {}, someList: [] };

// clone object
// let clone1 = { ...obj }; // shallow copy
// let clone2 = JSON.parse(JSON.stringify({x: 24n})); // deep copy
let clone3 = structuredClone(obj); // deep copy

createHuman({ name: 'Danny' });
function createHuman(overrides) {
    return {
        name: 'Yoran',
        age: 24,
        ...overrides
    };
}
