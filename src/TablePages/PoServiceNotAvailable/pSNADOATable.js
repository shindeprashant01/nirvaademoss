import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../../addVendor/viewVendor.css'



const PSNA_DOA_Table= () => {
  const[searchPSNAD, setSearchPSNAD]= useState("");
  const[poServiceD, setPoServiceD]= useState([]);
  const [filterPoServiceD, setFilteredPoServiceD] = useState([]);

  const viewPSNAD = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setPoServiceD(response.data);
     setFilteredPoServiceD(response.data)
    } catch(error){
          console.log(error);
    }
  };


  const columnsPoServiceD=[
    {
      name:<div id="demo">Sr No</div>,
      
      selector: (row)=> row.email,
      sortable:true,
    },
  
    {
        name:<div id="demo">PO ID</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">PO Documents</div>,
        selector: (row) => row.body,
      },
      {
        name:<div id="demo">SOW</div>,
        selector: (row) => row.body,
      },
   
    {
      name:<div id="demo"> Prime Customer </div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">End Customer</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Total PO</div>,
      selector: (row) => <div id="demo"> {row.email} </div>,
    },
    {
      name:<div id="demo">Total Assign value</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Total Remaining value</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Start Date</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">End Date</div>,
        selector: (row) => row.email
      },
   
]


  useEffect(()=>{
    viewPSNAD();
      },[]);
          
      useEffect(()=>{
        const result= poServiceD.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchPSNAD.toLowerCase());
        });
     
        setFilteredPoServiceD(result)
           },[searchPSNAD]);

           const tableHeaderStylePoServiceD={
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
 
     customStyles={tableHeaderStylePoServiceD}
     columns={columnsPoServiceD}
      data={filterPoServiceD}
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
        <input type="text" placeholder="Search Here" 
        className="w-25 form-control"
        value={searchPSNAD}
        onChange={(e)=>setSearchPSNAD(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default PSNA_DOA_Table;
