import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";





const PurchaseTrackSeTable= () => {
  const[searchPTSe, setSearchPTSe]= useState("");
  const[purchaseTrackSe, setPurchaseTrackSe]= useState([]);
  const [filterPurchaseTrackSe, setFilteredPurchaseTrackSe] = useState([]);

  const viewPurchaseTrackSe = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setPurchaseTrackSe(response.data);
     setFilteredPurchaseTrackSe(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsPurchaseTrackSe=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">Ticket ID</div>,
      selector: (row )=> row.email,
    },
   
    {
      name:<div id="demo">Requested By</div>,
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
      name:<div id="demo">Project Name</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Requested Date</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Track</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Vendor Name</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Total With GST</div>,
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
   
  
]
  useEffect(()=>{
    viewPurchaseTrackSe();
      },[]);
          
      useEffect(()=>{
        const result= purchaseTrackSe.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchPTSe.toLowerCase());
        });
     
        setFilteredPurchaseTrackSe(result)
           },[searchPTSe]);

           const tableHeaderStylePurchaseTrackSe={
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
                  height:'100px'
  
  
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
 
     customStyles={tableHeaderStylePurchaseTrackSe}
     columns={columnsPurchaseTrackSe}
      data={filterPurchaseTrackSe}
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
        value={searchPTSe}
        onChange={(e)=>setSearchPTSe(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default PurchaseTrackSeTable;
