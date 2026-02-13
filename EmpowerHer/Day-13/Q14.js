console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task") }, 0); 
Promise.resolve().then(() => { console.log("Promise Task") }); 
console.log("End");

/*
Explanation of the Output Sequence
The specific output order—Begin, End, Promise Task, Timeout Task—is determined by the priority of tasks in the JavaScript Event Loop:

1. Synchronous Execution (Highest Priority)
The synchronous code in the Call Stack executes first, immediately and sequentially.

console.log("Begin") runs immediately.

Output: Begin

The setTimeout and Promise.resolve().then() functions are executed, but their callbacks are offloaded to separate queues. The main thread does not wait.

console.log("End") runs immediately after the offloads are initiated.

Output: End

2. Microtask Queue (Second Highest Priority)
Once the Call Stack is empty, the Event Loop checks the Microtask Queue before checking the Macrotask Queue.

The callback from Promise.resolve().then() is placed in the Microtask Queue.

The Event Loop moves this task to the Call Stack.

Output: Promise Task

3. Macrotask Queue (Lowest Priority)
Only after the Call Stack is empty and the entire Microtask Queue is empty does the Event Loop check the Macrotask Queue (also known as the Task Queue).

The callback from setTimeout(() => {...}, 0) is placed in the Macrotask Queue. A delay of 0 milliseconds just means "schedule this as soon as possible," which still places it behind all synchronous code and all Microtasks.

The Event Loop moves this task to the Call Stack.

Output: Timeout Task

The final sequence is therefore Begin, End, Promise Task, Timeout Task.
*/