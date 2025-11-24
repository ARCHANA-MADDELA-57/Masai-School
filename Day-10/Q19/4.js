const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a, b); 

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand); 

const info = {};
const userId = info.user?.id;
console.log(userId); 