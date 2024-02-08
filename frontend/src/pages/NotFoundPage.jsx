import { Link } from "react-router-dom"
import img from '../img/notfound.jpg'

export default function NotFoundPage() {


    return (
        <>
        
        <h1>Oh No!!! Something went wrong!!!</h1>
        <Link to='/home'>Home</Link>
        <br />
        <img src={img} style={{height: "500px"}}/>
        </>
    )
}