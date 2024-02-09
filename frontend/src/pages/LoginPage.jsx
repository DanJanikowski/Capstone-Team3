import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../App.css'

export default function LoginPage() {
    const navigate = useNavigate()

    const handleLogin = () => {
        // if (email && password) {
        // }
        navigate('/home')
        
    }

    return (
        <>
        
        <div className='login-box'> 
            <form className='login-form' onSubmit={e => [e.preventDefault(), handleLogin()]}>
                <div className='login-header'>
                    <header className='header'><h1>Login</h1></header>
                </div>
                

                <div className='login-input'>
                    <input className='input' placeholder="Username" />
                </div>

                <div className='login-input'>
                    <input className='input' type="password" placeholder="Password" />
                </div>
        
                <div className='login-input'>
                    <input className='login-submit' type="submit" value='Login'/>    
                </div>    
                <br />
                <br />
                <div className='login-memeber'>
                    <div>
                        <label style={{paddingLeft:'30px', fontWeight:'bold'}}>Not a member yet?</label>
                    </div>
                    <div>
                        <label style={{paddingRight:'50px'}}>Sign Up</label>
                    </div>
                </div>  
            </form>
        </div>
        </>
    )
}