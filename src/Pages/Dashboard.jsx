import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import AddDoners from '../Components/AddDoners'
import addImage from '../assets/blood-16.webp'



function Dashboard() {
  const [username,setUsername]=useState("")
  useEffect(()=>{

    if(sessionStorage.getItem("username"))
    {
        setUsername(sessionStorage.getItem("username"))
    }
    else{
      setUsername("")
    }
  },[])
  return (
    <>
    <Header insideDashboard/> 
     <div style={{marginTop:'100px'}} className='container-fluid text-center'>
      <h1>Welcome <span className='text-danger'>{username?.split(" ")[0]}</span></h1>
      <div className='d-flex align-items-center  
                        justify-content-center  ' >

        <div className=' col-lg-9'>
          
          <AddDoners/>
        </div>

      </div>
     </div>

       
      </>
  )
}

export default Dashboard