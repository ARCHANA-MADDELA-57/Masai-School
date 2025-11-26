function createCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;
        console.log("Current count:", count);
      },
      decrement: function() {
        count--;
        console.log("Current count:", count);
      },
      display: function() {
        console.log("Current count:", count);
      }
      
    };
  }
  
 
  const counter = createCounter();
  counter.increment();  
  counter.increment();  
  counter.decrement();  


/* Explain how closures are being used to encapsulate the counter variable. */
/* 
Closures are used to encapsulate (make private) the count variable by leveraging the concept of lexical scoping.
Lexical Scoping: The inner functions (increment, decrement, display) are defined inside the createCounter function. 
They automatically form a closure over the scope where they were created, retaining a link to the count variable. 
* Encapsulation: Once createCounter() returns, its execution context is gone from the Call Stack. 
However, the count variable persists in memory (on the Heap) because the returned methods still reference it. 
There is no way to access or modify count directly from outside the returned object (e.g., counter.count won't work). 
The only public interface is through the methods (increment, decrement), thus achieving data privacy and control.
*/

// Multiple Counters
const counterA = createCounter(); 
const counterB = createCounter(); 

console.log("Counter A actions:");
counterA.increment(); 
counterA.increment(); 

console.log("Counter B actions:");
counterB.increment(); 
counterB.decrement(); 

console.log("Final check of A:");
counterA.display(); 