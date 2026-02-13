// src/components/Component2.jsx
import Component3 from "./Component3";

function Component2(props) {
  return (
    <div>
      <h3>Component 2</h3>
      <Component3 {...props} />
    </div>
  );
}

export default Component2;
