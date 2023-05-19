import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import jsPDF from "jspdf";
import 'jspdf-autotable';

import {
    MDBBtn,
    MDBTable, 
    MDBTableHead, 
    MDBTableBody 
  } from 'mdb-react-ui-kit';

function InvesterManaging() {

    const [capital, setCapital] = useState('');
    const [name, setName] = useState('');
    const [cultivation, setCultivation] = useState('');
    const [address, setAddress] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [occupation, setOccupation] = useState('');
    const [photo, setPhoto] = useState('');
    const [body, setContent] = useState("");
    const [telephoneNumberError, setTelephoneNumberError] = useState('');
    const [lands, setAllLands] = useState([]);
    
    useEffect(() => {
        load_land();
    }, []);
    
    function load_land(){
        axios.get('http://localhost:4000/api/LandRoute/getAllLands')
        .then(response => {
          setAllLands(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }


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




    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    function add_new_land(){
        window.location.href="../Resource_Managemnt/RM_AddLands"
    }

    const handleDelete = (landID) => {
        Swal.fire({
          title: 'Delete Land',
          text: 'Are you sure you want to delete this land?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform the delete action
            deleteLand(landID);
          }
        });
    };

    function deleteLand(id){
        axios
        .delete(`http://localhost:4000/api/LandRoute/landDelete/${id}`)
        .then((response) => {
          // Check the response status and display the success message
          if (response.status === 200) {
            Swal.fire('Success', 'Land deleted successfully', 'success');
            load_land();
          } else {
            Swal.fire('Error', 'Failed to delete the land', 'error');
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire('Error', 'An error occurred while deleting the land', 'error');
        });
    }
    
    const handleUpdate = (investorId) => {
        // Handle update action for the specific investor
        console.log(`Update investor with ID: ${investorId}`);
    };
    
    const handleView = (investorId) => {
        // Handle view action for the specific investor
        console.log(`View investor with ID: ${investorId}`);
    };

    function back(){
        window.location.href="../Resource_Managemnt/RM_dashboard";
    }

    async function generate_report() {
      try {
        const response = await axios.get('http://localhost:4000/api/LandRoute/getAllLands');
        const lands = response.data;
        const generatedDate = new Date().toLocaleDateString();
        const title = 'Land Report';
        const totalLandCount = lands.length;
    
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text(title, 20, 20);
    
        doc.setFontSize(12);
        doc.text(`Generated Date: ${generatedDate}`, 20, 30);
        doc.text(`Total Land Count: ${totalLandCount}`, 20, 40);
    
        doc.setFontSize(10);
    
        const tableHeaders = [ 'Address', 'Disctrict', 'Area' , 'Min. Investment','Cultivation Good']; // Customize the table headers here
    
        const tableData = lands.map(land => [
          
          land.address,
          land.district,
          `${land.perches} perches`,
          land.minInvestment,
          land.cultivationGood
        ]);
    
        doc.autoTable({
          head: [tableHeaders],
          body: tableData,
          margin: { top: 50, left: 20, right: 20, bottom: 20 },
        });
    
        doc.save('land_report.pdf');
      } catch (error) {
        console.error(error);
      }
    }
    

  return (
    <div className='container' style={{paddingTop:'6%'}}>
        
        <div className='text-end'>
            <button className='btn btn-success' onClick={add_new_land}>+ Add New Land</button>{' '}
            <button className='btn btn-primary' onClick={generate_report}>Generate Report</button>{' '}
            <button className='btn btn-dark' onClick={back}> Back</button>
        </div>

        <MDBTable bordered className="mt-3">
        <MDBTableHead dark>
            <tr className="bg-dark text-white text-center">
            <th>#</th>
            <th>Perches</th>
            <th>Soil Nature</th>
            <th>Location</th>
            <th>Cultivation Good</th>
            <th>Minimum Investment</th>
            <th>Photo</th>
            <th>Action</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {lands.map((land, index) => (
            <tr key={land._id} className="pt-2 pb-2">
                <td>{index + 1}</td>
                <td>{land.perches}</td>
                <td>{land.soilNature}</td>
                <td>{land.address} <br/> {land.district}</td>
                <td>{land.cultivationGood}</td>
                <td>RS. {land.minInvestment}</td>
                <td>
                    <img src={land.photo} alt="Investor Photo" style={{ width: '100px' }} />
                </td>
                <td className='text-center'>
                    <MDBBtn type="button" color="danger" size="sm" onClick={() => handleDelete(land._id)}>
                        Delete
                    </MDBBtn>{' '}
                    <MDBBtn color="success" size="sm" onClick={() => handleUpdate(land._id)}>
                        Update
                    </MDBBtn>{' '}
                    <MDBBtn color="info" size="sm" onClick={() => handleView(land._id)}>
                        Add Investers
                    </MDBBtn>
                </td>
            </tr>
            ))}
        </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default InvesterManaging;