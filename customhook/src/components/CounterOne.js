import React from 'react'
import useCounter from '../hooks/useCounter';

function CounterOne() {

    const [count,handleIncrement,handleDecrement,handleReset]=useCounter(0,1);
     
  return (
    <div>
        <h2>Count-{count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CounterOne