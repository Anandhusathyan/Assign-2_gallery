import { useNavigate,useOutletContext,Link } from "react-router-dom";


function SelectedImage(){

    const {selectimage,setselectimage}=useOutletContext()
    console.log("selectimage",selectimage)
    const navigate=useNavigate()

    if(!selectimage){
        console.log("from if")
        navigate("/");
    }

    function Move(){
        console.log("from move" )
        setselectimage(null);
        navigate("/");
    }

    return <div>
        {selectimage && <div id="selectedimage">
    <button  id="selectedbutt" onClick={()=>{Move()}} style={{color:'white'}} >Go Back</button>
    <img src ={`https://live.staticflickr.com/${selectimage.server}/${selectimage.id}_${selectimage.secret}.jpg`}
    id="img"/>
    </div>}
    </div>
}

export default SelectedImage;