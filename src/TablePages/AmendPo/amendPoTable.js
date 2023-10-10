import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import "../addVendor/viewVendor.css"



const AmendPoTable= () => {
  const[searchAP, setSearchAP]= useState("");
  const[amendPo, setAmendPo]= useState([]);
  const [filterAmendPo, setFilteredAmendPo] = useState([]);

  const viewAmendPo = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setAmendPo(response.data);
     setFilteredAmendPo(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsAmendPo=[
    {
      name:<div id="demo">Amend</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">Internal PO Number</div>,
      selector: (row )=> row.email,
    },
   
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Service Engg Name</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Quatation</div>,
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Vendor Name</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Ship Name</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Total</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Total With GST</div>,
      selector: (row) => row.email,
    },
    
 
  
]
  useEffect(()=>{
    viewAmendPo();
      },[]);
          
      useEffect(()=>{
        const result= amendPo.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchAP.toLowerCase());
        });
     
        setFilteredAmendPo(result)
           },[searchAP]);

           const tableHeaderStyleAmendPo={
            headCells:{
               style:{
                display:"flex",
                justifyContent:"center",
                alignItem:"center",
                border:"1px solid white",
                MinWidth:"50%",
                height:'100px',
                fontWeight:"bold",
                fontSize:"14px",
                color:"white",
                backgroundColor:"rgb(67, 190, 206)",
                // padding:"12px",
       
              
             
              
            
      
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
              // width:"25px",
            }
           }
          }

  return (
    <div >
     
      <DataTable 
 
     customStyles={tableHeaderStyleAmendPo}
     columns={columnsAmendPo}
      data={filterAmendPo}
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
        value={searchAP}
        onChange={(e)=>setSearchAP(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default AmendPoTable;
