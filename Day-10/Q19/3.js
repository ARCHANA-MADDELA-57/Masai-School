const product = { name: "Pen", price: 10 };
const productCopy = { ...product };

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b }; // { x: 1, y: 2 }

const maxValue = (...nums) => {
  return Math.max(...nums);
};
