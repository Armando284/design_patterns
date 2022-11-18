class Person {
  private name: string;
  private lastName: string;
  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
  public fullName(): string { return `${this.name} ${this.lastName}`; }
}

const dev = new Person('Armando', 'Peña');
console.log(dev.fullName());
// console.log(dev.name) // Property 'name' is private and only accessible within class 'Person'.