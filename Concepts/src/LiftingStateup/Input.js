const Input =({text,handleChange})=>{
    return(
        <input 
        type="text" 
        value={text}
        onChange={(e)=>handleChange(e.target.value)}/>
    )
}

export default Input