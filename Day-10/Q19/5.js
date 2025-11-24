/*
a) for (var i = 0; i < 3; i++) {} console.log(i);
Output: 3
var is function-scoped (or global). After the loop finishes (when $i$ becomes 3, failing the condition), $i$ remains accessible and holds the value 3.

b) for (let j = 0; j < 3; j++) {} console.log(j);
Output: ReferenceError: j is not defined
let is block-scoped. $j$ is only defined within the curly braces of the for loop.

c) Why is const used for values that should not be reassigned?
const is used to declare a variable whose reference cannot be changed (reassigned) after its initial declaration. This helps prevent accidental modification of variables, enhancing code reliability and readability.
*/