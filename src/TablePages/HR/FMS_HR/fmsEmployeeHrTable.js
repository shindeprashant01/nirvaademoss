import React, { useState, useEffect } from "react";

import DataTable from 'react-data-table-component';
import axios from "axios";





const FMSEmployeeHrTable = () => {
    const [searchFMSHr, setSearchFMSHr] = useState("");
    const [fMSHr, setFMSHr] = useState([]);
    const [filterFMSHr, setFilteredFMSHr] = useState([]);

    const viewFMSHr= async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setFMSHr(response.data);
            setFilteredFMSHr(response.data)
        } catch (error) {
            console.log(error);
        }
    };



   
    const columnsFMSEmployeeHr = [
        {
            name: <div id="demo">Employee Code</div>,
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: <div id="demo">Employee Name</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Designation </div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Cost Center</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Mobile No.</div>,
            selector: (row) => row.body,
            sortable: true,
        },


        {
            name: <div id="demo">CTC PA</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name:<div id="demo">Add PM Schedule</div>,
            cell :(row)=><div>
      
          <button  size="sm" className="btn btn-trasnparent" style={{color:'blue'}} onClick={()=> alert(row.id)} >Edit</button>
          </div> 
           
        },

    ]

    const columnsFMSPoHrPay = [
        {
            name: <div id="demo">Employee Code</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Site Name</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Basic</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">House Rent Allowance</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Conveyance Allowance</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Medical Allowance</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Special Allowance</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Provident Fund</div>,
            selector: (row) => row.email,
            sortable: true,
        },

        {
            name: <div id="demo">Profession tax</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Employee State Insurance</div>,
            selector: (row) => row.email,
            sortable: true,
        },
       
    ]

    useEffect(() => {
        viewFMSHr();
    }, []);

    useEffect(() => {
        const result = fMSHr.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchFMSHr.toLowerCase());
        });

        setFilteredFMSHr(result)
    }, [searchFMSHr]);

    const tableHeaderStyleFMSPOHr = {
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
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Employee List</h3>
                    <hr />
                </div>

                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleFMSPOHr}
                        columns={ columnsFMSEmployeeHr}
                        data={filterFMSHr}
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
                                value={searchFMSHr}
                                onChange={(e) => setSearchFMSHr(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>



            <div>
                <div  >
                    <h3 style={{ color: "rgb(67, 190, 206)" }}>Employee Pay</h3>
                    <hr />
                </div>
                <div style={{ position: 'relative' }}>

                    <DataTable

                        customStyles={tableHeaderStyleFMSPOHr}
                        columns={ columnsFMSPoHrPay}
                        data={filterFMSHr}
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
                                value={searchFMSHr}
                                onChange={(e) => setSearchFMSHr(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default FMSEmployeeHrTable;
