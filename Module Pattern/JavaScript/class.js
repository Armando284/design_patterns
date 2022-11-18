// Class pattern
class Person {
  // Private Properties
  #name
  #lastName
  constructor(name, lastName) {
    this.#name = name;
    this.#lastName = lastName;
  }
  // Public Properties
  getFullName() { return `${this.#name} ${this.#lastName}` }
}

const client = new Person('Hermione', 'G.');
console.log(client.getFullName());
// console.log(client.#name) // Property '#name' is not accessible outside class 'Person' because it has a private identifier.