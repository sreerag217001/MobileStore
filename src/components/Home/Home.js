import React from 'react'
import burger1 from '../assets/burger1.webp'
import mobile from '../assets/mobile_world.jpg'
import Header from '../Header/Header'
function Home() {
  return (
    <div>
      <Header />
      <div className=' flex items-center justify-center w-full h-96 bg-black '>
        <div className=' w-full flex items-center justify-center '>
          <div className=' w-1/4 flex flex-col justify-center items-center gap-5 sm:w-1/2 '>
            <div className='w-full flex items-center justify-center p-4'>
              <h1 className='text-3xl font-bold uppercase text-white'>Start your order now</h1>
            </div>
            <div className='bg-red-400 flex items-center justify-center w-80 p-3 rounded-md'>
              <a href="" className='text-xl text-white '>Order Now</a>

            </div>
            <div className='bg-red-400 flex items-center justify-center w-80 p-3 rounded-md'>
              <a href="/gallery" className='text-xl text-white '>See More</a>

            </div>
          </div>
          <div className='bg-red-600 w-1/2 h-80 flex justify-start items-center'>
            <img src={mobile} alt="" className='w-full h-80 bg-cover' />
          </div>
        </div>

      </div>

    </div>



  )
}

export default Home
