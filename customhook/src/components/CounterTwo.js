import React from 'react'
import useCounter from '../hooks/useCounter';

function CounterTwo() {

  const [count,handleIncrement,handleDecrement,handleReset]=useCounter(10,10);
     
  return (
    <div>
        <h2>Count-{count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CounterTwo