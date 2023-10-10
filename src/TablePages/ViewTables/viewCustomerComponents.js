import React from "react";
import BackTheme from "../BackTheme";
import ViewCustomerTable from "./viewCustomerTable";



const ViewCustomerTableComponents =()=>{

    return(
        <>
     
     <div style={{marginBottom:"50px"}}>
        <BackTheme/>
     </div>
        <div   style={{position:'relative',  marginRight:'25px',marginLeft:'25px'}}>
   <ViewCustomerTable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default ViewCustomerTableComponents;