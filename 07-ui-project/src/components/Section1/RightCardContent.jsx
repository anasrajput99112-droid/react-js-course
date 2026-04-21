import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
       <div className="p-8 flex flex-col  justify-between rounded-4xl absolute top-0 left-0 h-full w-full ">
        <h2 className='border border-[#dadada] font-bold bg-white rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
        <div>
            <p className='text-lg leading-normal text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed unde quae commodi quas voluptates?</p>
            <div className='my-5 flex justify-between'>
            <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-full'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full'>
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default RightCardContent
