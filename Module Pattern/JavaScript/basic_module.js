// The Basic Module Pattern
const Person = (function () {
  /**
   * Private Properties
   * Even if we declare this variables as var instead of let, they still are not accessible.
   */
  let name;
  let lastName;
  return {
    /**
     * Public Properties
     * Everything inside the returned object will be accessible.
     */
    setName: function (_name, _lastName) {
      name = _name;
      lastName = _lastName;
    },
    fullName: function () { return `${name} ${lastName}` }
  }
})();

const client = Person;

client.setName('John', 'S.');
console.log(client.fullName()); // John S.
// The name property is not accessible.
console.log(client.name); // undefined




