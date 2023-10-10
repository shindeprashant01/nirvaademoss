import React from "react";

import BackTheme from "../../BackTheme";
import PurchaseRequestTable from "./purchaseRequestTable";



const PurchaseRequestTableComponents =()=>{

    return(
        <>
     
     <BackTheme/>
        <div   style={{position:'relative', marginRight:'25px',marginLeft:'25px'}}>
     <PurchaseRequestTable/>
        </div>
      
  
     
        </>
    )}


    export default PurchaseRequestTableComponents;