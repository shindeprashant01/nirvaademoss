import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";

import '../addVendor/viewVendor.css'



const ArchivePo1Table = () => {
    const [searchAPO1, setSearchAPO1] = useState("");
    const [archivedPO1, setArchivedPO1] = useState([]);
    const [filterArchivedPO1, setFilteredArchivedPO1] = useState([]);

    const viewArchivedPO1 = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setArchivedPO1(response.data);
            setFilteredArchivedPO1(response.data)
        } catch (error) {
            console.log(error);
        }
    };




    const columnsArchivePO1 = [
        {
            name: <div id="demo">Sr No</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">PO ID</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">PO Documents</div>,
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
            name: <div id="demo">Total Assign Value</div>,
            selector: (row) => row.body,
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
            name: <div id="demo">Service ID</div>,
            selector: (row) => row.email,
            sortable: true,
        },

      
        {
            name: <div id="demo">Service Name</div>,
            selector: (row) => row.email,
            sortable: true,
        },
       
        {
            name: <div id="demo">Manager</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: <div id="demo">AMC</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: <div id="demo">Assign Value</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: <div id="demo">Remaining Assign Value</div>,
            selector: (row) => row.email,
            sortable: true,
        },
    ]

  
    useEffect(() => {
        viewArchivedPO1();
    }, []);

    useEffect(() => {
        const result = archivedPO1.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchAPO1.toLowerCase());
        });

        setFilteredArchivedPO1(result)
    }, [searchAPO1]);



    const tableHeaderStyleArchivedPO1 = {
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
        <>
            <div>
               

                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleArchivedPO1}
                        columns={columnsArchivePO1}
                        data={filterArchivedPO1}
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
                                value={searchAPO1}
                                onChange={(e) => setSearchAPO1(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>

        </>
    );
};

export default ArchivePo1Table;
