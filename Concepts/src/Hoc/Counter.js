// Counter.js
import React from 'react';

const Counter = ({ count, incrementByOne, incrementByHundred }) => {
  return (
    <div>
      <h1>HOC</h1>
      <h2>Count: {count}</h2>
      <button onClick={incrementByOne}>Increment by 1</button>
      <button onClick={incrementByHundred}>Increment by 100</button>
    </div>
  );
};

export default Counter;
