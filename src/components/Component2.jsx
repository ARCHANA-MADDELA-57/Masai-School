import React from 'react';
import Component3 from './Component3';

const Component2 = () => {
  return (
    <div>
      <p>Component 2 (I am a middleman, I pass nothing!)</p>
      <hr />
      <Component3 />
    </div>
  );
};

export default Component2;