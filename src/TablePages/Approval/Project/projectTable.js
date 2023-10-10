import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import "../../addVendor/viewVendor.css";




const ProjectTable= () => {
  const[searchPR, setSearchPR]= useState("");
  const[project, setProject]=useState([]);
  const [filtereProject, setFilteredProject] = useState([]);

  const viewProject= async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setProject(response.data);
     setFilteredProject(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsProject=[
    {
      name:<div id="demo">Sr NO</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">PO ID</div>,
      selector: (row )=> row.email,
    },
    {
      name:<div id="demo">PO Document</div>,
      selector: (row) => row.email,
    },
 
    {
      name:<div id="demo">SOW</div>,
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
      selector: (row) => <div className="form-control"> {row.email} </div>,
    },
    {
      name:<div id="demo">PO</div>,
      selector: (row) => row.email,
    },
  
    {
      name:<div id="demo">RPO</div>,
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
      name:<div id="demo">Approve</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Disapprove</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Service ID </div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Service Name </div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Manager</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">AMC</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Assign Value </div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Remaining Assign Value </div>,
      selector: (row) => row.email,
    },


 
  
]
  useEffect(()=>{
    viewProject();
      },[]);
          
      useEffect(()=>{
        const result= project.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchPR.toLowerCase());
        });
     
        setFilteredProject(result)
           },[searchPR]);

           const tableHeaderStyleProject={
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
     customStyles={tableHeaderStyleProject}
     columns={columnsProject}
      data={filtereProject}
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
        value={searchPR}
        onChange={(e)=>setSearchPR(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
  );
};

export default ProjectTable;
