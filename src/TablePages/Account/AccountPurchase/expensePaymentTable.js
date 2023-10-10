import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import "../../addVendor/viewVendor.css";




const ExpensePaymentTable= () => {
  const[searchEP, setSearchEP]= useState("");
  const[expensePayment, setExpensePayment]=useState([]);
  const [filtereExpensePayment, setFilteredExpensePayment] = useState([]);

  const viewExpensePayment = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
 setExpensePayment(response.data);
 setFilteredExpensePayment(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsExpensePayment=[
    {
        name:<div id="demo">Approve ID</div>,
        
        selector: (row)=> row.email,
        sortable:true,
    
      },
      {
        name:<div id="demo">Ticket ID</div>,
        selector: (row )=> row.email,
      },
      {
        name:<div id="demo">Service Engineer ID</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Service Engineer Name</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">Service</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">Remaining Value</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">PO ID</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">Expense Cost</div>,
        selector: (row) => <div className="form-control"> {row.email} </div>,
      },
      {
        name:<div id="demo">Date Of Request</div>,
        selector: (row) => row.email,
      },
    
      {
        name:<div id="demo">Expense Description</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Documents</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Approve By</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Payments </div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Rejects </div>,
        selector: (row) => row.email,
      },
    
  
]
  useEffect(()=>{
    viewExpensePayment();
      },[]);
          
      useEffect(()=>{
        const result= expensePayment.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchEP.toLowerCase());
        });
     
        setFilteredExpensePayment(result)
           },[searchEP]);

           const tableHeaderStyleExpensePayment={
            headCells:{
               style:{
                display:"flex",
                justifyContent:"center",
                alignItem:"center",
               
                border:"1px solid white",
                width:"25px",
                fontWeight:"bold",
                fontSize:"14px",
                color:"white",
                backgroundColor:"rgb(67, 190, 206)",
                padding:"12px",
       
              
             
              
            
      
               }
            },
            cells:{
              style:{
                display:"flex",
                justifyContent:"center",
                fontSize:'14px',
                flexWrap:"wrap"
            
               
              }
            },
            rows:{
              style:{
              width:"25px",
            }
           }
          }

  return (
 
  
      <DataTable 
     customStyles={tableHeaderStyleExpensePayment}
     columns={columnsExpensePayment}
      data={filtereExpensePayment}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="550px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={
        <Button varient="primary" className="me-3"> Search</Button>
      }
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search Here" 
        className="w-25 form-control"
        value={searchEP}
        onChange={(e)=>setSearchEP(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
  );
};

export default ExpensePaymentTable;
