import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-600 items-center justify-between'>
      <h2 className='text-2xl font-bold text-black'>Logo</h2>
      <div className="flex gap-8">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/product'>Product</Link>
      <Link to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
