import { useContext } from "react";
import { ShareData } from "./Images";

function Span(){

    const{Value,settag}=useContext(ShareData)

    

    return <div  id="span">

        <button id="butt1"  onClick={()=>settag("Mountain")}>Mountain</button>

        <button id="butt2"  onClick={()=>settag("Beaches")}>
            Beaches{console.log("Span")}</button>

        <button id="butt3" onClick={()=>settag("Birds")}>Birds</button>

        <button id="butt4"  onClick={()=>settag("Food")}>Food{console.log(Value)}</button>

    </div>
}

export default Span;