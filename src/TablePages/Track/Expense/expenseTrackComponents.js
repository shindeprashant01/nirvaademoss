import React from "react";
import ExpenseTrackTable from "./expenseTrackTable";
import BackTheme from "../../BackTheme";
 


const ExpenseTrackTableComponents =()=>{

    return(
        <>  
     <div style={{marginBottom:"50px"}}>
     <BackTheme/>
     </div>
     
        <div   style={{position:'relative',  marginRight:'25px',marginLeft:'25px'}}>
    <ExpenseTrackTable/>
        </div>
        <div>
     
   
        </div>
 
  
     
        </>
    )}


    export default ExpenseTrackTableComponents;