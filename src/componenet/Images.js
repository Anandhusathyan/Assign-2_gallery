//const { useState, useEffect } = require("react");
import { createContext,useState,useEffect } from "react";
import axios from "axios";
import Input from "./inputbox";
import Span from "./Span";
import { Outlet, useNavigate } from "react-router-dom";

const ShareData=createContext()

function Images(){


    const [tag,settag]=useState("mountain"); 

    console.log("line no 14")

    const [gallery,setgallery]=useState([]);

    const [selectimage,setselectimage] = useState(null)

    const navigate=useNavigate()

    const Handleimageclick =(image)=>{
        setselectimage(image);
        navigate("/seletedimage");
        console.log("hello")
    }

    let apiKey="06bdd190cc4ed1e9174773bc2cf81695"
    let place = tag ;
    //let tag="mountain";
    let size="url_m"

    

    useEffect(()=>{
        console.log("from image",tag);
        axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${place}&per_page=55&extras=${size}&format=json&nojsoncallback=1`)
        .then(data=>setgallery(data.data.photos.photo)).catch(error=>console.log(error))
        
    },[tag])
    
    return <ShareData.Provider  value={{  Value:tag, settag , selectedimage:selectimage }}>
        <Input/>
        <Span   /*onclickhandler={onclickHandler}  tag={tag}*//>
        <div id="image-box" >
        {!selectimage && gallery.map((photos,index)=><div id="foroutlet" >

           <img src ={`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} 
           alt={photos.title} key={index} className="img" onClick={()=>Handleimageclick(photos)}/>
           
           </div>
        )}
        {console.log("hello from tag",tag)}
        {console.log("hello from selectimage",selectimage)}
        <Outlet context={{selectimage,setselectimage}}/>
        </div>
    </ShareData.Provider> 
}
 
export {
   Images,
   ShareData
} 




// const [gallery,setgallery]=useState([]);
    // let apiKey="686b602ec8e009bb8af033c79bfb102c"
    // let tag="mountain"
    // useEffect(()=>{
    //     axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=10&format=json&nojsoncallback=1`)
    //     .then(data=>setgallery(data.data.photos.photo)).catch(error=>console.log(error))
        
    // },[])
    
    // return gallery.map((photos,index)=><div id="image-box" key={index} >
    //     <img src ={`http://farm${photos.farm}.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} alt={photos.title} />
    // </div>) 