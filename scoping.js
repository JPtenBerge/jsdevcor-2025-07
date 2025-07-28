// console.log('i voor for:', i);

for (let i = 0; i < 5; i++) { // lexical scope
  console.log("i:", i);
}
// console.log('i buiten for:', i);

// block scope:
// - let (kan veranderen)
// - const (kan deels veranderen)

// lexical:
// - var


const bla =14;
// bla = 28;
// bla++;

const config = {
    bla: 28
};
config.bla = 'hoi';
config.hoi = 'iets';
console.log(config);
// config = {};


console.log(bla);
console.log(config.bla);

