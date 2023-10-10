import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import "../../addVendor/viewVendor.css";




const PurchasePaymentTable= () => {
  const[searchPPay, setSearchPPay]= useState("");
  const[PurchasePayment, setPurchasePayment]=useState([]);
  const [filterePurchasePayment, setFilteredPurchasePayment] = useState([]);

  const viewPurchasePayment = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
 setPurchasePayment(response.data);
 setFilteredPurchasePayment(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsPurchasePayment=[
    {
        name:<div id="demo">PO Number</div>,
        
        selector: (row)=> row.email,
        sortable:true,
    
      },
      {
        name:<div id="demo">Vendor Name</div>,
        selector: (row )=> row.email,
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
        name:<div id="demo">Purchase Cost</div>,
        selector: (row) => <div className="form-control"> {row.email} </div>,
      },
      {
        name:<div id="demo">Remaining Amount To Pay</div>,
        selector: (row) => <div className="form-control"> {row.email} </div>,
      },
      {
        name:<div id="demo">Date Of Request</div>,
        selector: (row) => row.email,
      },
    
      {
        name:<div id="demo">Purchase Description</div>,
        selector: (row) => row.email,
      },
   
      {
        name:<div id="demo">Approve By</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">View PDF</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Payments </div>,
        selector: (row) => row.email,
      },
 
    
  
]
  useEffect(()=>{
    viewPurchasePayment();
      },[]);
          
      useEffect(()=>{
        const result= PurchasePayment.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchPPay.toLowerCase());
        });
     
        setFilteredPurchasePayment(result)
           },[searchPPay]);

           const tableHeaderStylePurchasePayment={
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
     customStyles={tableHeaderStylePurchasePayment}
     columns={columnsPurchasePayment}
      data={filterePurchasePayment}
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
        value={searchPPay}
        onChange={(e)=>setSearchPPay(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
  );
};

export default PurchasePaymentTable;
