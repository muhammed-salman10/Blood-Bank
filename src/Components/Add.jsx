import React, {  useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addImage from '../assets/uploadImage1.jpg';
import { addProjectAPI } from '../Services/allAPI';
import { addResponseContext } from '../Context/ContextShare';




function Add() {

 const{addResponse,setAddResponse}= useContext(addResponseContext)
  
  const[projectData,setProjectData]=useState({
    name:"",address:"",district:"",age:"",group:"", phone:"",projectImage:""
  })

  const[imageFileStatus,setImageFileStstus]=useState(false)
  const[preview,setPreview]=useState(addImage)




  console.log(projectData);


  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>{
    setShow(false)
    setProjectData({   name:"",address:"",district:"",age:"",group:"", phone:"",projectImage:""})
    setPreview(addImage)
  }

useEffect(()=>{
      if(projectData.projectImage?.type=="image/png"||projectData.projectImage?.type=="image/jpg"||projectData.projectImage?.type=="image/jpeg")
      {
        console.log("Generate image Url");
        setImageFileStstus(true)
        setPreview( URL.createObjectURL(projectData.projectImage));
      }
      else{
        setPreview("")
        setImageFileStstus(false)
              //  console.log("upload only the following file types (jpg,jpeg,png)");
      } 
},[projectData.projectImage])

const handleProjectUpload= async()=>{
  const{ name,address,district,age,group, phone,projectImage}= projectData
  if( !name|| !address|| !district|| !age|| !group|| !phone|| !projectImage)
  {
    toast.error("Please Fill The Form Completely !!! ")

  }
  else{
    const reqBody=new FormData()
    reqBody.append("name", name)
    reqBody.append("address",address)
    reqBody.append("district", district)
    reqBody.append("age", age)
    reqBody.append("group", group)
    reqBody.append("phone", phone)
    reqBody.append("projectImage", projectImage)


    const token=sessionStorage.getItem("token")
    if(token)
    {
      const reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      console.log("Proceed to API call");
    try{ 
       const result=await addProjectAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status===200)
      {
        // toast.success(`New Doner "${result.data.name}" has added successfully !!!`);
        // share response to context
        setAddResponse(result.data)
          handleClose()
      }
      else{
        toast.warning(result.response.data)
      }
      }
    catch(err) 
    {
      console.log(err);
    }
   }


  }
}

  return (
    <>

<button onClick={handleShow} style={{textDecoration:'none'}} className='btn btn-link text-warning d-flex align-items-center'><i style={{height:'34px'}} className="fa-solid fa-plus fa-2x me-2"></i>Add Doners</button>


<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Doners Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className='d-flex align-items-center flex-column justify-content-center'>
            <input type="file" style={{display:'none'}} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} />
          <img  style={{height:'250px'}} className='img-fluid mt-5 align-items-center' src={preview?preview:addImage} alt="" />
          </label> 
{  !imageFileStatus&&<div className='text-danger text-center'>*Upload only the following types (jpg,jpeg,png)*</div>
}  
<Form className='mt-3'>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1"><br />
<Form.Control className='' type="text" placeholder="Name" value={preview.name} onChange={e=>setProjectData({...projectData,name:e.target.value})}  /> <br />

<Form.Control type="email " placeholder="address" value={preview.address} onChange={e=>setProjectData({...projectData,address:e.target.value})}  /> <br />

<Form.Select aria-label="Default select example" value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})} >
<option > Select District</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Thiruvanathapuram</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Kollam</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Pathanamthitta</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}> Alappuzha</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Kottayam</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Idukki</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}> Ernakulam</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Thrissur</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Palakkad</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}> Malappuram</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Kozhikode</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}> Wayanad</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Kannur</option>
<option value={preview.district} onChange={e=>setProjectData({...projectData,district:e.target.value})}>Kasaragod</option>
</Form.Select> <br />

<Form.Control className='' type="number" placeholder="Age" value={preview.age} onChange={e=>setProjectData({...projectData,age:e.target.value})}  /> <br />

{/* <Form.Check value={preview.donatePre} onChange={e=>setProjectData({...projectData,address:e.target.value})}
      type="radio"
      label="Male"
      name="radioGroup"
      id="option1"
  />
  <Form.Check 
      type="radio" 
      label="Female" 
      name="radioGroup"
      id="option1"
      
  /> 
   <br /> */}

<Form.Select aria-label="Default select example" value={preview.group} onChange={e=>setProjectData({...projectData,group:e.target.value})}  >
<option > Blood Group</option>
<option value={preview.group} onChange={e=>setProjectData({...projectData,group:e.target.value})} >A+</option>
<option value={preview.group} onChange={e=>setProjectData({...projectData,group:e.target.value})} >O+</option>
<option value={preview.group} onChange={e=>setProjectData({...projectData,group:e.target.value})}>B+</option>
<option value={preview.group} onChange={e=>setProjectData({...projectData,group:e.target.value})}> AB+</option>
<option value={preview.group} onChange={e=>setProjectData({...projectData,group:e.target.value})}>A-</option>
<option value={preview.group} onChange={e=>setProjectData({...projectData,group:e.target.value})}>O-</option>
<option value={preview.group} onChange={e=>setProjectData({...projectData,group:e.target.value})}>B-</option>
<option value={preview.group} onChange={e=>setProjectData({...projectData,group:e.target.value})}>AB-</option>
</Form.Select> <br />

<Form.Control className='' type="text" placeholder="Phone Number" value={preview.phone} onChange={e=>setProjectData({...projectData,phone:e.target.value})}   /> <br />


{/* <h6 > Have you donated previously? </h6>
<Form.Check value={preview.donatePre} onChange={e=>setProjectData({...projectData,address:e.target.value})}
      type="radio"  
      label="yes "
      name="radioGroup"
      id="option1"
  />
  <Form.Check value={preview.donatePre} onChange={e=>setProjectData({...projectData,address:e.target.value})}
      type="radio"
      label="No"
      name="radioGroup"
      id="option1"
  /> <br />
  <hr /> */}

{/* <h6> In the last six months have you had any of the following?</h6>
<Form.Check value={preview.address} onChange={e=>setProjectData({...projectData,address:e.target.value})} 
      type="checkbox"
      label="Tattooing"
      name="radioGroup"
      id="option1"
  />
  <Form.Check
      type="checkbox"
      label="Ear Piercing"
      name="radioGroup"
      id="option1"
  /> 
   <Form.Check
      type="checkbox"
      label="Dental Extraction"
      name="radioGroup"
      id="option1"
  /> 
  <Form.Check
      type="checkbox"
      label="No"
      name="radioGroup"
      id="option1"
  /> <br />


<hr /> */}

{/* <h6>Do you suffer from or have suffered from any of the following diseases?</h6>
<Row>
<Col>
<Form.Check  value={preview.address} onChange={e=>setProjectData({...projectData,address:e.target.value})} 
      type="checkbox"
      label="Heart Disease"
      name="radioGroup"
      id="option1"
  />
  <Form.Check
      type="checkbox"
      label="Diabetes"
      name="radioGroup"
      id="option1"
  /> 
   <Form.Check
      type="checkbox"
      label="Sexually Transmitted "
      name="radioGroup"
      id="option1"
  /> 

  <Form.Check
      type="checkbox"
      label="Lung Diseases"
      name="radioGroup"
      id="option1"
  /> 
  <Form.Check
      type="checkbox"
      label="No"
      name="radioGroup"
      id="option1"
  />                 
  </Col>

  <Col>
    
  <Form.Check 
      type="checkbox"
      label="Cancer/Malignant"
      name="radioGroup"
      id="option1"
  />
  <Form.Check
      type="checkbox"
      label="Kidney Diseases"
      name="radioGroup"
      id="option1"
  /> 
   <Form.Check
      type="checkbox"
      label="Abnormal Bleeding"
      name="radioGroup"
      id="option1"
  /> 
   <Form.Check
      type="checkbox"
      label="Malaria (6 months)"
      name="radioGroup"
      id="option1"
  /> 


  </Col>

</Row>
<br />

<hr /> */}

{/* <h6>Are you taking or have you taken any of these in the past 72 hours?</h6>
<Row>
<Col value={preview.address} onChange={e=>setProjectData({...projectData,address:e.target.value})}>
<Form.Check  
      type="checkbox"
      label="Antibiotics"
      name="radioGroup"
      id="option1"
  />
  <Form.Check
      type="checkbox"
      label="Aspirin"
      name="radioGroup"
      id="option1"
  /> 
   <Form.Check
      type="checkbox"
      label="Alcohol"
      name="radioGroup"
      id="option1"
  /> 

            
  </Col>

  <Col>
    
  <Form.Check 
      type="checkbox"
      label="Steroid"
      name="radioGroup"
      id="option1"
  />
  <Form.Check
      type="checkbox"
      label="Vaccinations"
      name="radioGroup"
      id="option1"
  /> 
   <Form.Check
      type="checkbox"
      label="No"
      name="radioGroup"
      id="option1"
  /> 
   

  </Col>               

</Row>
 */}
</Form.Group>
</Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleProjectUpload} variant="success">Save</Button>
        </Modal.Footer>
      </Modal>









<ToastContainer autoClose={3000} theme='colored' />
    </>
  )
}

export default Add