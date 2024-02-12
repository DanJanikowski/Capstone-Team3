import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import pic from './profile_pic.jpg'

export default function Employee({ person, setCurEmployee }) {
  const navigate = useNavigate();

  const navToEmployee = () => {
    setCurEmployee(person);
    navigate(`/employee/${person.id}`);
  };

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

  return (
    <div className="employee-button" onClick={navToEmployee}>
      <img src={pic} />
      <p className="employee-btn-txt">{person.first_name} {person.last_name}</p>
      <p className="employee-btn-txt">Role: {roleDisplay(person.role)}</p>
    </div>
  )
}