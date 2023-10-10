import React from "react";

import BackTheme from "../BackTheme";

import InvoiceScheduleTable from "./invoiceScheduleTable";






const InvoiceScheduleTableComponents =()=>{

    return(
        <>
     
     <div style={{marginBottom:"50px"}}>
 <BackTheme/>
     </div>
        <div   style={{position:'relative',  marginRight:'25px',marginLeft:'25px'}}>
 <InvoiceScheduleTable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default  InvoiceScheduleTableComponents;