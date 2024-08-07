import React, { useContext, useState } from 'react'
import addImage1 from '../assets/blood-24.png'
import {  Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import Spinner from 'react-bootstrap/Spinner';
import { TokenAuthContext } from '../Context/TokenAuth';



function Auth({insideRegister}) {

  const {isAuthorized,setIsAuthorized}=useContext(TokenAuthContext)

  const[loginStatus,setLoginStatus]=useState(false)
  const navigate=useNavigate()

  const [userInputData,setUserInputData]=useState({
    username:"",email:"",password:""
  })

  const handleRegister= async(e)=>{
    e.preventDefault()

    
  console.log(userInputData);
  const {username,email,password}=userInputData
  if(!username || !email || !password)
  {
     toast.error("Please Fill The Form Completely !!! ")
     
  }
else{
  // toast.success("Proceed To Register Api")
try{
  const result=await registerAPI(userInputData)
  console.log(result);
if(result.status===200){
 toast.success(`Welcome ${result.data.username}...Please Login To Check Our Site !!!`)
 setUserInputData({username:"",email:"",password:""})

 //navigate to Login
setTimeout(()=>{
  navigate("/login")
},2000)

}else{
   toast.warning(result.response.data)
}
} 
catch(err){
console.log(err);
} 
}
  }




  const handleLogin= async(e)=>{
    e.preventDefault()

    
  console.log(userInputData);
  const {email,password}=userInputData
  if( !email || !password)
  {
     toast.error("Please Fill The Form Completely !!! ")
     
  }
else{
try{
  const result=await loginAPI({email,password})
  console.log(result);
if(result.status===200){

  // store token,username
  sessionStorage.setItem("username",result.data.existingUser.username)
  sessionStorage.setItem("token",result.data.token)
  setLoginStatus(true)
  setIsAuthorized(true)
 setTimeout(()=>{
  setUserInputData({email:"",password:""})

 //navigate to landing page
 navigate('/')
setLoginStatus(false)
 },2000)

}else{
   toast.warning(result.response.data)
}
} 
catch(err){
console.log(err);
} 
}
  }




  return (
    <>
       {/* <Header/> */}
      
       <div style={{width:'100%',height:'100vh'}} className=' auth d-flex justify-content-center align-items-center'>
       <div className="">
           <Link className='back' to={'/'} style={{textDecoration:'none'}} ><i className='fa-solid fa-arrow-left'></i> Back To Home</Link>
           <div className="card shadow p-5 ">
            <div className="row align-item-center">
                 <div className='col-lg-6 '>
                  <img className='w-100' src={addImage1} alt="authentication" />
                 </div>
                 <div className='col-lg-6 text-center mt-5'>
                 <h1 style={{fontSize:'40px'}} className='fw-bolder text-light mt-2'>
                       <span className='ms-2 text-danger '> Blood Bank</span>
                    </h1><br />    
                    <h5 className='fw-bolder text-danger mt-2' > Sign { insideRegister?'Up':'In'} to your Account</h5>
                      


                     <Form className='mt-5'>
                      {
                        insideRegister&&
                        <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Name" value={userInputData.username} onChange={e=>setUserInputData({ ...userInputData,username:e.target.value})} />  
                        </Form.Group>
             
                      }
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                               <Form.Control type="email" placeholder="Enter email" value={userInputData.email} onChange={e=>setUserInputData({ ...userInputData,email:e.target.value})}  />  
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPswd">
                               <Form.Control type="password" placeholder="Enter Password" value={userInputData.password} onChange={e=>setUserInputData({ ...userInputData,password:e.target.value})}  />  
                    </Form.Group>
                     {
                      insideRegister?
                      <div>
                        <button onClick={handleRegister}  className='btn btn-warning mb-3'> Register</button>
                      <p>Already have Account? Click here to <Link to={'/login'} className='text-danger'>Login</Link></p>
                      </div>:

                      <div>
                      <button onClick={handleLogin} className='btn btn-warning mb-3 '>Login {loginStatus&& <Spinner animation="border" variant="light" />} </button>
                    <p>New User? Click here to <Link to={'/register'}  className='text-danger'>Register</Link></p>
                    </div>
              
                    } 
                    

          </Form> 

                 </div>
                
            </div>

           </div>
       </div>
    </div>

<ToastContainer autoClose={3000} theme='colored' />
      </>
  )
}

export default Auth