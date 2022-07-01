import React from "react"
import { useSelector,useDispatch } from "react-redux";
import { addd } from "./store/dartSlice";
import { minus } from "./store/dartSlice";

function Lobe(){

    
   const dispatch=useDispatch()
 
   var itemsp=useSelector((state)=>{
       return(
           state.dart  
       )
       
   })

   function Dothae(){
    // console.log()
     dispatch(addd())
          }

          function Dothamin(){
             // console.log()
              dispatch(minus())
                   }

    return(
        <div>
        <h1>hii i kl</h1>
        <h1>{itemsp}</h1>
        <button onClick={Dothae} style={{marginLeft:330,marginBottom:20}}>counter-add</button>
    <button onClick={Dothamin} style={{marginLeft:20,marginBottom:20}}>counter-minus</button>
        </div>
    )
}

export default Lobe;