import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
import '../addVendor/viewVendor.css'



const InvoiceScheduleAATable= () => {
  const[searchISAA, setSearchISAA]= useState("");
  const[invoiceScheduleAA, setInvoiceScheduleAA]= useState([]);
  const [filterInvoiceScheduleAA, setFilteredInvoiceScheduleAA] = useState([]);

  const viewInvoiceScheduleAA = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setInvoiceScheduleAA(response.data);
     setFilteredInvoiceScheduleAA(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsInvoiceScheduleAA=[
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
    
  
]
  useEffect(()=>{
    viewInvoiceScheduleAA();
      },[]);
          
      useEffect(()=>{
        const result= invoiceScheduleAA.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchISAA.toLowerCase());
        });
     
        setFilteredInvoiceScheduleAA(result)
           },[searchISAA]);

           const tableHeaderStyleInvoiceScheduleAA={
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
 
     customStyles={tableHeaderStyleInvoiceScheduleAA}
     columns={columnsInvoiceScheduleAA}
      data={filterInvoiceScheduleAA}
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
        value={searchISAA}
        onChange={(e)=>setSearchISAA(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default InvoiceScheduleAATable;
