import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import "../../addVendor/viewVendor.css";




const PurchaseRequestTable= () => {
  const[searchPR, setSearchPR]= useState("");
  const[purchaseRequest, setPurchaseRequest]=useState([]);
  const [filterePurchaseRequest, setFilteredPurchaseRequest] = useState([]);

  const viewPurchaseRequest= async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setPurchaseRequest(response.data);
     setFilteredPurchaseRequest(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsPurchaseRequest=[
    {
        name:<div id="demo">Purchase ID</div>,
        
        selector: (row)=> row.email,
        sortable:true,
    
      },
      {
        name:<div id="demo">Ticket ID</div>,
        selector: (row )=> row.email,
      },
      {
        name:<div id="demo">Service Engineer ID</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Service Engineer Name</div>,
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
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">Service ID</div>,
        selector: (row) => <div className="form-control"> {row.email} </div>,
      },
      {
        name:<div id="demo">Date of Request</div>,
        selector: (row) => row.email,
      },
    
      {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Approve</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">DisApprove</div>,
        selector: (row) => row.email,
      },
      
  
]
  useEffect(()=>{
    viewPurchaseRequest();
      },[]);
          
      useEffect(()=>{
        const result= purchaseRequest.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchPR.toLowerCase());
        });
     
        setFilteredPurchaseRequest(result)
           },[searchPR]);

           const tableHeaderStylePurchaseRequest={
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
     customStyles={tableHeaderStylePurchaseRequest}
     columns={columnsPurchaseRequest}
      data={filterePurchaseRequest}
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

export default PurchaseRequestTable;
