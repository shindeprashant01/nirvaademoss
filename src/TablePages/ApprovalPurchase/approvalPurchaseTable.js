import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import '../addVendor/viewVendor.css'



const ApprovalPurchaseTable= () => {
  const[searchAPT, setSearchAPT]= useState("");
  const[approvalPurchase, setApprovalPurchase]= useState([]);
  const [filterApprovalPurchase, setFilteredApprovalPurchase] = useState([]);

  const viewApprovalPurchase = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setApprovalPurchase(response.data);
     setFilteredApprovalPurchase(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsApprovalPurchase=[
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
      name:<div id="demo">Requested By ID/Name</div>,
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
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">HOD Remark</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">PO Start Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">PO End Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">PO Document</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">File</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Create PO</div>,
        selector: (row) => row.email,
    },
    {
        name:<div id="demo">Close</div>,
        selector: (row) => row.email,
      }
    
 
  
]
  useEffect(()=>{
    viewApprovalPurchase();
      },[]);
          
      useEffect(()=>{
        const result= approvalPurchase.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchAPT.toLowerCase());
        });
     
        setFilteredApprovalPurchase(result)
           },[searchAPT]);

           const tableHeaderStyleApprovalPurchase={
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
   
    <div style={{position:'relative'}}>
     
      <DataTable 
 
     customStyles={tableHeaderStyleApprovalPurchase}
     columns={columnsApprovalPurchase}
      data={filterApprovalPurchase}
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

export default ApprovalPurchaseTable;
