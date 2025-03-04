import React, { useState } from 'react'
import Image from 'next/image'
import { IoShieldHalfOutline } from "react-icons/io5";

const rules=[
  {
    rule:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },{
    rule:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },{
    rule:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },{
    rule:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },{
    rule:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },{
    rule:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
]

const page = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center mt-10 gap-5">
        <div className='pl-5 md:pl-0 w-full flex items-center justify-center'>
          <Image
            src="/assets/treasurebox.png" // Use an image from /public folder
            alt="treasureBox"
            width={70} // Set image width
            height={100} // Set image height
            className=""
          />
          <p className='font-[unlock] text-3xl drop-shadow-lg'>Rules & Regulations</p>
        </div>
        <div className="w-full lg:w-[65%] h-screen  bg-[url('/assets/map.svg')]  bg-cover md:bg-contain bg-top bg-no-repeat flex justify-center  ">
          <div className='w-[90%] md:w-[80%]  py-10 flex flex-col pl-3 gap-5 md:gap-6 lg:gap-9'>
            {rules.map((rule,idx)=>{
              return(
                <div key={idx} className='flex text-[14px] md:text-lg lg:text-xl gap-2'>
                  <IoShieldHalfOutline className='text-4xl text-[#43392C]'/>
                  <p className=' font-poppins drop-shadow-lg text-amber-950'>{rule.rule}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default page