import React from 'react';
import './newVendorRegiForm.css';
// import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const NewVendorRegiForm = () => {
  // const [data, setData] = useState([]);

//   useEffect(()=>{ 
//     fetch('http://localhost:8081/vendors')
//     .then(res=> res.json())
//     .then(data => setData(data))   /* .then(data =>console.log(data)) */
//     .catch(err => console.log(err))
//  },[])
  return (
    <div>    
            
      <form>  
      <div className="w3-container w3-card w3-white w3-round w3-margin main-box-vendor-regi">
        <div className="container-vendor-regi">
          <div className="forms-outline-vendor-regi">
            <div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor ID :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Vendor ID"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  
                  /> 
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Vendor Name"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                 
                  /> 
              

                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Address :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Vendor Address"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Contact Person Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Vendor Contact Person Name"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Contact Number :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Vendor Contact Number"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Alternate Contact :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Alternate Contact "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Vendor Eamil :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Vendor Eamil"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Alternate Eamil :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Alternate Eamil "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Bank Name :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Bank Name  "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Bank Acc No. :</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="Bank Acc No.  "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> IFSC Code:</label>
                <div className="input-details-vendor-regi">
                <input
                     type="text"
                    className="form-control input-box"
                    placeholder="IFSC Code"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
              
                  />
                </div>
              </div>
          
          
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi"> Pan Card: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     className="form-control input-box-unique"
                    placeholder="Pan Card "
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>
              
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">GST Certificate: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     className="form-control input-box-unique"
                    placeholder="GSTIN No."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>
            
              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">Incorporation Certificate: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     className="form-control input-box-unique"
                    placeholder="Incorporation Certificate No."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">Cancelled Cheque No.: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     className="form-control input-box-unique"
                    placeholder="Cancelled Cheque No."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">MOA: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     className="form-control input-box-unique"
                    placeholder="MOA No.."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">AOA: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     className="form-control input-box-unique"
                    placeholder="AOA No."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">Company Profile: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     className="form-control input-box-unique"
                    placeholder="Company Profile"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>

              <div className="input-container-vendor-regi">
                <label className="label-vendor-regi">MSME File: </label>
                <div className="input-details-vendor-regi">
                <div className='file-type'>
                <input
                     type="text"
                     className="form-control input-box-unique"
                    placeholder="MSME File No.."
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
              
                <input type="file" className="input-box-unique-1" />
                </div>
                </div>
              </div>
            
              <div className="btn-submit-vendor-regi">
                <Button variant="primary" size='lg'>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
   
    </div>
  )
}

export default NewVendorRegiForm;









// {data.map(item =>( ))}