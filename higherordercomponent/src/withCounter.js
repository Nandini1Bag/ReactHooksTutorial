// withCounter.js
import React, { useState } from 'react';

const withCounter = (WrappedComponent) => {
  return ({ initialCount = 0, ...props }) => {
    const [count, setCount] = useState(initialCount);

    const incrementByOne = () => setCount(count + 1);
    const incrementByHundred = () => setCount(count + 100);

    return (
      <WrappedComponent
        count={count}
        incrementByOne={incrementByOne}
        incrementByHundred={incrementByHundred}
        {...props}
      />
    );
  };
};

export default withCounter;
