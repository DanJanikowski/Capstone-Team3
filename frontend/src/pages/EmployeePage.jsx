import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import pic from '../components/profile_pic.jpg'
import './EmployeePage.css'
import Employee from '../components/Employee'

export default function EmployeePage({ employee, setCurEmployee }) {
  const [subordinates, setSubordinates] = useState([]);

  const roleDisplay = (role) => {
    switch (role) {
      case 'basic':
        return 'Developer';
      case 'hr':
        return 'Human Resources';
      case 'manager':
        return 'Manager';
    }
  }

  const fetchPeople = async () => {
    let response = await axios.get(`/api/sub_request/${employee.id}`);
    return response.data;
  };

  useEffect(() => {
    if (employee.role === 'manager') {
      console.log('GETTING SUBS');
      fetchPeople().then((subs) => setSubordinates(subs));
    }
  }, [])

  return (
    <>
      {employee && <section className='employee-page'>
        <div className='pic-name'>
          <img src={pic} />
          <h1>{employee.first_name} {employee.last_name}</h1>
        </div>
        <div className='other-info'>
          <p>Role: {roleDisplay(employee.role)}</p>
          <p>State: {employee.state === 'CT' ? 'Connecticut' : 'Massachusetts'}</p>
          <p>County: {employee.county}</p>
          <p>Salary: {employee.salary === 0 ? 'PRIVATE' : '$' + employee.salary.toLocaleString()}</p>
        </div>
      </section>}
      {employee && employee.role === 'manager' && <section className='manager-employees'>
        <h1>{employee.first_name}'s Team!</h1>
        <div className='people-list'>
          {subordinates && subordinates.map((sub) => (
            <Employee key={sub.id} person={sub} setCurEmployee={setCurEmployee} />
          ))}
        </div>
        </section>}
    </>
  )
}