import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const ViewEmployeeHrTable = () => {
    const [searchVEH, setSearchVEH] = useState("");
    const [vEH, setVEH] = useState([]);
    const [filterVEH, setFilteredVEH] = useState([]);

    const viewVEH= async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setVEH(response.data);
            setFilteredVEH(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsVEH = [
        {
            name: <div id="demo">Employee ID</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Name</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Department</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Position</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Region</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Email</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Contact</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Password</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Status</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name:<div id="demo">Edit</div>,
            cell :(row)=><div>
      
          <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} >Edit</button>
          </div> 
           
        },
        {
            name:<div id="demo">Delete</div>,
            cell :(row)=><div>
      
          <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} >Delete</button>
          </div> 
           
        },
        

      

    ]

  
    useEffect(() => {
        viewVEH();
    }, []);

    useEffect(() => {
        const result = vEH.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchVEH.toLowerCase());
        });

        setFilteredVEH(result)
    }, [searchVEH]);

    const tableHeaderStyleVEH = {
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
        <>
            <div>
                <div>
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Employee List</h3>
                    <hr />
                </div>

                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleVEH}
                        columns={columnsVEH}
                        data={filterVEH}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="550px"
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search PO ID"
                                className="w-25 form-control"
                                value={searchVEH}
                                onChange={(e) => setSearchVEH(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>



          
        </>
    );
};

export default ViewEmployeeHrTable ;
