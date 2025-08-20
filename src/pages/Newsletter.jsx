import React from 'react'

const Newsletter = () => {
  return (
    <div className='space-y-2 my-32 flex items-center justify-center text-center flex-col'>
        <h1 className='text-2xl md:text-4xl font-semibold'>Never miss a Blog!</h1>
        <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
        <form className='flex items-center justify-between w-full max-w-2xl h-12 md:h-13'>
            <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='Enter your Email id' require/>
            <button type="submit" className='md:px-12 px-8 h-full text-white bg-blue-700 hover:bg-purple-500 transition-all cursor-pointer rounded-md rounded-l-none  cursor-pointer'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter