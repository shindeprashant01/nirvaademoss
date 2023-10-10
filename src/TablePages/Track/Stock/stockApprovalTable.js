import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import '../../addVendor/viewVendor.css'



const StockApprovalTable= () => {
  const[searchSA, setSearchSA]= useState("");
  const[stockApproval, setStockApproval]= useState([]);
  const [filterStockApproval, setFilteredStockApproval] = useState([]);

  const viewStockApproval = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setStockApproval(response.data);
     setFilteredStockApproval(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsStockApproval=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">Request ID</div>,
      selector: (row )=> row.email,
    },
   
    {
      name:<div id="demo">Asset ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Quantity</div>,
      selector: (row) => row.body,
    },
    {
        name:<div id="demo">Project Name</div>,
        selector: (row) => row.email,
      },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.body,
    },
  
  
    {
        name:<div id="demo">Description</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Status</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Request By</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Approve</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Disapprove</div>,
        selector: (row) => row.email,
      },
   
  
]
  useEffect(()=>{
    viewStockApproval();
      },[]);
          
      useEffect(()=>{
        const result= stockApproval.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchSA.toLowerCase());
        });
     
        setFilteredStockApproval(result)
           },[searchSA]);

           const tableHeaderStyleStockApproval={
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
 
     customStyles={tableHeaderStyleStockApproval}
     columns={columnsStockApproval}
      data={filterStockApproval}
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
        value={searchSA}
        onChange={(e)=>setSearchSA(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default StockApprovalTable;
