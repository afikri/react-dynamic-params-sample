import { useParams } from 'react-router-dom'
import data from '../data.json'

const StaffDetails = () => {
  const { id } = useParams()

  return (
    <div className="staff-details">
      <h1>Staff with id# - {id}</h1>
      <h3>
        <div key={id} >
          <h2>Email: {data[id].email}</h2>
          <p>Written by {data[id].staffname} </p>
        </div>
      </h3>
    </div>
  )
}

export default StaffDetails