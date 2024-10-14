import { useState} from  "react";
import Input from "./Input";
import Display from "./Display";

const Parent=()=>{
    const [text,settext]=useState("");

    const onHandleChane=(value)=>{
        settext(value);
    }
return(
    <div className="Liftingstateup">
        <h1>Liftingstateup</h1>
        <Input text={text} handleChange={onHandleChane}/>
        <Display text={text}/>
    </div>
)
}

export default Parent