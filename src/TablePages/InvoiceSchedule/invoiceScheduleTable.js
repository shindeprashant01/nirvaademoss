import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import '../addVendor/viewVendor.css'



const InvoiceScheduleTable= () => {
  const[searchIS, setSearchIS]= useState("");
  const[invoiceSchedule, setInvoiceSchedule]= useState([]);
  const [filterInvoiceSchedule, setFilteredInvoiceSchedule] = useState([]);

  const viewInvoiceSchedule = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setInvoiceSchedule(response.data);
     setFilteredInvoiceSchedule(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsInvoiceSchedule=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
        name:<div id="demo">Go Ahead</div>,
        cell :(row)=><div>
  
      <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} > Go Ahead </button>
      </div> 
       
      },
      {
        name:<div id="demo">ID</div>,
        selector: (row) => row.body,
      },
   
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">PO Cost</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Value</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Remark</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Status</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">View Invoice</div>,
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
    viewInvoiceSchedule();
      },[]);
          
      useEffect(()=>{
        const result= invoiceSchedule.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchIS.toLowerCase());
        });
     
        setFilteredInvoiceSchedule(result)
           },[searchIS]);

           const tableHeaderStyleInvoiceSchedule={
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
 
     customStyles={tableHeaderStyleInvoiceSchedule}
     columns={columnsInvoiceSchedule}
      data={filterInvoiceSchedule}
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
        value={searchIS}
        onChange={(e)=>setSearchIS(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default InvoiceScheduleTable;
