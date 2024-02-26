import React from 'react'
import { IoSearch } from "react-icons/io5";


const ChannelSearch = () => {
  return (
    <div className='flex items-center border rounded-lg p-2 color'>
      <IoSearch color='white' className='text-xl mr-2' />
      <input type='text' placeholder='Search' className='bg-transparent outline-none'></input>
    </div>
  )
}

export default ChannelSearch
