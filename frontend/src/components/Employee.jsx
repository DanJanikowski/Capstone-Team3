import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import pic from './profile_pic.jpg'

export default function Employee({ person, setCurEmployee }) {
  const navigate = useNavigate();

  const navToEmployee = () => {
    setCurEmployee(person);
    navigate(`/employee/${person.id}`);
  };

  return (
    <div className="employee-button" onClick={navToEmployee}>
      <img src={pic} />
      <p className="employee-btn-txt">{person.first_name} {person.last_name}</p>
      <p className="employee-btn-txt">Role: {person.role === 'basic' ? 'Developer' : person.role}</p>
    </div>
  )
}