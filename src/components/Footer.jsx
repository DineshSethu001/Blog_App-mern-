import React from 'react'
import { assets, footer_data } from '../assets/assets'
const Footer = () => {
  return (
    <div className="bg-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 rounded">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div className="max-w-[410px] mt-6">
          <img src={assets.logo} alt="" className='w-32 sm:w-44'/>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, corrupti amet aliquid doloribus dolorem impedit, vero architecto nemo, aperiam eius cum! Molestias assumenda eveniet cum eligendi nostrum numquam. Facere, numquam!
       
          </p>
        </div>
        <div className="w-full  flex flex-wrap justify-between md:w-[45%] gap-5">
          {footer_data.map((section, index)=>(
            <div key={index}> 
              <h3 className='font-semibold text-base text-gray-900 md:mb-5'>{section.title}</h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link,i)=>(
                  <li key={i}>
                    <a href="#" className='hover:underline transition'>{link}</a>
                  </li>
                ))}
              </ul>
              </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
          © {new Date().getFullYear()} Your D-code Blogs. All rights reserved.

      </p>
    </div>
  )
}

export default Footer