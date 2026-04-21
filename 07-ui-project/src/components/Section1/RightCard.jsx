import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className=' h-full overflow-hidden  w-80 rounded-4xl relative'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
     <RightCardContent tag={props.tag}/>
    </div>
  )
}

export default RightCard
