"use strict";
class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  fullName() { return `${this.name} ${this.lastName}`; }
}
const dev = new Person('Armando', 'Peña');
console.log(dev.fullName()); // Armando Peña
// Supposedly the 'name' property should be private according to the TypeScript file but, we can still access it.
console.log(dev.name); // Armando