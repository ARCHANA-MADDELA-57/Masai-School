// src/components/Component1.jsx
import Component2 from "./Component2";

function Component1() {
  const propsData = {
    a: "Apple",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };

  return (
    <div>
      <h3>Component 1</h3>
      <Component2 {...propsData} />
    </div>
  );
}

export default Component1;
