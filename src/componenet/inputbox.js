import { useContext, useState } from "react"
import { ShareData } from "./Images"

function Input (){

    const{Value,settag}=useContext(ShareData);
    
    const [inputvalue,setinputvalue]=useState("");

    return <div id="input">
        <input  type="text"  value={inputvalue} onChange={e=>setinputvalue(e.target.value)}/>
        <button   onClick={e=>{
            settag(inputvalue); setinputvalue("")
        }}>search</button>
        {console.log("input")}
    </div>
}

export default Input