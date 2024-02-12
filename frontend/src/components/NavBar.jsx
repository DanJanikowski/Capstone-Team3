import NavButton from "./NavButton"
import { useNavigate, Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar({ user, setUser, setCurEmployee }) {
  const navigate = useNavigate()
  const basicNav = (url) => {
    navigate(url);
  }

  const customNav1 = (url) => {
    setUser(null);
    navigate(url);
  }

  const customNav2 = (url) => {
    setCurEmployee(user);
    navigate(url);
  }

  return (
    <>
      <div className='navbar-style'>
        <div className="title-stuff">
          <h1>HR Wizards</h1>
          {/* {user &&
            <h2>Hi, <Link className='user-link' to={`/employee/${user.id}`}>{user.first_name}</Link></h2>} */}
          {user && <h2><NavButton action={customNav2} url='/employee/${user.id}' text={user.first_name} /></h2>}
        </div>
        <div className="middle-stuff">
          <NavButton action={basicNav} url='/home' text='Home' />
          <NavButton action={basicNav} url='/salary' text='Salary' />
          <NavButton action={customNav1} url='/' text='Logout' />
        </div>
        <div></div>
      </div>
    </>
  )
}