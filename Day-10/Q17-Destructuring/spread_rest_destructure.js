const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); 

const sum = (...nums) => {
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };
  
  console.log(sum(1, 2, 3));     
  console.log(sum(10, 20, 30, 40)); 

  const user = {
    name: "Alice",
    age: 22,
    address: {
      city: "Bangalore",
      pin: 560001
    }
  };
  
  const {
    name,                    
    address: { city, pin }    
  } = user;
  
  console.log(name); 
  console.log(city); 
  console.log(pin);  