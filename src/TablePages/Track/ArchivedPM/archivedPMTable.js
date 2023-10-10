import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const ArchivePMTable = () => {
    const [searchAPT, setSearchAPT] = useState("");
    const [archivePM, setArchivePM] = useState([]);
    const [filterArchivePM, setFilteredArchivePM] = useState([]);

    const ArchivePM = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setArchivePM(response.data);
            setFilteredArchivePM(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsArchivePM = [
        {
            name:<div id="demo">Sr No</div>,
            
            selector: (row)=> row.email,
            sortable:true,
        
          },
          {
            name:<div id="demo">Project Name</div>,
            selector: (row )=> row.email,
          },
       
          {
            name:<div id="demo">Service</div>,
            selector: (row) => row.body,
          },
          {
            name:<div id="demo">Equipment</div>,
            selector: (row) => row.body,
          },
        
          {
            name:<div id="demo">PM Date</div>,
            selector: (row) => <div className="form-control"> {row.email} </div>,
          },
          {
            name:<div id="demo">PM Number</div>,
            selector: (row) => row.email,
          },
          {
            name:<div id="demo">Remark</div>,
            selector: (row) => row.email,
          },
          {
            name:<div id="demo">Status</div>,
            selector: (row) => row.email,
          },
          {
            name:<div id="demo">Ticket Number</div>,
            selector: (row) => row.email,
          },
         

    ]

   
    useEffect(() => {
        ArchivePM();
    }, []);

    useEffect(() => {
        const result = archivePM.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchAPT.toLowerCase());
        });

        setFilteredArchivePM(result)
    }, [searchAPT]);

    const tableHeaderStyleArchivePM = {
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

                        customStyles={tableHeaderStyleArchivePM}
                        columns={columnsArchivePM}
                        data={filterArchivePM}
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
                                value={searchAPT}
                                onChange={(e) => setSearchAPT(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default ArchivePMTable;
