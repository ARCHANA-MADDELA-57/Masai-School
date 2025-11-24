const isEven = (n) => n % 2 === 0;

console.log(isEven(4)); 
console.log(isEven(5)); 

let marks = 40; 
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

const greet = (name) => {
    const display = name ? name : "Guest";
    console.log(`Hello, ${display}`);
  };
  
greet("Alice"); 
greet();        