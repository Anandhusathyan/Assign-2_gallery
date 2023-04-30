// const { useState, useEffect } = require("react");
import {useState,useEffect, useContext ,createContext} from "react";
import axios from "axios";
import Input from "./inputbox";
import Span from "./Span";

const ShareData=createContext()

function Images(){


    const [tag,settag]=useState("mountain"); 

    console.log("line no 14")

    const [gallery,setgallery]=useState([]);

    let apiKey="06bdd190cc4ed1e9174773bc2cf81695"
    let place = tag ;
    //let tag="mountain";
    let size="url_m"

    

    useEffect(()=>{
        console.log("from image",tag);
        axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${place}&per_page=55&extras=${size}&format=json&nojsoncallback=1`)
        .then(data=>setgallery(data.data.photos.photo)).catch(error=>console.log(error))
        
    },[tag])
    
    return <ShareData.Provider  value={{  Value:tag, settag  }}>
        <Input/>
        <Span   /*onclickhandler={onclickHandler}  tag={tag}*//>
        <div id="image-box"  >
        {gallery.map((photos,index)=>  
        <img src ={`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} alt={photos.title} key={index} className="img"/>
        )}
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