import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import pic from '../components/profile_pic.jpg'
import './EmployeePage.css'

export default function EmployeePage({ employee }) {
  return (
    <>
      {employee && <section className='employee-page'>
        <div className='pic-name'>
          <img src={pic} />
          <h1>{employee.first_name} {employee.last_name}</h1>
        </div>
        <div className='other-info'>
          <p>Role: {employee.role === 'basic' ? 'Developer' : employee.role}</p>
          <p>State: {employee.state === 'CT' ? 'Connecticut' : 'Massachusetts'}</p>
          <p>County: {employee.county}</p>
          <p>Salary: {employee.salary === 0 ? 'PRIVATE' : '$' + employee.salary.toLocaleString()}</p>
        </div>
      </section>}
    </>
  )
}