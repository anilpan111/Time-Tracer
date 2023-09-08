import React from 'react'
import './Menu.scss'

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"Menu " +(menuOpen && "active")}>

        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Schedules</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Calendar</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Report</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
            </li >
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contacts</a>
            </li>
        </ul>
      
    </div>
  )
}
