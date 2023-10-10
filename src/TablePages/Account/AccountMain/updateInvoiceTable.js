import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../addVendor/viewVendor.css'



const UpdateInvoiceTable= () => {
  const[searchUI, setSearchUI]= useState("");
  const[updateInvoice, setUpdateInvoice]= useState([]);
  const [filterUpdateInvoice, setFilteredUpdateInvoice] = useState([]);

  const viewUpdateInvoice = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setUpdateInvoice(response.data);
     setFilteredUpdateInvoice(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsUpdateInvoice=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
        name:<div id="demo">Update</div>,
        cell :(row)=><div>
  
      <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} > Update Invocie </button>
      </div> 
       
      },
      {
        name:<div id="demo">Invocie ID</div>,
        selector: (row) => row.body,
      },
   
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Ship To</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Bill To</div>,
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Total Invoice</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Total Invoce With GST</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Date OF Request</div>,
      selector: (row) => row.email,
    },
  
    {
        name:<div id="demo">View Invoice</div>,
        cell :(row)=><div>
  
      <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} > View Invocie </button>
      </div> 
       
      },
  
]
  useEffect(()=>{
    viewUpdateInvoice();
      },[]);
          
      useEffect(()=>{
        const result= updateInvoice.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchUI.toLowerCase());
        });
     
        setFilteredUpdateInvoice(result)
           },[searchUI]);

           const tableHeaderStyleUpdateInvoice={
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
 
     customStyles={tableHeaderStyleUpdateInvoice}
     columns={columnsUpdateInvoice}
      data={filterUpdateInvoice}
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
        value={searchUI}
        onChange={(e)=>setSearchUI(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default UpdateInvoiceTable;
