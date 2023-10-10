import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import "../../addVendor/viewVendor.css";




const ExpenseTable= () => {
  const[searchE, setSearchE]= useState("");
  const[expense, setExpense]=useState([]);
  const [filtereExpense, setFilteredExpense] = useState([]);

  const viewExpense= async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setExpense(response.data);
     setFilteredExpense(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsExpense=[
    {
      name:<div id="demo">Sr NO</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">Project Name</div>,
      selector: (row )=> row.email,
    },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Ticket ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Remaining Value</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Amount</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Description</div>,
      selector: (row) => <div className="form-control"> {row.email} </div>,
    },
    {
      name:<div id="demo">Document</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Request By</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Request Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Request Date</div>,
      selector: (row) => row.email,
    },
    {
      name:'Approve',
      cell :(row)=> <Button variant="outline-primary" size="sm" onClick={()=> alert(row.id)} > Approve</Button>
     
    },
    {
      name:'Approve',
      cell :(row)=> <Button variant="outline-danger" size="sm" onClick={()=> alert(row.id)} > Delete</Button>
     
    },
 
  
]
  useEffect(()=>{
    viewExpense();
      },[]);
          
      useEffect(()=>{
        const result= expense.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchE.toLowerCase());
        });
     
        setFilteredExpense(result)
           },[searchE]);

           const tableHeaderStyleExpense={
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
     customStyles={tableHeaderStyleExpense}
     columns={columnsExpense}
      data={filtereExpense}
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
        value={searchE}
        onChange={(e)=>setSearchE(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
  );
};

export default ExpenseTable;
