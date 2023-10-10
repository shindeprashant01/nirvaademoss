import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";
import { Button } from "react-bootstrap";



const LiveTicketsSeTable = () => {
    const [searchLiveTicketsSe, setSearchLiveTicketsSe] = useState("");
    const [liveTicketsSe, setLiveTicketsSe] = useState([]);
    const [filterLiveTicketsSe, setFilteredLiveTicketsSe] = useState([]);

    const viewLiveTicketsSe = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setLiveTicketsSe(response.data);
            setFilteredLiveTicketsSe(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnnsLiveTicketsSe = [
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
            name: <div id="demo">Ticket PO</div>,
            selector: (row) => row.email,
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
            selector: (row) => row.body,
        },
        {
            name: <div id="demo">End Date</div>,
            selector: (row) => row.email,
        },
        {
            name: <div id="demo">FSR</div>,
            selector: (row) => row.body,
        },

       
        {
            name: <div id="demo">Expense</div>,
            selector: (row) => row.email,
        },
        {
            name: <div id="demo">Purchase</div>,
            selector: (row) => row.body,
        },
      
       
      

    ]
    useEffect(() => {
        viewLiveTicketsSe();
    }, []);

    useEffect(() => {
        const result = liveTicketsSe.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchLiveTicketsSe.toLowerCase());
        });

        setFilteredLiveTicketsSe(result)
    }, [searchLiveTicketsSe]);

    const tableHeaderStyleLiveTicketsSe = {
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

                customStyles={tableHeaderStyleLiveTicketsSe}
                columns={columnnsLiveTicketsSe}
                data={filterLiveTicketsSe}
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
                        value={searchLiveTicketsSe}
                        onChange={(e) => setSearchLiveTicketsSe(e.target.value)} />
                }
                paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            />

        </div>
    );
};

export default LiveTicketsSeTable;
