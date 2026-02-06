# Node.js Internals: Detailed Explanation

This document breaks down the core components that make Node.js a powerful runtime for scalable applications.

---

## 1. Node.js Architecture
Node.js is built as a collection of different layers that work together to execute JavaScript outside of a web browser. It acts as a wrapper around a low-level engine and libraries to provide a platform for server-side development.



### JavaScript Engine (V8)
Developed by Google for Chrome, the **V8 Engine** is the core component that executes JavaScript. Instead of just interpreting code, it uses **Just-In-Time (JIT) compilation** to turn JavaScript directly into machine code that the computer's processor can understand, making execution incredibly fast.

### Node.js Core APIs
These are the built-in libraries provided by Node.js (like `fs`, `path`, `http`, and `crypto`). They give developers the tools to perform tasks that standard JavaScript cannot do on its own, such as interacting with the operating system or the network.

### Native Bindings
Since the V8 engine is written in C++ and our application code is in JavaScript, they cannot communicate directly. **Native Bindings** act as the bridge, allowing JavaScript code to call C++ functions that handle low-level system operations.

---

## 2. libuv

### What is libuv?
**libuv** is a multi-platform C library that handles the asynchronous nature of Node.js. It is the engine behind the "non-blocking I/O" model.

### Why Node.js needs libuv
JavaScript is inherently single-threaded. Without libuv, every time Node.js performed a task like reading a file or waiting for a database response, the entire program would stop and wait. libuv allows these tasks to happen in the background.

### Responsibilities of libuv
* **Event Loop:** Managing the execution of callbacks.
* **Thread Pool:** Handling heavy tasks that are too big for the main thread.
* **Asynchronous I/O:** Managing file system, DNS, and network operations.

---

## 3. Thread Pool

### What is a thread pool?
The **Thread Pool** is a set of additional threads (usually 4 by default) provided by libuv. While the main thread handles the execution of JavaScript, the thread pool handles the heavy lifting in the background.

### Why Node.js uses a thread pool
Node.js uses a thread pool to handle operations that are "blocking" or "expensive." By offloading these tasks to the pool, the main thread remains free to handle new incoming requests.

### Operations handled by the thread pool
* **File System (`fs`):** Reading/writing large files.
* **Cryptography:** Tasks like hashing passwords (`crypto` module).
* **Compression:** Data zipping/unzipping (`zlib` module).
* **DNS:** Resolving domain names to IP addresses.

---

## 4. Worker Threads

### What are worker threads?
**Worker Threads** are a feature that allows developers to run multiple instances of JavaScript in parallel. Each worker has its own V8 engine and its own memory space.

### Why are worker threads needed?
Unlike the Thread Pool (which is internal to libuv), Worker Threads are used by developers to handle **CPU-intensive tasks** (like complex calculations or image processing) without blocking the main event loop.

### Difference between Thread Pool and Worker Threads
| Feature | Thread Pool (libuv) | Worker Threads |
| :--- | :--- | :--- |
| **Controlled By** | libuv (Internal) | Developer (Manual) |
| **Task Type** | I/O, Crypto, Zlib | CPU-heavy JS logic |
| **Parallelism** | Runs C++ code in background | Runs JS code in parallel |

---

## 5. Event Loop Queues

The Event Loop organizes tasks into different queues to determine what runs next.



### Micro Task Queue
This queue has the **highest priority**.
* **Examples:** `process.nextTick()`, Promises (`.then`, `.catch`, `await`).
* **Priority:** It is emptied completely after every phase of the event loop and before moving to the next macro task.

### Macro Task Queue
This queue handles external events and timers.
* **Examples:** `setTimeout()`, `setInterval()`, `setImmediate()`, and I/O callbacks.
* **Priority:** Only one task is processed at a time, followed by a check of the Micro Task Queue.

### Execution Order
1.  Synchronous Code (Call Stack)
2.  `process.nextTick` tasks
3.  Promise callbacks
4.  Macro tasks (Timers, I/O, etc.)
