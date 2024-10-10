// Counter.js
import React from 'react';

const Counter = ({ count, incrementByOne, incrementByHundred }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementByOne}>Increment by 1</button>
      <button onClick={incrementByHundred}>Increment by 100</button>
    </div>
  );
};

export default Counter;
