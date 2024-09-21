import {useState} from 'react'

function useCounter(initialcount=0,value) {
    const [count,setCount]=useState(initialcount); 

    const handleIncrement=()=>{
     setCount(prevcount=>prevcount+value)
    }
    const handleDecrement=()=>{
        setCount(prevcount=>prevcount-value)
       }
       const handleReset=()=>{
        setCount(initialcount)
       }
  return [count,handleIncrement,handleDecrement,handleReset]
}

export default useCounter