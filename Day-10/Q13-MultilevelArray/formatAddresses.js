const people = [{ name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } }];

const formatAddresses = (data) => {
  return data.map((person) => {
    
    const {
      name,
      address: {
        city,
        street: { name: streetName } 
      }
    } = person;

    return `${name} lives in ${city} on ${streetName}`;
  });
};

console.log(formatAddresses(people)); 
