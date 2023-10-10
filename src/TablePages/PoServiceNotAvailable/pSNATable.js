import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../../addVendor/viewVendor.css'



const PSNATable= () => {
  const[searchPSNA, setSearchPSNA]= useState("");
  const[poService, setPoService]= useState([]);
  const [filterPoService, setFilteredPoService] = useState([]);

  const viewPSNA = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setPoService(response.data);
     setFilteredPoService(response.data)
    } catch(error){
          console.log(error);
    }
  };


  const columnsPoService=[
    {
      name:<div id="demo">Sr No</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">PO Del</div>,
      selector: (row )=> row.email,
    },
    {
      name:<div id="demo">PO Edit</div>,
      selector: (row) => row.body,
    },
    {
        name:<div id="demo">PO id</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">PO Documents</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">SOW</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo"> Prime Customer </div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">End Customer</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Total PO</div>,
      selector: (row) => <div id="demo"> {row.email} </div>,
    },
    {
      name:<div id="demo">Total Assign value</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Remaining Assign value</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Start Date</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">End Date</div>,
        selector: (row) => row.email
      },
   
]


  useEffect(()=>{
    viewPSNA();
      },[]);
          
      useEffect(()=>{
        const result= poService.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchPSNA.toLowerCase());
        });
     
        setFilteredPoService(result)
           },[searchPSNA]);

           const tableHeaderStylePoService={
            headCells:{
               style:{
                display:"flex",
                justifyContent:"center",
                alignItem:"center",
               
                border:"1px solid white",
                width:"100%",
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
 
     customStyles={tableHeaderStylePoService}
     columns={columnsPoService}
      data={filterPoService}
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
        value={searchPSNA}
        onChange={(e)=>setSearchPSNA(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default PSNATable;
