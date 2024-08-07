import React from 'react'
import { Link } from 'react-router-dom'
import addImage from '../assets/bloodImage.png'


function Footer() {
  return (



     <div  className=' bg-primary  mt-2'>
              
 <footer className="text-center text-lg-start bg-body-dark text-muted ">
   <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-dark ">
    <div className="me-5 d-none d-lg-block text-light">
       <span>Get connected with us on social networks:</span>
     </div>

    <div className='text-light'>
       <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
       </a>
       <a href="" className="me-4 text-reset">
         <i className="fab fa-twitter"></i>
       </a>
       <a href="" className="me-4 text-reset">
         <i className="fab fa-google"></i>
       </a>
       <a href="" className="me-4 text-reset">
         <i className="fab fa-instagram"></i>
       </a>
      <a href="" className="me-4 text-reset">
       <i className="fab fa-linkedin"></i>
       </a>
      <a href="" className="me-4 text-reset">
         <i className="fab fa-github"></i>
      </a>
     </div>
   </section>


   <section className=" text-light ">
     <div  className="container text-center text-md-start mt-4">
      <div className="row mt-3">
         <div style={{marginTop:'41px'}} className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 ">
           {/* <img style={{height:'100px'}} src={addImage} alt="" />  */}
          <span className='ms-3 '>BLOOD BANK</span>
           </h6>
           <p>
          Designed and built with all the love in the world by the daily cart special team Possimus recusandae consequatur ipsa veritatis expedita aspernatur.
           </p>
        </div>

        <div style={{marginTop:'41px'}} className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           <h6 className="text-uppercase fw-bold mb-4">
             Guides
          </h6>
          <p>
           <a style={{textDecoration:'none',color:'white'}} href="https://react.dev/">
            React
            </a>
         </p>
         <p>
          <a style={{textDecoration:'none',color:'white'}} href="https://react-bootstrap.netlify.app/">
            Bootstrap
            </a>
           </p>
           <p>
           <a style={{textDecoration:'none',color:'white'}} href="https://www.w3schools.com/react/react_router.asp">
             Routing
             </a>
           </p>
         </div>

         <div style={{marginTop:'41px'}}  className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
              links
           </h6>
          <p>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          </p>
          <p>
            <Link to={'/login'}style={{textDecoration:'none',color:'white'}}>Login</Link>
           </p>
           <p>
            <Link to={'/register'} style={{textDecoration:'none',color:'white'}}>Register</Link>
          </p>
         </div>

         <div style={{marginTop:'41px'}}  className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
           <  input type="email"  placeholder='Enter email' className='form-control' />
           <button type="button" className="btn btn-outline-warning  bg-dark mt-4">Send</button>
          
          
         </div>
        
       </div>
     </div>
   </section>
 </footer>



    </div>











  )
}


export default Footer