import React from 'react'
import formik from 'formik'

function Home() {
  return (
    <>
   
    <div>
      <h3><u>Personal Details</u></h3>
      
      <div className='inputtext'>
      <label htmlFor='Name'>Name<span className='redstar'>*</span></label>
      <input name='Name' id='Name' placeholder='Enter Name'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='Mobile'>Mobile</label>
      <input name='Mobile' id='Mobile' placeholder='Enter Mobile'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='Dob'>Date of Birth or Age<span className='redstar'>*</span></label>
      <input name='Dob' id='Dob' placeholder='DD/MM/YYYY or Age in Years'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='Sex'>Sex<span className='redstar'>*</span></label>
      <input name='Sex' id='Sex' placeholder='Enter Sex'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='idtype'>Govt Issued ID</label>
      <input name='idtype' id='idtype' placeholder='ID type'></input>
      <input name='Govtid' id='Govtid' placeholder='Enter Govt ID'></input>
      </div>

    </div>

    <div>
      <h3><u>Contact Details</u></h3>
      
      <div className='inputtext'>
      <label htmlFor='Glabel'>Guardian Details</label>
      <input name='Glabel' id='Glabel' placeholder='Enter Label'></input>
      <input name='Gname' id='Gname' placeholder='Enter Guardian Name'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='Email'>Email</label>
      <input name='Email' id='Email' placeholder='Enter Email'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='EcontactNo'>Emergancy Contact Number</label>
      <input name='EcontactNo' id='EcontactNo' placeholder='Enter Emergancy No'></input>
      </div>

    </div>

    <div>
      <h3><u>Address Details</u></h3>
      
      <div className='inputtext'>
      <label htmlFor='Address'>Address</label>
      <input name='Address' id='Address' placeholder='Enter Address'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='State'>State</label>
      <input name='State' id='State' placeholder='Enter State'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='City'>City</label>
      <input name='City' id='City' placeholder='Enter City/Town/Village'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='Country'>Country</label>
      <input name='Country' id='Country' placeholder='Enter Country'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='Pincode'>Pincode</label>
      <input name='Pincode' id='Pincode' placeholder='Enter Pincode'></input>
      </div>

    </div>

    <div>
      <h3><u>Other Details</u></h3>
      
      <div className='inputtext'>
      <label htmlFor='Occuption'>Occuption</label>
      <input name='Occuption' id='Occuption' placeholder='Enter Occuption'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='Religion'>Religion</label>
      <input name='Religion' id='Religion' placeholder='Enter Religion'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='Maritalstatus'>Marital Status</label>
      <input name='Maritalstatus' id='Maritalstatus' placeholder='Enter Marital Status'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='BloodGroup'>Blood Group</label>
      <input name='BloodGroup' id='BloodGroup' placeholder='Enter Blood Group'></input>
      </div>

      <div className='inputtext'>
      <label htmlFor='Nationality'>Nationality</label>
      <input name='Nationality' id='Nationality' placeholder='Enter Nationality'></input>
      </div>

    </div>

    <div>
      <button type='reset'>Cancel</button>
      <button type='submit'>Submit</button>
    </div>

    </>
  )
}

export default Home
