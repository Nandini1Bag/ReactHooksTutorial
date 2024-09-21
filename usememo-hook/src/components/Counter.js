import React, { useState ,useMemo} from 'react'

function Counter() {

  const [Counterone,setCounterone]=useState(0);
  const [Countertwo,setCountertwo]=useState(0);

const Incrementcounterone=()=>{   
    setCounterone(Counterone+1);
}

const Incrementcountertwo=()=>{
    setCountertwo(Countertwo+1);
}

// const IsEven = () => {
//   // Slow down the function to simulate a heavy computation
//   let i = 0;
//   while (i < 2000000) i++;
//   return Counterone % 2 === 0;
// };

const IsEven=useMemo(()=>{
    //slow down the function
    let i=0
    while (i < 200000000) i++
    return Counterone % 2 === 0
},[Counterone]);

  return (
    <div>
        <div>
        <button onClick={Incrementcounterone}>Counterone-{Counterone}</button>
        <span>{IsEven? 'even':'odd'}</span>
        </div>
        <div>
        <button onClick={Incrementcountertwo}>Countertwo-{Countertwo}</button>
        </div>

    </div>
  )
}

export default Counter