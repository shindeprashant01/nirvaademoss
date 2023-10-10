import React from "react";


import LiveTicketsTable from "./liveTicketsTable";
import BackTheme from "../../BackTheme";







const  LiveTicketsTableComponents =()=>{

    return(
        <>
     
     <div style={{marginBottom:"50px"}}>
<BackTheme/>
     </div>
        <div   style={{position:'relative',  marginRight:'25px',marginLeft:'25px'}}>
  
  <LiveTicketsTable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default LiveTicketsTableComponents;