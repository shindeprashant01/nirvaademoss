import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../addVendor/viewVendor.css'



const InvoiceScheduleRTable= () => {
  const[searchISR, setSearchISR]= useState("");
  const[invoiceScheduleR, setInvoiceScheduleR]= useState([]);
  const [filterInvoiceScheduleR, setFilteredInvoiceScheduleR] = useState([]);

  const viewInvoiceScheduleR = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setInvoiceScheduleR(response.data);
     setFilteredInvoiceScheduleR(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsInvoiceScheduleR=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
        name:<div id="demo">Add Invoice Schedule</div>,
        cell :(row)=><div>
  
      <button  size="sm" className="btn btn-trasnparent" style={{color:'red'}} onClick={()=> alert(row.id)} > Add Invoice Schedule</button>
      </div> 
       
      },
      {
        name:<div id="demo">PO ID</div>,
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
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Total Assign Value</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Total Remaining Value</div>,
        selector: (row) => row.body,
      },
  
    {
      name:<div id="demo">Start Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">End Date</div>,
      selector: (row) => row.email,
    },
    
  
]
  useEffect(()=>{
    viewInvoiceScheduleR();
      },[]);
          
      useEffect(()=>{
        const result= invoiceScheduleR.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchISR.toLowerCase());
        });
     
        setFilteredInvoiceScheduleR(result)
           },[searchISR]);

           const tableHeaderStyleInvoiceScheduleR={
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
 
     customStyles={tableHeaderStyleInvoiceScheduleR}
     columns={columnsInvoiceScheduleR}
      data={filterInvoiceScheduleR}
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
        value={searchISR}
        onChange={(e)=>setSearchISR(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default InvoiceScheduleRTable;
