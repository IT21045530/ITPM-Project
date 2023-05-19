import React , {useState} from 'react'

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

function LandUpdate() {

    
   // Set the initial state for the selected district
   const [selectedDistrict, setSelectedDistrict] = useState("");

   // Set the initial state for the selected soil nature
   const [selectedSoilNature, setSelectedSoilNature] = useState("");

   // Handle change event of the select dropdown
   const handleSoilNatureChange = (event) => {
     setSelectedSoilNature(event.target.value);
   };

  // Handle change event of the select dropdown
  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div>
        <div className='container'>
            <div className='row' style={{ marginTop : '10%' }}>
                <div className='col-2'></div>
                <div className='col-8 rounded' style={{backgroundColor : '#DEDEDA' , padding : '2%'}}>
                    <h4 className='text-center'>UPDATE LANDS</h4>
                    <div className='ps-4 pe-4'>
                        <div class="mb-3">
                            <label for="" class="form-label">Purches</label>
                            <input type="number" class="form-control form-control-lg"  />
                        </div>
                        <div class="mb-3 mt-2">
                            <label for="" class="form-label">Soil Nature</label>
                            <select
                                id="soilNatureSelect"
                                className="form-control form-control-lg"
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
                                    <input type="text" class="form-control form-control-lg"  />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3 mt-2">
                                    <label for="" class="form-label">District</label>
                                    <select
                                        id="districtSelect"
                                        className="form-control form-control-lg"
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
                            <input type="text" class="form-control form-control-lg"  />
                        </div>
                        <div class="mb-3 mt-2">
                            <label for="" class="form-label">Land Type</label>
                            <input type="text" class="form-control form-control-lg"  />
                        </div>
                        <div class="mb-3 mt-2">
                            <label for="" class="form-label">Upload Image</label>
                            <input type="file" class="form-control form-control-lg"  />
                        </div>
                        <div class="mb-3 mt-3">
                            <div class="d-grid gap-2">
                                <button className='btn btn-dark'>EditUPD</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
           
        </div>
    </div>
  )
}

export default LandUpdate