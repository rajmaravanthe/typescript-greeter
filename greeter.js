var person = (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        return "Person name is " + this.name + " and " + this.age + " years of age";
    };
    return person;
}());
var Roshan = new person('Hrithik roshan', 40);
document.write(Roshan.greet());
