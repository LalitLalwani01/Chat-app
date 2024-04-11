import React from 'react'
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import Cookies from 'universal-cookie';



export const  Sidebar= ()=>{

  const cookies= new Cookies();
  const handleLogOut =()=>{
    cookies.remove('token'),
    cookies.remove('userName'),
    cookies.remove('fullName'),
    cookies.remove('phoneNumber'),
    cookies.remove('hashedPassword'),
    cookies.remove('avatarUrl')
    // window.location.reload();
  }

      return(
        <div className='w-full border-r h-full'>
        <div className="w-14 h-10 mx-auto bg-white flex justify-center items-center my-4 rounded-full
        shadow-inner">
          <p className='text-2x1'><IoHome/></p>

        </div>
        <div className='w-10 h-10 mx-auto bg-white flex justify-center items-center my-4 rounded-full
        shadow-inner' onClick={handleLogOut()}>
        <p className='text-2x1'><IoLogOutOutline/></p>

        </div>
        <div className='w-10 h-10 mx-auto bg-white flex justify-center items-center my-4 rounded-full
        shadow-inner'>
        <p className='text-2x1'><CgProfile/></p>

        </div>
      </div>
      )
      //   <div>
      //   <IoHome />
      //   <CgProfile />
      //   <IoLogOutOutline /> 
      // </div>
}