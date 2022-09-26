import React, { useState } from 'react'

const EditProfilePatient = (data) => {
 
    const[surname,setSurname] = useState()
    const[othernames,setOthernames] = useState()

    const handleChange=(e)=>{
        setSurname(e.target.value)
        
    }
    const handleChange1=(e)=>{
    setOthernames(e.target.value)
    }
  return (

    
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><span class="font-weight-bold"><h4>Patient : {data.patient_id}</h4></span><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="text-black-50">{data.email}</span><span> </span></div>
        </div>

        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" placeholder="surname" value={surname} onChange={handleChange}/></div>
                    <div class="col-md-6"><label class="labels">Othernames</label><input type="text" class="form-control" value={othernames} onChange={handleChange1} placeholder="othernames"/></div>
                    <div class="col-md-6"><label class="labels">Contact 1</label><input type="text" class="form-control" placeholder="enter contact" value=""/></div>
                    <div class="col-md-6"><label class="labels">Contact 2</label><input type="text" class="form-control" placeholder="enter contact" value=""/></div>
                    <div class="col-md-10"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter email" value=""/></div>


                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Username</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-6"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value=""/></div>
                    <div class="col-md-6"><label class="labels">Password</label><input type="text" class="form-control" placeholder="enter password" value=""/></div>
                    {/* <div class="col-md-6"><label class="labels">Patient Id</label><input type="text" class="form-control" placeholder="enter patient id" value=""/></div> */}

                    {/* <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value=""/></div> */}
                   
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Birthdate</label><input type="text" class="form-control" placeholder="birthdate" value=""/></div>
                    <div class="col-md-6"><label class="labels">Gender</label><input type="text" class="form-control" value="" placeholder="gender"/></div>
                </div>
                <div class="mt-2 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>

        {/* <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br></br>
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""/></div> <br></br>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div>
            </div>
        </div> */}
       
       
      
    </div>
  )
}

export default EditProfilePatient
