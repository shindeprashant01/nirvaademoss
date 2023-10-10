import React from "react";
import BackTheme from "../../BackTheme";
import ArchivedTicketsTable from "./archivedTicketsTable";







const  ArchivedTicketsTableComponents =()=>{

    return(
        <>
     
     <div style={{marginBottom:"50px"}}>
<BackTheme/>
     </div>
        <div   style={{position:'relative',  marginRight:'25px',marginLeft:'25px'}}>
  
 <ArchivedTicketsTable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default ArchivedTicketsTableComponents;