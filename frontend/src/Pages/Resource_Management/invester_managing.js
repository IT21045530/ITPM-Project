import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import jsPDF from "jspdf";
import 'jspdf-autotable';

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBTable,
    MDBTableHead, 
    MDBTableBody,
    MDBIcon
  } from 'mdb-react-ui-kit';



function InvesterManaging() {

    const [capital, setCapital] = useState('');
    const [name, setName] = useState('');
    const [cultivation, setCultivation] = useState('');
    const [address, setAddress] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [occupation, setOccupation] = useState('');
    const [telephoneNumberError, setTelephoneNumberError] = useState('');

    const [editInvesterID, setEditInvesterID] = useState('');
    const [editcapital, setEditCapital] = useState('');
    const [editname, setEditName] = useState('');
    const [editcultivation, setEditCultivation] = useState('');
    const [editaddress, setEditAddress] = useState('');
    const [edittelephoneNumber, setEditTelephoneNumber] = useState('');
    const [editoccupation, setEditOccupation] = useState('');
    const [edittelephoneNumberError, setEditTelephoneNumberError] = useState('');
    
    const [investers, setAllInvesters] = useState([]);

    const [uploadFile, setUploadFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [cloudinaryIMG, setCloudinaryImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        load_invester();
    }, []);
    
    function load_invester(){
        axios.get('http://localhost:4000/investers/getAllInvestors')
        .then(response => {
          setAllInvesters(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }

    const clearAll = async () => {
        load_invester();
    }

    const handleSearch = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/investers/investorSearch/${searchQuery}`);
          const investors = response.data;
          setAllInvesters(investors);
        } catch (error) {
          console.error(error);
        }
    };
    
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setUploadFile(file);
    
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };



    const validateTelephoneNumber = (value) => {
        const telephoneRegex = /^\d{10}$/; // Assuming telephone number should be 10 digits
        const isValid = telephoneRegex.test(value);
        setTelephoneNumberError(isValid ? '' : 'Invalid telephone number');
    };
    
    
    const handleTeleChange = (event) => {
        const { value } = event.target;
        setTelephoneNumber(value);
        validateTelephoneNumber(value);
    };

    const save_investor = async (e) => {
        e.preventDefault();

        const formData = new FormData ();
        formData.append("file", uploadFile);
        formData.append("upload_preset", "ml_default");
        
        axios.post(
            "https://api.cloudinary.com/v1_1/dnomnqmne/image/upload",
            formData
            )
            .then((response) => {
                console.log(response);
                setCloudinaryImage(response.data.secure_url);
                save_data(response.data.secure_url);
            })
            .catch((error) => {
                console.log(error);
            });   
    }

    function save_data(image){

     // Create an object with the data to be saved
     const investorData = {
        capital: capital,
        name: name,
        cultivation: cultivation,
        address: address,
        telephoneNumber: telephoneNumber,
        occupation: occupation,
        photo: image
      };
  
      // Send a POST request to the server to save the data
      axios.post('http://localhost:4000/investers/addInvestor', investorData)
        .then(response => {
          // Display success message using SweetAlert
          Swal.fire('Success', 'Investor data saved successfully!', 'success');
  
          // Reset the form fields
          setCapital('');
          setName('');
          setCultivation('');
          setAddress('');
          setTelephoneNumber('');
          setOccupation('');
          load_invester();
          setBasicModal(!basicModal);
        })
        .catch(error => {
          // Display error message using SweetAlert
          Swal.fire('Error', 'Failed to save investor data.', 'error');
        });
    };


    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    const [editModal, setEditModal] = useState(false);
    const toggleEditShow = () => setEditModal(!editModal);

    function add_new_investers(){
        setBasicModal(!basicModal);
    }

    const handleDelete = (investorId) => {
        Swal.fire({
          title: 'Delete Investor',
          text: 'Are you sure you want to delete this investor?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform the delete action
            deleteInvestor(investorId);
          }
        });
    };

    function deleteInvestor(id){
        axios
        .delete(`http://localhost:4000/investers/investerDelete/${id}`)
        .then((response) => {
          // Check the response status and display the success message
          if (response.status === 200) {
            Swal.fire('Success', 'Investor deleted successfully', 'success');
            load_invester();
          } else {
            Swal.fire('Error', 'Failed to delete the investor', 'error');
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire('Error', 'An error occurred while deleting the investor', 'error');
        });
    }
    
    const handleUpdate = (investor) => {
        setEditModal(!editModal);

        setEditInvesterID(investor._id);
        setEditCapital(investor.capital);
        setEditName(investor.name);
        setEditCultivation(investor.cultivation);
        setEditAddress(investor.address);
        setEditTelephoneNumber(investor.telephoneNumber);
        setEditOccupation(investor.occupation);
       
    };
    

    function back(){
        window.location.href="../InvestorDashboard";
    }

    async function generate_report(){
        try {
            const response = await axios.get('http://localhost:4000/investers/getAllInvestors');
            const investors = response.data;
            const generatedDate = new Date().toLocaleDateString();
            const title = 'Investor List';
            const totalInvestorCount = investors.length;
    
            const doc = new jsPDF();
            doc.setFontSize(18);
            doc.text(title, 20, 20);
            
    
            doc.setFontSize(12);
            doc.text(`Generated Date: ${generatedDate}`, 20, 30);
            doc.text(`Total Investor Count: ${totalInvestorCount}`, 20, 40);
    
            doc.setFontSize(10);
            
            const tableHeaders = ['ID', 'Name', 'Telephone Number' , "Capital"]; // Customize the table headers here

            const tableData = investors.map(investor => [
                investor._id,
                investor.name,
                investor.telephoneNumber,
                "RS. "+(investor.capital),
            ]);

            doc.autoTable({
                head: [tableHeaders],
                body: tableData,
                margin: { top: 50, left: 20, right: 20, bottom: 20 },
            });
    
            doc.save('investors.pdf');
        } catch (error) {
        console.error(error);
        }
    }

    function update_investor() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to update the investor?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
          })
            .then((result) => {
              if (result.isConfirmed) {
      
                    // Perform the update request here
                    const investorId = editInvesterID; // Replace with the actual investor ID
                    const updatedData = {
                        capital: editcapital,
                        name: editname,
                        cultivation: editcultivation,
                        address: editaddress,
                        telephoneNumber: edittelephoneNumber,
                        occupation: editoccupation,
                    };
                
                    axios.put(`http://localhost:4000/investers/updateInvester/${investorId}`, updatedData)
                    .then(response => {
                        // Handle success response
                        console.log('Investor updated successfully:', response.data);
                        // Show success alert using SweetAlert2
                        Swal.fire({
                            icon: 'success',
                            title: 'Investor updated successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setEditModal(!editModal);
                    })
                    .catch(error => {
                        // Handle error response
                        console.error('Failed to update investor:', error);
                        // Show error alert using SweetAlert2
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed to update investor',
                            text: error.message,
                        });
                    });
                }
            });
    }
      

  return (
    <div className='container' style={{paddingTop:'6%'}}>
        <div className='p-3 rounded mb-4' style={{backgroundColor:'#E5EBE3'}}>
          <h5 className='text-uppercase'>Search Investers</h5>
          <hr/>
          <div className='row pb-3'>
            <div className='col'>
                <input type='text' className='form-control'  value={searchQuery}  onChange={e => setSearchQuery(e.target.value)}/>
            </div>
            <div className='col'>
                <button className='btn btn-sm btn-success mt-1' onClick={handleSearch}>Search</button>{' '}
                <button className='btn btn-sm btn-dark mt-1' onClick={clearAll}>Clear</button>
            </div>
          </div>
        </div>
        <div className='text-end'>
            <button className='btn btn-outline-success' onClick={add_new_investers}>+ Add New Investers</button>{' '}
            <button className='btn btn-outline-primary' onClick={generate_report}>Generate Report</button>{' '}
            <button className='btn btn-outline-dark' onClick={back}> Back</button>
        </div>

        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog size="lg">
            <MDBModalContent>
                <MDBModalHeader className='bg-dark text-white'>
                <MDBModalTitle>Add Invester</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody className='p-4'>
                    <div class="form-group">
                        <label for="capital">Capital:</label>
                        <input type="number" class="form-control" id="capital" name="capital"  value={capital}   onChange={(e) => setCapital(e.target.value)} required />
                    </div>

                    <div class="form-group pt-3">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" name="name" value={name}   onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div class="form-group pt-3">
                        <label for="cultivation">Cultivation:</label>
                        <input type="text" class="form-control" id="cultivation" name="cultivation" value={cultivation}   onChange={(e) => setCultivation(e.target.value)}  required />
                    </div>

                    <div class="form-group pt-3">
                        <label for="address">Address:</label>
                        <input type="text" class="form-control" id="address" name="address" value={address}   onChange={(e) => setAddress(e.target.value)} required />
                    </div>

                    <div class="form-group pt-3">
                        <label for="telephoneNumber">Telephone Number:</label>
                        <input type="text" class="form-control" id="telephoneNumber" name="telephoneNumber"  value={telephoneNumber}
                            onInput={handleTeleChange}
                            required
                        />
                        {telephoneNumberError && <p className='text-danger'>{telephoneNumberError}</p>}
                    </div>

                    <div class="form-group pt-3">
                        <label for="occupation">Occupation:</label>
                        <input type="text" class="form-control" id="occupation" name="occupation" value={occupation}   onChange={(e) => setOccupation(e.target.value)}  required />
                    </div>

                    <div class="form-group pt-3">
                        <label for="photo">Photo:</label>
                        <input type="file" class="form-control" id="photo" name="photo" onChange={handleImageUpload} required />
                    </div>
                </MDBModalBody>

                <MDBModalFooter style={{backgroundColor:'#E5EBE3'}}>
                <MDBBtn color='secondary' onClick={toggleShow}>
                    Close
                </MDBBtn>
                <MDBBtn color="dark" onClick={save_investor}>Save</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>

        <MDBModal show={editModal} setShow={setEditModal} tabIndex='-1'>
            <MDBModalDialog size="lg">
            <MDBModalContent>
                <MDBModalHeader className='bg-dark text-white'>
                <MDBModalTitle>Edit Invester</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleEditShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody className='p-4'>
                    <div class="form-group">
                        <label for="capital">Capital:</label>
                        <input type="number" class="form-control" id="capital" name="capital"  value={editcapital}   onChange={(e) => setEditCapital(e.target.value)} required />
                    </div>

                    <div class="form-group pt-3">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" name="name" value={editname}   onChange={(e) => setEditName(e.target.value)} required />
                    </div>

                    <div class="form-group pt-3">
                        <label for="cultivation">Cultivation:</label>
                        <input type="text" class="form-control" id="cultivation" name="cultivation" value={editcultivation}   onChange={(e) => setEditCultivation(e.target.value)}  required />
                    </div>

                    <div class="form-group pt-3">
                        <label for="address">Address:</label>
                        <input type="text" class="form-control" id="address" name="address" value={editaddress}   onChange={(e) => setEditAddress(e.target.value)} required />
                    </div>

                    <div class="form-group pt-3">
                        <label for="telephoneNumber">Telephone Number:</label>
                        <input type="text" class="form-control" id="telephoneNumber" name="telephoneNumber"  value={edittelephoneNumber}
                            onInput={setEditTelephoneNumber}
                            required
                        />
                        {edittelephoneNumberError && <p className='text-danger'>{edittelephoneNumberError}</p>}
                    </div>

                    <div class="form-group pt-3">
                        <label for="occupation">Occupation:</label>
                        <input type="text" class="form-control" id="occupation" name="occupation" value={editoccupation}   onChange={(e) => setEditOccupation(e.target.value)}  required />
                    </div>

                  
                </MDBModalBody>

                <MDBModalFooter style={{backgroundColor:'#E5EBE3'}}>
                <MDBBtn color='secondary' onClick={toggleEditShow}>
                    Close
                </MDBBtn>
                <MDBBtn color="dark" onClick={update_investor}>Update</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>

        <MDBTable bordered  responsive className="mt-3" style={{width:'100%'}}>
        <MDBTableHead dark>
            <tr className="bg-dark text-white text-center">
            <th>#</th>
            <th>Name</th>
            <th>Cultivation</th>
            <th>Address</th>
            <th>Telephone Number</th>
            <th>Occupation</th>
            <th>Capital</th>
            <th>Photo</th>
            <th>Action</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {investers.map((investor, index) => (
            <tr key={investor._id} className="pt-2 pb-2">
                <td>{index + 1}</td>
                <td>{investor.name}</td>
                <td>{investor.cultivation}</td>
                <td>{investor.address}</td>
                <td>{investor.telephoneNumber}</td>
                <td>{investor.occupation}</td>
                <td>RS. {investor.capital}</td>
                <td className='text-center'>
                    <img src={investor.photo} alt="Investor Photo" style={{ width: '100px' }} />
                </td>
                <td className='text-center' style={{verticalAlign: 'middle'}}>
                    <MDBBtn color="danger" size="sm" onClick={() => handleDelete(investor._id)}>
                        Delete
                    </MDBBtn>{' '}
                    <MDBBtn color="success" size="sm" onClick={() => handleUpdate(investor)}>
                        Update
                    </MDBBtn>{' '}
                   
                </td>
            </tr>
            ))}
        </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default InvesterManaging;