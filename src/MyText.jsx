import React,{useContext} from "react";
import { AppContext,ColorContext,tFontContext } from "./App";

export function MyText(){
    const color = useContext(ColorContext);
    const username=useContext(AppContext);
    const tFont = useContext(tFontContext);

    const header={
        color:color,
        fontSize:tFont,
    }
    return(<p style={header}>{username}</p>);
}

export default MyText;