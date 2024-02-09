import { Link } from "react-router-dom"
import img from '../img/404.webp'
import '../App.css'

export default function NotFoundPage() {


    return (
        <div className="not-found-container">
        <img src={img}  alt="404 Not Found" />
        <h1 className="heading">Oh No!!! Something went wrong!!!</h1>
        <Link to='/home'>Home</Link>
        <br />
        
        </div>
    )
}


