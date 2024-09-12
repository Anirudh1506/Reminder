import React from 'react'
import { Route, Routes,useNavigate } from 'react-router-dom'


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
    nav('form/log')
    return;
  }
  return (
    <Routes>
      

      <Route path='/' element={<HomeTem logOut={logOut}/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='remind' element={<Reminder/>}/>
        <Route path='calendar' element={<Calender/>}/>
      </Route>

      <Route path='log' element={<Login/>}/>
      <Route path='register' element={<SignUp/>}/>
    </Routes>
  )
}

export default App