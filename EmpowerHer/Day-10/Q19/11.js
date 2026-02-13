const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log(clonedArray); 


clonedArray.push(4);
console.log(originalArray); 


const numbers = [2, 3];
const newNumbers = [100, ...numbers];
console.log(newNumbers);

const userProfile = { id: 1, name: "Alice", active: false };
const updates = { active: true, role: "admin" };
const mergedProfile = { ...userProfile, ...updates };
console.log(mergedProfile);
