const square = (n) => n * n;
console.log(square(5))

/*
Explain why the following logs undefined:

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
The arrow function test: () => console.log(this.value) uses lexical this. It does not bind its own this. Instead, it inherits this from the surrounding scope (usually the global object, or window in a browser, or undefined in strict mode). Since the global object does not have a value property (or value is undefined in the inherited scope), this.value resolves to undefined.
*/

const obj = {
    value: 50,
    test: function () {
      console.log(this.value);
    }
  };
  obj.test(); 