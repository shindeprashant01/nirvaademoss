import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import '../../addVendor/viewVendor.css'



const ExpenseTrackTable= () => {
  const[searchET, setSearchET]= useState("");
  const[expenseTrack, setExpenseTrack]= useState([]);
  const [filterExpenseTrack, setFilteredExpenseTrack] = useState([]);

  const viewExpenseTrack = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setExpenseTrack(response.data);
     setFilteredExpenseTrack(response.data)
    } catch(error){
          console.log(error);
    }
  };


  const columnsExpenseTrack=[
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
      selector: (row )=> row.email,
    },
    {
      name:<div id="demo">Requested By</div>,
      selector: (row )=> row.email,
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
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Project Name</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Approved/Paid Date</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Track</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Remark(Disapproved)</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Documents</div>,
      selector: (row) => row.body,
    },
 
]


  useEffect(()=>{
    viewExpenseTrack();
      },[]);
          
      useEffect(()=>{
        const result= expenseTrack.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchET.toLowerCase());
        });
     
        setFilteredExpenseTrack(result)
           },[searchET]);

           const tableHeaderStyleExpenseTrack={
            headCells: {
              style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
  
                  border: "1px solid white",
                  width: "250px",
                  fontWeight: "bold",
                  fontSize: "18px", 
                  color: "white",
                  backgroundColor: "rgb(67, 190, 206)",
                  padding: "12px",
                  height:'100px'
  
              }
          },
          cells: {
              style: {
                  display: "flex",
                  justifyContent: "center",
                  fontSize: '14px',
                  flexWrap: "wrap",
                  width: '100px',
                  height:'100px'
  
  
              }
          },
          rows: {
              style: {
                  height:"100px"
                  //   width:"25px",
              }
          }
          }

  return (
    <div style={{position:'relative'}}>
     
      <DataTable  
 
     customStyles={tableHeaderStyleExpenseTrack}
     columns={columnsExpenseTrack}
      data={filterExpenseTrack}
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
        value={searchET}
        onChange={(e)=>setSearchET(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default ExpenseTrackTable;
