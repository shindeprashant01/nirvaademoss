import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";

import '../addVendor/viewVendor.css'



const FMSEmployeeTable = () => {
    const [searchFMS, setSearchFMS] = useState("");
    const [fMS, setFMS] = useState([]);
    const [filterFMS, setFilteredFMS] = useState([]);

    const viewFMS= async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setFMS(response.data);
            setFilteredFMS(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsFMSPo = [
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Project Manager</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Created By</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">PO Documents</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">SOW</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Prime Customer</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">End Customer</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Total PO</div>,
            selector: (row) => row.email,
            sortable: true,
        },

        {
            name: <div id="demo">Total Assign Value</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Total Remaining value</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        {   
            name: <div id="demo">End Date</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: <div id="demo">Track</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: <div id="demo">Action</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        // {
        //     name:<div id="demo">Purchase Description</div>,
        //     selector: (row) => row.email,
        //   },
        //   {
        //     name:<div id="demo">Documents</div>,
        //     selector: (row) => row.email,
        //   },


    ]

    const columnsFMSEmployee = [
        {
            name: <div id="demo">Employee Code</div>,
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Name</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Designation </div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Cost Center</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Mobile No.</div>,
            selector: (row) => row.body,
            sortable: true,
        },


        {
            name: <div id="demo">CTC PA</div>,
            selector: (row) => row.body,
            sortable: true,
        },

    ]
    useEffect(() => {
        viewFMS();
    }, []);

    useEffect(() => {
        const result = fMS.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchFMS.toLowerCase());
        });

        setFilteredFMS(result)
    }, [searchFMS]);

    const tableHeaderStyleFMSPO = {
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
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Live PO List</h3>
                    <hr />
                </div>

                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleFMSPO}
                        columns={columnsFMSPo}
                        data={filterFMS}
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
                                value={searchFMS}
                                onChange={(e) => setSearchFMS(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>



            <div>
                <div  >
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Employee List</h3>
                    <hr />
                </div>
                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleFMSPO}
                        columns={columnsFMSEmployee}
                        data={filterFMS}
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
                                value={searchFMS}
                                onChange={(e) => setSearchFMS(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default FMSEmployeeTable;
