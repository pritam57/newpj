import { Button,ButtonGroup } from '@material-ui/core';

import React, { useState } from "react";
import Newform from './Newform';



function Home() {

  const [dta,setdata]=useState("true");
  const [d,setd]=useState("true")

  

  function Dothe(){
    if(dta==="true"){
    setdata("false")}
    else{
      setdata("true")
    }
  }

  function Dothefunc(){
    if(d==="true"){
    setd("false")}
    else{
      setd("true")
    }
  }
  return (
   
    <div>
    <button onClick={Dothe}>matx</button>
    <button className='kll' onClick={Dothefunc}>Add new employe</button>
  <div>
  {
    dta==="false" ?
    <ButtonGroup orientation="vertical">
  <Button color="secondary" variant="outlined">Dashboard</Button>
  <Button color="secondary" variant="outlined">master</Button>
  <Button color="secondary" variant="outlined">order</Button>

 <Button color="secondary" variant="outlined" onClick={Dothefunc} >employe</Button>
  </ButtonGroup>
  :null
  }
  </div>
  <div>
  {
    d==="false" ?
 <div>
 <Newform/>
 </div>
  :null
  }
  </div>
    </div>
  
   
  )
}

export default Home;
