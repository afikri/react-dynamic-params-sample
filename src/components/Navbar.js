import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Company Employees</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Staff</Link>
      </div>
    </nav>
  )
}

export default Navbar