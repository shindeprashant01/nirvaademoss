import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const ArchivedPoReceivableTable = () => {
    const [searchAPOR, setSearchAPOR] = useState("");
    const [archivedPOR, setArchivedPOR] = useState([]);
    const [filterArchivedPOR, setFilteredArchivedPOR] = useState([]);

    const viewArchivedPOR = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setArchivedPOR(response.data);
            setFilteredArchivedPOR(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsArchivedPOR = [
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

       

    ]

    
    useEffect(() => {
        viewArchivedPOR();
    }, []);

    useEffect(() => {
        const result = archivedPOR.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchAPOR.toLowerCase());
        });

        setFilteredArchivedPOR(result)
    }, [searchAPOR]);

    const tableHeaderStyleArchivedPOR = {
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

                        customStyles={tableHeaderStyleArchivedPOR}
                        columns={columnsArchivedPOR}
                        data={filterArchivedPOR}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="550px"
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover

                        subHeader
                        subHeaderComponent={
                            <input type="text" placeholder="Search Here Name"
                                className="w-25 form-control"
                                value={searchAPOR}
                                onChange={(e) => setSearchAPOR(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>

        </>
    );
};

export default ArchivedPoReceivableTable;
