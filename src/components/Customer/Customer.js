import React from 'react'
import Cards from '../Cards/Cards'
function Customer() {
  return (
    <div>
      <Cards />
      <div className='bg-neutral-700 mt-5 w-full h-3/4'>
        <div className=' flex flex-col items-center justify-center'>
          <div className='  w-1/2 flex justify-center w-4/5'>
            <p className='text-white font-mono'>one of the most trusted and popular technology media portals in India.  it is our goal to help Indian technology users decide what tech products they should buy. We do this by testing thousands of products in our two test labs in Noida and Mumbai, to arrive at indepth and unbiased buying advice for millions of Indians.</p>
          </div>
          <div className='  w-1/4 flex justify-center items-start py-4 sm:w-3/4 '>
            <button className='bg-black px-10 py-4 text-xl uppercase text-white font-bold border shadow-md border-none border-white hover:bg-green-800  '>Place an Order online</button>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Customer
