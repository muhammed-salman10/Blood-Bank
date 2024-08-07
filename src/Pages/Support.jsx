import React from 'react'
import Header from '../Components/Header'
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import addImage from '../assets/blood-15.jpg'
import addImage1 from '../assets/blood-13.webp'
import addImage2 from '../assets/blood-10.webp'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Support() {
  return (
    <>

<Header/>


<h1  style={{paddingTop:'30px'}}  className='text-center mt-5 fw-bolder' >Support Us</h1>

<Row style={{paddingTop:'30px'}}  className='row-cols-1 row-cols-md-3 g-4  m-5 '>
    <Col>
    <Card  style={{ width: '18rem',height:'27rem' }} >
          <Card.Img variant="top" src={addImage} style={{height:'200px'}} />
          <Card.Body>
            
                            <Card.Title className='fs-4 fw-bolder text-center '>Donate Funds</Card.Title>
                            <Card.Text className='mt-4 fw-normal'>
                            Your financial gift can help a thousand children who struggle from illnesses. Your gift can provide the necessary medicine, treatment, and other essentials.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
    
        <Col>
        <Card style={{ width: '18rem',height:'27rem'}}>
          <Card.Img variant="top" src={addImage1} style={{height:'200px'}} />
          <Card.Body>
            
            <Card.Title  className='fs-4 fw-bolder text-center '>Become a Volunteer</Card.Title>
            <Card.Text className='mt-4 fw-normal'>
            Volunteers are playing a vital role in helping our center save lives. We are always looking for your help. Join our team today


            </Card.Text>
<Link to={'/login'}>
              <Button  variant="primary">Donate</Button>
  
</Link>          </Card.Body>
        </Card>
        </Col>

    
        <Col>

        <Card style={{ width: '18rem', height:'27rem' }}>
          <Card.Img variant="top" src={addImage2} style={{height:'200px'}} />
          <Card.Body>
           
            <Card.Title  className='fs-4 fw-bolder text-center '>Host a Blood Drive</Card.Title>
            <Card.Text className='mt-4 fw-normal'>
            Inspiring others to give blood by hosting a blood drive is a rewarding way to benefit your community.
            </Card.Text>
<Link to={'/login'}>
              <Button className='mt-4' variant="primary">Donate</Button>
  
</Link>          </Card.Body>
        </Card>
        </Col>







    
</Row>
    
    </>
  )
}

export default Support