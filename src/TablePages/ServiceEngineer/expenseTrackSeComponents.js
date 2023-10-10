import React from "react";
import BackTheme from "../BackTheme";
import ExpenseTrackSeTable from "./expenseTrackSeTable";
 


const ExpenseTrackSeTableComponents =()=>{

    return(
        <>  
     <div style={{marginBottom:"50px"}}>
     <BackTheme/>
     </div>
     
        <div   style={{position:'relative',  marginRight:'25px',marginLeft:'25px'}}>
<ExpenseTrackSeTable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default ExpenseTrackSeTableComponents;