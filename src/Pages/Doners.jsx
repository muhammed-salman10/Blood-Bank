import React,{useState,useEffect} from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import DonersList from '../Components/DonersList'
import { getAllProjectAPI } from '../Services/allAPI'




function Doners() {
  const [serachKey,setSearchKey]=useState("")
  const [allProjects,setAllProjects]=useState([])

  const getAllProject=async()=>{
    try{
      const token=sessionStorage.getItem("token")
      if(token)
      {
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        const result=await getAllProjectAPI(serachKey,reqHeader)
        if(result.status===200)
        {
         setAllProjects(result.data)
        }
      }
      
    }
    catch(err)
    {
      console.log(err);
    }
     
   }

   console.log(allProjects);
   useEffect(()=>{
         getAllProject()
   },[serachKey])


  return (
    <>
        <Header/>

        <div style={{marginTop:'150px'}} className='container-fluid'> 
     <div className='d-flex justify-content-between'>
      <h1 className='d1 ms-5 '>DONERS LIST</h1>
      <input onChange={e=>setSearchKey(e.target.value)} style={{width:'300px'}} className='rounded p-2' type="text" placeholder='Search by Blood Group' />
     </div>

     <Row className='mt-5'>
      {allProjects.length>0? allProjects?.map((project,index)=>(
        <Col key={index}  sm={12} md={6} lg={4}>
        <DonersList project={project}/>
      </Col>
      )):
        <div className='fw-bolder text-danger fs-4'>Nothing To Display !!!</div>
      }
     </Row>
      
        </div>
        
        </>
  )
}

export default Doners