import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";




const ArchivedTicketsTable = () => {
    const [searchArchivedTickets, setSearchArchivedTickets] = useState("");
    const [archivedTickets, setArchivedTickets] = useState([]);
    const [filterArchivedTickets, setFilteredArchivedTickets] = useState([]);

    const viewArchivedTickets = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setArchivedTickets(response.data);
            setFilteredArchivedTickets(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnnsArchivedTickets = [
        {
            name: <div id="demo">Sr NO.</div>,

            selector: (row) => row.email,
            sortable: true,

        },

        {
            name: <div id="demo">    Ticket ID</div>,
            selector: (row) => row.body,
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.body,
        },
        {
            name: <div id="demo">Start Time</div>,
            selector: (row) => row.body,
        },

        {
            name: <div id="demo">Ticket PO</div>,
            selector: (row) => row.email,
        },
        {
            name: <div id="demo">Ticket Service</div>,
            selector: (row) => row.email,
        },
        {
            name: <div id="demo">Total Created By</div>,
            selector: (row) => row.body,
        },
        {
            name: <div id="demo">Ticket Description</div>,
            selector: (row) => row.email,
        },
       
        {
            name: <div id="demo">End Date</div>,
            selector: (row) => row.email,
        },

        {
            name: <div id="demo">FSR</div>,
            selector: (row) => row.email,
        },


    ]
    useEffect(() => {
        viewArchivedTickets();
    }, []);

    useEffect(() => {
        const result = archivedTickets.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchArchivedTickets.toLowerCase());
        });

        setFilteredArchivedTickets(result)
    }, [searchArchivedTickets]);

    const tableHeaderStyleArchivedTickets = {
        headCells: {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItem: "center",

                border: "1px solid white",
                // width:"25px",
                fontWeight: "bold",
                fontSize: "14px",
                color: "white",
                backgroundColor: "rgb(67, 190, 206)",
                padding: "12px",






            }
        },
        cells: {
            style: {
                display: "flex",
                justifyContent: "center",
                fontSize: '14px',
                flexWrap: "wrap",
                width: "100px"


            }
        },
        rows: {
            style: {
                //   width:"25px",
            }
        }
    }

    return (
        <div style={{ position: 'relative' }}>

            <DataTable

                customStyles={tableHeaderStyleArchivedTickets}
                columns={columnnsArchivedTickets}
                data={filterArchivedTickets}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="550px"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={
                    <Button varient="primary" className="me-3"> Search</Button>
                }
                subHeader
                subHeaderComponent={
                    <input type="text" placeholder="Search PO ID"
                        className="w-25 form-control"
                        value={searchArchivedTickets}
                        onChange={(e) => setSearchArchivedTickets(e.target.value)} />
                }
                paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            />

        </div>
    );
};

export default ArchivedTicketsTable;
