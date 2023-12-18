import React from 'react'
import banner from '../assets/mobile banner.webp'
import Customer from '../Customer/Customer'
function Banner() {
  return (
    <div>
      <Customer />
      <div className='bg-red-400 flex justify-center items-center'>
        <img src={banner} alt="" className='bg-cover' />
      </div>
    </div>



  )
}

export default Banner
