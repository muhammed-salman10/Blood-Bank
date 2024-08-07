import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';
import addImage from '../assets/blood-24.png';
import Form from 'react-bootstrap/Form';
import SERVER_URL from '../Services/serverUrl';





function DonersList({project}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

<Card className='shadow mb-5 btn' style={{ width: '22rem', height:'22rem' }} onClick={handleShow}>
      <Card.Img style={{height:'17rem'}} variant="top"  src={`${SERVER_URL}/uploads/${project?.projectImage}`} />
      <Card.Body>
        <Card.Title>{project?.name}</Card.Title>       
      </Card.Body>
    </Card>

      <Modal size='md' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

        {/* <Row className='align-items-center'> */}
            {/* <Col sm={12} md={6}> */}
            {/* </Col> */}

            {/* <Col sm={12} md={6}> */}

              <h2 className="fw-bolder text-danger text-center">Blood Bank</h2>
              <img style={{height:'200px',paddingLeft:'110px'}} className='img-fluid mt-5 align-items-center'  src={`${SERVER_URL}/uploads/${project?.projectImage}`} alt=" ProjectImage" />


              <Form className='mt-3 '>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"><br />
        <Form.Control className='fw-bolder' type="text" placeholder={project?.name} /> <br />
        <Form.Control className='fw-bolder' type="text " placeholder={project?. address} /> <br />
        <Form.Select className='fw-bolder' aria-label="Default select example">
      <option > {project?.district}</option>
      <option value="1">Thiruvanathapuram</option>
      <option value="2">Kollam</option>
      <option value="3">Pathanamthitta</option>
      <option value="4"> Alappuzha</option>
      <option value="5">Kottayam</option>
      <option value="6">Idukki</option>
      <option value="7"> Ernakulam</option>
      <option value="8">Thrissur</option>
      <option value="9">Palakkad</option>
      <option value="10"> Malappuram</option>
      <option value="11">Kozhikode</option>
      <option value="12"> Wayanad</option>
      <option value="13">Kannur</option>
      <option value="14">Kasaragod</option>
    </Form.Select> <br />
    <Form.Control className='fw-bolder' type="number" placeholder={project?.age} /> <br />
    
    {/* <Form.Check 
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
                /> <br /> */}

<Form.Select className='fw-bolder' aria-label="Default select example">
      <option >{project?. group}</option>
      <option value="1">A+</option>
      <option value="2">O+</option>
      <option value="3">B+</option>
      <option value="4"> AB+</option>
      <option value="5">A-</option>
      <option value="6">O-</option>
      <option value="7">B-</option>
      <option value="8">AB-</option>

    </Form.Select> <br />

    <Form.Control className='fw-bolder' type="number" placeholder={project?. phone} /> <br />


    {/* <h6> Have you donated previously?</h6>
    <Form.Check 
                    type="radio"
                    label="yes"
                    name="radioGroup"
                    id="option1"
                />
                <Form.Check
                    type="radio"
                    label="No"
                    name="radioGroup"
                    id="option1"
                /> <br />
                <hr /> */}

{/* <h6> In the last six months have you had any of the following?</h6>
    <Form.Check 
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


<hr />
 */}
{/* <h6>Do you suffer from or have suffered from any of the following diseases?</h6>
<Row>
  <Col>
    <Form.Check 
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
 */}

                {/* </Col>

</Row> */}
{/* <br />

<hr />

<h6>Are you taking or have you taken any of these in the past 72 hours?</h6>
<Row>
  <Col>
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

</Row> */}
   
      </Form.Group>
    </Form>




            {/* </Col> */}
          {/* </Row> */}


        </Modal.Body>
        </Modal>
    </>
  )
}

export default DonersList