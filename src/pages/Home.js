import React from 'react'
import StaffList from './StaffList'
import staffs from '../data.json'

const Home = () => {
  return (
    <div className="home">
      {staffs && <StaffList staffs={staffs} />}
    </div>
  )
}

export default Home