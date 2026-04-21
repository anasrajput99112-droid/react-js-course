import React from 'react'
import Header from './Header'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  // console.log(props);
  
  return (
    <div className='h-full  w-full'>
      <Header />
      <Page1Content user={props.user} />
    </div>
  )
}

export default Section1
