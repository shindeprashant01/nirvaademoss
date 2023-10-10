import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import '../../addVendor/viewVendor.css'


const ExpenseReportTable= () => {
  const[searchER, setSearchER]= useState("");
  const[expenseReport, setExpenseReport]= useState([]);
  const [filterExpenseReport, setFilteredExpenseReport] = useState([]);

  const viewExpenseReport = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setExpenseReport(response.data);
     setFilteredExpenseReport(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsExpenseReport=[
    {
      name:<div id="demo">Expense ID</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">Ticket ID</div>,
      selector: (row )=> row.email,
    },
    {
      name:<div id="demo">Requested Date</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Requested By</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Expense Cost</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Expense Description</div>,
      selector: (row) => <div className="form-control"> {row.email} </div>,
    },
    {
      name:<div id="demo">Project Name</div>,
      selector: (row) => row.email,
    },
   
    {
      name:<div id="demo">Approved/Paid Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Track</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Remark(Disapproved)</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Documents</div>,
      selector: (row) => row.email,
    },
   
  
]
  useEffect(()=>{
    viewExpenseReport();
      },[]);
          
      useEffect(()=>{
        const result= expenseReport.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchER.toLowerCase());
        });
     
        setFilteredExpenseReport(result)
           },[searchER]);

           const tableHeaderStyleExpenseReport={
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
    <div style={{position:'relative'}}>
     
      <DataTable 
 
     customStyles={tableHeaderStyleExpenseReport}
     columns={columnsExpenseReport}
      data={filterExpenseReport}
      pagination
      fixedHeader
      // fixedHeaderScrollHeight="1000px"
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
        value={searchER}
        onChange={(e)=>setSearchER(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default ExpenseReportTable;
