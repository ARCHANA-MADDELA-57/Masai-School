import React from 'react';
import { AppContext } from '../context/AppContext';
import Component2 from './Component2';

const Component1 = () => {
  // These values are defined only once here
  const values = {
    a: "Apple",
    b: "Banana",
    c: "Cherry",
    d: "Date",
    e: "Elderberry",
    f: "Fig"
  };

  return (
    // 2. Wrap the tree with the Provider and pass the values
    <AppContext.Provider value={values}>
      <div>
        <h1>Component 1 (Provider)</h1>
        <Component2 /> 
        {/* Note: No props are passed to Component2! */}
      </div>
    </AppContext.Provider>
  );
};

export default Component1;