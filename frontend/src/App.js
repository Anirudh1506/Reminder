import React from 'react'
import { Route, Routes,useNavigate } from 'react-router-dom'
import bg from './assets/subtle-prism.svg'

import HomeTem from './components/HomeTem'

import Login from './pages/Login'
import SignUp from './pages/Signup'
import Reminder from './pages/Reminder'
import Calender from './pages/Calender'
import Home from './pages/Home'


const App = () => {
  const nav=useNavigate()
  function logOut(){
    localStorage.clear();
    nav('/log')
    return;
  }
  return (
    <div className='min-h-screen bg-cover bg-center' style={{backgroundImage:`url(${bg})`}}>
      <Routes>


      <Route path='/' element={<HomeTem logOut={logOut}/>}>
        <Route path='' element={<Home/>}/>
        <Route path='remind' element={<Reminder/>}/>
        <Route path='calendar' element={<Calender/>}/>
      </Route>

      <Route path='log' element={<Login/>}/>
      <Route path='register' element={<SignUp/>}/>
    </Routes>
    </div>
  )
}

export default App