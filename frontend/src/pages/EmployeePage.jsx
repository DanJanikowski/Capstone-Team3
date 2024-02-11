import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './EmployeePage.css'
import img from '../components/profile_pic.jpg'

export default function EmployeePage({ employee }) {
  return (
    <>
      {employee && <section className='employee-page'>
        <div>
          <img src={img}>
          </img>
          <h1>{employee.first_name} {employee.last_name}</h1>
        </div>
        <p>Role: {employee.role === 'basic' ? 'Developer' : employee.role}</p>
        <p>State: {employee.state === 'CT' ? 'Connecticut' : 'Massachusetts'}</p>
        <p>County: {employee.county}</p>
        <p>Salary: {employee.salary === 0 ? 'PRIVATE' : '$' + employee.salary.toLocaleString()}</p>
      </section>}
    </>
  )
}