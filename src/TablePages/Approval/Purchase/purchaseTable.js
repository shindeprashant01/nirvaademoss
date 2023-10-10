import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import "../../addVendor/viewVendor.css";




const PurchaseTable= () => {
  const[searchPU, setSearchPU]= useState("");
  const[purchase, setPurchase]=useState([]);
  const [filterePurchase, setFilteredPurchase] = useState([]);

  const viewPurchase= async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setPurchase(response.data);
     setFilteredPurchase(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsPurchase=[
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
        name:<div id="demo">Request By</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Vendor Name</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">Total</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">Total With GST</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">PO Remark</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">Service</div>,
        selector: (row) => <div className="form-control"> {row.email} </div>,
      },
      {
        name:<div id="demo">Assign Value</div>,
        selector: (row) => row.email,
      },
    
      {
        name:<div id="demo">Remaining Value</div>,
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
      {
        name:<div id="demo">PO ID </div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Created By </div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Created Date</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">PDF </div>,
        selector: (row) => row.email,
      },
 
  
]
  useEffect(()=>{
    viewPurchase();
      },[]);
          
      useEffect(()=>{
        const result= purchase.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchPU.toLowerCase());
        });
     
        setFilteredPurchase(result)
           },[searchPU]);

           const tableHeaderStylePurchase={
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
     customStyles={tableHeaderStylePurchase}
     columns={columnsPurchase}
      data={filterePurchase}
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
        value={searchPU}
        onChange={(e)=>setSearchPU(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
  );
};

export default PurchaseTable;
