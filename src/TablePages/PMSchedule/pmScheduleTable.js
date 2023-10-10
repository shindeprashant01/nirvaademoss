import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import '../addVendor/viewVendor.css'



const PMScheduleTable= () => {
  const[searchPMS, setSearchPMS]= useState("");
  const[pMSchedule, setPMSchedule]= useState([]);
  const [filterPMSchedule, setFilteredPMSchedule] = useState([]);

  const viewPMSchedule = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setPMSchedule(response.data);
     setFilteredPMSchedule(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsPMSchedule=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
        name:<div id="demo">Add PM Schedule</div>,
        cell :(row)=><div>
  
      <button  size="sm" className="btn btn-trasnparent" style={{color:'green'}} onClick={()=> alert(row.id)} > Add_PM_schedule </button>
      </div> 
       
      },
   
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Prime Customer</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">End Customer</div>,
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Total PO</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Total Assign Value</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Total Remaining value</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Start Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">End Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">PO Number</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">View PDF</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Documents</div>,
        selector: (row) => row.email,
      },
 
  
]
  useEffect(()=>{
    viewPMSchedule();
      },[]);
          
      useEffect(()=>{
        const result= pMSchedule.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchPMS.toLowerCase());
        });
     
        setFilteredPMSchedule(result)
           },[searchPMS]);

           const tableHeaderStylePMSchedule={
            headCells:{
               style:{
                display:"flex",
                justifyContent:"center",
                alignItem:"center",
               
                border:"1px solid white",
                // width:"25px",
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
            //   width:"25px",
            }
           }
          }

  return (
    <div style={{position:'relative'}}>
     
      <DataTable 
 
     customStyles={tableHeaderStylePMSchedule}
     columns={columnsPMSchedule}
      data={filterPMSchedule}
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
        <input type="text" placeholder="Search PO ID" 
        className="w-25 form-control"
        value={searchPMS}
        onChange={(e)=>setSearchPMS(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default PMScheduleTable;
