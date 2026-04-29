import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='nav'>
        <h1>Logo</h1>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
