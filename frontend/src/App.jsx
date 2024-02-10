
import './App.css'
import NavBar from './components/NavBar'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import SalaryCalculator from "./pages/SalaryCalculator"
import EmployeePage from './pages/EmployeePage'
import { Route, Routes, Link, useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState();
  const [curEmployee, setCurEmployee] = useState()
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && location.pathname !== '/') {
      navigate('/');
    }
  }, []);

  return (
    <>
      <div className='standard-background'>
        {/* {user && <NavBar user={user} />} */}
        {user && <NavBar user={user} setUser={setUser} setCurEmployee={setCurEmployee} />}
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          <Route path="/home" element={<HomePage user={user} setCurEmployee={setCurEmployee} />} />
          <Route path="/salary" element={<SalaryCalculator />} />
          <Route path="/employee/:id" element={<EmployeePage employee={curEmployee} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <footer className='page-footer'>
          <p>Authors: Dan & Yiran</p>
          <p>Copyright 2024</p>
        </footer>
      </div>
    </>
  )
}

export default App