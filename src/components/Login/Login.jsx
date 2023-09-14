import React from 'react'
import './Login.scss'
import Calendar from '../Calendar/Calendar'
// import Calendar from "../components/Calendar/Calendar";


import CloseIcon from '@mui/icons-material/Close';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';


function Login({ clicked }) {
    return (
        <div>
            <div className="loginBox">
                <button onClick={clicked} className='cross'><CloseIcon /></button>
                <div className="email">
                    <AlternateEmailIcon className='icon' />
                    <input type="email" placeholder='  email' />

                </div>
                <div className="password">
                    <LockOpenIcon className='icon' />
                    <input type="password" placeholder='  password' />

                </div>
                <div className="login">
                    <button onClick={clicked}>Login</button>
                </div>
                <div className="gmail">
                    <span>Login with</span>
                    <div className="email">
                    <Calendar className='icon' onClick={clicked} />
 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
