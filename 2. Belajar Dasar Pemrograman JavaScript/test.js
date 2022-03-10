// make a class animal that has properties name age and isMammal
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// make a class rabbit that inherits from animal
class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);
    }
    // make a function eat that prints "rabbit eats"
    eat() {
        console.log(`${this.name} sedang makan!`);
    }
}

// make a class eagle that inherits from animal
class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false);
    }
    // make a function fly that prints "eagle flies"
    fly() {
        console.log(`${this.name} sedang terbang!`);
    }
}

// make an instance myRabbit of class rabbit
let myRabbit = new Rabbit("Labi", 2);
// make an instance myEagle of class eagle
let myEagle = new Eagle("Elo", 4);

console.log(myRabbit);
console.log(myEagle);