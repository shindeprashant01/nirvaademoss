import React ,{useState,useEffect}from "react";

import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import '../addVendor/viewVendor.css'



const CreateInvoiceTable= () => {
  const[searchCI, setSearchCI]= useState("");
  const[createInvoice, setCreateInvoice]= useState([]);
  const [filterCreateInvoice, setFilteredCreateInvoice] = useState([]);

  const viewCreateInvoice = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setCreateInvoice(response.data);
     setFilteredCreateInvoice(response.data)
    } catch(error){
          console.log(error);
    }   
  };



  const columnsCreateInvoice=[
    {
      name:<div id="demo">Sr NO.</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
,
      {
        name:<div id="demo"> Create Invocie</div>,
        selector: (row) => row.body,
      },
   
    {
      name:<div id="demo">PO ID</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Po Documents</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">SOW</div>,
      selector: (row) => row.body,
    },
  
    {
      name:<div id="demo">Prome Customer</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">End Customer</div>,
        selector: (row) => row.body,
      },
    {
      name:<div id="demo">Total PO</div>,
      selector: (row) => row.email,
    },
    {
        name:<div id="demo">Total Assign Value</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Total Remaining Value</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Start Date</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">End Date</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Service ID</div>,
        selector: (row) => row.email,
      },
      {
        name:<div id="demo">Servie Name</div>,
        selector: (row) => row.email,
      },
      {
        name:'Manage',
        selector: (row) => row.email,
      },
      {
        name:'AMC',
        selector: (row) => row.email,
      },
      {
        name:'Assign Value',
        selector: (row) => row.email,
      },
      {
        name:'Remaining Assign Value',
        selector: (row) => row.email,
      },


]
  useEffect(()=>{
    viewCreateInvoice();
      },[]);
          
      useEffect(()=>{
        const result= createInvoice.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchCI.toLowerCase());
        });
     
        setFilteredCreateInvoice(result)
           },[searchCI]);

           const tableHeaderStyleCreateInvoice={
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
 
     customStyles={tableHeaderStyleCreateInvoice}
     columns={columnsCreateInvoice}
      data={filterCreateInvoice}
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
        <input type="text" placeholder="Search Here Name/ID" 
        className="w-25 form-control"
        value={searchCI}
        onChange={(e)=>setSearchCI(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default CreateInvoiceTable;
