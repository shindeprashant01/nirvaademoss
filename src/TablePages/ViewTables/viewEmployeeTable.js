import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const ViewEmployeeTable = () => {
    const [searchVE, setSearchVE] = useState("");
    const [viewEmployee, setViewEmployee] = useState([]);
    const [filterViewEmployee, setFilteredViewEmployee] = useState([]);

    const viewEmployees = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setViewEmployee(response.data);
            setFilteredViewEmployee(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsViewEmployee = [
        {
            name: <div id="demo">Employee ID</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Employee  Name</div>,
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
            name: <div id="demo">Employee  Region</div>,
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
            cell :(row)=> <Button variant="outline-primary" size="lg" onClick={()=> alert(row.id)} > Edit </Button>
           
          },
          {
            name:<div id="demo">Delete</div>,
            cell :(row)=> <Button variant="outline-danger" size="lg"  onClick={()=> alert(row.id)} > Delete </Button>
           
          }


    ]

   
    useEffect(() => {
        viewEmployees();
    }, []);

    useEffect(() => {
        const result = viewEmployee.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchVE.toLowerCase());
        });

        setFilteredViewEmployee(result)
    }, [searchVE]);

    const tableHeaderStyleViewEmployee = {
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
                height:'70px'

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
           

                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleViewEmployee}
                        columns={columnsViewEmployee}
                        data={filterViewEmployee}
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
                                value={searchVE}
                                onChange={(e) => setSearchVE(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default ViewEmployeeTable;
