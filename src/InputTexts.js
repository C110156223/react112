import React,{useState} from "react";
export default function InputTexts(){
    const [text,setText]=useState("nothing")
    return(
        <>
        <input type="text" on onChange={(e)=>{setText(e.target.value)}}></input>
        <p>{text}</p>
        </>
    )
}