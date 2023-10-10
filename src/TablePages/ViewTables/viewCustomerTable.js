import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import axios from "axios";

// import '../addVendor/viewVendor.css'



const ViewCustomerTable = () => {
    const [searchVC, setSearchVC] = useState("");
    const [viewCustomer, setViewCustomer] = useState([]);
    const [filterViewCustomer, setFilteredViewCustomer] = useState([]);

    const viewCustomers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setViewCustomer(response.data);
            setFilteredViewCustomer(response.data)
        } catch (error) {
            console.log(error);
        }
    };



    const columnsViewCustomer = [
        {
            name: <div id="demo">Customer ID</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Customer Name</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Customer Address</div>,
            selector: (row) => row.body,
            sortable: true,
        },
        {
            name: <div id="demo">Customer Email</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name: <div id="demo">Customer Contact</div>,
            selector: (row) => row.body,
            sortable: true,
        },


        {
            name: <div id="demo">Customer Password</div>,
            selector: (row) => row.body,
            sortable: true,
        },

        {
            name:<div id="demo">Edit</div>,
            cell :(row)=> <Button variant="outline-primary" size="lg" onClick={()=> alert(row.id)} > Edit </Button>
           
          },
          {
            name:<div id="demo">Delete</div>,
            cell :(row)=> <Button variant="outline-danger" size="lg"  onClick={()=> alert(row.id)} > Delete </Button>
           
          }


    ]

   
    useEffect(() => {
        viewCustomers();
    }, []);

    useEffect(() => {
        const result = viewCustomer.filter(singleOrder => {
            return singleOrder.name.toLowerCase().match(searchVC.toLowerCase());
        });

        setFilteredViewCustomer(result)
    }, [searchVC]);

    const tableHeaderStyleViewCustomer = {
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

                        customStyles={tableHeaderStyleViewCustomer}
                        columns={columnsViewCustomer}
                        data={filterViewCustomer}
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
                                value={searchVC}
                                onChange={(e) => setSearchVC(e.target.value)} />
                        }
                        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
                    />


                </div>
            </div>
        </>
    );
};

export default ViewCustomerTable;
