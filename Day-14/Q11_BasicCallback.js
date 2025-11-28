function displayMessage(name) {
    if (name) {
      console.log(`Hello, ${name}!`);
    } else {
      console.log("Hello! No name provided.");
    }
  }
  
  function getUserInput(callback) {
    setTimeout(() => {
      const username = "Alice"; 
      
      callback(username); 
    }, 1000);
  }
  
  
  console.log("Starting user input simulation...");
  
  getUserInput(displayMessage);
  
  console.log("Waiting for simulated data retrieval...");
  
  