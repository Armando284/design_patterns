// The Revealing Module Pattern
const Person = (function () {
  // Private Properties
  let name;
  let lastName;

  function publicSetName(_name, _lastName) {
    name = _name;
    lastName = _lastName;
  }

  function publicGetName() { return `${name} ${lastName}` }

  /**
   * Reveal public pointers to 
   * private functions and properties
   */
  return {
    setName: publicSetName,
    getName: publicGetName
  }
})();

const client = Person;

client.setName('Harry', 'P.');
console.log(client.getName()); // Harry P.
// The name property is not accessible.
console.log(client.name); // undefined