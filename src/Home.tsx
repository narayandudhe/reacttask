import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import React,{ChangeEvent, useContext,useState} from 'react';

const d=new Date();
d.setFullYear(d.getFullYear()-1);
const initialValues={
  Name:'',
  Address:'',
  Mobile:0,
  Dob:'',
  Sex:'',
  idtype:'',
  Govtid:'',
  Glabel:'',
  Gname:'',
  Email:'',
  EcontactNo:0,
  State:'',
  City:'',
  Country:'India',
  Pincode:0,
  Occuption:'',
  Religion:'',
  Maritalstatus:'',
  BloodGroup:'',
  Nationality:'India',
 } 

 const validationSchema=Yup.object({
   Name:Yup.string().required("Please Enter Employee Name!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
   Address:Yup.string().required("Please Enter Employee Address!"),
   Maritalstatus:Yup.string().required("Please Enter Marital status!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
   Email:Yup.string().email("Please Enter valid Email Id!").required("Please Enter Email Id!"),
   Mobile:Yup.number().required("Please Enter Mobile No!").positive("Please Enter Valid Mobile No!").test('mobilecheck', 'Please Enter 10 Digit Mobile No!',function(){
    var a=document.getElementById("Mobile") as HTMLInputElement
    var va=a.value.toString();
    if(va.length>=10 && va.length <=10)
    {
      return true;
    }
    return false;
  }),
   Pincode:Yup.number().required("Please Enter Pincode").positive("Please Enter Valid Pincode!").test('pincodecheck', 'Please Enter 6 digit Pincode!',function(){
     var a=document.getElementById("Pincode") as HTMLInputElement
     var va=a.value.toString();
     if(va.length>=6 && va.length <=6)
     {
       return true;
     }
     return false;
   }),
   Dob:Yup.string().required("Please Enter Valid Date or Age!").test('dobcheck', 'Please Enter Valid Date DD/MM/YYYY format or Age!',function(){
    var a=document.getElementById("Dob") as HTMLInputElement
    var va=a.value.toString();
    if(va.length>=1 && va.length <=2)
    {
      if(Number(va))
      {
        return true;
      }
      return false;
      
    }
    else if(va.length>=3 && va.length<=10)
    {
      var b=va.split("/");
      if(Number(b[0]) && Number(b[1]) && Number(b[2]))
      {
        var ch=new Date(b[2]+"/"+b[1]+"/"+b[0]);
        if (isNaN(ch.getTime())) { 
          return false;
      }
      else {
          return true;
      }
      }
      
    }
    return false;
  }),
   Sex:Yup.string().required("Please Choose sex!"),
   idtype:Yup.string().required("Please Choose Id Type!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
   Govtid:Yup.string().required("Please Enter Govt Id"),
   Glabel:Yup.string().required("Please Choose Gaurdian Label!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
   Gname:Yup.string().required("Please Enter Gaurdian Name!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
   EcontactNo:Yup.number().required("Please Enter Emergency Contact No!").positive("Please Enter Valid Emergency Contact No!").test('mobilecheck', 'Please Enter 10 Digit Mobile No!',function(){
     var a=document.getElementById("EcontactNo") as HTMLInputElement
     var va=a.value.toString();
     if(va.length>=10 && va.length <=10)
     {
       return true;
     }
     return false;
   }),
   State:Yup.string().required("Please Enter State!"),
   City:Yup.string().required("Please Enter City!"),
   Country:Yup.string().required("Please Enter Country!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
   Occuption:Yup.string().required("Please Enter Occuption!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
   Religion:Yup.string().required("Please Enter Religion!"),
   BloodGroup:Yup.string().required("Please Choose BloodGroup!"),
   Nationality:Yup.string().required("Please Enter Nationality!").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),

})

interface dataprops{
  Name:string,
  Address:string,
  Mobile:number,
  Dob:string,
  Sex:string,
  idtype:string,
  Govtid:string,
  Glabel:string,
  Gname:string,
  Email:string,
  EcontactNo:number,
  State:string,
  City:string,
  Country:string,
  Pincode:number,
  Occuption:string,
  Religion:string,
  Maritalstatus:string,
  BloodGroup:string,
  Nationality:string,
 } 


function Home() {
const [profiledata, setprofiledata] = useState<dataprops[]>([],);

const handleRemoveSpecificRow = (index:number) => {
  // const tempRows = [...profiledata,profiledata]; // to avoid  direct state mutation
  // tempRows.splice(index, 1);
  // setprofiledata(tempRows);


};

  return (
    <>
    <div>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={ (values,{resetForm})=>{
     
     setprofiledata([...profiledata,values]);
     resetForm({});
    }}
    enableReinitialize={true}
    >
      <Form>
    <div>
      <h3><u>Personal Details</u></h3>
      <div className="flexdispaly">


      <div className='inputtext firstdiv'>
      <label htmlFor='Name'>Name<span className='redstar'>*</span></label>
      <Field name='Name' type='text' className='sizeinc' id='Name' placeholder='Enter Name'/>
      <ErrorMessage component="span" className='errordisplay' name='Name'></ErrorMessage>
      </div>

      <div className='inputtext seconddiv'>
      <label htmlFor='Dob'>Date of Birth or Age<span className='redstar'>*</span></label>
      <Field name='Dob' id='Dob' type='text'  placeholder='DD/MM/YYYY or Age in Years'/>
      <ErrorMessage component="span" className='errordisplay' name='Dob'></ErrorMessage>
      </div>

      <div className='inputtext seconddiv'>
      <label htmlFor='Sex'>Sex<span className='redstar'>*</span></label>
      <Field name="Sex" id='Sex' placeholder='Choose Sex' component="select">
         <option value="Male">Male</option>
         <option value="Female">Female</option>
      </Field>
      <ErrorMessage component="span" className='errordisplay' name='Sex'></ErrorMessage>
      </div>

      
      <div className='inputtext firstdiv'>
      <label htmlFor='Mobile'>Mobile</label>
      <Field name='Mobile' type='number' id='Mobile' placeholder='Enter Mobile'/>
      <ErrorMessage component="span" className='errordisplay' name='Mobile'></ErrorMessage>
      </div>

      <div className='inputtext seconddiv gtype'>
      <label htmlFor='idtype'>Govt Issued ID</label>
      <Field name="idtype" id='idtype' placeholder='Choose idtype' component="select">
         <option value="Aadhaar Card">Aadhaar Card</option>
         <option value="Eci Card">Eci Card</option>
      </Field>
      <ErrorMessage component="span" className='errordisplay' name='idtype'></ErrorMessage>
      <Field name='Govtid' className='sizeinc' type='text' id='Govtid' placeholder='Enter Govt ID'/>
      <ErrorMessage component="span" className='errordisplay' name='Govtid'></ErrorMessage>
      </div>

      </div>
    </div>

    <div>
      <h3><u>Contact Details</u></h3>
      <div className='flexdispaly'>
      <div className='inputtext firstdiv'>
      <label htmlFor='Glabel'>Guardian Details</label>
      <Field name="Glabel" id='Glabel' placeholder='Choose Glabel' component="select">
         <option value="MR.">MR.</option>
         <option value="MRs">MRs.</option>
         <option value="Dr.">Dr.</option>
      </Field>
      <ErrorMessage component="span" className='errordisplay' name='Glabel'></ErrorMessage>
      <Field name='Gname' id='Gname' type='text' placeholder='Enter Guardian Name'/>
      <ErrorMessage component="span" className='errordisplay' name='Gname'></ErrorMessage>
      </div>

      <div className='inputtext econt'>
      <label htmlFor='Email'>Email</label>
      <Field name='Email' id='Email' type='text' placeholder='Enter Email'/>
      <ErrorMessage component="span" className='errordisplay' name='Email'></ErrorMessage>
      </div>

      <div className='inputtext '>
      <label htmlFor='EcontactNo'>Emergancy Contact Number</label>
      <Field name='EcontactNo' type='number' id='EcontactNo' placeholder='Enter Emergancy No'/>
      <ErrorMessage component="span" className='errordisplay' name='EcontactNo'></ErrorMessage>
      </div>
      </div>
    </div>

    <div>
      <h3><u>Address Details</u></h3>
      <div className='flexdispaly'>
      <div className='inputtext firstdiv'>
      <label htmlFor='Address'>Address</label>
      <Field name='Address' type='text' className='sizeinc' id='Address' placeholder='Enter Address'/>
      <ErrorMessage component="span" className='errordisplay' name='Address'></ErrorMessage>
      </div>

      <div className='inputtext sdiv'>
      <label htmlFor='State'>State</label>
      <Field className='scity' name="State" id='State' placeholder='Choose State' component="select">
         <option value="Maharashtra">Maharashtra</option>
         <option value="Bihar">Bihar</option>
         <option value="Gujrat">Gujrat</option>
      </Field>
      <ErrorMessage component="span" className='errordisplay' name='State'></ErrorMessage>
      </div>

      <div className='inputtext seconddiv '>
      <label htmlFor='City'>City</label>
      <Field className='scity' name="City" id='City' placeholder='Choose City/Town/Village' component="select">
         <option value="Sultanwadi">Sultanwadi</option>
         <option value="Aurangabad">Aurangabad</option>
         <option value="Jaipur">Jaipur</option>
      </Field>
      <ErrorMessage component="span" className='errordisplay' name='City'></ErrorMessage>
      </div>

      <div className='inputtext firstdiv'>
      <label htmlFor='Country'>Country</label>
      <Field name='Country' type='text' id='Country' placeholder='Enter Country'/>
      <ErrorMessage component="span" className='errordisplay' name='Country'></ErrorMessage>
      </div>

      <div className='inputtext pdiv'>
      <label htmlFor='Pincode'>Pincode</label>
      <Field name='Pincode' id='Pincode' type='text' placeholder='Enter Pincode'/>
      <ErrorMessage component="span" className='errordisplay' name='Pincode'></ErrorMessage>
      </div>
      </div>
    </div>

    <div>
      <h3><u>Other Details</u></h3>
      <div className='flexdispaly'>
      <div className='inputtext firstdiv'>
      <label htmlFor='Occuption'>Occuption</label>
      <Field className='odiv' name='Occuption' type='text' id='Occuption' placeholder='Enter Occuption'/>
      <ErrorMessage component="span" className='errordisplay' name='Occuption'></ErrorMessage>
      </div>

      <div className='inputtext'>
      <label htmlFor='Religion'>Religion</label>
      <Field className='odiv' name="Religion" id='Religion' placeholder='Choose Religion' component="select">
         <option value="Hindu">Hindu</option>
         <option value="Muslim">Muslim</option>
         <option value="Jain">Jain</option>
      </Field>
      <ErrorMessage component="span" className='errordisplay' name='Religion'></ErrorMessage>
      </div>

      <div className='inputtext'>
      <label htmlFor='Maritalstatus'>Marital Status</label>
      <Field className='odiv' name="Maritalstatus" id='Maritalstatus' placeholder='Choose Marital Status' component="select">
         <option value="UnMarried">UnMarried</option>
         <option value="Married">Married</option>
      </Field>
      <ErrorMessage component="span" className='errordisplay' name='Maritalstatus'></ErrorMessage>
      </div>

      <div className='inputtext'>
      <label htmlFor='BloodGroup'>Blood Group</label>
      <Field className='bgdiv' name="BloodGroup" id='BloodGroup' placeholder='Choose Blood Group' component="select">
         <option value="A+">A+</option>
         <option value="B+">B+</option>
         <option value="O+">O+</option>
         <option value="A-">A-</option>
         <option value="B-">B-</option>
         <option value="O-">O-</option>
         </Field>
      <ErrorMessage component="span" className='errordisplay' name='BloodGroup'></ErrorMessage>
      </div>

      <div className='inputtext firstdiv'>
      <label htmlFor='Nationality'>Nationality</label>
      <Field className='odiv' name='Nationality' type='text' id='Nationality' placeholder='Enter Nationality'/>
      <ErrorMessage component="span" className='errordisplay' name='Nationality'></ErrorMessage>
      </div>
      </div>
    </div>

    <div className='buttondiv'>
    <button type='reset'  className='canbutton'>Cancel</button>
    <button className='subbutton' type='submit'>Submit</button>
   
    </div>
    </Form>
    </Formik>
    </div>
    <div   className='table_content list'>
<table className='table'>
  <caption>List Of Profile</caption>
 <thead>
  <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Mobile</th>
      <th>DOb</th>
      <th>Sex</th>
      <th>Id Type</th>
      <th>Govt. ID</th>
      <th>Guardian Name</th>
      <th>Email Id</th>
      <th>EcontactNo</th>
      <th>State</th>
      <th>City</th>
      <th>Country</th>
      <th>Pincode</th>
      <th>Occuption</th>
      <th>Religion</th>
      <th>Marital status</th>
      <th>BloodGroup</th>
      <th>Nationality</th>
  </tr>
  </thead>
  <tbody>
  {
 
profiledata.map((data,index)=>{
      return(
       
          <tr key={index} id={'tr'+index}>
              <td><span>{data.Name}</span></td>
              <td><p>{data.Address}</p></td>
              <td><p>{data.Mobile}</p></td>
              <td><p>{data.Dob}</p></td>
              <td><p>{data.Sex}</p></td>
              <td><p>{data.idtype}</p></td>
              <td><p>{data.Govtid}</p></td>
              <td><p>{data.Glabel+" "+data.Gname}</p></td>
              <td><p>{data.Email}</p></td>
              <td><p>{data.EcontactNo}</p></td>
              <td><p>{data.State}</p></td>
              <td><p>{data.City}</p></td>
              <td><p>{data.Country}</p></td>
              <td><p>{data.Pincode}</p></td>
              <td><p>{data.Occuption}</p></td>
              <td><p>{data.Religion}</p></td>
              <td><p>{data.Maritalstatus}</p></td>
              <td><p>{data.BloodGroup}</p></td>
              <td><p>{data.Nationality}</p></td>=
              
          </tr>
         
      )
      
  })
 
  }
    </tbody>

</table>
</div>
    </>
  )
}

export default Home
