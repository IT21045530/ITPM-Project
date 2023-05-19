import React , {useState} from 'react';

function DashboardRM() {

    function next_investor(){
        window.location.href= "../Resource_Managemnt/InvesterManaging";
    }
    
    function next_land(){
        window.location.href="../Resource_Managemnt/LandManaging";
    }

  return (
    <div>
        <div className='text-center' style={{backgroundColor: '#243A1D', paddingTop: '5%', paddingBottom: '4%'}}>
            <h1 className='text-uppercase text-white'>Resource Management Dashboard</h1>
            <span className='text-uppercase' style={{color:'#9CB693'}}>HOME / Resource Dashboard</span>
        </div>
        <div className='container'>
            <div className='row' style={{paddingTop:'5%' , paddingBottom :'5%'}}>
                <div className='col'>
                    <div class="card" >
                        <div class="card-body text-center">
                            <img src="../img/land.png" class="card-img-top" alt="..." style={{width:'25%'}} />
                            <h2 class="card-title text-uppercase pt-4">Lands Managment</h2>
                            <p>Land management refers to the process of overseeing and making decisions about the use, development, and conservation of land resources. It involves a range of activities aimed at optimizing the economic, social, and environmental benefits derived from land.</p>
                        </div>
                        <div className='card-footer'>
                            <div className='text-end pt-3 pb-3'>
                                <button className='btn btn-outline-dark' onClick={next_land}>Next</button>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className='col'>
                    <div class="card" >
                        <div class="card-body text-center">
                            <img src="../img/investing.png" class="card-img-top" alt="..." style={{width:'25%'}} />
                            <h2 class="card-title text-uppercase pt-4">Investers Managment</h2>
                            <p>Land management refers to the process of overseeing and making decisions regarding the use, development, and conservation of land resources. It involves various activities aimed at optimizing land utilization while considering social, economic, and environmental factors.</p>
                        </div>
                        <div className='card-footer'>
                            <div className='text-end pt-3 pb-3'>
                                <button className='btn btn-outline-dark' onClick={next_investor}>Next</button>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardRM;