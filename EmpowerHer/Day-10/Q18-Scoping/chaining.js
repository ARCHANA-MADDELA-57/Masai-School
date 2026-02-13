if (true) {
    let x = 10;
    var y = 20;
  }
  console.log(y);
  console.log(x);
/*
console.log(y) Output: 20
var declarations are function-scoped (or globally scoped if outside a function). The if block does not create a new scope for var. Therefore, y is accessible outside the block where it was declared.

console.log(x) Output: ReferenceError
let declarations are block-scoped. The x variable is only valid within the curly braces of the if statement. Attempting to access x outside of that block results in a ReferenceError.
*/

const profile = {
    user: {
        details: {
            email: "test@mail.com"
        }
    }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);


const incompleteProfile = {
    id: 101,
  };
  const safeTheme = incompleteProfile.settings?.theme; 
  console.log(safeTheme); 