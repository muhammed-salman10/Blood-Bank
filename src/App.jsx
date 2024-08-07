import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Doners from './Pages/Doners'
// import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import About from './Pages/About'
import Support from './Pages/Support'
import { useContext } from 'react'
import { TokenAuthContext } from './Context/TokenAuth'


function App() {
  const {isAuthorized,setIsAuthorized}=useContext(TokenAuthContext)


  return (
    
     <>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister/>}/>
        <Route path='/dashboard' element={isAuthorized?<Dashboard/>:<Home/>}/>
        <Route path='/Doners' element={isAuthorized?<Doners/>:<Home/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/contact' element={<Contact/>}/>

        




       

      </Routes>
      {/* <Footer/> */}

     </>
    
  )
}

export default App
