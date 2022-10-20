import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav style={{
        backgroundColor: 'purple',
        padding: '16px 32px',
    }}>
    <NavLink to='/' style={{color:'white',textDecoration:'none'}}>Home</NavLink>
    <NavLink style={{marginLeft:'16px',color:'white',textDecoration:'none'}} to='/about'>About</NavLink>
    <NavLink style={{marginLeft:'16px',color:'white',textDecoration:'none'}} to='/crud'>CRUD</NavLink>
    </nav>
  )
}

export default Navbar