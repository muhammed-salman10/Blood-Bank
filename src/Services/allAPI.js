import { Await } from "react-router-dom"
import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"



//register API
export const registerAPI= async (user)=>{
     return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}


//login API
export const loginAPI= async (user)=>{
     return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

//add-project api
export const addProjectAPI=async(reqBody,reqHeader)=>{

     return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)

}

//get Home project
export const getHomeProjectAPI=async()=>{
     return await commonAPI("GET",`${SERVER_URL}/get-home-project`,"","")
   
}

//get All project
export const getAllProjectAPI=async(serachKey,reqHeader)=>{
     return await commonAPI("GET",`${SERVER_URL}/get-all-project?search=${serachKey}`,"",reqHeader)
   
}


//get User project
export const getUserProjectAPI=async(reqHeader)=>{
     return await commonAPI("GET",`${SERVER_URL}/get-user-project`,"",reqHeader)
   
}

//remove project/
export const deleteProjectAPI= async(projectId,reqHeader)=>{
     return await commonAPI("DELETE",`${SERVER_URL}/remove-project/${projectId}`,{},reqHeader)
}


  