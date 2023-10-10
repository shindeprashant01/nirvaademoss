import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";
import Chart from 'react-apexcharts'

// import '../addVendor/viewVendor.css'



const LivePoDOATable = () => {
    const [searchLPOD, setSearchLPOd] = useState("");
    const [livePOD, setLivePOD] = useState([]);
    const [filterLivePOD, setFilteredLivePOD] = useState([]);

    const viewLivePOD = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setLivePOD(response.data);
            setFilteredLivePOD(response.data)
        } catch (error) {
            console.log(error);
        }
    };


    const columnsLivePOD = [
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
        viewLivePOD();
    }, []);

    useEffect(() => {
        const result = livePOD.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchLPOD.toLowerCase());
        });

        setFilteredLivePOD(result)
    }, [searchLPOD]);

    const tableHeaderStyleLivePOD = {
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
                <div style={{display:'flex',padding:'12px' ,border:'2px solid green', marginBottom:'100px'}}>
     <Chart
     type="pie"
     width={400}
     height={200}
     series={[24,75]}
     options={{
        title:{text:'AMC'},
        labels:['assign value', 'Remaining value']
      
     }} />
     <Chart
     type="pie"
     width={400}
     height={200}
     series={[24,75]}
     options={{
        title:{text:'FMS'},
        labels:['assign value', 'Remaining value']
      
     }} />

<Chart
     type="pie"
     width={400}
     height={200}
     series={[24,75]}
     options={{
        title:{text:'PROJECT'},
        labels:['assign value', 'Remaining value']
      
     }} />


     

                </div>
                <div>
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Live PO List</h3>
                    <hr />
                </div>

                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleLivePOD}
                        columns={columnsLivePOD}
                        data={filterLivePOD}
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
                                value={searchLPOD}
                                onChange={(e) => setSearchLPOd(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />
                </div>
            </div>
        </>
    );
};

export default LivePoDOATable;
