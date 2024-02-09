
import './App.css'
import NavBar from './components/NavBar'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import LogoutPage from "./pages/LogoutPage"
import NotFoundPage from "./pages/NotFoundPage"
import SalaryCalculator from "./pages/SalaryCalculator"
import SearchPage from "./pages/SearchPage"
import { Route, Routes, Link } from "react-router-dom"
import { useState } from 'react'

function App() {
  const [user, setUser] = useState();

  return (
    <>
      {user && <NavBar user={user} />}
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route path="/home" element={<HomePage user={user} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/salary" element={<SalaryCalculator />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
