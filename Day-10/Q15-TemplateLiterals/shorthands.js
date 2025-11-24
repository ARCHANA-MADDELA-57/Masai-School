const username = "Alex";
const course = "JavaScript Fundamentals";
console.log(`Hello, ${username}, welcome to the ${course}!`);

const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Jane", "Doe")); 