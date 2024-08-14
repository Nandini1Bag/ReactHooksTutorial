import { useState,useCallback } from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';


import React from 'react'

function ParentComponent() {
    const [Age,setAge] =useState(25);
    const [Salary,setsalary]=useState(1000); 

    const increamentAge=useCallback(()=>{
        setAge(Age+1);
    },[Age]);

    const increamentSalary=useCallback(()=>{
        setsalary(Salary+100);
    },[Salary]);

  return (
    <div>
        <Title/>
        <Count text="age" count={Age} ></Count>
        <Button handleclick={increamentAge}>increamentAge</Button> 
        <Count text="salary" count={Salary}></Count>
        <Button handleclick={increamentSalary}>increamentSalary</Button>
    </div>
  )
}

export default ParentComponent