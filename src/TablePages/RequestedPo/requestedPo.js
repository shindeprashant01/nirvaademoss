import React from "react";
import RequestedComponent from "./requestedComponent";
import BackThemeFooter from "../BackThemeFooter";
import BackTheme from "../BackTheme";


const RequestedPoTable =()=>{

    return(
        <>
     
      
     <div style={{marginBottom:"50px"}}>
          <BackTheme/>
     </div>
        <div style={{position:'relative'}}>
          <RequestedComponent />
        </div>
        <BackThemeFooter/>

  
     
        </>
    )}


    export default RequestedPoTable;