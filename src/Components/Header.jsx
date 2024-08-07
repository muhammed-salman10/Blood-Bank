import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TokenAuthContext } from '../Context/TokenAuth';


function Header({insideDashboard}) {
  const {isAuthorized,setIsAuthorized}=useContext(TokenAuthContext)

  const navigate= useNavigate()

  const handleLogout=()=>{
    sessionStorage.clear()
    setIsAuthorized(false)
    navigate('/')
  }
  return (
     <Navbar style={{position:'fixed',top:'0px',zIndex:5,width:'100%'}} expand="lg" className="bg-primary"> 
        <Container >
      <Navbar.Brand className='text-white' ><Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>BLOOD BANK</Link>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link><Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>Home</Link></Nav.Link>
          <Nav.Link><Link to={'/login'} style={{textDecoration:'none',color:'white'}} className='fw-bolder ms-3'>Donate Blood</Link></Nav.Link>
          <Nav.Link><Link to={'/services'} style={{textDecoration:'none',color:'white'}} className='fw-bolder ms-3'>Services</Link></Nav.Link>
          <Nav.Link><Link to={'/support'} style={{textDecoration:'none',color:'white'}} className='fw-bolder ms-3'>Support</Link></Nav.Link>
          <Nav.Link><Link to={'/about'} style={{textDecoration:'none',color:'white'}} className='fw-bolder ms-3'>About</Link></Nav.Link>
          <Nav.Link><Link to={'/login'} style={{textDecoration:'none',color:'white'}} className='fw-bolder ms-3'>Login</Link></Nav.Link>
          <Nav.Link><Link to={'/contact'} style={{textDecoration:'none',color:'white'}} className='fw-bolder ms-3'>Contact</Link></Nav.Link>
          {
        insideDashboard&&
        <div className="ms-auto">
          <button onClick={handleLogout} style={{textDecoration:'none',color:'white',paddingTop:9}}  className='btn btn-link ms-2 fw-bolder '>logout<i class="fa-solid fa-right-from-bracket  ms-2"></i>           </button>
        </div>
      }
          
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  
  )
}

export default Header

