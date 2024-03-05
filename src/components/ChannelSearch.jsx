import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";


const ChannelSearch = () => {
  const[query,setQuery] =useState('');
  const[loading,setLoading] =useState(false);

  const getChannels =async ()=>{
    try {
      //toDo
      
    } catch (error) {
      setQuery('');
    }
  }

  const onSearch =(e)=>{
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);
  }
  return (
    <div className='flex items-center border rounded-lg p-2 color'>
      <IoSearch color='white' className='text-xl mr-2' />
      <input type='text' placeholder='Search' className='bg-transparent outline-none' value={query} onChange={onSearch}></input>
    </div>
  )
}

export default ChannelSearch
