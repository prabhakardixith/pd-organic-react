import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav style={{
        backgroundColor: 'aliceblue',
        padding: '16px 32px'
    }}>
    <Link to='/'>Home</Link>
    <Link style={{marginLeft:'16px'}}to='/about'>About</Link>
    <Link style={{marginLeft:'16px'}}to='/crud'>CRUD</Link>
    </nav>
  )
}

export default Navbar