import React from "react";
import { useState } from "react";
import "./index.css"

const Newform = ()=>{

    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[address,setaddress]=useState("");
    const[location,setlocation]=useState("");
    const[sta,setsta]=useState("");
    const[city,setcity]=useState("");
    const[role,setrole]=useState("");
    const[level,setlevel]=useState("");

    function dothis(){
        console.log(name);
        console.log(email)
        console.log(address)
        console.log(location)
        console.log(sta)
        console.log(city)
        console.log(role)
        console.log(level)



    }


    return(
        <div className="data">
        <input className="p" type={"text"} placeholder={"full name"} value={name} onChange={(e)=>{setname(e.target.value)}} />
        <input className="p" type={"text"} placeholder={"email"}  value={email} onChange={(e)=>{setemail(e.target.value)}}/><br/>
        <input style={{height:40}} className="p" type={"text"} placeholder={"address"}  value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
        <input style={{height:40}} className="p" type={"text"} placeholder={"location"}  value={location} onChange={(e)=>{setlocation(e.target.value)}}/><br/>
        <select value={sta} onChange={(e)=>{setsta(e.target.value)}} >
        <option className="p" >select state</option>
        <option value="maharashtra">maharashtra</option>
        <option value="karanataka">karanataka</option> 
        <option value="goa">goa</option> 
        <option value="gujrath">gujrath</option> 
        </select>
        <select className="p" value={city} onChange={(e)=>{setcity(e.target.value)}} >
        <option >select city</option>
        <option value="surat">surat</option>
        <option value="mumbai">mumbai</option> 
        <option value="kalyan">kalyan</option> 
        <option value="panji">panji</option> 
        </select><br/>
        <select className="p" value={role} onChange={(e)=>{setrole(e.target.value)}} >
        <option >select role</option>
        <option value="developer">developer</option>
        
        <option value="testing">testing</option> 
        </select>
        <select className="p" value={level} onChange={(e)=>{setlevel(e.target.value)}} >
        <option >select userlevel</option>
        <option value="fresher">fresher</option>
        
        <option value="experience">experience</option> 
        </select><br/>

        <button onClick={dothis}>submit</button>
        </div>
    )
}

export default Newform;