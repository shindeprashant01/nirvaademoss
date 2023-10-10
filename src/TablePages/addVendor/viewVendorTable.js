import React ,{useState,useEffect}from "react";
// import BackTheme from "../BackTheme";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import "./viewVendor.css"


const ViewVendorTable = () => {
  const[searchV, setSearchV]= useState("");
  const[vendor, setVendor]= useState([]);
  const [filtereVendor, setFilteredVendor] = useState([]);

  const viewVendor = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setVendor(response.data);
     setFilteredVendor(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsVendor=[
    {
      name:<div id="demo">Vendor ID</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">Vendor Name</div>,
      selector: (row )=> row.email,
    },
    {
      name:<div id="demo">SOW</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Company Address</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Vendor Contact Person Name </div>,
      selector: (row) => row.body,
    },
    {
      name:'Contact',
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Alternate Contacts</div>,
      selector: (row) => <div className="form-control"> {row.email} </div>,
    },
    {
      name:<div id="demo">Pan No.</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">GST No.</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Email</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Alternate Email</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Account No.</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">IFSC Code</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Edit</div>,
      cell :(row)=> <Button variant="outline-primary" size="sm" onClick={()=> alert(row.id)} > Edit </Button>
     
    },
    {
      name:<div id="demo">Delete</div>,
      cell :(row)=> <Button variant="outline-danger" size="sm"  onClick={()=> alert(row.id)} > Delete </Button>
     
    }
  
]
  useEffect(()=>{
    viewVendor();
      },[]);
          
      useEffect(()=>{
        const result= vendor.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchV.toLowerCase());
        });
     
        setFilteredVendor(result)
           },[searchV]);

           const tableHeaderStyleVendor={
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
              width:"25px",
            }
           }
          }

  return (
    <div style={{position:'relative'}}>
      {/* <BackTheme /> */}
      <DataTable 
 
     customStyles={tableHeaderStyleVendor}
     columns={columnsVendor}
      data={filtereVendor}
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
        value={searchV}
        onChange={(e)=>setSearchV(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default ViewVendorTable;
