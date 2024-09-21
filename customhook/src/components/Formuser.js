import React from 'react'
import useInput from '../hooks/useInput';

function Formuser() {
    
   const [firstname,bindfirstname,resetfirstname]= useInput('');
   const [lastname,bindlastname,resetlastname]= useInput('');

    const handleSubmit=()=>{
       alert(`Hello ${firstname} ${lastname}`); 
       resetfirstname('');
       resetlastname('');
    }

  return (
    <div style={{margin:10,padding:10}}>
        <form>
            <label>Firstname:</label>
            <input type="text" name="firstname" 
            {...bindfirstname }/>
           <label>Lastname:</label>
            <input type="text" name="lastname" 
             {...bindlastname }/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Formuser