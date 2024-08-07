import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Carousel from 'react-bootstrap/Carousel';
import addImage from '../assets/blood-11.webp'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import addImage1 from '../assets/blood-2.webp'
import DonersList from '../Components/DonersList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from '../Services/allAPI';





function Home() {
  const [allProjects,setAllProjects]=useState([])
  const [loginStatus,setLoginStatus]=useState(false)
  const navigate=useNavigate()

     const getHomeProject=async()=>{
      try{
        const result=await getHomeProjectAPI()
       if(result.status===200)
       {
        setAllProjects(result.data)
       }
      }
      catch(err)
      {
        console.log(err);
      }
       
     }

     console.log(allProjects);

  useEffect(()=>{
    getHomeProject()
    if(sessionStorage.getItem("token")){
      setLoginStatus(true)
    }
    else{
      setLoginStatus(false)

    }

  },[])



  const handleNavigate=()=>{
    if(loginStatus===true)
    {
    navigate('/Doners')
    }
    else{
           toast.warning(" Please Login To Get Full Access !!! ")
    }
  } 

  return (
    <>
      <Header/>




<Carousel className=' Carousel slide data-interval="500"' data-bs-theme="dark">
      <Carousel.Item className='carousel mt-2'>
        <img style={{height:'800px'}}
          className=" d-block w-100 img-fluid"
          src={addImage}
          alt="First slide"
        />
        <Carousel.Caption className='caption'>
          <h1  className=' hi text-white w-50 fw-bolder ' style={{marginBottom:'390px',fontSize:'50px'}}>SAVE A LIVE. <br />DONATE BLOOD  <h5>   {loginStatus?<Link className='btn btn-warning mt-3' to={'/dashboard'}>Manage Doners<i className='fa-solid fa-arrow-right ms-2'></i> </Link>:<Link className='btn btn-warning mt-3' to={'/login'}>starts to Login<i className='fa-solid fa-arrow-right ms-2'></i> </Link>}
</h5> </h1>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='mt-2'>
        <img  style={{height:'800px'}}
          className="d-block w-100 img-fluid"
          src={addImage1}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h1 className='text-white  w-50 fw-bolder' style={{marginBottom:'440px',fontSize:'40px'}}>Your Blood Donation Matter.Give Today !
</h1>
          <button>fbhbfbbfbbf</button>
        </Carousel.Caption> */}
      </Carousel.Item>
      
    </Carousel>




    {/* Donners list part    Donners list same as allProjects */}   



    <div className='mt-5'>
        <h1 className='text-center mb-5'>Doners List</h1>
        <marquee scrollamount="30">
            <div className="d-flex  "  >             
              { allProjects.length>0&& allProjects.map((project,index)=>(
                 <div key={index} className='project me-5 '>
                 <DonersList project={project}/>
                 </div>
              ))
               
                }

                
            </div>
          </marquee>
        <div className='text-center'>
            <button onClick={handleNavigate}  className='btn btn-link'>View More Doners</button>

        </div>

    </div>
    <ToastContainer autoClose={3000} theme='colored' />












    <Footer/>



         


  

      </>

  )

}


export default Home