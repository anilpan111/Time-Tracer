import React from 'react'
import './Navbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react'
import Login from '../Login/Login';




export default function Navbar({menuOpen,setMenuOpen}) {

  const [open,setOpen]=useState(false);
  const clicked =()=>setOpen(false);
  
  return (
    <div className={'Navbar ' + (menuOpen && "active")}>
      <div className="Wraper">
        <div className="left">
          <a href="#intro" className='logo'>TimeTracer</a>
          <div className="itemContainer">
             <PersonIcon className='icon'/>
             <span>+91 8709873508</span>
          </div>

          <div className="itemContainer">
             <EmailIcon className='icon'/>
             <span>anilpan336@gmail.com</span>
          </div>
          <div className="itemContainer">
             <LoginIcon className='icon'/>
             <span onClick={()=>setOpen(true)}>Log-in</span>
             {open && <Login clicked={clicked}/>}

          </div>
        </div>

        <div className="right">
          <div className="menuBar" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
