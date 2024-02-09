
import './App.css'
import NavBar from './components/NavBar'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import SalaryCalculator from "./pages/SalaryCalculator"
import SearchPage from "./pages/SearchPage"
import EmployeePage from './pages/EmployeePage'
import { Route, Routes, Link } from "react-router-dom"
import { useState } from 'react'

function App() {
  const [user, setUser] = useState();
  const [people, setPeople] = useState();

  return (
    <>
      {user && <NavBar user={user} />}
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} setPeople={setPeople}/>} />
        <Route path="/home" element={<HomePage user={user} people={people}/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/salary" element={<SalaryCalculator />} />
        <Route path="/employee" element={<EmployeePage user={user} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App