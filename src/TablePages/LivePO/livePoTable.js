import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";

import '../addVendor/viewVendor.css'



const LivePoTable = () => {
    const [searchLPO, setSearchLPO] = useState("");
    const [livePO, setLivePO] = useState([]);
    const [filterLivePO, setFilteredLivePO] = useState([]);

    const viewLivePO = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setLivePO(response.data);
            setFilteredLivePO(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsLivePO = [
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

    const columnsLivePOService = [
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: <div id="demo">Service ID</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Service Name</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Comment</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Manager</div>,
            selector: (row) => row.body,
            sortable: true,
        },


        {
            name: <div id="demo">AMC</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Assign Value</div>,
            selector: (row) => row.email,
            sortable: true,
        },

        // {
        //     name:<div id="demo">Total Assign Value</div>,
        //     selector: (row) => row.body,
        //     sortable:true,
        // },
        // {
        //   name:<div id="demo">Total Remaining value</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //   name:<div id="demo">Start Date</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //   name:<div id="demo">End Date</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //   name:<div id="demo">Track</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //   name:<div id="demo">Action</div>,
        //   selector: (row) => row.email,
        //   sortable:true,
        // },
        // {
        //     name:<div id="demo">Purchase Description</div>,
        //     selector: (row) => row.email,
        //   },
        //   {
        //     name:<div id="demo">Documents</div>,
        //     selector: (row) => row.email,
        //   },


    ]
    useEffect(() => {
        viewLivePO();
    }, []);

    useEffect(() => {
        const result = livePO.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchLPO.toLowerCase());
        });

        setFilteredLivePO(result)
    }, [searchLPO]);

    const tableHeaderStyleLivePO = {
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

                        customStyles={tableHeaderStyleLivePO}
                        columns={columnsLivePO}
                        data={filterLivePO}
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
                                value={searchLPO}
                                onChange={(e) => setSearchLPO(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>



            <div>
                <div  >
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Service List</h3>
                    <hr />
                </div>
                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleLivePO}
                        columns={columnsLivePOService}
                        data={filterLivePO}
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
                                value={searchLPO}
                                onChange={(e) => setSearchLPO(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default LivePoTable;
