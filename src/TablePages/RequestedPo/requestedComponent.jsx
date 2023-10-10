import React, { useEffect, useState } from "react";
import DataTable  from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";
// import { number } from "yup";

const RequestedComponent =()=>{
  const[search, setSearch]= useState("");
  const[order, setOrder]= useState([]);
  const [filteredOrder, setFilteredOrder] = useState([]);

  const getOrders = async ()=>{
    try{
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
     setOrder(response.data);
     setFilteredOrder(response.data)
    } catch(error){
          console.log(error);
    }
  };


  const columnsp=[
    {
    name:'Sr No.',
    
    selector: (row)=> row.email,
    sortable:true,

  },
  {
    name:'PO ID',
    selector: (row )=> row.email,
  },
  {
    name:'SOW',
    selector: (row) => row.body,
  },
  {
    name:'Prime Customer',
    selector: (row) => row.body,
  },
  {
    name:'End Customer',
    selector: (row) => row.body,
  },
  {
    name:'Total PO',
    selector: (row) => row.body,
  },
  {
    name:'PO',
    selector: (row) => row.email,
  },
  {
    name:'RPO',
    selector: (row) => row.email,
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
  },
  {
    name:'Start Date',
    selector: (row) => row.email,
  },
  {
    name:'Action',
    cell :(row)=> <Button varient="primary" onClick={()=> alert(row.id)} > Edit </Button>
   
  }

]
  useEffect(()=>{
getOrders();
  },[]);

  useEffect(()=>{
   const result= order.filter(singleOrder =>{
    return singleOrder.name.toLowerCase().match(search.toLowerCase());
   });

   setFilteredOrder(result)
      },[search]);

     const tableHeaderStyle={
      headCells:{
         style:{
          fontWeight:"bold",
          fontSize:"14px",
          color:"white",
          backgroundColor:"rgb(67, 190, 206)",
          padding:"12px",
          display:"flex",
          justifyContent:"center",
          border:"1px solid white",
          width:"15px",
        
      

         }
      },
      cells:{
        style:{
          display:"flex",
          justifyContent:"center",
          fontSize:'14px',
        }
      },
      rows:{
        style:{
        width:"25px",
      }
     }
    }
    return(
     <DataTable 
 
     customStyles={tableHeaderStyle}
     columns={columnsp}
      data={filteredOrder}
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
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
      }
      paginationRowsPerPageOptions={[10,20,30,40,50]}
  

      />
    )}

    export default RequestedComponent;