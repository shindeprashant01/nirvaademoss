import React ,{useState,useEffect}from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";




const ExpenseTrackSeTable= () => {
  const[searchETSe, setSearchETSe]= useState("");
  const[expenseTrackSe, setExpenseTrackSe]= useState([]);
  const [filterExpenseTrackSe, setFilteredExpenseTrackSe] = useState([]);

  const viewExpenseTrackSe = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setExpenseTrackSe(response.data);
     setFilteredExpenseTrackSe(response.data)
    } catch(error){
          console.log(error);
    }
  };


  const columnsExpenseTrackSe=[
    {
      name:<div id="demo">Expense ID</div>,
      
      selector: (row)=> row.email,
      sortable:true,
  
    },
    {
      name:<div id="demo">Ticket ID</div>,
      selector: (row )=> row.email,
    },
    {
      name:<div id="demo">Requested Date</div>,
      selector: (row )=> row.email,
    },
    {
      name:<div id="demo">Requested By</div>,
      selector: (row )=> row.email,
    },
    {
      name:<div id="demo">Service</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Expense Cost</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Expense Description</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Project Name</div>,
      selector: (row) => row.body,
    },
   
    {
      name:<div id="demo">Approved/Paid Date</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Track</div>,
      selector: (row) => row.body,
    },
    {
      name:<div id="demo">Remark(Disapproved)</div>,
      selector: (row) => row.body,
    },
   
 
]


  useEffect(()=>{
    viewExpenseTrackSe();
      },[]);
          
      useEffect(()=>{
        const result= expenseTrackSe.filter(singleOrder =>{
         return singleOrder.name.toLowerCase().match(searchETSe.toLowerCase());
        });
     
        setFilteredExpenseTrackSe(result)
           },[searchETSe]);

           const tableHeaderStyleExpenseTrackSe={
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
 
     customStyles={tableHeaderStyleExpenseTrackSe}
     columns={columnsExpenseTrackSe}
      data={filterExpenseTrackSe}
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
        value={searchETSe}
        onChange={(e)=>setSearchETSe(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
      />
     
    </div>
  );
};

export default ExpenseTrackSeTable;
