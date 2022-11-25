import React from 'react'
import { Link } from 'react-router-dom'

const StaffList = ({staffs}) => {
  return (
    <div className="staff-list">
      {staffs.map(staff => (
        <div className="staff-preview" key={staff.id} >
          <Link to = {`/staff/${staff.id}`}>
            <h2>{staff.email}</h2>
            <p>Written by {staff.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default StaffList