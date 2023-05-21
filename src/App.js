import './App.css';
import "./component.css"
import {Images} from './componenet/Images';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SelectedImage from './componenet/selectedimage';



function App() {

  return <div className="App">
      <h1 id='head'>SnapShot </h1>
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Images/>}>
          <Route path="/seletedimage" element={<SelectedImage/>}/>
        </Route>
      </Routes>  
    </BrowserRouter>  
      {console.log("app")}
    </div>
}

export {
  App
  
} 
