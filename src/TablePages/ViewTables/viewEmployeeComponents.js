import React from "react";
import BackTheme from "../BackTheme";
import ViewEmployeeTable from "./viewEmployeeTable";




const ViewEmployeeTableComponents =()=>{

    return(
        <>
     
     <div style={{marginBottom:"200px"}}>
        <BackTheme/>
     </div>
        <div   style={{position:'relative',  marginRight:'25px',marginLeft:'25px'}}>
    <ViewEmployeeTable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default ViewEmployeeTableComponents;