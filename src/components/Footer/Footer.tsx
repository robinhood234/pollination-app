import React from 'react'

const LargeFooter = () => {
  return (
    <div className="bg-[#01200f] text-white p-8 text-center ">
      <div className='flex flex-col gap-3 md:flex-row justify-between'>
        <div className='flex flex-col w-[300px] gap-3 items-center items-start'>
          <div className='flex gap-2'>
          {/* <img src="/star-fall-svgrepo-com.svg" alt="" className='w-10 h-10'/> */}
          <h1 className='font-dancing text-3xl'>Pollination</h1>
          </div>

          <span className='text-left text-gray-300/70'>
We believe a healthy environment begins with the smallest wings. Our plants are carefully selected to support bees, butterflies, birds, and other essential pollinators — the quiet heroes behind thriving ecosystems. When you shop with us, you’re not just buying a plant; you’re helping rebuild nature one bloom at a time.          </span>
        </div>

       
        <div className='flex flex-col gap-4 items-start w-[300px] justify-start '> 
          <h2 className='text-3xl font-raleway '>Contact Us</h2>
          <ul className='list-inside space-y-4 text-left text-gray-300/80'>
            <li>
              <h2>Phone Number</h2>
              <span>+254 729842282</span>
            </li>
            <li>
              <h2>Email</h2>
              <span>shirostan@gmail.com</span>
            </li>
             <li>
              <h2>Location</h2>
              <span>Nakuru, Naivasha</span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>

  )
}

export default LargeFooter