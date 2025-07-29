let human = {
  name: "Danny",
  age: 20,
  favorieteChips: ['Doritos', 'Wokkels paprika', 'Nibb-it rings']
};
console.log(human.name);
console.log(human.age);

let { name: name2, age, favorieteChips: [doritos, ...wokkels] } = human;
console.log("los:", name2, age, doritos, wokkels);

let lijstje = [2, 4, 8, 15];
let [eerste, tweede] = lijstje;
console.log("eerste/tweede:", eerste, tweede);

let datumString = "2024-05-03";
// let splits = datumString.split("-");
let [, month, day] = datumString.split("-");
console.log(month);

let price = '123,45';
let [wholes, decimals] = price.split(',');


// let {bla, hoi} = 12345;
// console.log('bla/oi:', bla, hoi);


const getLocation = ({ city = 'Utrecht', country = 'Netherlands' } = {}) => {
    console.log(city)
    console.log(country)

};
getLocation();
getLocation({ city: 'Amsterdam'});
getLocation({ country: 'Belgium' });
