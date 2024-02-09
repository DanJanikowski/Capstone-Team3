import React from 'react'
import ReactDOM from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import router from './router.jsx'
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
