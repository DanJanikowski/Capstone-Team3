import { useNavigate } from "react-router-dom"


export default function LogoutPage() {
    const navigate = useNavigate()

    const handleHome = () => {
        // if (email && password) {
        // }
        navigate('/home')
        
    }

    return (
        <>
        
        <div className="logout-container">
            <div className="logout">
                <header className="logout-hearder">Are you sure you want to logout?</header>
            </div>
            <div className="logout">
            <button className="logout-button" onClick={() => handleHome()} >Home</button>
            <button className="logout-button" >Logout</button>
            </div>
            <div className="logout-pic"></div>
        </div>
        </>
    )
}