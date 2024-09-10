import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/Signup'
import Reminder from './pages/Reminder'

const App = () => {
  return (
    <Routes>
      <Route path='/log' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/remind' element={<Reminder/>}/>
    </Routes>
  )
}

export default App