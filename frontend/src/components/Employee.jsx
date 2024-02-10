import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Employee({ person, setCurEmployee }) {
  const navigate = useNavigate();

  const navToEmployee = () => {
    setCurEmployee(person);
    navigate(`/employee/${person.id}`);
  };

  return (
    <div className="employee-button" onClick={navToEmployee}>
      <img src="profile_pic.jpg" />
      <p>{person.first_name} {person.last_name}</p>
      <p>Role: {person.role === 'basic' ? 'Developer' : person.role}</p>
    </div>
  )
}