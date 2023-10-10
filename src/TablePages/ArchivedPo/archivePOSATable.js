import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";





const ArchivedPoSATable = () => {
    const [searchAPOS, setSearchAPOS] = useState("");
    const [archivedPOS, setArchivedPOS] = useState([]);
    const [filterArchivedPOS, setFilteredArchivedPOS] = useState([]);

    const viewArchivedPOS = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setArchivedPOS(response.data);
            setFilteredArchivedPOS(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsArchivedPOS = [
        {
            name: <div id="demo">Sr No</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name:<div id="demo">Update</div>,
            cell :(row)=><div>
      
          <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} >Update </button>
          </div> 
           
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
            name: <div id="demo">PO</div>,
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: <div id="demo">RPO</div>,
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
            name: <div id="demo">Service_ID</div>,
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
            name: <div id="demo"> Assign Value</div>,
            selector: (row) => row.body,
            sortable: true,
        },
       


    ]

    
    useEffect(() => {
        viewArchivedPOS();
    }, []);

    useEffect(() => {
        const result = archivedPOS.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchAPOS.toLowerCase());
        });

        setFilteredArchivedPOS(result)
    }, [searchAPOS]);

    const tableHeaderStyleArchivedPOSA = {
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

                        customStyles={tableHeaderStyleArchivedPOSA}
                        columns={columnsArchivedPOS}
                        data={filterArchivedPOS}
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
                                value={searchAPOS}
                                onChange={(e) => setSearchAPOS(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>

        </>
    );
};

export default ArchivedPoSATable;
