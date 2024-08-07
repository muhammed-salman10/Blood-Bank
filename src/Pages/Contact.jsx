import React from 'react'
import Header from '../Components/Header'
// import { Row,Col } from 'react-bootstrap'
import addImage1 from '../assets/blood-20.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




function Contact() {
  return (
    <div>
         <Header/>

         <div style={{width:'100%',height:'100vh', }} className='bg-img d-flex justify-content-center align-items-center   '>
       <div className="container w-75">
           <div className=""   >
            <div className="row align-item-center">

            <div  className='col-lg-6 text-center mt-5 '>
                 <h1 style={{fontSize:'40px',}} className='fw-bolder text-light '>
                       <span    className='  text-secondary me-5  '> Contact Us</span>
                    </h1>
                      
                    <Form className='ms-5 '>
                     <Form.Group className="mt-5 w-75" controlId="formGroupEmail">
                    
       <Form.Control type="text" placeholder=" Enter Name" />
      </Form.Group>
      <Form.Group className=" w-75 mt-4" controlId="formGroupPassword">
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className='mt-4 w-75' controlId="formGroupPassword">
        <Form.Control as="textarea" type="password" placeholder="Message" />
      </Form.Group>
    </Form>
    <Button style={{marginRight:'80px'}} className='mt-4' type="submit">Submit</Button>


                 </div>


                 <div className='col-lg-6'>
                  {/* <img className='w-100' src={addImage1} alt="authentication" /> */}
                 </div>




               
                
            </div>

           </div>
       </div>
    </div>
    
       

        
        </div>
  )
}

export default Contact