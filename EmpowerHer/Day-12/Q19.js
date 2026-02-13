let age = 30;
function displayAge() {
  console.log("Current age (read from Global Context):", age);
}

function changeAge() {
  age = 45;
  console.log("Age updated inside changeAge() function context.");
  console.log("New age value (updated from function):", age);
}

console.log("--- Initial State ---");
console.log("Global 'age' before any function call:", age);

console.log("\n--- Calling displayAge() ---");
displayAge(); 

console.log("\n--- Calling changeAge() ---");
changeAge();

console.log("\n--- Calling displayAge() again ---");
displayAge(); 

console.log("\n--- Final State ---");
console.log("Global 'age' after function calls:", age);