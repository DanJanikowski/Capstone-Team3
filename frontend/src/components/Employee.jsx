import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import img from './profile_pic.jpg'

export default function Employee({ person, setCurEmployee }) {
  const navigate = useNavigate();

  const navToEmployee = () => {
    setCurEmployee(person);
    navigate(`/employee/${person.id}`);
  };

  return (
    <div className="employee-button"  onClick={navToEmployee}>
      <img src={img} style={{height:'35px'}}/>
      <p>{person.first_name} {person.last_name}</p>
      <p>Role: {person.role === 'basic' ? 'Developer' : person.role}</p>
    </div>
  )
}