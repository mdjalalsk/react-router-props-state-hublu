import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className='Navber'>
      <li><Link to={"/"}> Home</Link></li>
      <li><Link to={"/About"}> About</Link></li>
      <li><Link to={"/Contact"}> Contact</Link></li>
      
    </div>
  )
}

export default Header
