import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";




const NewLiveTicketsTable = () => {
    const [searchNewLiveTickets, setSearchNewLiveTickets] = useState("");
    const [newLiveTickets, setNewLiveTickets] = useState([]);
    const [filterNewLiveTickets, setFilteredNewLiveTickets] = useState([]);

    const viewNewLiveTickets = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setNewLiveTickets(response.data);
            setFilteredNewLiveTickets(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnnsNewLiveTickets = [
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
            name: <div id="demo">Date[yyy-mm-dd]</div>,
            selector: (row) => row.body,
        },
        {
            name: <div id="demo">Time[24 Hour]</div>,
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
            name: <div id="demo">Ticket Created By</div>,
            selector: (row) => row.body,
        },
        {
            name: <div id="demo">Ticket Description</div>,
            selector: (row) => row.email,
        },
        {
            name: <div id="demo">Service Engineer</div>,
            selector: (row) => row.email,
        },
        {
            name: <div id="demo">Start Date</div>,
            selector: (row) => row.email,
        },
        {
            name: <div id="demo">End Date</div>,
            selector: (row) => row.email,
        },

        {
            name: <div id="demo">Asssign/Reassign</div>,
            selector: (row) => row.email,
        },


    ]
    useEffect(() => {
        viewNewLiveTickets();
    }, []);

    useEffect(() => {
        const result = newLiveTickets.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchNewLiveTickets.toLowerCase());
        });

        setFilteredNewLiveTickets(result)
    }, [searchNewLiveTickets]);

    const tableHeaderStyleNewLiveTickets = {
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

                customStyles={tableHeaderStyleNewLiveTickets}
                columns={columnnsNewLiveTickets}
                data={filterNewLiveTickets}
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
                        value={searchNewLiveTickets}
                        onChange={(e) => setSearchNewLiveTickets(e.target.value)} />
                }
                paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            />

        </div>
    );
};

export default NewLiveTicketsTable;
