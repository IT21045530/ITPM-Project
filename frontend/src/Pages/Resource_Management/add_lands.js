import React , {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const districts = [
    { value: "", label: "-- Select District --" },
    { value: "colombo", label: "Colombo" },
    { value: "gampaha", label: "Gampaha" },
    { value: "kalutara", label: "Kalutara" },
    { value: "kandy", label: "Kandy" },
    { value: "matara", label: "Matara" },
    { value: "galle", label: "Galle" },
    { value: "ampara", label: "Ampara" },
    { value: "anuradhapura", label: "Anuradhapura" },
    { value: "badulla", label: "Badulla" },
    { value: "batticaloa", label: "Batticaloa" },
    { value: "hambantota", label: "Hambantota" },
    { value: "jaffna", label: "Jaffna" },
    { value: "kilinochchi", label: "Kilinochchi" },
    { value: "kurunegala", label: "Kurunegala" },
    { value: "mannar", label: "Mannar" },
    { value: "matale", label: "Matale" },
    { value: "monaragala", label: "Monaragala" },
    { value: "mullaitivu", label: "Mullaitivu" },
    { value: "nuwaraeliya", label: "Nuwara Eliya" },
    { value: "polonnaruwa", label: "Polonnaruwa" },
    { value: "puttalam", label: "Puttalam" },
    { value: "ratnapura", label: "Ratnapura" },
    { value: "trincomalee", label: "Trincomalee" },
    { value: "vavuniya", label: "Vavuniya" },
  ];

  // Define an array of soil nature types
  const soilNatureTypes = [
    { value: "", label: "-- Select Soil Nature --" },
    { value: "sandy", label: "Sandy" },
    { value: "clayey", label: "Clayey" },
    { value: "loamy", label: "Loamy" },
    { value: "peaty", label: "Peaty" },
    // ... other soil nature options
  ];

function AddLands() {

        // Define state variables for input fields
        const [purches, setPurches] = useState('');
        const [selectedSoilNature, setSelectedSoilNature] = useState('');
        const [selectedDistrict, setSelectedDistrict] = useState('');
        const [address, setAddress] = useState('');
        const [cultivation, setCultivation] = useState('');
        const [landType, setLandType] = useState('');
        const [minInvestment, setMinInvestment] = useState('');

        const [uploadFile, setUploadFile] = useState(null);
        const [previewImage, setPreviewImage] = useState(null);
        const [cloudinaryIMG, setCloudinaryImage] = useState(null);

        // Define functions for handling changes in input fields
        function handlePurchesChange(e) {
            setPurches(e.target.value);
        }

         
        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            setUploadFile(file);
        
            const reader = new FileReader();
            reader.onloadend = () => {
            setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        };

        function handleSoilNatureChange(e) {
            setSelectedSoilNature(e.target.value);
        }

        function handleDistrictChange(e) {
            setSelectedDistrict(e.target.value);
        }

        function handleAddressChange(e) {
            setAddress(e.target.value);
        }

        function handleCultivationChange(e) {
            setCultivation(e.target.value);
        }

        function handleLandTypeChange(e) {
            setLandType(e.target.value);
        }

        function handleMinInvestemnt(e) {
            setMinInvestment(e.target.value);
        }

        const save_btn = async (e) => {
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

        function save_data(img){
                // Make API call to save form data
                axios.post('http://localhost:4000/land/addLand', {
                    purches,
                    soilNature: selectedSoilNature,
                    district: selectedDistrict,
                    address,
                    cultivationGood : cultivation,
                    landType ,
                    minInvestment : minInvestment,
                    photo : img
                }).then(response => {
                    // Show success message using SweetAlert
                    Swal.fire({
                        title: 'Success',
                        text: 'Land added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    window.location.href="../Resource_Managemnt/LandManaging"
                }).catch(error => {
                    // Show error message using SweetAlert
                    Swal.fire({
                    title: 'Error',
                    text: 'An error occurred while adding land',
                    icon: 'error',
                    confirmButtonText: 'OK'
                    });
                });
        }

        
    function back(){
        window.location.href="../Resource_Managemnt/LandManaging";
    }

  return (
    <div>
        <div className='container'>
            <div className='row' style={{ marginTop : '10%' }}>
                <div className='col-2'></div>
                <div className='col-8 rounded' style={{backgroundColor : '#DEDEDA' , padding : '2%'}}>
                    <h4 className='text-center'>ADD LANDS</h4>
                    <div className='ps-4 pe-4'>
                        <div class="mb-3">
                            <label for="" class="form-label">Purches</label>
                            <input type="number" class="form-control " value={purches} onChange={handlePurchesChange} />
                        </div>
                        <div class="mb-3 mt-2">
                            <label for="" class="form-label">Soil Nature</label>
                            <select
                                id="soilNatureSelect"
                                className="form-select "
                                value={selectedSoilNature}
                                onChange={handleSoilNatureChange}
                            >
                                {soilNatureTypes.map((soilNature) => (
                                <option key={soilNature.value} value={soilNature.value}>
                                    {soilNature.label}
                                </option>
                                ))}
                            </select>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div class="mb-3 mt-2">
                                    <label for="" class="form-label">Address</label>
                                    <input type="text" class="form-control " value={address} onChange={handleAddressChange}   />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3 mt-2">
                                    <label for="" class="form-label">District</label>
                                    <select
                                        id="districtSelect"
                                        className="form-select "
                                        value={selectedDistrict}
                                        onChange={handleDistrictChange}
                                    >
                                        {districts.map((district) => (
                                        <option key={district.value} value={district.value}>
                                            {district.label}
                                        </option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                        </div>
                       
                        
                        <div class="mb-3 mt-2">
                            <label for="" class="form-label">Cultivation For Good</label>
                            <input type="text" class="form-control "  value={cultivation} onChange={handleCultivationChange} />
                        </div>
                        <div class="mb-3 mt-2">
                            <label for="" class="form-label">Land Type</label>
                            <input type="text" class="form-control "  value={landType} onChange={handleLandTypeChange} />
                        </div> 
                        <div class="mb-3 mt-2">
                            <label for="" class="form-label">Minimum Investment</label>
                            <input type="number" class="form-control "  value={minInvestment} onChange={handleMinInvestemnt} />
                        </div>
                        <div class="mb-3 mt-2">
                            <label for="" class="form-label">Upload Image</label>
                            <input type="file" class="form-control "  onChange={handleImageUpload}  />
                        </div>
                        <div class="mb-3 mt-3 text-end">
                            
                                <button className='btn btn-dark' onClick={back} type='button'>Back</button>{' '}
                                <button className='btn btn-success' onClick={save_btn} type='button'>Save</button>
                            
                        </div>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
           
        </div>
    </div>
  )
}

export default AddLands