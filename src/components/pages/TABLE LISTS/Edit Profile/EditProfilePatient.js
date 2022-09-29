import React, { useState, useEffect } from 'react'

const EditProfilePatient = (data) => {
 
    const[surname,setSurname] = useState()
    const[othernames,setOthernames] = useState()

    const handleChange=(e)=>{
        setSurname(e.target.value)
        
    }
    const handleChange1=(e)=>{
    setOthernames(e.target.value)
    }
useEffect(()=>{
    
},[])

  return (

    
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><span className="font-weight-bold"><h4>Patient : {data.patient_id}</h4></span><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="text-black-50">{data.email}</span><span> </span></div>
        </div>

        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" placeholder="surname" value={surname} onChange={handleChange}/></div>
                    <div className="col-md-6"><label className="labels">Othernames</label><input type="text" className="form-control" value={othernames} onChange={handleChange1} placeholder="othernames"/></div>
                    <div className="col-md-6"><label className="labels">Contact 1</label><input type="text" className="form-control" placeholder="enter contact" value=""/></div>
                    <div className="col-md-6"><label className="labels">Contact 2</label><input type="text" className="form-control" placeholder="enter contact" value=""/></div>
                    <div className="col-md-10"><label className="labels">Email</label><input type="text" className="form-control" placeholder="enter email" value=""/></div>


                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Username</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                    <div className="col-md-6"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" value=""/></div>
                    <div className="col-md-6"><label className="labels">Password</label><input type="text" className="form-control" placeholder="enter password" value=""/></div>
                    {/* <div className="col-md-6"><label className="labels">Patient Id</label><input type="text" className="form-control" placeholder="enter patient id" value=""/></div> */}

                    {/* <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                    <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                   
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Birthdate</label><input type="text" className="form-control" placeholder="birthdate" value=""/></div>
                    <div className="col-md-6"><label className="labels">Gender</label><input type="text" className="form-control" value="" placeholder="gender"/></div>
                </div>
                <div className="mt-2 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>

        {/* <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br></br>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value=""/></div> <br></br>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value=""/></div>
            </div>
        </div> */}
       
       
      
    </div>
  )
}

export default EditProfilePatient
