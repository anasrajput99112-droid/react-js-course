import React from 'react'
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = (props) => {
  return (
    <div className='flex flex-col lg:flex-row gap-9 py-10 px-18 h-full md:h-[90vh]'>
      <LeftContent />
      <RightContent user={props.user} />
    </div>
  )
}

export default Page1Content;
