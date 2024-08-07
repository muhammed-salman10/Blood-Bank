import React,{useState,useEffect, useContext} from 'react'
import Add from '../Components/Add'
import { deleteProjectAPI, getUserProjectAPI } from '../Services/allAPI'
import Edit from './Edit'
import { addResponseContext } from '../Context/ContextShare'





function AddDoners() {

  const {addResponse,setAddResponse}=useContext(addResponseContext)

  const [allProjects,setAllProjects]=useState([])

  const getUserProject=async()=>{
    try{
      const token=sessionStorage.getItem("token")
      if(token)
      {
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        const result=await getUserProjectAPI(reqHeader)
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
         getUserProject()
   },[addResponse])


   const handleDeleteProject=async(projectId)=>{
    const token=sessionStorage.getItem("token")
    if(token)
    {
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
  
    try{
       const result= await deleteProjectAPI(projectId,reqHeader)
       if(result.status==200)
       {
        getUserProject()
       }
       else{
        console.log(result);
       }
    }
    catch(err){
      console.log(err);
    }
    }
   }

  return (

    <>
    <div style={{marginTop:'40px'}} className='border rounded p-2'>
      <div className="d-flex justify-content-between  ">
         <h2 className='ms-3 mt-3'>My Projects</h2>
         <Add/>
      </div>
      <div className="mt-4 ">
       {allProjects.length>0?allProjects.map((project,index)=>(
              <div key={index}  className="border rounded d-flex justify-content-between  align-items-center mb-3 p-2">
                <h5 className='ms-3 '>{project?.name}</h5>
                 <div className="icons d-flex align-items-center ">
                 <Edit project={project}/>
                      <button onClick={()=>handleDeleteProject(project._id)} className='btn btn-link text-danger me-3'><i style={{marginTop:'11px'}} className="fa-solid fa-trash fa-2x"></i></button>
          </div>
     </div>
       ))
       
        :
        <div className='fw-bolder text-danger'>No project Uploaded Yet !!!</div>
        }
      </div>
    </div>
   


    </>
  )
}

export default AddDoners