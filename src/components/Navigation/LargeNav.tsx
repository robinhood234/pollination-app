"use client"
import Link from 'next/link'
import React from 'react'

const LargeNav = () => {
  return (
    <div className='flex justify-between p-3 bg-background gap-1 shadow-md'>
  
  <Link href={"/"}>
  
      <div className='flex justify-center items-center gap-2'>    
      <span className='text-2xl font-dancing'>Pollination</span>
      </div>
  </Link>

    <div className='flex gap-x-6 items-center justify-center'>

    <Link href='/about' className='font-inter flex justify-center items-center gap-2 py-2 cursor-pointer rounded-md relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#01200f] after:transition-all after:duration-300 after:ease-out hover:after:w-full'>
      About
    </Link>

    <Link href='/product' className='font-inter flex justify-center items-center gap-2 py-2 cursor-pointer rounded-md relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#01200f] after:transition-all after:duration-300 after:ease-out hover:after:w-full'>
      Products
    </Link>

    <Link href='/gallery' className='font-inter flex justify-center items-center gap-2 py-2 cursor-pointer rounded-md relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#01200f] after:transition-all after:duration-300 after:ease-out hover:after:w-full'>
      Gallery
    </Link>

    <Link href='/contact' className='font-inter flex justify-center items-center gap-2 py-2 cursor-pointer rounded-md relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#01200f] after:transition-all after:duration-300 after:ease-out hover:after:w-full'>
      Contact
    </Link>

    </div>




    </div>
  )
}

export default LargeNav