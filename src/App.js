

import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from "react-router-dom";
import Newform from "./Newform";
import Home from "./Home";


function App() {

  
  return (
   
    <div>
    <BrowserRouter>
 
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/new" element={<div>
    <Home/><Newform/>
    </div>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  
   
  )
}

export default App;
