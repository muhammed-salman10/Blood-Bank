import React from 'react'
import Header from '../Components/Header'
import addImage from '../assets/blood-3.jpg'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'




function Services() {
  return (
    <div>
                 <Header/>


                  <div style={{height:'110vh'}} className='w-100 d-flex justify-content-center align-items-center rounded'>
        <div className='container mb-5 '>
            <div className='row align-items-center ' style={{display:'flex',flexWrap:'wrap-reverse'}}>
                <div className='col-lg-6 '>
                   
                  <h1 className=' he ms-5  text-danger mb-4'>BLOOD PRODUCT</h1>
                    <p className='p txt mb-5  ms-5'  style={{textAlign:'justify',fontSize:'20px',fontWeight:'normal'}}>Blood Center is dedicated to providing the highest quality blood products and services.
                     Our staff is ready to serve you 24/7. Donec urna metus, mattis eget eros et, iaculis vestibulum ante.
                      In tortor nisi, consequat ut mi id, elementum sagittis nisl. Phasellus purus ex, dignissim quis vestibulum at,
                       pulvinar vel nisl. Pellentesque ligula lorem, hendrerit a aliquet in, ultricies vitae ipsum. Duis turpis augue, pretium sed leo eget, pulvinar gravida eros. Ut porttitor laoreet tincidunt. 
                       Mauris vitae nisl nec sem volutpat aliquet in vitae ipsum. </p>
                   
                     
                </div>
            

                {/* <div className='col-lg-1'></div> */}
                <div className='col-lg-4 '>
                    <img className='img1 img-fluid me-5 mb-5' style={{height:'350px',width:'500px',}} src={addImage} alt="student" />
                </div>



            </div>

        </div>
    </div> 



    {/* <div style={{marginBottom:'300px'}}  className='w-100 d-flex justify-content-center align-items-center rounded mb-5'>
        <div className='container mb-5'>
            <div className='row align-items-center '>
                <div className='col-lg-4'>
                   
                <img className='img-fluid me-5 mb-5' style={{height:'350px',width:'500px', marginBottom:'300px'}} src={addImage} alt="student" />

                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-6'>
                <h1 className='ms-5  text-danger mb-4'>BLOOD PRODUCT</h1>
                <p className='mb-5  ms-5'  style={{textAlign:'justify',fontSize:'20px',fontWeight:'normal'}}>Blood Center is dedicated to providing the highest quality blood products and services.
                     Our staff is ready to serve you 24/7. Donec urna metus, mattis eget eros et, iaculis vestibulum ante.
                      In tortor nisi, consequat ut mi id, elementum sagittis nisl. Phasellus purus ex, dignissim quis vestibulum at,
                       pulvinar vel nisl. Pellentesque ligula lorem, hendrerit a aliquet in, ultricies vitae ipsum. Duis turpis augue, pretium sed leo eget, pulvinar gravida eros. Ut porttitor laoreet tincidunt. 
                       Mauris vitae nisl nec sem volutpat aliquet in vitae ipsum. </p>


                </div>



            </div>

        </div>
    </div>  */}










    


        </div>
  )
}

export default Services