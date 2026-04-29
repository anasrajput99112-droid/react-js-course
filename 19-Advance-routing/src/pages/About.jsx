import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()
  const btnClick = ()=> {
    navigate('/')
  }

  return (
    <div>
      <button onClick={btnClick} className='bg-amber-700 p-4 m-3 rounded-2xl cursor-pointer'>back to home</button>
      <h1>About</h1>
    </div>
  )
}

export default About
