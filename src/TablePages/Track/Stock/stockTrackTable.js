import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import '../../addVendor/viewVendor.css'



const StockTrackTable= () => {
  const[searchST, setSearchST]= useState("");
  const[stockTrack, setStockTrack]= useState([]);
  const [filterStockTrack, setFilteredStockTrack] = useState([]);

  const viewStockTrack = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setStockTrack(response.data);
     setFilteredStockTrack(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsStockTrack=[
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
      name:<div id="demo">Quntity</div>,
      selector: (row) => row.body,
    },
    {
        name:<div id="demo">project Name</div>,
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
   
  
]
  useEffect(()=>{
    viewStockTrack();
      },[]);
          
      useEffect(()=>{
        const result= stockTrack.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchST.toLowerCase());
        });
     
        setFilteredStockTrack(result)
           },[searchST]);

           const tableHeaderStyleStockTrack={
            headCells:{
               style:{
                display:"flex",
                justifyContent:"center",
                alignItem:"center",
               
                border:"1px solid white",
                // width:"25px",
                fontWeight:"bold",
                fontSize:"14px",
                color:"white",
                backgroundColor:"rgb(67, 190, 206)",
                padding:"12px",
                height:'100px',
                
       
              
             
              
            
      
               }
            },
            cells:{
              style:{
                display:"flex",
                justifyContent:"center",
                fontSize:'14px',
                flexWrap:"wrap",
               width:'100px'
                
            
               
              }
            },
            rows:{
              style:{
               height:'100px'
            }
           }
          }

  return (
    <div style={{position:'relative'}}>
     
      <DataTable 
 
     customStyles={tableHeaderStyleStockTrack}
     columns={columnsStockTrack}
      data={filterStockTrack}
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
        value={searchST}
        onChange={(e)=>setSearchST(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default StockTrackTable;
