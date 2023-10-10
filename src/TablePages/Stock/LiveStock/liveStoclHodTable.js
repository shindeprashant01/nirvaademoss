import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import '../../addVendor/viewVendor.css'



const LiveStockHodTable= () => {
  const[searchLSH, setSearchLSh]= useState("");
  const[liveStockHod, setLiveStockHod]= useState([]);
  const [filterLiveStockHod, setFilteredLiveStockHod] = useState([]);

  const viewLiveStockHod = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setLiveStockHod(response.data);
     setFilteredLiveStockHod(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsLiveStockHod=[
  
    {
      name:<div id="demo">Sr NO.</div>,
      selector: (row )=> row.email,
    },
   
    {
      name:<div id="demo">Asset ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Category</div>,
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Dscription Quntity</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Unit</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Make</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Modal Number</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Serial Number</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Specification</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Identification Location</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Allocate To Name</div>,
        selector: (row) => row.email,
    },
    {
        name:<div id="demo">Responsible Functional Manager</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">City</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Origin</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Warranty Details</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Remark </div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Cost </div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Last Updated On</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Status</div>,
        selector: (row) => row.email,
      },
 
  
]
  useEffect(()=>{
    viewLiveStockHod();
      },[]);
          
      useEffect(()=>{
        const result= liveStockHod.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchLSH.toLowerCase());
        });
     
        setFilteredLiveStockHod(result)
           },[searchLSH]);

           const tableHeaderStyleLiveStockHod={
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
    <>
    <div style={{display:'flex',justifyContent:'center'}}>
        <Button variant="primary" size="lg" active> Download</Button>
    </div>
    <div style={{position:'relative'}}>
     
      <DataTable 
 
     customStyles={tableHeaderStyleLiveStockHod}
     columns={columnsLiveStockHod}
      data={filterLiveStockHod}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="550px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
    //   actions={
    
    //     <Button varient="primary" className="me-5 w-20 " size="lg" >  Download</Button>
    //   }
      subHeader
    //   subHeaderComponent={
    //     <input type="text" placeholder="Search PO ID" 
    //     className="w-25 form-control"
    //     value={searchLS}
        
    //     onChange={(e)=>setSearchLS(e.target.value)}/>
    //   }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
    </>
  );
};

export default LiveStockHodTable;
