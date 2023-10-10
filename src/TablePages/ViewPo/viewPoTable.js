import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import '../addVendor/viewVendor.css'



const ViewPoTable= () => {
  const[searchVP, setSearchVP  ]= useState("");
  const[viewPo, setViewPo]= useState([]);
  const [filterViewPo, setFilteredViewPo] = useState([]);

  const viewPoTables = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setViewPo(response.data);
     setFilteredViewPo(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsViewPo=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">PO ID</div>,
      selector: (row )=> row.email,
    },
    {
        name:<div id="demo">Service Engg Name/ID</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">PO Created By By</div>,
      selector: (row) => row.body,
    },
   
    {
      name:<div id="demo">Date Of PO</div>,
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Company Name</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">    Total </div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Total with GST</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Approved By</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">PDF</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">PDF</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">PDF</div>,
        selector: (row) => row.email,
      },
   
   
 
  
]
  useEffect(()=>{
    viewPoTables();
      },[]);
          
      useEffect(()=>{
        const result= viewPo.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchVP.toLowerCase());
        });
     
        setFilteredViewPo(result)
           },[searchVP]);

           const tableHeaderStyleViewPo={
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
     
      <DataTable 
 
     customStyles={tableHeaderStyleViewPo}
     columns={columnsViewPo}
      data={filterViewPo}
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
        value={searchVP}
        onChange={(e)=>setSearchVP(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default ViewPoTable;
