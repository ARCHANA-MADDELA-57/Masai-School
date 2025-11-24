const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

const a = ["x", "y"];
const b = ["z"];
const combinedArray = [...a, ...b];
console.log(combinedArray);


function printNames(...names) {
  return names;
}
const result = printNames("A", "B", "C");
console.log(result);
