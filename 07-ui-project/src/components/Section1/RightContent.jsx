import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full p-6 w-full md:w-2/3 flex  flex-col items-center justify-center lg:flex-row gap-6'>
      {props.user.map(function(elem){
        return <RightCard img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
