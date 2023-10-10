import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../addVendor/viewVendor.css'



const InvoiceCollectionTable= () => {
  const[searchIC, setSearchIC]= useState("");
  const[invoiceCollection, setInvoiceCollection]= useState([]);
  const [filterInvoiceCollection , setFilteredInvoiceCollection] = useState([]);

  const viewInvoiceCollection= async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setInvoiceCollection(response.data);
     setFilteredInvoiceCollection(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsInvoiceCollection=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
        name:<div id="demo">Invoice ID</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">Order No</div>,
        selector: (row) => row.body,
      },
  
      {
        name:<div id="demo">PO ID</div>,
        selector: (row) => row.body,
      },
   
    {
      name:<div id="demo">Consignee Name</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Buyer's Name</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Total PO cost</div>,
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Total PO cost receivied</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Total Pending cost</div>,
        selector: (row) => row.body,
      },
  
    {
      name:<div id="demo">Total Invoice With GST</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Remaining Invoice Cost To Pay</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Date of request</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">View Invoice</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Payment</div>,
        selector: (row) => row.email,
      },
    
  
]
  useEffect(()=>{
    viewInvoiceCollection();
      },[]);
          
      useEffect(()=>{
        const result=invoiceCollection.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchIC.toLowerCase());
        });
     
        setFilteredInvoiceCollection(result)
           },[searchIC]);

           const tableHeaderStyleInvoiceCollection={
            headCells: {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center",
    
                    border: "1px solid white",
                    width: "250px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "white",
                    backgroundColor: "rgb(67, 190, 206)",
                    padding: "12px",
                    height:'100px'
    
                }
            },
            cells: {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    fontSize: '14px',
                    flexWrap: "wrap",
                    width: '100px',
                    // height:'100px'
    
    
                }
            },
            rows: {
                style: {
                    height:"100px"
                    //   width:"25px",
                }
            }
          }

  return (
    <div style={{position:'relative'}}>
     
      <DataTable 
 
     customStyles={tableHeaderStyleInvoiceCollection}
     columns={columnsInvoiceCollection}
      data={filterInvoiceCollection}
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
        value={searchIC}
        onChange={(e)=>setSearchIC(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default InvoiceCollectionTable;
