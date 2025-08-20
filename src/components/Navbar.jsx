import React from 'react'
import {useNavigate} from "react-router-dom"
import {assets} from '../assets/assets'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center mx-8 sm:mx-20 xl:mx-32 py-5">
    <div className="flex items-center cursor-pointer">
        <img onClick={()=>navigate('/')} src={assets.logo} className='w-22 sm:w-34' alt="logo"/>
      <p className='cursor-pointer'>D-code <span className='text-green-300 font-bold text-xl'>B</span>log</p>
    </div>
      <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-blue-500 text-white px-10 py-2.5'>Login
        <img src={assets.arrow} className='w-3' alt="arrow"/>
      </button>
    </div>
  )
}

export default Navbar