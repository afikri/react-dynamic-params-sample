import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import StaffDetails from './pages/StaffDetails'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/staff/:id' element={<StaffDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App