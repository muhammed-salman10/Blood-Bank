import React from 'react'
import Header from '../Components/Header'
import addImage from '../assets/blood-16.webp'
import addImage1 from '../assets/blood-17.jpg'

import { Col,Row } from 'react-bootstrap'




function About() {
  return (
    <>
       <Header/>
        
                  
       <div style={{height:'110vh'}} className='w-100 d-flex justify-content-center align-items-center rounded   '>
        <div className='container mb-5'>
            <div className='  row align-items-center  'style={{display:'flex',flexWrap:'wrap-reverse'}}>
                <div className='p2 col-lg-6 col-sm-6'>
                  <h1 className='ms-5  text-danger mb-4'>Ways To Help</h1>
                    <p className='mb-5  ms-5'  style={{textAlign:'justify',fontSize:'20px',fontWeight:'normal'}}>Blood Center is public donation center with blood donation members in the changing health care system. 
                    Founded in 1978, Blood Center is one of the nation’s oldest and largest nonprofit transfusion medicine organizations.
                     We provide a blood and volunteer services across the US. With our national footprint, deep community roots and specialized services, we are the thread that connects people and resources together to fuel progress in transfusion medicine. </p>
               
                </div>
                <div className='col-lg-1'>
                </div>
                <div className='col-lg-4 '>
                    <img className='img3 img-fluid me-5 mb-5' style={{height:'350px',width:'500px'}} src={addImage} alt="student" />
                </div>



            </div>

        </div>
        </div> 






    <div   className='container mb-5'>
     
            <div className=' row align-items-center '>
            <div className='col-lg-1'></div>
                <div className=' col-lg-4  '>
                    <img className='img4 img-fluid me-5 mt-5  ' style={{height:'400px',width:'500px',marginBottom:'100px'}} src={addImage1} alt="student" />
                </div>
                <div className=' col-lg-6'>
                   <Row className=''>
                      <Col>
                      <h1 className=' p3 ms-5 text-danger'>Blood Products</h1><br />
                      <p className='mb-5  ms-5  ' style={{textAlign:'justify',fontSize:'15px',}}>
                      Red Blood Cells <br /> <br />
                      Plasma Products <br /> <br />
                      Platelet Products <br /><br />
                      Blood Products for Research <br /><br />
                      Whole Blood

                      </p>
                      </Col>

                      <Col>
                      <h1 className=' p3 ms-5 text-danger'>Biomedical Services</h1><br />

                      <p className='mb-5  ms-5'  style={{textAlign:'justify',fontSize:'15px',fontWeight:'normal'}}>
                      Blood and Diagnostic testing <br /><br />
                      Blood group serology <br /><br />
                      HLA testing  <br /><br />
                      Immunohematology Reference lab testing  <br /><br />
                      Molecular testing <br /><br />
                      Neutrophil testing  <br /><br />
                      </p>
                      </Col>
                      </Row>
                      
               
                </div>
                

            </div>


        </div>








   





        </>
  )
}

export default About