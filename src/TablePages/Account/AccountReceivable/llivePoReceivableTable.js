import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const LivePoReceivableTable = () => {
    const [searchLPOR, setSearchLPOR] = useState("");
    const [livePOR, setLivePOR] = useState([]);
    const [filterLivePOR, setFilteredLivePOR] = useState([]);

    const viewLivePOR = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setLivePOR(response.data);
            setFilteredLivePOR(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsLivePOR = [
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
            name: <div id="demo">Project Manager</div>,
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
        viewLivePOR();
    }, []);

    useEffect(() => {
        const result = livePOR.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchLPOR.toLowerCase());
        });

        setFilteredLivePOR(result)
    }, [searchLPOR]);

    const tableHeaderStyleLivePOR = {
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

           <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleLivePOR}
                        columns={columnsLivePOR}
                        data={filterLivePOR}
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
                                value={searchLPOR}
                                onChange={(e) => setSearchLPOR(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>



         
        </>
    );
};

export default LivePoReceivableTable;
