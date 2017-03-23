
class person {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet () {
        return `Person name is ${this.name} and ${this.age} years of age`;
    }
}

var Roshan = new person('Hrithik roshan', 40);
document.write(Roshan.greet());