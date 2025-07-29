
// IBM BAW

class Mammal {
    constructor() {
        console.log('mammal');
        if (new.target === Mammal) {
            throw new Error('No no no');
        }
    }

}

// new Mammal();

class Human extends Mammal {
    static nrOfHumans = 0;

    name;

    constructor(name) {
        super();
        this.name = name;
        Human.nrOfHumans++;

        console.log(this, Human.nrOfHumans);
    }

    walk() {
        console.log(`${this.name} gaat lopen!`);
    }
}

new Human('Danny');
new Human('Yoran');
new Human('Sten');
let jp = new Human('JP');
new Human();

jp.mijnEigenProp = 42;
delete jp.name;


jp.walk();