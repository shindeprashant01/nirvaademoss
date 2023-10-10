import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";

import '../../addVendor/viewVendor.css'



const ArchivedStockHodTable= () => {
  const[searchASH, setSearchASH]= useState("");
  const[archivedStockHod, setArchivedStockHod]= useState([]);
  const [filterArchivedStockHod, setFilteredArchivedStockHod] = useState([]);

  const viewArchivedStockHod = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setArchivedStockHod(response.data);
     setFilteredArchivedStockHod(response.data)
    } catch(error){
          console.log(error);
    }
  };



  const columnsArchivedStockHod=[
  
    {
      name:<div id="demo">Sr NO.</div>,
      selector: (row )=> row.email,
    },
   
    {
      name:<div id="demo">Request ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Asset ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Project Name</div>,
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Quntity</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Description t</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Date</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Request By</div>,
      selector: (row) => row.email,
    },
    {
      name:<div id="demo">Approved By</div>,
      selector: (row) => row.email,
    },
 
    
  
]
  useEffect(()=>{
    viewArchivedStockHod();
      },[]);
          
      useEffect(()=>{
        const result= archivedStockHod.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchASH.toLowerCase());
        });
     
        setFilteredArchivedStockHod(result)
           },[searchASH]);

           const tableHeaderStyleArchivedStockHod={
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
              width:"100%",
            }
           }
          }

  return (
    <>
  
    <div style={{position:'relative'}}>
     
      <DataTable 
 
     customStyles={tableHeaderStyleArchivedStockHod}
     columns={columnsArchivedStockHod}
      data={filterArchivedStockHod}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="550px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
    //   actions={
    
    //     <Button varient="primary" className="me-5 w-20 " size="lg" >  Download</Button>
    //   }
      subHeader
    //   subHeaderComponent={
    //     <input type="text" placeholder="Search PO ID" 
    //     className="w-25 form-control"
    //     value={searchLS}
        
    //     onChange={(e)=>setSearchLS(e.target.value)}/>
    //   }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
    </>
  );
};

export default ArchivedStockHodTable;
