import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios'
import '../App.css'



export default function LoginPage({ setUser, setPeople }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        let response = await axios.post('/api/getlogin', {
            'first_name': firstName,
            'last_name': lastName
        })
        setUser(response.data);

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
                        <input className='input' placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>

                    <div className='login-input'>
                        <input className='input' placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>

                    <div className='login-input'>
                        <input className='login-submit' type="submit" value='Login' />
                    </div>
                    <div className='login-memeber'>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>Not a member yet?</label>
                        </div>
                        <div>
                            <label>Sign Up</label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}