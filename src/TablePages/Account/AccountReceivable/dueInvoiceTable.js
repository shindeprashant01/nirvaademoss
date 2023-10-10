import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../addVendor/viewVendor.css'



const DueInvoiceTable= () => {
  const[searchDI, setSearchDI]= useState("");
  const[dueInvoice, setDueInvoice]= useState([]);
  const [filterDueInvoice , setFilteredDueInvoice] = useState([]);

  const viewDueInvoice= async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setDueInvoice(response.data);
     setFilteredDueInvoice(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsDueInvoice=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
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
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Remark</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Status</div>,
        selector: (row) => row.body,
      },
  
    {
      name:<div id="demo">Project Manager</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Approve By</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">View Invoice</div>,
        selector: (row) => row.email,
      },
    
  
]
  useEffect(()=>{
    viewDueInvoice();
      },[]);
          
      useEffect(()=>{
        const result= dueInvoice.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchDI.toLowerCase());
        });
     
        setFilteredDueInvoice(result)
           },[searchDI]);

           const tableHeaderStyleDueInvoice={
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
 
     customStyles={tableHeaderStyleDueInvoice}
     columns={columnsDueInvoice}
      data={filterDueInvoice}
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
        value={searchDI}
        onChange={(e)=>setSearchDI(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default DueInvoiceTable;
