const user = { id: 101, status: "active" };
const { id, status } = user;

console.log(id); 
console.log(status); 


const Id = 101;
const role = "admin";
const User = {
  Id,
  role
};
console.log(User);


const name = "John";
const age = 30;
const person = {
  name,
  age,  
  greet() { 
    return `Hello, my name is ${this.name} and I am ${this.age}.`;
  }
};
console.log(person);
console.log(person.greet());