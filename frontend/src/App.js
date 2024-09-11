import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomeTem from './components/HomeTem'

import Login from './pages/Login'
import SignUp from './pages/Signup'
import Reminder from './pages/Reminder'
import Calender from './pages/Calender'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/log' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      
      <Route path='/' element={<HomeTem/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/remind' element={<Reminder/>}/>
        <Route path='/calendar' element={<Calender/>}/>
      </Route>
    </Routes>
  )
}

export default App