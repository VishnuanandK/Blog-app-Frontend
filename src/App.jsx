import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Landing from './Pages/Landingpage/Landing'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Settings from './Pages/Settings/Settings'
import Single from './Pages/Single/Single'
import Write from './Pages/Write/Write'

function App() {

  return (
    <>
    <Routes>
      
       <Route path={'/'} element={<Landing/>}/> 
       <Route path={'/home'} element ={<Home/>}/>
       <Route path={'/login'} element={<Login/>}/> 
       <Route path={'/register'} element={<Register/>}/>
       <Route path={'/singlepost'} element={<Single/>}/>
       <Route path={'/write'} element={<Write/>}/>
       <Route path={'/settings'} element={<Settings/>}/>


      
    </Routes>
    </>
  )
}

export default App
